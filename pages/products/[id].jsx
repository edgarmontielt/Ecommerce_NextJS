import React from 'react'
import { database } from '../../config/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

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
    return (
        <div className=' md:flex-row flex flex-col'>
            <img src={product.imgURL} className=' md:w-1/2'/>
            <section className=' md:mt-28 md:text-left text-center'>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </section>
        </div>
    )
}