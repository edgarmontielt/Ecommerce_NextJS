import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillShopping, AiOutlineSearch } from 'react-icons/ai'
import Route from './Route'


export default function Navbar() {

  const { logged, name } = useSelector(state => state.auth)

  return (
    <nav className=' px-4 md:px-14 py-7 grid grid-cols-3'>
      <h2 className=' font-semibold text-lg'><Link href={'/'}>Logo</Link></h2>
      <ul className='text-sm flex mx-auto gap-8 items-center'>
        <Route to={'/'} title={'Home'} />
        <Route to={'/products'} title={'Products'} />
        <Route to={'/blog'} title={'Blog'} />
      </ul>
      {logged ?
        <ul className=' text-sm flex ml-auto gap-8 items-center'>
          <li>{name}</li>
        </ul>
        :
        <>
          <ul className=' text-sm flex ml-auto gap-8 items-center justify-center'>
            <li><AiOutlineSearch className='w-5 h-5' /></li>
            <li>
              <Link href={"/products/cart"}>
                <AiFillShopping className='mb-[2px] w-5 h-5' />
              </Link>
              <p className=' absolute top-5 ml-3 bg-red-500 w-4 p-0 text-white text-center rounded-full text-[10px]'>
                0
              </p>
            </li>
            {/* <Route to={'/auth/signup'} title={'Sign Up'}/> */}
            <Route to={'/auth/login'} title={'Log In'} />
          </ul>
        </>
      }
    </nav>
  )
}
