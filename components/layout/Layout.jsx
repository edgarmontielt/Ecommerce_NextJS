import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { logOut, validate } from '../../features/auth'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import Aside from '../aside/Aside'
import Chevron from '../aside/Chevron'

export default function Layout({ children }) {
     const dispatch = useDispatch()

     const [asideOpen, setAsideOpen] = useState(false)

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
               <main>{children}</main>
               <Chevron onClick={setAsideOpen} />
               <Aside asideOpen={asideOpen} onClick={setAsideOpen} />
          </>
     )
}