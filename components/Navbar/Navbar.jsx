import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {

  const { logged, name } = useSelector(state => state.auth)

  console.log(name);

  return (
    <nav className=' px-14 py-7 flex'>
      <h2><Link href={'/'}>Home</Link></h2>
      {logged ?
        <ul className=' text-sm flex ml-auto gap-8'>
          <li>{name}</li>
        </ul>
        :
        <ul className=' text-sm flex ml-auto gap-8'>
          <li className='hover:underline'><Link href={"/auth/signup"}>Sign Up</Link></li>
          <li className='hover:underline'><Link href={"/auth/login"}>Log In</Link></li>
        </ul>
      }
    </nav>
  )
}
