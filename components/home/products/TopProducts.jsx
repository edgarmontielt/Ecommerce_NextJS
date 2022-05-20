import React from 'react'
import Card from './Card'

export default function TopProducts({ products }) {
    return (
        <section className='md:my-20 md:mx-14'>

            <h1 className='text-center text-2xl mb-16'>Top products</h1>
            <div className=' flex flex-wrap gap-10 md:gap-0 '>
                {products.map(product => {
                    return <Card key={product.id} product={product}/>
                })}
            </div>
        </section>
    )
}
