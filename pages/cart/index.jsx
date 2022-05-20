import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recoverCart, removeToCart } from '../../features/cart/index'
import { ImSpinner3 } from 'react-icons/im';

export default function Cart() {
    const data = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(recoverCart())
    }, [])

    const removeProduct = (id) => {
        dispatch(removeToCart(id))
    }
    return (
        <>
            <h1 className=' font-medium text-2xl mt-10 ml-10'>Shop Cart</h1>
            <table className='table-auto w-screen mt-20'>
                <thead>
                    <tr>
                        <th className=' font-medium text-xl'>Name</th>
                        <th className=' font-medium text-xl'>Description</th>
                        <th className=' font-medium text-xl'>Price</th>
                        <th className=' font-medium text-xl'>Amount</th>
                        <th className=' font-medium text-xl'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!data.loading ? data.items.map(item => {
                        return (
                            <tr key={item.product.id}>
                                <td className=' font-normal text-lg text-center'>{item.product.name}</td>
                                <td className=' text-center'>{item.product.description}</td>
                                <td className=' text-center'>${item.product.price}</td>
                                <td className=' text-center'>
                                    <span
                                        className=' text-xl font-bold cursor-pointer'
                                        onClick={() => removeItemToCart(item)}
                                    > -
                                    </span >
                                    {item.amount}
                                    <span
                                        className=' text-xl font-bold cursor-pointer'
                                        onClick={() => addAmountProduct(item)}
                                    > +
                                    </span>
                                </td>
                                <td className=' text-center'>
                                    <button
                                        onClick={() => removeProduct(item.product.id)}
                                        className=' bg-black text-white p-2 rounded-lg'>
                                        Remove All Products
                                    </button>
                                </td>
                            </tr>
                        )
                    }) : <div className=' absolute top-1/2 left-1/2'>
                        <ImSpinner3 className=' w-16 h-16 animate-spin' />
                    </div>}
                </tbody>
            </table>
        </>
    )
}
