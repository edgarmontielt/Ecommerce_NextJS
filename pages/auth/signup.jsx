import React, { useEffect, useState } from 'react'
import Button from '../../components/auth/Button'
import InputForm from '../../components/auth/InputForm'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../features/auth'
import { ImSpinner2 } from 'react-icons/im'
import { useRouter } from 'next/router';

export default function Signup() {

    const { loading, logged } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const [viewAlert, setViewAlert] = useState(false)

    const signup = (event) => {
        event.preventDefault()
        const {
            name: { value: displayName },
            email: { value: email },
            password: { value: password },
            profilePic: { value: photoURL },
        } = event.target

        if (email && password && password && displayName && photoURL) {
            dispatch(signUp({ displayName, photoURL, email, password }))
        } else {
            setViewAlert(true)
            setTimeout(() => {
                setViewAlert(false)
            }, 2000)
        }
    }

    useEffect(() => {
        if (logged) {
            router.replace('/')
        }
    })

    return (
        <div
            className='w-[90%] md:w-4/6 h-[600px] md:h-[550px] mx-auto mt-5 bg-slate-100 shadow-xl flex flex-wrap lg:flex-nowrap'
        >
            <section className=' w-[130%] background'></section>
            <form onSubmit={signup} className=' w-4/5 px-2 py-8 md:px-12 mx-auto'>
                {loading && <ImSpinner2 className=' animate-spin ml-auto w-5 h-5 m-3' />}
                <h1 className=' text-center text-2xl font-semibold mb-12'>Sign Up</h1>
                <InputForm
                    type={'text'}
                    name={'name'}
                    placeholder={'Name'}
                />
                <InputForm
                    type={'text'}
                    name={'profilePic'}
                    placeholder={'Profile Pic'}
                />
                <InputForm
                    type={'text'}
                    name={'email'}
                    placeholder={'Email'}
                />
                <InputForm
                    type={'password'}
                    name={'password'}
                    placeholder={'Password'}
                />
                {viewAlert
                    &&
                    <p
                        className=' text-center mt-4 text-red-400 text-sm px-2 font-medium'
                    >
                        Rellena todos los campos
                    </p>}
                <Button title={'REGISTER'} />
            </form>
        </div>
    )
}
