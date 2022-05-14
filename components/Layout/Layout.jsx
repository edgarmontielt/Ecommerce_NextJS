import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { logIn, logOut, validate } from '../../features/auth'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function Layout({ children }) {
     const dispatch = useDispatch()
     const { loading, logged } = useSelector(state => state.auth)

     useEffect(() => {
          onAuthStateChanged(auth, (result) => {
               if (result) {
                    dispatch(validate({
                         email: result.email,
                         displayName: result.displayName
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
