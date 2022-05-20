import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ImUser } from 'react-icons/im';
import { FiLogOut, FiMenu } from 'react-icons/fi'
import Route from './Route'
import { signOut } from 'firebase/auth';
import { auth, database } from '../../config/firebase'
import Menu from './Menu';
import Modal from './responsive/Modal';
import Item from './responsive/Item';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const { logged, name } = useSelector(state => state.auth)
    const [openMenu, setOpenMenu] = useState(false)
    const [products, setProducts] = useState([])
    const [openSearch, setOpenSearch] = useState(false)
    const [results, setResults] = useState([])

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('id')
        setOpenMenu(false)
    }


    const getProducts = () => {
        axios.get('/api/products')
            .then(data => setProducts(data.data))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const search = useRef()

    const searchProducts = () => {
        const name = search.current.value
        const prod = products.filter((item) => item.name.split(' ')[0].toUpperCase() == name.toUpperCase())
        setResults(prod)
    }

    const closeSearch = () => {
        setOpenSearch(false)
        setResults([])
    }

    return (
        <nav className='px-4 md:px-14 flex py-7 md:grid md:grid-cols-3'>
            <h2 className=' font-semibold text-lg'><Link href={'/'}>Logo</Link></h2>
            <FiMenu className='absolute mt-0 top-8 right-8 md:-mt-96 active:opacity-80 w-6 h-6' onClick={() => { setOpenMenu(!openMenu) }} />
            <Modal openMenu={openMenu} logout={logout} logged={logged} setOpenMenu={setOpenMenu} />
            <Menu />
            <ul className={`-mt-96 md:mt-0 ml-auto md:static text-sm flex flex-col p-10 md:p-0 gap-2 items-center md:gap-8 md:flex-row md:items-center`}>
                <Item openMenu={openMenu} openSearch={openSearch} setOpenSearch={setOpenSearch} searchProducts={searchProducts} />
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

            <div className={` absolute left-[70%] top-7 flex items-center ${openSearch ? 'block' : 'hidden'}`}>
                <input
                    ref={search}
                    placeholder='Search'
                    className={` text-sm border-[1px] px-2 py-[3px] mt-[1px] rounded-full outline-blue-500`}
                />
                <IoMdClose
                    className='w-6 h-6 cursor-pointer'
                    onClick={closeSearch}
                />
            </div>

            <div className=' flex flex-col absolute right-64 top-20 gap-6 bg-white py-5'>
                {results.map(item => {
                    console.log(item);
                    return (
                        <Link href={'/products/' + item.id}>
                            <div className=' flex items-center cursor-pointer hover:bg-gray-400'>
                                <img src={item.images} className=' w-10' alt="" />
                                <p key={item.length}>{item.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
