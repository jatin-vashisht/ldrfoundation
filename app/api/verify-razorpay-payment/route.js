import crypto from 'crypto'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            donorInfo,
            amount
        } = await request.json()

        // Validate required fields
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { error: 'Missing required payment verification fields' },
                { status: 400 }
            )
        }

        // Create signature for verification
        const body = razorpay_order_id + '|' + razorpay_payment_id
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex')

        // Verify signature
        const isAuthentic = expectedSignature === razorpay_signature

        if (isAuthentic) {
            // Payment is verified
            // Here you can save the payment details to your database
            console.log('Payment verified successfully:', {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                donorInfo,
                amount,
                timestamp: new Date().toISOString()
            })

            // You can add database operations here to save the donation record
            // Example:
            // await saveDonationToDatabase({
            //     orderId: razorpay_order_id,
            //     paymentId: razorpay_payment_id,
            //     donorName: `${donorInfo.firstName} ${donorInfo.lastName}`,
            //     donorEmail: donorInfo.email,
            //     amount: amount,
            //     status: 'completed',
            //     createdAt: new Date()
            // })

            return NextResponse.json({
                success: true,
                message: 'Payment verified successfully',
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id
            })
        } else {
            return NextResponse.json(
                { error: 'Payment verification failed' },
                { status: 400 }
            )
        }
    } catch (error) {
        console.error('Error verifying payment:', error)
        return NextResponse.json(
            { error: 'Payment verification failed' },
            { status: 500 }
        )
    }
}