import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const referenceNumber = `T21-CONTACT-${Date.now().toString().slice(-8)}`

    // Try DB save (skip if not configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
        await supabase.from('contact_messages').insert([{
          name: data.name, email: data.email, phone: data.phone,
          subject: data.subject, message: data.message, inquiry_type: data.inquiry_type, status: 'new',
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
        const clientHtml = `<div style="font-family:Arial;max-width:600px;margin:0 auto"><div style="background:#000;color:#fff;padding:30px;text-align:center;border-radius:10px 10px 0 0"><div style="font-size:24px;font-weight:bold;color:#D4AF37">T21 SERVICES</div><p>Thank You for Contacting Us</p></div><div style="background:#fff;padding:30px;border:1px solid #ddd;color:#333"><h2>Message Received!</h2><p>Dear ${data.name},</p><p>Thank you for reaching out. We will respond within 24 hours.</p><div style="background:#f8f9fa;padding:15px;border-left:4px solid #D4AF37;margin:20px 0"><strong>Reference:</strong> ${referenceNumber}</div><p><strong>Subject:</strong> ${data.subject}</p><p>Phone: +44 (0) 203 375 2061 | Email: admin@t21services.co.uk</p></div><div style="background:#f8f9fa;padding:20px;text-align:center;border-radius:0 0 10px 10px"><p><strong>T21 Services UK</strong></p><p>Healthcare Operational Workforce Services</p><p>64 Upper Parliament Street, Liverpool, L8 7LF</p></div></div>`
        await transporter.sendMail({ from: `"T21 Services" <${process.env.FROM_EMAIL}>`, to: data.email, subject: `Message Received - ${referenceNumber}`, html: clientHtml })
        const adminHtml = `<h2>NEW CONTACT MESSAGE</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone || 'N/A'}</p><p><strong>Type:</strong> ${data.inquiry_type}</p><p><strong>Subject:</strong> ${data.subject}</p><p><strong>Message:</strong> ${data.message}</p><p><strong>Ref:</strong> ${referenceNumber}</p>`
        await transporter.sendMail({ from: `"T21 Platform" <${process.env.FROM_EMAIL}>`, to: process.env.FROM_EMAIL, subject: `NEW Contact - ${data.name}`, html: adminHtml })
      } catch (e) { console.warn('Email skipped:', e) }
    }

    return NextResponse.json({ success: true, message: 'Message received successfully', referenceNumber })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 })
  }
}