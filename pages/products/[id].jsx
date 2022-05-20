import React from 'react'
import { database } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import axios from 'axios'
import ButtonShop from '../../components/products/ButtonShop'
import ButtonGnrl from '../../components/products/ButtonGnrl'
import { BsCartFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export async function getStaticPaths() {
    const col = collection(database, 'products')
    const docs = await getDocs(col)
    const products = []
    docs.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    const paths = products.map(product => ({
        params: { id: product.id }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const document = doc(database, "products", params.id)
    const productDoc = await getDoc(document)
    const product = productDoc.data()
    return {
        props: {
            product: { product, id: params.id }
        },
        revalidate: 10
    }
}

export default function Producto({ product: { product, id } }) {

    const payment = () => {
        axios.get('/api/payment/stripe/stripe-checkout')
            .then(({ data }) => location.href = data.url)
            .catch(err => console.log(err))
    }

    const createOrder = async () => {
        const result = await axios.post('/api/payment/paypal/create-order')
        return result.data.orderID
    }

    const onAprove = (data) => {
        console.log(data);
    }

    return (
        <div className=' md:flex-row flex flex-col gap-10 md:mx-14'>
            <img src={product.images} className=' md:w-1/2 w-1/2 h-1/2 mt-8' />
            <section className=' md:mt-[5rem] md:text-left text-center md:w-1/2 mx-14 md:mx-0 md:mr-10'>
                <h1 className=' text-3xl font-medium mb-10'>{product.name}</h1>
                <h4 className='font-medium mb-2'>Description:</h4>
                <p className='mb-12'>{product.description}</p>
                <p className=' text-3xl mb-16'>${product.default_price_data.unit_amount}</p>
                <ButtonShop payment={payment} />
                <div className=' my-8 flex gap-8'>
                    <ButtonGnrl title={'CART'} icon={<BsCartFill className='w-5 h-5' />} />
                    <ButtonGnrl title={'ADD TO FAVORITES'} icon={<AiFillHeart className='w-5 h-5' />} />
                </div>
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
                            heigth: 20
                        }}
                        createOrder={createOrder}
                        onApprove={onAprove}
                    >
                    </PayPalButtons>
                </PayPalScriptProvider>
            </section>
        </div>
    )
}