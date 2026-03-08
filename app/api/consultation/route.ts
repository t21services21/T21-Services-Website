import { NextRequest, NextResponse } from 'next/server'

async function sendEmail(to: string, subject: string, html: string, fromName: string = 'T21 Services') {
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.FROM_EMAIL, name: fromName },
      subject,
      content: [{ type: 'text/html', value: html }],
    }),
  })
  if (!res.ok) console.error('SendGrid error:', res.status, await res.text())
  return res.ok
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const bookingReference = `T21-CONSULT-${Date.now().toString().slice(-8)}`
    const submittedAt = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London', dateStyle: 'medium', timeStyle: 'short' })

    // Try DB save
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        const { error } = await supabase.from('consultation_bookings').insert([{
          booking_reference: bookingReference, name: data.name, email: data.email,
          phone: data.phone, organization: data.organisation, service_interest: data.service_interest,
          preferred_date: data.preferred_date || null, preferred_time: data.preferred_time || null,
          consultation_type: data.consultation_type, message: data.message, status: 'pending',
        }])
        if (error) console.warn('DB error:', error.message)
      } catch (e) { console.warn('DB exception:', e) }
    }

    // Send emails
    if (process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL) {
      try {
        // CLIENT confirmation
        const clientHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff">
  <div style="background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);padding:40px 30px;text-align:center;border-radius:8px 8px 0 0">
    <div style="font-size:32px;font-weight:bold;color:#D4AF37;letter-spacing:3px;margin-bottom:5px">T21 SERVICES</div>
    <div style="color:#999;font-size:13px;letter-spacing:1px">HEALTHCARE OPERATIONAL WORKFORCE SERVICES</div>
  </div>
  <div style="padding:35px 30px;background:#ffffff;color:#333">
    <h2 style="color:#1a1a1a;margin:0 0 20px;font-size:22px">Consultation Request Confirmed</h2>
    <p style="line-height:1.6;color:#555">Dear ${data.name},</p>
    <p style="line-height:1.6;color:#555">Thank you for your interest in T21 Services. We have received your consultation request and a member of our team will contact you within <strong style="color:#1a1a1a">24 hours</strong> to confirm your appointment.</p>
    <div style="background:#f8f6f0;border-left:4px solid #D4AF37;padding:16px 20px;margin:25px 0;border-radius:0 6px 6px 0">
      <div style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Booking Reference</div>
      <div style="font-size:20px;font-weight:bold;color:#D4AF37">${bookingReference}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;margin:20px 0">
      <tr><td style="padding:10px 15px;background:#f9f9f9;color:#888;font-size:13px;width:140px;border-bottom:1px solid #eee">Service Area</td><td style="padding:10px 15px;background:#f9f9f9;color:#333;border-bottom:1px solid #eee">${data.service_interest}</td></tr>
      ${data.preferred_date ? `<tr><td style="padding:10px 15px;color:#888;font-size:13px;border-bottom:1px solid #eee">Preferred Date</td><td style="padding:10px 15px;color:#333;border-bottom:1px solid #eee">${data.preferred_date}</td></tr>` : ''}
      ${data.preferred_time ? `<tr><td style="padding:10px 15px;background:#f9f9f9;color:#888;font-size:13px;border-bottom:1px solid #eee">Preferred Time</td><td style="padding:10px 15px;background:#f9f9f9;color:#333;border-bottom:1px solid #eee">${data.preferred_time}</td></tr>` : ''}
      <tr><td style="padding:10px 15px;color:#888;font-size:13px;border-bottom:1px solid #eee">Consultation Type</td><td style="padding:10px 15px;color:#333;border-bottom:1px solid #eee">${data.consultation_type}</td></tr>
    </table>
    <div style="background:#f0f7f0;border:1px solid #c3e6c3;border-radius:6px;padding:15px 20px;margin:25px 0">
      <p style="margin:0;color:#2d6a2d;font-size:14px"><strong>What happens next?</strong></p>
      <ol style="color:#2d6a2d;font-size:13px;line-height:1.8;margin:8px 0 0;padding-left:20px">
        <li>A member of our team will contact you within 24 hours</li>
        <li>We will confirm a convenient date and time</li>
        <li>You will receive a meeting link or call confirmation</li>
      </ol>
    </div>
    <hr style="border:none;border-top:1px solid #eee;margin:25px 0">
    <p style="color:#888;font-size:13px;line-height:1.6;margin:0">
      <strong style="color:#666">Telephone:</strong> +44 (0) 203 375 2061<br>
      <strong style="color:#666">Email:</strong> admin@t21services.co.uk<br>
      <strong style="color:#666">Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
    </p>
  </div>
  <div style="background:#1a1a1a;padding:25px 30px;text-align:center;border-radius:0 0 8px 8px">
    <div style="color:#D4AF37;font-weight:bold;font-size:14px;margin-bottom:4px">T21 Services UK</div>
    <div style="color:#777;font-size:11px">Healthcare Operational Workforce &amp; Service Delivery</div>
    <div style="color:#666;font-size:11px;margin-top:4px">64 Upper Parliament Street, Liverpool, L8 7LF</div>
  </div>
</div>`
        await sendEmail(data.email, `Consultation Confirmed - ${bookingReference} | T21 Services`, clientHtml)

        // ADMIN notification
        const adminHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff">
  <div style="background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);padding:30px;text-align:center;border-radius:8px 8px 0 0">
    <div style="font-size:28px;font-weight:bold;color:#D4AF37;letter-spacing:2px">T21 SERVICES</div>
  </div>
  <div style="padding:30px;background:#ffffff">
    <h2 style="color:#D4AF37;margin:0 0 25px;font-size:22px;text-align:center">New Consultation Request</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;width:140px;border-bottom:2px solid #fff;vertical-align:top">Name</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px;border-bottom:2px solid #fff">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;color:#888;font-size:13px;font-weight:bold;border-bottom:1px solid #f0f0f0;vertical-align:top">Email</td>
        <td style="padding:12px 16px;color:#333;font-size:14px;border-bottom:1px solid #f0f0f0"><a href="mailto:${data.email}" style="color:#D4AF37">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;border-bottom:2px solid #fff;vertical-align:top">Phone</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px;border-bottom:2px solid #fff">${data.phone || 'Not provided'}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;color:#888;font-size:13px;font-weight:bold;border-bottom:1px solid #f0f0f0;vertical-align:top">Organisation</td>
        <td style="padding:12px 16px;color:#333;font-size:14px;border-bottom:1px solid #f0f0f0">${data.organisation || 'Not provided'}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;border-bottom:2px solid #fff;vertical-align:top">Service Interest</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px;border-bottom:2px solid #fff">${data.service_interest}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;color:#888;font-size:13px;font-weight:bold;border-bottom:1px solid #f0f0f0;vertical-align:top">Preferred Date</td>
        <td style="padding:12px 16px;color:#333;font-size:14px;border-bottom:1px solid #f0f0f0">${data.preferred_date || 'Flexible'}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;border-bottom:2px solid #fff;vertical-align:top">Preferred Time</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px;border-bottom:2px solid #fff">${data.preferred_time || 'Flexible'}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;color:#888;font-size:13px;font-weight:bold;border-bottom:1px solid #f0f0f0;vertical-align:top">Consultation Type</td>
        <td style="padding:12px 16px;color:#333;font-size:14px;border-bottom:1px solid #f0f0f0">${data.consultation_type}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;border-bottom:2px solid #fff;vertical-align:top">Message</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px;border-bottom:2px solid #fff;line-height:1.5">${data.message || 'None'}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;color:#888;font-size:13px;font-weight:bold;border-bottom:1px solid #f0f0f0;vertical-align:top">Reference</td>
        <td style="padding:12px 16px;color:#D4AF37;font-size:14px;font-weight:bold;border-bottom:1px solid #f0f0f0">${bookingReference}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background:#f8f6f0;color:#888;font-size:13px;font-weight:bold;vertical-align:top">Received</td>
        <td style="padding:12px 16px;background:#f8f6f0;color:#333;font-size:14px">${submittedAt}</td>
      </tr>
    </table>
    <div style="text-align:center;margin:30px 0 10px">
      <a href="mailto:${data.email}?subject=Re: Consultation Request - ${bookingReference}" style="display:inline-block;background:#D4AF37;color:#000;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px">Reply to Client</a>
    </div>
    <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:12px 16px;margin-top:15px">
      <p style="margin:0;color:#856404;font-size:13px"><strong>Action Required:</strong> Contact client within 24 hours to confirm consultation date and time.</p>
    </div>
  </div>
  <div style="background:#1a1a1a;padding:20px;text-align:center;border-radius:0 0 8px 8px">
    <div style="color:#D4AF37;font-weight:bold;font-size:13px">T21 Services UK</div>
    <div style="color:#666;font-size:11px;margin-top:4px">Healthcare Operational Workforce Services</div>
  </div>
</div>`
        await sendEmail(process.env.FROM_EMAIL!, `New Consultation: ${data.name} - ${data.service_interest}`, adminHtml, 'T21 Services')
      } catch (e) { console.warn('Email error:', e) }
    }

    return NextResponse.json({ success: true, message: 'Consultation request received', bookingReference })
  } catch (error: any) {
    console.error('Consultation API error:', error)
    return NextResponse.json({ success: false, message: 'Failed to process request', error: error.message }, { status: 500 })
  }
}