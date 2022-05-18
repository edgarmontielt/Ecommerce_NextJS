import React from 'react'

export default function Button({ title }) {
    return (
        <button
            className='bg-blue-600 p-[10px] mt-10 hover:opacity-75 w-[100%] text-white text-sm font-semibold rounded-full'>
            {title}
        </button>
    )
}
