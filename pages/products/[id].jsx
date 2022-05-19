import React from 'react'
import { database } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import axios from 'axios'

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
    return (
        <div className=' md:flex-row flex flex-col gap-10 md:mx-14'>
            <img src={product.images} className=' md:w-1/2 ' />
            <section className=' md:mt-[6rem] md:text-left text-center md:w-1/2 mx-14 md:mx-0 md:mr-10'>
                <h1 className=' text-3xl font-medium mb-10'>{product.name}</h1>
                <h4 className='font-medium mb-2'>Description:</h4>
                <p className='mb-12'>{product.description}</p>
                <p className=' text-3xl mb-16'>${product.default_price_data.unit_amount}</p>
                <div className='flex gap-6'>
                    <button
                        className=' bg-blue-600 w-full py-2 rounded-full text-white font-medium hover:bg-blue-700'
                        onClick={payment}
                    >
                        SHOP
                    </button>
                    <button
                        className=' border-[1px] border-blue-600 text-blue-900 w-1/3 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white'

                    >
                        CART
                    </button>
                </div>
            </section>
        </div>
    )
}