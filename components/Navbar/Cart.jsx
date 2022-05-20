import React from 'react'
import Link from 'next/link'
import { AiFillShopping } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Cart() {
    const { items } = useSelector(state => state.cart)
    return (
        <>
            <Link href={"/cart"}>
                <a><AiFillShopping className='mb-[3px] w-6 h-6' /></a>
            </Link>
            <p className=' absolute top-0 md:top-7 ml-3 bg-red-500 w-3 h-3 p-0 flex items-center justify-center text-white text-center rounded-full text-[8px]'>
                {items.length}
            </p>
        </>
    )
}
