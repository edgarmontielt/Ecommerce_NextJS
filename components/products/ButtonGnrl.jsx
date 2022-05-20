import React from 'react'

export default function ButtonGnrl({ title, icon }) {
    return (
        <button
            className='flex justify-center items-center gap-4 border-[1px] border-blue-600 text-blue-900 w-1/2 py-2 rounded-full font-medium hover:bg-blue-700 hover:text-white'
        >
            {icon}{title}
        </button>
    )
}
