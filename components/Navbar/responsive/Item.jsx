import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Cart from '../Cart';

export default function Item({ openMenu }) {
    return (
        <>
            <li className={`absolute top-8 right-32 md:static ${openMenu ? 'invisible' : 'visible'}`} >
                <AiOutlineSearch className='w-6 h-6' />
            </li>
            <li className={`absolute top-8 right-20 md:static ${openMenu ? 'invisible' : 'visible'}`}>
                <Cart />
            </li>
        </>
    )
}

{/* <AiOutlineSearch className='w-6 h-6' /> */ }