import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
         <h2>Home</h2>
         <ul>
              <Link href={"/products"}><li>Products</li></Link>
         </ul>
    </nav>
  )
}
