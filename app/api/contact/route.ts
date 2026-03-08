import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.FROM_EMAIL, name: 'T21 Services' },
      subject,
      content: [{ type: 'text/html', value: html }],
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('SendGrid error:', res.status, err)
  }
  return res.ok
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const referenceNumber = `T21-${Date.now().toString().slice(-8)}`

    // Try DB save
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        const { error } = await supabase.from('contact_messages').insert([{
          name: data.name, email: data.email, phone: data.phone,
          subject: data.subject, message: data.message, inquiry_type: data.inquiry_type, status: 'new',
        }])
        if (error) console.warn('DB insert error:', error.message)
      } catch (e) { console.warn('DB error:', e) }
    }

    // Try sending emails
    if (process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL) {
      try {
        const clientHtml = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#000;color:#fff;padding:30px;text-align:center;border-radius:10px 10px 0 0">
              <div style="font-size:28px;font-weight:bold;color:#D4AF37;letter-spacing:2px">T21 SERVICES</div>
              <p style="color:#ccc;margin:10px 0 0">Healthcare Operational Workforce Services</p>
            </div>
            <div style="background:#fff;padding:30px;border:1px solid #ddd;color:#333">
              <h2 style="color:#333;margin-bottom:20px">Thank You for Your Enquiry</h2>
              <p>Dear ${data.name},</p>
              <p>Thank you for contacting T21 Services. We have received your enquiry and a member of our team will respond within <strong>24 hours</strong>.</p>
              <div style="background:#f8f9fa;padding:15px;border-left:4px solid #D4AF37;margin:20px 0">
                <p style="margin:0"><strong>Reference:</strong> ${referenceNumber}</p>
              </div>
              <h3 style="color:#333;margin-top:25px">Your Enquiry Details</h3>
              <table style="width:100%;border-collapse:collapse;margin:10px 0">
                <tr><td style="padding:8px 0;color:#666;width:120px"><strong>Subject:</strong></td><td style="padding:8px 0">${data.subject}</td></tr>
                <tr><td style="padding:8px 0;color:#666"><strong>Type:</strong></td><td style="padding:8px 0">${data.inquiry_type}</td></tr>
                <tr><td style="padding:8px 0;color:#666;vertical-align:top"><strong>Message:</strong></td><td style="padding:8px 0">${data.message}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #eee;margin:25px 0">
              <p style="color:#666;font-size:14px">If you require immediate assistance, please contact us:</p>
              <p style="color:#666;font-size:14px">
                <strong>Phone:</strong> +44 (0) 203 375 2061<br>
                <strong>Email:</strong> admin@t21services.co.uk
              </p>
            </div>
            <div style="background:#1a1a1a;padding:20px;text-align:center;border-radius:0 0 10px 10px">
              <p style="color:#D4AF37;font-weight:bold;margin:0">T21 Services UK</p>
              <p style="color:#999;font-size:12px;margin:5px 0 0">Healthcare Operational Workforce Services</p>
              <p style="color:#999;font-size:12px;margin:5px 0 0">64 Upper Parliament Street, Liverpool, L8 7LF</p>
            </div>
          </div>`
        await sendEmail(data.email, `Enquiry Received - ${referenceNumber} | T21 Services`, clientHtml)

        const adminHtml = `
          <div style="font-family:Arial,sans-serif">
            <h2 style="color:#D4AF37">New Contact Enquiry</h2>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa;width:150px"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${data.phone || 'Not provided'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Organisation</strong></td><td style="padding:8px;border:1px solid #ddd">${data.organisation || 'Not provided'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Enquiry Type</strong></td><td style="padding:8px;border:1px solid #ddd">${data.inquiry_type}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Subject</strong></td><td style="padding:8px;border:1px solid #ddd">${data.subject}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa;vertical-align:top"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd">${data.message}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Reference</strong></td><td style="padding:8px;border:1px solid #ddd">${referenceNumber}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Received</strong></td><td style="padding:8px;border:1px solid #ddd">${new Date().toLocaleString('en-GB')}</td></tr>
            </table>
          </div>`
        await sendEmail(process.env.FROM_EMAIL!, `New Enquiry: ${data.name} - ${data.subject}`, adminHtml)
      } catch (e) { console.warn('Email error:', e) }
    }

    return NextResponse.json({ success: true, message: 'Enquiry received successfully', referenceNumber })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ success: false, message: 'Failed to process enquiry', error: String(error) }, { status: 500 })
  }
}