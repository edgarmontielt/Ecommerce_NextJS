import React from 'react'
import Link from 'next/link'
import { AiFillShopping } from 'react-icons/ai'

export default function Cart() {
    return (
        <>
            <Link href={"/cart"}>
                <a><AiFillShopping className='mb-[2px] w-5 h-5' /></a>
            </Link>
            <p className=' absolute top-7 ml-3 bg-red-500 w-3 h-3 p-0 flex items-center justify-center text-white text-center rounded-full text-[8px]'>
                1
            </p>
        </>
    )
}
