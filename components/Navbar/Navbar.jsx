import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'
import { ImUser } from 'react-icons/im';
import Route from './Route'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase'
import Menu from './Menu';
import Cart from './Cart';

export default function Navbar() {
    const { logged, name } = useSelector(state => state.auth)

    const logout = () => {
        signOut(auth)
    }

    return (
        <nav className=' px-4 md:px-14 py-7 grid grid-cols-3'>
            <h2 className=' font-semibold text-lg'><Link href={'/'}>Logo</Link></h2>
            <Menu />
            <ul className=' text-sm flex ml-auto gap-8 items-center'>
                <li><AiOutlineSearch className='w-5 h-5' /></li>
                <Cart />
                {logged ?
                    <>
                        <li><ImUser className='mb-[2px] w-5 h-5' /></li>
                        <li className=' cursor-pointer' onClick={logout}>Logout</li>
                    </> :
                    <>
                        <Route to={'/auth/signup'} title={'Sign Up'} />
                        <Route to={'/auth/login'} title={'Log In'} />
                    </>
                }
            </ul>
        </nav>
    )
}
