import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImSpinner3 } from 'react-icons/im';
import { AiFillShopping } from 'react-icons/ai'
import Link from 'next/link'
import RowProduct from '../../components/cart/RowProduct';
import { recoverCart } from '../../features/cart';

export default function Cart() {
    const data = useSelector(state => state.cart)
    const { logged } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(recoverCart())
    }, [])

    return (
        <>
            {logged > 0 ? <>
                <div className=' flex gap-6 items-center md:ml-40 justify-center md:justify-start'>
                    <AiFillShopping className='w-10 h-10 mt-9' />
                    <h1 className=' font-medium text-4xl mt-10'>Shop Cart</h1>
                </div>
                <table className=' table-auto mx-auto w-[90%] mt-40'>
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
                        {!data.loading ?
                            data.items.map(item => <RowProduct item={item} />) :
                            <div className=' absolute top-1/2 left-1/2'>
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
                        <div className=' flex md:max-w-screen-xl mt-20 ml-auto mx-auto md:mr-[13rem] my-10'>
                            <button
                                className=' mx-auto md:mx-0 md:ml-auto bg-blue-600 p-[15px] hover:opacity-75 w-[90%] md:w-[30%] text-white font-semibold rounded'
                            >
                                Shop
                            </button>
                        </div>
                    </>
                }
            </> :
                <div className=' h-[80vh] flex flex-col justify-center items-center'>
                    <p className=' text-3xl mb-10'>Login, please!!</p>
                    <Link href={'/auth/login'}>Login</Link>
                </div>}
        </>
    )
}
