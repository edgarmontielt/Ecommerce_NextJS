import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import { Head } from 'next/head'

export default function Layout({ children }) {
     return (
          <>   
               <Navbar />
               <main>{children}</main>
          </>
     )
}
