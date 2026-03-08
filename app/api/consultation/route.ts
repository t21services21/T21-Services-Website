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
    const bookingReference = `T21-CONSULT-${Date.now().toString().slice(-8)}`

    // Try DB save
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        const { error } = await supabase.from('consultation_bookings').insert([{
          booking_reference: bookingReference, name: data.name, email: data.email,
          phone: data.phone, organization: data.organisation, service_interest: data.service_interest,
          preferred_date: data.preferred_date || null, preferred_time: data.preferred_time || null,
          consultation_type: data.consultation_type, message: data.message, status: 'pending',
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
              <p style="color:#ccc;margin:10px 0 0">Consultation Request Confirmed</p>
            </div>
            <div style="background:#fff;padding:30px;border:1px solid #ddd;color:#333">
              <h2 style="color:#333;margin-bottom:20px">Thank You for Your Request</h2>
              <p>Dear ${data.name},</p>
              <p>Thank you for your interest in T21 Services. We have received your consultation request and a member of our team will contact you within <strong>24 hours</strong> to confirm.</p>
              <div style="background:#f8f9fa;padding:15px;border-left:4px solid #D4AF37;margin:20px 0">
                <p style="margin:0"><strong>Booking Reference:</strong> ${bookingReference}</p>
              </div>
              <h3 style="color:#333;margin-top:25px">Your Request Details</h3>
              <table style="width:100%;border-collapse:collapse;margin:10px 0">
                <tr><td style="padding:8px 0;color:#666;width:140px"><strong>Service Area:</strong></td><td style="padding:8px 0">${data.service_interest}</td></tr>
                ${data.preferred_date ? `<tr><td style="padding:8px 0;color:#666"><strong>Preferred Date:</strong></td><td style="padding:8px 0">${data.preferred_date}</td></tr>` : ''}
                ${data.preferred_time ? `<tr><td style="padding:8px 0;color:#666"><strong>Preferred Time:</strong></td><td style="padding:8px 0">${data.preferred_time}</td></tr>` : ''}
              </table>
              <h3 style="color:#333;margin-top:25px">What Happens Next</h3>
              <ol style="color:#666;line-height:1.8">
                <li>A member of our team will contact you within 24 hours</li>
                <li>We will confirm a convenient date and time for your consultation</li>
                <li>You will receive a meeting link or call confirmation</li>
              </ol>
              <hr style="border:none;border-top:1px solid #eee;margin:25px 0">
              <p style="color:#666;font-size:14px"><strong>Phone:</strong> +44 (0) 203 375 2061 | <strong>Email:</strong> admin@t21services.co.uk</p>
            </div>
            <div style="background:#1a1a1a;padding:20px;text-align:center;border-radius:0 0 10px 10px">
              <p style="color:#D4AF37;font-weight:bold;margin:0">T21 Services UK</p>
              <p style="color:#999;font-size:12px;margin:5px 0 0">Healthcare Operational Workforce Services</p>
              <p style="color:#999;font-size:12px;margin:5px 0 0">64 Upper Parliament Street, Liverpool, L8 7LF</p>
            </div>
          </div>`
        await sendEmail(data.email, `Consultation Request Confirmed - ${bookingReference} | T21 Services`, clientHtml)

        const adminHtml = `
          <div style="font-family:Arial,sans-serif">
            <h2 style="color:#D4AF37">New Consultation Request</h2>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa;width:150px"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Organisation</strong></td><td style="padding:8px;border:1px solid #ddd">${data.organisation || 'Not provided'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Service Interest</strong></td><td style="padding:8px;border:1px solid #ddd">${data.service_interest}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Preferred Date</strong></td><td style="padding:8px;border:1px solid #ddd">${data.preferred_date || 'Flexible'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Preferred Time</strong></td><td style="padding:8px;border:1px solid #ddd">${data.preferred_time || 'Flexible'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Type</strong></td><td style="padding:8px;border:1px solid #ddd">${data.consultation_type}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa;vertical-align:top"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd">${data.message || 'None'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Reference</strong></td><td style="padding:8px;border:1px solid #ddd">${bookingReference}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;background:#f8f9fa"><strong>Received</strong></td><td style="padding:8px;border:1px solid #ddd">${new Date().toLocaleString('en-GB')}</td></tr>
            </table>
            <p style="margin-top:15px"><strong>Action Required:</strong> Contact client within 24 hours to confirm consultation.</p>
          </div>`
        await sendEmail(process.env.FROM_EMAIL!, `New Consultation: ${data.name} - ${data.service_interest}`, adminHtml)
      } catch (e) { console.warn('Email error:', e) }
    }

    return NextResponse.json({ success: true, message: 'Consultation request received', bookingReference })
  } catch (error) {
    console.error('Consultation API error:', error)
    return NextResponse.json({ success: false, message: 'Failed to process request', error: String(error) }, { status: 500 })
  }
}