import React from 'react'

export default function TopProducts({ products }) {
    return (
        <section className='my-10 mx-14'>
            <h1 className='text-center text-2xl mb-16'>Top products</h1>

            <div className=' flex flex-wrap '>
                {products.map(product => {
                    return <article key={product.id} className='w-1/5 flex flex-col items-center'>
                        <h1 className='text-center'>{product.name}</h1>
                        <img src={product.imgURL} className=' w-[200px]' />
                    </article>
                })}
            </div>
        </section>
    )
}
