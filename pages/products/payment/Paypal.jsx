import React from 'react'
import axios from 'axios'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function Paypal() {

    const createOrder = async () => {
        const result = await axios.post('/api/payment/paypal/create-order')
        return result.data.orderID
    }

    const onAprove = (data) => {
        console.log(data);
    }

    return (
        <>
            <PayPalScriptProvider
                options={{
                    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    'currency': 'USD'
                }}
            >
                <PayPalButtons
                    style={{
                        color: 'silver',
                        shape: 'rect',
                        label: 'buynow',
                        heigth: 10
                    }}
                    createOrder={createOrder}
                    onApprove={onAprove}
                >
                </PayPalButtons>
            </PayPalScriptProvider>
        </>
    )
}
