import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called')
    const data = await request.json()
    console.log('Data received:', data)
    const referenceNumber = `T21-CONTACT-${Date.now().toString().slice(-8)}`

    // Check environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Missing database credentials' },
        { status: 500 }
      )
    }

    // Create Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    console.log('Supabase client created')

    // Create contact_messages table entry
    const { error: dbError} = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          inquiry_type: data.inquiry_type,
          status: 'new',
        },
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { success: false, message: 'Database error: ' + dbError.message },
        { status: 500 }
      )
    }
    console.log('Data saved to database')

    // Try to send emails, but don't fail if it doesn't work
    try {
      // Check email environment variables
      if (!process.env.SENDGRID_API_KEY || !process.env.FROM_EMAIL) {
        console.warn('Missing email environment variables - skipping email')
        return NextResponse.json({
          success: true,
          message: 'Message saved successfully (email notification skipped)',
          referenceNumber,
        })
      }

      // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    })

    // Send confirmation to client
    const clientEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .logo { font-size: 24px; font-weight: bold; color: #D4AF37; }
          .content { background: white; padding: 30px; border: 1px solid #ddd; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">T21 SERVICES</div>
            <p style="margin: 10px 0 0 0;">Thank You for Contacting Us</p>
          </div>
          
          <div class="content">
            <h2>Message Received!</h2>
            <p>Dear ${data.name},</p>
            <p>Thank you for reaching out to T21 Services. We have received your message and will respond within 24 hours.</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <strong>Reference:</strong> ${referenceNumber}
            </div>
            
            <h3>Your Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Inquiry Type:</strong> ${data.inquiry_type}</p>
              <p><strong>Message:</strong><br>${data.message}</p>
            </div>
            
            <p style="margin-top: 20px;">If you need immediate assistance, please call us:</p>
            <ul>
              <li>UK: +44 (0) 203 375 2061</li>
              <li>Nigeria: +234 816 377 5394</li>
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>T21 Services UK</strong></p>
            <p>TQUK Approved Centre #36257481088</p>
            <p>64 Upper Parliament Street, Liverpool, L8 7LF</p>
          </div>
        </div>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: `"T21 Services" <${process.env.FROM_EMAIL}>`,
      to: data.email,
      subject: `Message Received - ${referenceNumber}`,
      html: clientEmail,
    })

    // Send notification to admin
    const adminEmail = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif;">
        <h2>🔔 NEW CONTACT MESSAGE</h2>
        <div style="background: #fff3cd; padding: 15px; margin: 20px 0;">
          <strong>⚡ New message received</strong>
        </div>
        
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiry_type}</p>
        
        <h3>Message Details:</h3>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong><br>${data.message}</p>
        
        <p><strong>Reference:</strong> ${referenceNumber}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString('en-GB')}</p>
      </body>
      </html>
    `

      await transporter.sendMail({
        from: `"T21 Platform" <${process.env.FROM_EMAIL}>`,
        to: process.env.FROM_EMAIL,
        subject: `🔔 NEW Contact Message - ${data.name}`,
        html: adminEmail,
      })

      return NextResponse.json({
        success: true,
        message: 'Message sent successfully',
        referenceNumber,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Return success anyway since database save worked
      return NextResponse.json({
        success: true,
        message: 'Message saved successfully (email notification failed)',
        referenceNumber,
      })
    }
  } catch (error) {
    console.error('Error processing contact message:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
