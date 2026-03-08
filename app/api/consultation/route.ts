import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const bookingReference = `T21-CONSULT-${Date.now().toString().slice(-8)}`

    // Try DB save (skip if not configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        await supabase.from('consultation_bookings').insert([{
          booking_reference: bookingReference, name: data.name, email: data.email,
          phone: data.phone, organization: data.organization, service_interest: data.service_interest,
          preferred_date: data.preferred_date, preferred_time: data.preferred_time,
          consultation_type: data.consultation_type, message: data.message, status: 'pending',
        }])
      } catch (e) { console.warn('DB save skipped:', e) }
    }

    // Try email (skip if not configured)
    if (process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.sendgrid.net', port: 587, secure: false,
          auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY },
        })
        const clientHtml = `<div style="font-family:Arial;max-width:600px;margin:0 auto"><div style="background:#000;color:#fff;padding:30px;text-align:center;border-radius:10px 10px 0 0"><div style="font-size:24px;font-weight:bold;color:#D4AF37">T21 SERVICES</div><p>Consultation Booking Confirmed</p></div><div style="background:#fff;padding:30px;border:1px solid #ddd;color:#333"><h2>Thank You!</h2><p>Dear ${data.name},</p><p>We have received your consultation request. Our team will confirm within 24 hours.</p><div style="background:#f8f9fa;padding:15px;border-left:4px solid #D4AF37;margin:20px 0"><strong>Reference:</strong> ${bookingReference}</div><p><strong>Service:</strong> ${data.service_interest}</p><p><strong>Date:</strong> ${data.preferred_date}</p><p><strong>Time:</strong> ${data.preferred_time}</p><p>Phone: +44 (0) 203 375 2061 | Email: admin@t21services.co.uk</p></div><div style="background:#f8f9fa;padding:20px;text-align:center;border-radius:0 0 10px 10px"><p><strong>T21 Services UK</strong></p><p>Healthcare Operational Workforce Services</p></div></div>`
        await transporter.sendMail({ from: `"T21 Services" <${process.env.FROM_EMAIL}>`, to: data.email, subject: `Consultation Confirmed - ${bookingReference}`, html: clientHtml })
        const adminHtml = `<h2>NEW CONSULTATION BOOKING</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Org:</strong> ${data.organization || 'N/A'}</p><p><strong>Service:</strong> ${data.service_interest}</p><p><strong>Date:</strong> ${data.preferred_date}</p><p><strong>Time:</strong> ${data.preferred_time}</p><p><strong>Type:</strong> ${data.consultation_type}</p><p><strong>Message:</strong> ${data.message || 'N/A'}</p><p><strong>Ref:</strong> ${bookingReference}</p>`
        await transporter.sendMail({ from: `"T21 Platform" <${process.env.FROM_EMAIL}>`, to: process.env.FROM_EMAIL, subject: `NEW Consultation - ${data.name}`, html: adminHtml })
      } catch (e) { console.warn('Email skipped:', e) }
    }

    return NextResponse.json({ success: true, message: 'Consultation booked successfully', bookingReference })
  } catch (error) {
    console.error('Consultation error:', error)
    return NextResponse.json({ success: false, message: 'Failed to book consultation' }, { status: 500 })
  }
}