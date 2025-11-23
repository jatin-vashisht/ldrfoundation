import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const { amount, currency, receipt } = await request.json()

        // Log environment variables for debugging (remove in production)
        console.log('Environment check:', {
            hasKeyId: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
            keyIdLength: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.length,
        })

        // Validate environment variables
        if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            console.error('Missing Razorpay environment variables')
            return NextResponse.json(
                { error: 'Razorpay configuration missing. Please check environment variables.' },
                { status: 500 }
            )
        }

        // Validate required fields
        if (!amount || !currency || !receipt) {
            return NextResponse.json(
                { error: 'Missing required fields: amount, currency, receipt' },
                { status: 400 }
            )
        }

        // Initialize Razorpay inside the function to avoid initialization errors
        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        })

        console.log('Creating order with:', { amount, currency, receipt })

        // Create order
        const order = await razorpay.orders.create({
            amount: parseInt(amount), // ensure it's a number
            currency: currency,
            receipt: receipt,
            payment_capture: 1, // auto capture
        })

        console.log('Order created successfully:', order.id)

        return NextResponse.json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
        })
    } catch (error) {
        console.error('Error creating Razorpay order:', error)
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        })
        
        return NextResponse.json(
            {
                error: 'Failed to create order',
                details: error.message
            },
            { status: 500 }
        )
    }
}