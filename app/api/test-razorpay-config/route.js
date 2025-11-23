import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const hasKeyId = !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
        const hasKeySecret = !!process.env.RAZORPAY_KEY_SECRET
        
        return NextResponse.json({
            status: 'ok',
            config: {
                hasKeyId,
                hasKeySecret,
                keyIdPrefix: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.substring(0, 8) + '...',
                environment: process.env.NODE_ENV
            }
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Configuration check failed', details: error.message },
            { status: 500 }
        )
    }
}