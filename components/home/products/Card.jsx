import React from 'react'
import Link from 'next/link'

export default function Card({ product }) {
    return (
        <article className='md:w-1/4 mx-auto md:mx-0 flex mb-8 flex-col items-center hover:opacity-75 cursor-pointer'>
            <img src={product.images} className=' w-[200px]' />
            <h1 className='text-center hover:underline'>
                <Link href={'/products/' + product.id}>{product.name}</Link>
            </h1>
        </article>
    )
}
