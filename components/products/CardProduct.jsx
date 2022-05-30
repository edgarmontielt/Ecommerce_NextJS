import React from 'react'
import Link from 'next/link'

export default function CardProduct({ product }) {
    return (
        <article
            className=' hover:scale-105 hover:transition-transform duration-800 md:w-96 lg:w-[19rem] w-72 hover:border-blue-300 mx-auto md:mx-1 cursor-pointer border-[1px] px-6 pt-10 md:pt-10 flex flex-col flex-wrap items-center shadow-md'>
            <h1 className='text-center hover:underline md:mb-10 md:text-xl font-medium'>
                <Link href={'/products/' + product.id}>{product.name}</Link>
            </h1>
            <img src={product.images} className=' w-[200px]' />
        </article>
    )
}
