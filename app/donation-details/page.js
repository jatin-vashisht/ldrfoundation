'use client'
import Layout from "@/components/layout/Layout"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [donationAmount, setDonationAmount] = useState('')
    const [customAmount, setCustomAmount] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false)

    const predefinedAmounts = {
        1: 5000,
        2: 3000,
        3: 1000
    }

    const handleOnClick = (index) => {
        setActiveIndex(index)
        setDonationAmount(predefinedAmounts[index])
        setCustomAmount('')
    }

    const handleCustomAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setCustomAmount(value)
        setDonationAmount(parseInt(value) || 0)
        setActiveIndex(null)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const getCurrentAmount = () => {
        if (customAmount) return parseInt(customAmount)
        if (activeIndex && predefinedAmounts[activeIndex]) return predefinedAmounts[activeIndex]
        return 0
    }

    const handleRazorpayLoad = () => {
        setIsRazorpayLoaded(true)
    }

    const initializeRazorpayPayment = async () => {
        if (!isRazorpayLoaded) {
            alert('Payment system is loading. Please try again in a moment.')
            return
        }

        const amount = getCurrentAmount()
        if (!amount || amount <= 0) {
            alert('Please select or enter a valid donation amount')
            return
        }

        if (!formData.firstName || !formData.lastName || !formData.email) {
            alert('Please fill in all required fields')
            return
        }

        try {
            console.log('Initializing payment for amount:', amount)
            
            // Create order on backend
            const response = await fetch('/api/create-razorpay-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount * 100, // Razorpay expects amount in paise
                    currency: 'INR',
                    receipt: `donation_${Date.now()}`,
                }),
            })

            const order = await response.json()
            console.log('Order response:', order)

            if (!response.ok) {
                console.error('Order creation failed:', order)
                throw new Error(order.error || order.details || 'Failed to create order')
            }

            // Check if Razorpay key is available
            const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
            if (!razorpayKey) {
                throw new Error('Razorpay key not configured')
            }

            const options = {
                key: razorpayKey,
                amount: order.amount,
                currency: order.currency,
                name: 'Donation Platform',
                description: 'Donation Payment',
                order_id: order.id,
                handler: function (response) {
                    console.log('Payment successful:', response)
                    handlePaymentSuccess(response)
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                },
                theme: {
                    color: '#3399cc'
                },
                modal: {
                    ondismiss: function() {
                        console.log('Payment modal closed by user')
                    }
                }
            }

            console.log('Opening Razorpay with options:', { ...options, key: 'HIDDEN' })
            
            if (!window.Razorpay) {
                throw new Error('Razorpay SDK not loaded')
            }

            const rzp = new window.Razorpay(options)
            rzp.open()
        } catch (error) {
            console.error('Payment initialization error:', error)
            alert(`Failed to initialize payment: ${error.message}`)
        }
    }

    const handlePaymentSuccess = async (response) => {
        try {
            // Verify payment on backend
            const verifyResponse = await fetch('/api/verify-razorpay-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    donorInfo: formData,
                    amount: getCurrentAmount()
                }),
            })

            const result = await verifyResponse.json()

            if (verifyResponse.ok) {
                alert('Payment successful! Thank you for your donation.')
                // Reset form
                setFormData({ firstName: '', lastName: '', email: '' })
                setCustomAmount('')
                setActiveIndex(1)
                setDonationAmount(predefinedAmounts[1])
            } else {
                throw new Error(result.error || 'Payment verification failed')
            }
        } catch (error) {
            console.error('Payment verification error:', error)
            alert('Payment verification failed. Please contact support.')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        initializeRazorpayPayment()
    }
    
    return (
        <>
        <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            onLoad={handleRazorpayLoad}
        />
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation details">
        {/*Donation Details Start */}
        <section className="donation-details">
            <div className="container">
                <div className="donation-details__inner">
                    <div className="donation-details__payment-method-box">
                        <h3 className="donation-details__payment-method-title">Select Payment Method</h3>
                        <div className="donation-details__quote-radio">
                            <label className="custom-radio">
                                <input type="radio" name="myRadios" checked />
                                <span className="radio-dot"></span>
                                <span className="radio-text">Razorpay</span>
                            </label>
                            <label className="custom-radio">
                                <input type="radio" name="myRadios" />
                                <span className="radio-dot"></span>
                                <span className="radio-text">UPI</span>
                            </label>
                        </div>
                    </div>
                    <div className="donation-details__personal-info">
                        <h3 className="donation-details__personal-info-title">Personal Information</h3>
                        <form className="contact-form-validated donation-details__form"
                            onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your First Name*</p>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="First Name..." 
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your Last Name*</p>
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            placeholder="Last Name..." 
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your E-mail Address*</p>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-mail Address..." 
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="donation-details__donate-box-outer">
                                        <div className="donation-details__donate-box">
                                            <div className="donate-now">
                                                <p className="donation-details__input-box-title">Enter Donation Amount*</p>
                                                <input 
                                                    type="text" 
                                                    className="addAmount-value"
                                                    placeholder="₹ Custom Amount"
                                                    value={customAmount}
                                                    onChange={handleCustomAmountChange}
                                                />
                                            </div>
                                            <h4 className="donation-details__donate-box-divider">Or</h4>
                                            <div className="donate-amount">
                                                <p className="donation-details__input-box-title">Select Amount*</p>
                                                <button 
                                                    type="button"
                                                    className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} 
                                                    onClick={() => handleOnClick(1)}
                                                >
                                                    ₹5,000
                                                </button>
                                                <button 
                                                    type="button"
                                                    className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} 
                                                    onClick={() => handleOnClick(2)}
                                                >
                                                    ₹3,000
                                                </button>
                                                <button 
                                                    type="button"
                                                    className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} 
                                                    onClick={() => handleOnClick(3)}
                                                >
                                                    ₹1,000
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="donation-details__donate-amout">
                                            <span>Total Amount: </span>₹{getCurrentAmount().toLocaleString('en-IN')}
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="donation-details__btn-box">
                                        <button 
                                            type="submit" 
                                            className="thm-btn donation-details__btn"
                                            disabled={!isRazorpayLoaded}
                                        >
                                            {!isRazorpayLoaded ? 'Loading Payment...' : 'Donate Now'}
                                            <span><i className="icon-arrow-right"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation Details End */}

            </Layout>
        </>
    )
}