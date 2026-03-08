import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is reachable',
    timestamp: new Date().toISOString(),
    env: {
      supabase_url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
      supabase_key: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'MISSING',
      sendgrid: process.env.SENDGRID_API_KEY ? 'SET' : 'MISSING',
      from_email: process.env.FROM_EMAIL ? 'SET' : 'MISSING',
    }
  })
}

export async function POST(request: NextRequest) {
  const logs: string[] = []
  try {
    logs.push('1. Parsing request body')
    const data = await request.json()
    logs.push('2. Body parsed OK: ' + data.name)
    const referenceNumber = `T21-${Date.now().toString().slice(-8)}`

    // Step A: Try Supabase
    logs.push('3. Checking Supabase env vars')
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      logs.push('4. Supabase env vars found, attempting import')
      try {
        const { createClient } = await import('@supabase/supabase-js')
        logs.push('5. Supabase imported OK')
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        logs.push('6. Supabase client created')
        const { error } = await supabase.from('contact_messages').insert([{
          name: data.name, email: data.email, phone: data.phone || null,
          subject: data.subject || 'General Enquiry', message: data.message,
          inquiry_type: data.inquiry_type || 'general', status: 'new',
        }])
        if (error) {
          logs.push('7. DB insert error: ' + error.message)
        } else {
          logs.push('7. DB insert SUCCESS')
        }
      } catch (e: any) {
        logs.push('DB exception: ' + e.message)
      }
    } else {
      logs.push('4. Supabase env vars MISSING - skipping DB')
    }

    // Step B: Try SendGrid
    logs.push('8. Checking SendGrid env vars')
    if (process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL) {
      logs.push('9. SendGrid env vars found, sending email')
      try {
        const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: data.email }] }],
            from: { email: process.env.FROM_EMAIL, name: 'T21 Services' },
            subject: `Enquiry Received - ${referenceNumber} | T21 Services`,
            content: [{ type: 'text/html', value: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><div style="background:#000;color:#fff;padding:30px;text-align:center;border-radius:10px 10px 0 0"><div style="font-size:28px;font-weight:bold;color:#D4AF37;letter-spacing:2px">T21 SERVICES</div><p style="color:#ccc;margin:10px 0 0">Healthcare Operational Workforce Services</p></div><div style="background:#fff;padding:30px;border:1px solid #ddd;color:#333"><h2 style="color:#333">Thank You for Your Enquiry</h2><p>Dear ${data.name},</p><p>Thank you for contacting T21 Services. We have received your enquiry and a member of our team will respond within <strong>24 hours</strong>.</p><div style="background:#f8f9fa;padding:15px;border-left:4px solid #D4AF37;margin:20px 0"><strong>Reference:</strong> ${referenceNumber}</div><p><strong>Subject:</strong> ${data.subject}</p><hr style="border:none;border-top:1px solid #eee;margin:25px 0"><p style="color:#666;font-size:14px"><strong>Phone:</strong> +44 (0) 203 375 2061 | <strong>Email:</strong> admin@t21services.co.uk</p></div><div style="background:#1a1a1a;padding:20px;text-align:center;border-radius:0 0 10px 10px"><p style="color:#D4AF37;font-weight:bold;margin:0">T21 Services UK</p><p style="color:#999;font-size:12px;margin:5px 0">64 Upper Parliament Street, Liverpool, L8 7LF</p></div></div>` }],
          }),
        })
        logs.push('10. SendGrid response: ' + sgRes.status)
        if (!sgRes.ok) {
          const errText = await sgRes.text()
          logs.push('11. SendGrid error body: ' + errText.substring(0, 200))
        } else {
          logs.push('11. Client email sent OK')
        }

        // Admin notification
        const adminRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: process.env.FROM_EMAIL }] }],
            from: { email: process.env.FROM_EMAIL, name: 'T21 Platform' },
            subject: `New Enquiry: ${data.name} - ${data.subject || 'General'}`,
            content: [{ type: 'text/html', value: `<h2>New Contact Enquiry</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone || 'N/A'}</p><p><strong>Type:</strong> ${data.inquiry_type}</p><p><strong>Subject:</strong> ${data.subject}</p><p><strong>Message:</strong> ${data.message}</p><p><strong>Ref:</strong> ${referenceNumber}</p>` }],
          }),
        })
        logs.push('12. Admin email status: ' + adminRes.status)
      } catch (e: any) {
        logs.push('Email exception: ' + e.message)
      }
    } else {
      logs.push('9. SendGrid env vars MISSING - skipping email')
    }

    logs.push('DONE - returning success')
    return NextResponse.json({ success: true, message: 'Enquiry received successfully', referenceNumber, debug: logs })
  } catch (error: any) {
    logs.push('FATAL: ' + error.message)
    return NextResponse.json({ success: false, message: 'Failed to process enquiry', debug: logs, error: error.message }, { status: 500 })
  }
}