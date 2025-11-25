"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Donation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [customAmount, setCustomAmount] = useState("");
  const [donationAmount, setDonationAmount] = useState(10);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const predefinedAmounts = {
    1: 10,
    2: 30,
    3: 50,
    4: 100,
    5: 200,
  };

  const handleOnClick = (index) => {
    setActiveIndex(index);
    setDonationAmount(predefinedAmounts[index]);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setDonationAmount(parseInt(value) || 0);
    setActiveIndex(null);
  };

  const getCurrentAmount = () => {
    if (customAmount) return parseInt(customAmount);
    if (activeIndex && predefinedAmounts[activeIndex])
      return predefinedAmounts[activeIndex];
    return 0;
  };

  const handleRazorpayLoad = () => {
    setIsRazorpayLoaded(true);
  };

  const initializeRazorpayPayment = async () => {
    if (!isRazorpayLoaded) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }

    const amount = getCurrentAmount();
    if (!amount || amount <= 0) {
      alert("Please select or enter a valid donation amount");
      return;
    }

    try {
      console.log("Initializing payment for amount:", amount);

      // Create order on backend
      const response = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Razorpay expects amount in paise
          currency: "INR",
          receipt: `donation_${Date.now()}`,
        }),
      });

      const order = await response.json();
      console.log("Order response:", order);

      if (!response.ok) {
        console.error("Order creation failed:", order);
        throw new Error(
          order.error || order.details || "Failed to create order"
        );
      }

      // Check if Razorpay key is available
      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        throw new Error("Razorpay key not configured");
      }

      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "Donation Platform",
        description: "Donation Payment",
        order_id: order.id,
        handler: function (response) {
          console.log("Payment successful:", response);
          handlePaymentSuccess(response);
        },
        prefill: {
          name: "Donor",
          email: "donor@example.com",
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            console.log("Payment modal closed by user");
          },
        },
      };

      console.log("Opening Razorpay with options:", {
        ...options,
        key: "HIDDEN",
      });

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      alert(`Failed to initialize payment: ${error.message}`);
    }
  };

  const handlePaymentSuccess = async (response) => {
    try {
      // Verify payment on backend
      const verifyResponse = await fetch("/api/verify-razorpay-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          donorInfo: {
            firstName: "Anonymous",
            lastName: "Donor",
            email: "donor@example.com",
          },
          amount: getCurrentAmount(),
        }),
      });

      const result = await verifyResponse.json();

      if (verifyResponse.ok) {
        alert("Payment successful! Thank you for your donation.");
        // Reset form
        setCustomAmount("");
        setActiveIndex(1);
        setDonationAmount(predefinedAmounts[1]);
      } else {
        throw new Error(result.error || "Payment verification failed");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      alert("Payment verification failed. Please contact support.");
    }
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    initializeRazorpayPayment();
  };
  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={handleRazorpayLoad}
      />
      {/*Donation One Start */}
      <section className="donation-one">
        <div className="donation-one__wrapper">
          <div className="donation-one__left">
            <div
              className="donation-one__left-bg"
              style={{ backgroundImage: " url(/donate.jpg)" }}
            ></div>
          </div>
          <div className="donation-one__right">
            <div className="donation-one__content-box">
              <div className="section-title-two text-left sec-title-animation animation-style2">
                <div className="section-title-two__tagline-box">
                  <span className="section-title-two__tagline">
                    Join Us Now
                  </span>
                </div>
                <h2 className="section-title-two__title title-animation">
                  Creating Brighter <br /> Futures&nbsp;
                  <span>For</span> Children{" "}
                </h2>
              </div>
              <div className="donation-one__donate-box">
                <div
                  className="donate-amount wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <button
                    className={
                      activeIndex == 1 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(1)}
                  >
                    ₹10
                  </button>
                  <button
                    className={
                      activeIndex == 2 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(2)}
                  >
                    ₹30
                  </button>
                  <button
                    className={
                      activeIndex == 3 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(3)}
                  >
                    ₹50
                  </button>
                  <button
                    className={
                      activeIndex == 4 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(4)}
                  >
                    ₹100
                  </button>
                  <button
                    className={
                      activeIndex == 5 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(5)}
                  >
                    ₹200
                  </button>
                </div>
                <div className="donate-now wow fadeInUp" data-wow-delay=".7s">
                  <input
                    type="text"
                    className="addAmount-value"
                    placeholder="₹ Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                  <div className="donation-one__btn-box">
                    <button
                      onClick={handleDonateClick}
                      className="donation-one__btn thm-btn"
                      disabled={!isRazorpayLoaded}
                    >
                      {!isRazorpayLoaded ? "Loading..." : "Donate Now"}
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation One End */}
    </>
  );
}
