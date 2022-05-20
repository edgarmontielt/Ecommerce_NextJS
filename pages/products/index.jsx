import React, { useRef, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { database } from '../../config/firebase'
import CardProduct from '../../components/products/CardProduct'


export async function getStaticProps() {
    const col = collection(database, 'products')
    const docs = await getDocs(col)

    const products = []
    docs.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    return {
        props: {
            products
        },
        revalidate: 5
    }
}

export default function Products({ products }) {

    const [asideOpen, setAsideOpen] = useState(false)

    return (
        <>
            <section className='md:my-10 lg:mx-10 flex flex-col'>
                <h1 className='text-center text-2xl mb-16'>All products</h1>
                <div className='grid xl:grid-cols-4 grid-cols-1 mx-auto sm:grid-cols-2 gap-5 md:justify-between '>
                    {products.map(product => {
                        return <CardProduct key={product.id} product={product} />
                    })}
                </div>
            </section>
        </>
    )
}
