import { collection, getDocs } from "firebase/firestore"
import React from "react"
import Banner from "../components/home/banner/Banner"
import Header from "../components/home/header/Header"
import TopProducts from "../components/home/products/TopProducts"
import { database } from "../config/firebase"

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

export default function Home({ products }) {
    return (
        <div className=''>
            <Header />
            <Banner />
            <TopProducts products={products}/>
        </div>
    )
}
