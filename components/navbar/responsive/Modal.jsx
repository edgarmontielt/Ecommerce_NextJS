import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { ImUser } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import Route from '../Route';

export default function Modal({ logged, logout, openMenu, setOpenMenu }) {
    return (
        <div className=' md:absolute z-10 fixed right-0 top-0 w-full md:-mt-96'>
            <ul className={openMenu ? 'absolute flex flex-col gap-6 right-0 top-0 shadow-2xl md:-mt-96 bg-gray-100 h-screen w-1/2 pt-20 px-5' : '-mt-96 static'}>
                <li className='absolute right-3 top-5' onClick={() => { setOpenMenu(!openMenu) }}><IoMdClose className={!openMenu ? `invisible` : 'w-5 h-5'} /></li>
                {logged ?
                    <>
                        <li className=' flex gap-4 items-centeractive:underline'><ImUser className='mb-[2px] w-5 h-5' />Edgar</li>
                        <li className=' flex gap-4 items-center active:underline' onClick={logout}><FiLogOut className='w-5 h-5' />SignOut</li>
                    </> :
                    <>
                        <Route to={'/auth/signup'} title={'Sign Up'} />
                        <Route to={'/auth/login'} title={'Log In'} />
                    </>
                }
            </ul>
        </div>
    )
}