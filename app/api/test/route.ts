import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is working!',
    env_check: {
      supabase_url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
      supabase_key: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'MISSING',
      sendgrid: process.env.SENDGRID_API_KEY ? 'SET' : 'MISSING',
      from_email: process.env.FROM_EMAIL ? 'SET' : 'MISSING',
    }
  })
}
