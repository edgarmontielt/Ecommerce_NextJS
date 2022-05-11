import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { logIn } from '../../features/auth'
import { useDispatch } from 'react-redux'

export default function Layout({ children }) {
     const dispatch = useDispatch()

     useEffect(() => {
          onAuthStateChanged(auth, (result) => {
               console.log(result)
          })
     }, [])

     return (
          <>
               <Navbar />
               <main className=' mx-4 md:mx-14'>{children}</main>
          </>
     )
}
