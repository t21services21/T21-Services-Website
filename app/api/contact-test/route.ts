import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    console.log('Contact test API called')
    const data = await request.json()
    console.log('Received data:', data)

    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Missing environment variables',
          details: {
            hasUrl: !!supabaseUrl,
            hasKey: !!supabaseKey
          }
        },
        { status: 500 }
      )
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('Supabase client created')

    // Try to insert into database
    const { data: insertedData, error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: data.subject,
          message: data.message,
          inquiry_type: data.inquiry_type || 'general',
          status: 'new',
        },
      ])
      .select()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database error: ' + dbError.message,
          error: dbError
        },
        { status: 500 }
      )
    }

    console.log('Data saved successfully:', insertedData)

    return NextResponse.json({
      success: true,
      message: 'Message saved successfully (test mode - no email sent)',
      data: insertedData
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
