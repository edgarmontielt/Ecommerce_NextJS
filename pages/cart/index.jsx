import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recoverCart, removeToCart } from '../../features/cart/index'
import { ImSpinner3 } from 'react-icons/im';
import { AiFillShopping } from 'react-icons/ai'

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
            <div className=' flex gap-6 items-center md:ml-40'>
                <AiFillShopping className='w-10 h-10 mt-9' />
                <h1 className=' font-medium text-4xl mt-10'>Shop Cart</h1>
            </div>
            <table className=' table-auto w-[90%] mt-40'>
                <thead className=' pb-10'>
                    <tr>
                        <th className=' font-medium text-lg'>Name</th>
                        <th className=' font-medium text-lg'>Image</th>
                        <th className=' font-medium text-lg'>Amount</th>
                        <th className=' font-medium text-lg'>Actions</th>
                        <th className=' font-medium text-lg'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {!data.loading ? data.items.map(item => {
                        return (
                            <tr key={item.product.id}>
                                <td className=' text-lg text-center'>{item.product.name}</td>
                                <td className=' flex justify-center'><img src={item.product.images} className=' w-16' /></td>
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
                                <td className=' text-center'>${item.product.default_price_data.unit_amount}</td>
                            </tr>
                        )
                    }) : <div className=' absolute top-1/2 left-1/2'>
                        <ImSpinner3 className=' w-16 h-16 animate-spin' />
                    </div>}
                </tbody>
            </table>

            {!data.loading &&
                <>
                    <div className=' flex mx-14 md:max-w-screen-xl mt-40 ml-auto md:mr-[14rem]'>
                        <h1 className=' ml-auto text-3xl font-medium '> Price Total</h1>
                        <p className=' ml-auto text-2xl '>$4000</p>
                    </div>
                    <div className=' flex md:max-w-screen-xl mt-20 ml-auto mr-10 md:mr-[13rem]'>
                        <button 
                            className='mx-auto md:ml-auto bg-blue-600 p-[15px] hover:opacity-75 w-full md:w-[30%] text-white font-semibold rounded'
                            >
                                Shop
                        </button>
                    </div>
                </>
            }

        </>
    )
}
