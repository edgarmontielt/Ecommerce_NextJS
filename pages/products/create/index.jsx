import React from 'react'
import axios from 'axios'
import InputForm from '../../../components/auth/InputForm'
import Button from '../../../components/auth/Button'
import { useRouter } from 'next/router';

export default function Create() {
    const router = useRouter()

    const saveProduct = (event) => {
        event.preventDefault()
        const {
            name: { value: name },
            description: { value: description },
            price: { value: price },
            img: { value: img }
        } = event.target

        axios.post('/api/products/new-product', {
            name,
            description,
            default_price_data: {
                unit_amount: Number.parseInt(price),
                currency: 'USD'
            },
            images: [img]
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error))

            router.replace('/products')
    }

    return (
        <div className=' w-[90%] md:w-4/6 h-[600px] mx-auto mt-5 bg-slate-100 shadow-xl flex flex-wrap lg:flex-nowrap'>
            <form onSubmit={saveProduct} className='w-4/5 px-2 py-20 md:px-12 mx-auto'>
                <h1 className=' text-center text-2xl font-semibold mb-12'>New Product</h1>
                <InputForm
                    type={'text'}
                    name={'name'}
                    placeholder={'Name'}
                />
                <InputForm
                    type={'text'}
                    name={'description'}
                    placeholder={'Description'}
                />
                <InputForm
                    type={'text'}
                    name={'price'}
                    placeholder={'Price'}
                />
                <InputForm
                    type={'text'}
                    name={'img'}
                    placeholder={'Image'}
                />
                <Button title={'SAVE PRODUCT'} />
            </form>
            <section className=' w-[80%] background'></section>
        </div>
    )
}
