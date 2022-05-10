import React from 'react'
import Button from '../../components/auth/Button'
import InputForm from '../../components/auth/InputForm'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/auth'
import { ImSpinner2 } from 'react-icons/im'

export default function signup() {

  const { loading } = useSelector(state => state.auth)

  return (
    <div className=' w-4/6 h-[500px] mx-auto mt-5 bg-slate-100 shadow-xl flex'>
      <section className=' w-[130%] background'></section>
      <form onSubmit={() => {}} className=' w-4/5 py-16 px-12'>
        {loading && <ImSpinner2 className=' animate-spin ml-auto w-5 h-5 m-3' />}
        <h1 className=' text-center text-2xl font-semibold mb-12'>Sign Up</h1>
        <InputForm
          type={'text'}
          name={'name'}
          placeholder={'Name'}
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
        <Button title={'REGISTER'} />
      </form>
    </div>
  )
}
