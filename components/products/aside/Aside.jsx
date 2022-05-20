import React from 'react'
import { IoMdClose } from 'react-icons/io';

export default function Aside({ asideOpen ,onClick }) {
  return (
    <aside className={`fixed shadow-2xl bg-white left-0 top-0 h-screen w-3/4 md:w-1/4 px-5 py-10 ${asideOpen ?
        'open' :
        'close -translate-x-[100%]'
        }`
    }>
        <span onClick={() => onClick(false)} className=' absolute right-5 top-10 cursor-pointer'>
            <IoMdClose className=' w-8 h-8  hover:animate-spin' />
        </span>
        <h1 className=' text-3xl'>Categories</h1>
    </aside>
  )
}
