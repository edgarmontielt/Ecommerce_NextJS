import React from 'react'

export default function ButtonShop({ payment }) {
    return (
        <div className='flex gap-6'>
            <button
                className=' bg-blue-600 w-full py-3 rounded text-white text-xl font-medium hover:bg-blue-700'
                onClick={payment}
            >
                SHOP
            </button>
        </div>
    )
}
