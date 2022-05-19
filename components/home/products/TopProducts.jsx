import React from 'react'
import Link from 'next/link'

export default function TopProducts({ products }) {
    return (
        <section className='md:my-10 md:mx-14'>
            <h1 className='text-center text-2xl mb-16'>Top products</h1>

            <div className=' flex flex-wrap gap-10 md:gap-8 '>
                {products.map(product => {
                    return <article key={product.id} className='md:w-1/5 w-[80%] mx-auto md:mx-0 flex flex-col items-center'>
                        <h1 className='text-center hover:underline'><Link href={'/products/' + product.id}>{product.name}</Link></h1>
                        <img src={product.images} className=' w-[200px]' />
                    </article>
                })}
            </div>
        </section>
    )
}
