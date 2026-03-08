import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Hello! API is working!',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({
    success: true,
    message: 'POST received!',
    received: data,
    timestamp: new Date().toISOString()
  })
}
