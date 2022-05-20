import React, { useEffect, useState } from 'react'
import Button from '../../components/auth/Button'
import InputForm from '../../components/auth/InputForm'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/auth'
import { ImSpinner2 } from 'react-icons/im'
import { useRouter } from 'next/router';

export default function Login() {

    const { loading, logged } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const [viewAlert, setViewAlert] = useState(false)

    const login = async (event) => {
        event.preventDefault()
        const { email: { value: email }, password: { value: password } } = event.target

        if (email && password) {
            dispatch(logIn({ email, password }))
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
    }, [logged])

    return (
        <div className=' w-[90%] md:w-4/6 h-[500px] mx-auto mt-16 bg-slate-100 shadow-xl flex flex-wrap lg:flex-nowrap'>
            <section className=' w-[130%] background'></section>
            <form onSubmit={login} className='w-4/5 px-2 py-20 md:px-12 mx-auto'>
                {loading && <ImSpinner2 className=' animate-spin ml-auto w-5 h-5 m-3' />}
                <h1 className=' text-center text-2xl font-semibold mb-12'>Login</h1>
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
                {viewAlert && <p className=' text-center mt-4 text-red-400 text-sm px-2 font-medium'>Escribe tus credenciales</p>}
                <Button title={'SIGN IN'} />
            </form>
        </div>
    )
}
