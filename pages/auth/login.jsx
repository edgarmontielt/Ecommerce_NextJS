import React from 'react'
import Button from '../../components/auth/Button'
import InputForm from '../../components/auth/InputForm'

export default function login() {
    return (
        <div className=' w-4/6 h-[500px] mx-auto mt-12 bg-slate-100 shadow-xl flex'>
            <section className=' w-[130%] background'></section>
            <form onSubmit={() => { }} className=' w-4/5 py-20 px-12'>
                <h1 className=' text-center text-2xl font-semibold mb-14'>Login</h1>
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
                <Button title={'SIGN IN'}/>
            </form>
        </div>
    )
}
