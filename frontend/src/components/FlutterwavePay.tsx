import React from 'react';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function FlutterwavePay() {
  // Define the handleFlutterwavePayment function within the component
  function handleFlutterwavePayment() {
    const paymentData = {
      public_key: 'YOUR_PUBLIC_KEY_HERE',
      tx_ref: Date.now(),
      amount: 1000,
      currency: 'NGN',
      payment_type: 'card',
      redirect_url: 'https://your-app.com/payment-success',
      // Add more payment data as needed
    };
  
    useFlutterwave(paymentData);
  
    // Optional: Close the payment modal when the payment is completed
    closePaymentModal();
  }

  return (
    <div>
      <button onClick={handleFlutterwavePayment}>Pay with Flutterwave</button>
    </div>
  );
}

export default FlutterwavePay;
