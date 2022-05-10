import React from 'react'
import Button from '../../components/auth/Button'
import InputForm from '../../components/auth/InputForm'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/auth'
import { ImSpinner2 } from 'react-icons/im'

export default function login() {

    const { loading } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const login = async (event) => {
        event.preventDefault()
        const { email: { value: email }, password: { value: password } } = event.target

        if (email || password) {
            dispatch(logIn({ email, password }))
        } else {
            console.log('Rellena los campos');
        }
    }
    return (
        <div className=' w-4/6 h-[500px] mx-auto mt-5 bg-slate-100 shadow-xl flex'>
            <section className=' w-[130%] background'></section>
            <form onSubmit={login} className=' w-4/5 py-20 px-12'>
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
                <Button title={'SIGN IN'} />
            </form>
        </div>
    )
}
