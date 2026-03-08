import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const bookingReference = `T21-CONSULT-${Date.now().toString().slice(-8)}`

    // Create Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Save to database
    const { error: dbError } = await supabase
      .from('consultation_bookings')
      .insert([
        {
          booking_reference: bookingReference,
          name: data.name,
          email: data.email,
          phone: data.phone,
          organization: data.organization,
          service_interest: data.service_interest,
          preferred_date: data.preferred_date,
          preferred_time: data.preferred_time,
          consultation_type: data.consultation_type,
          message: data.message,
          status: 'pending',
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
          message: 'Consultation booked successfully (email notification skipped)',
          bookingReference,
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
          .booking-details { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">T21 SERVICES</div>
            <p style="margin: 10px 0 0 0;">Consultation Booking Confirmed</p>
          </div>
          
          <div class="content">
            <h2>Thank You for Booking!</h2>
            <p>Dear ${data.name},</p>
            <p>We've received your consultation booking request. Our team will review it and confirm your appointment within 24 hours.</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <strong>Booking Reference:</strong> ${bookingReference}
            </div>
            
            <h3>Your Booking Details:</h3>
            <div class="booking-details">
              <p><strong>Service Interest:</strong> ${data.service_interest}</p>
              <p><strong>Preferred Date:</strong> ${new Date(data.preferred_date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Preferred Time:</strong> ${data.preferred_time}</p>
              <p><strong>Consultation Type:</strong> ${data.consultation_type}</p>
              ${data.organization ? `<p><strong>Organization:</strong> ${data.organization}</p>` : ''}
            </div>
            
            <h3>What Happens Next?</h3>
            <ol>
              <li><strong>Confirmation (24 hours):</strong> We'll confirm your appointment time</li>
              <li><strong>Meeting Link:</strong> You'll receive a ${data.consultation_type === 'video' ? 'video call link' : 'phone call confirmation'}</li>
              <li><strong>Preparation:</strong> We'll send you information to prepare for the consultation</li>
              <li><strong>Consultation:</strong> Meet with our expert at the scheduled time</li>
            </ol>
            
            <p>If you need to reschedule or have questions, please contact us:</p>
            <ul>
              <li>Email: admin@t21services.co.uk</li>
              <li>Phone: +44 (0) 203 375 2061</li>
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>T21 Services UK</strong></p>
            <p>Healthcare Operational Workforce Services</p>
            <p>64 Upper Parliament Street, Liverpool, L8 7LF</p>
          </div>
        </div>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: `"T21 Services" <${process.env.FROM_EMAIL}>`,
      to: data.email,
      subject: `Consultation Booking Confirmed - ${bookingReference}`,
      html: clientEmail,
    })

    // Send notification to admin
    const adminEmail = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif;">
        <h2>📅 NEW CONSULTATION BOOKING</h2>
        <div style="background: #fff3cd; padding: 15px; margin: 20px 0;">
          <strong>⚡ New consultation request - requires confirmation</strong>
        </div>
        
        <h3>Client Information:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Organization:</strong> ${data.organization || 'Not provided'}</p>
        
        <h3>Consultation Details:</h3>
        <p><strong>Service Interest:</strong> ${data.service_interest}</p>
        <p><strong>Preferred Date:</strong> ${new Date(data.preferred_date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><strong>Preferred Time:</strong> ${data.preferred_time}</p>
        <p><strong>Type:</strong> ${data.consultation_type}</p>
        
        ${data.message ? `
          <h3>Additional Information:</h3>
          <p>${data.message}</p>
        ` : ''}
        
        <p><strong>Booking Reference:</strong> ${bookingReference}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString('en-GB')}</p>
        
        <h3>Action Required:</h3>
        <ol>
          <li>Review the booking details</li>
          <li>Confirm availability for the requested date/time</li>
          <li>Send confirmation email to client</li>
          <li>Create ${data.consultation_type === 'video' ? 'video meeting link' : 'phone call reminder'}</li>
        </ol>
      </body>
      </html>
    `

      await transporter.sendMail({
        from: `"T21 Platform" <${process.env.FROM_EMAIL}>`,
        to: process.env.FROM_EMAIL,
        subject: `📅 NEW Consultation Booking - ${data.name} - ${bookingReference}`,
        html: adminEmail,
      })

      return NextResponse.json({
        success: true,
        message: 'Consultation booked successfully',
        bookingReference,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Return success anyway since database save worked
      return NextResponse.json({
        success: true,
        message: 'Consultation booked successfully (email notification failed)',
        bookingReference,
      })
    }
  } catch (error) {
    console.error('Error processing consultation booking:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to book consultation',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
