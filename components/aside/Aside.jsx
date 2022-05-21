import React from 'react'
import { IoMdClose } from 'react-icons/io';

export default function Aside({ asideOpen, onClick }) {
    return (
        <aside className={`fixed shadow-2xl bg-white left-0 top-0 h-screen w-3/4 md:w-1/4 px-5 py-10 ${asideOpen ?
            'open' :
            'close -translate-x-[100%]'
            }`
        }>
            <span onClick={() => onClick(false)} className=' absolute right-5 top-10 cursor-pointer'>
                <IoMdClose className=' w-8 h-8  hover:animate-spin hover:opacity-60' />
            </span>
            <h1 className=' text-3xl'>Categories</h1>

            <section className=' mt-20 mx-10'>
                <ul className=' flex flex-col gap-4'>
                    <li> 
                        <p className=' font-medium mb-2'>Energy</p>
                        <ul className=' ml-6 flex flex-col gap-2'>
                            <li>Cables</li>
                            <li>Cables</li>
                            <li>Cables</li>
                        </ul>
                    </li>
                    <li className=' font-medium'>Computers</li>
                    <li className=' font-medium'>Computers</li>
                    <li className=' font-medium'>Computers</li>
                </ul>
            </section>
        </aside>
    )
}
