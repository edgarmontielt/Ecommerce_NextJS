import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { logOut, validate } from '../../features/auth'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function Layout({ children }) {
     const dispatch = useDispatch()

     useEffect(() => {
          onAuthStateChanged(auth, (result) => {
               if (result) {
                    dispatch(validate({
                         email: result.email,
                         displayName: result.displayName,
                         photoURL: result.photoURL,
                    }))
               } else {
                    dispatch(logOut())
               }
          })
     }, [])

     return (
          <>
               <Navbar />
               <main className=' mx-4 md:mx-14'>{children}</main>
          </>
     )
}
