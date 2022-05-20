import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ImUser } from 'react-icons/im';
import { FiLogOut, FiMenu } from 'react-icons/fi'
import Route from './Route'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase'
import Menu from './Menu';
import Modal from './responsive/Modal';
import Item from './responsive/Item';

export default function Navbar() {
    const { logged, name } = useSelector(state => state.auth)
    const [openMenu, setOpenMenu] = useState(false)

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('id')
        setOpenMenu(false)
    }

    return (
        <nav className='px-4 md:px-14 flex py-7 md:grid md:grid-cols-3'>
            <h2 className=' font-semibold text-lg'><Link href={'/'}>Logo</Link></h2>
            <FiMenu className='absolute mt-0 top-8 right-8 md:-mt-96 active:opacity-80 w-6 h-6' onClick={() => { setOpenMenu(!openMenu) }} />
            <Modal openMenu={openMenu} logout={logout} logged={logged} setOpenMenu={setOpenMenu} />
            <Menu />
            <ul className={`-mt-96 md:mt-0 ml-auto md:static text-sm flex flex-col p-10 md:p-0 gap-2 items-center md:gap-8 md:flex-row md:items-center`}>
                <Item openMenu={openMenu}/>
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
        </nav>
    )
}
