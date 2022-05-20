import { collection, getDocs } from "firebase/firestore"
import React from "react"
import Footer from "../components/footer/Footer"
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
            <Banner
                src={'https://shop-cdncname.huawei.com/mx/uomcdn/MXHW/pms/202112/gbom/6941487241521/800_800_2F8D021FFF9D33FABB20825C251F3D12mp.png'}
                title={'Matebook Pro'}
                description={'Find the best option for productivity or entertainment.'}
            />
            <TopProducts products={products} />
            <Banner
                src={'https://shop-cdncname.huawei.com/mx/uomcdn/MXHW/pms/202112/gbom/6941487241521/800_800_2F8D021FFF9D33FABB20825C251F3D12mp.png'}
                title={'Matebook Pro'}
                description={'Find the best option for productivity or entertainment.'}
            />
            <Footer />
        </div>
    )
}
