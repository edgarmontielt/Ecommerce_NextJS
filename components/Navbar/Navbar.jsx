import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=' px-14 py-7 flex'>
         <h2><Link href={'/'}>Home</Link></h2>
         <ul className=' text-sm flex ml-auto gap-8'>
              <li className='hover:underline'><Link href={"/auth/signup"}>Sign Up</Link></li>
              <li className='hover:underline'><Link href={"/auth/login"}>Log In</Link></li>
         </ul>
    </nav>
  )
}
