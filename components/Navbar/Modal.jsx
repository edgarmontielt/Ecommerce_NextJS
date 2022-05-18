import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { ImUser } from 'react-icons/im';
import Cart from './Cart';
import Route from './Route';

export default function Modal({ logged, logout, openMenu }) {
    return (
        <div className=' md:absolute md:-mt-96'>
            <ul className={openMenu ? 'absolute right-0 top-16 mt-0 md:-mt-96 bg-white shadow-lg px-10 py-5' : '-mt-96 static'}>
                <li className='absolute invisible top-8' ><AiOutlineSearch className='w-5 h-5' /></li>
                <li className=' absolute invisible top-8 '> <Cart /></li>
                {logged ?
                    <>
                        <li><ImUser className='mb-[2px] w-5 h-5' /></li>
                        <li className=' cursor-pointer' onClick={logout}><FiLogOut className='w-4 h-4' /></li>
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
