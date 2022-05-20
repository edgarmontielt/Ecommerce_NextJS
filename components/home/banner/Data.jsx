import React from 'react'

export default function Data({ title, description }) {
    return (
        <div className="md:w-1/2 md:pl-14 text-2xl md:mt-40 mt-10 text-center md:text-left mx-14">
            <h1 className=' text-4xl font-medium mb-10'>{title}</h1>
            <p className=' text-sm md:text-xl text-center'>{description}</p>
            <button
                className='md:mt-32 my-4 bg-blue-600 p-[10px] hover:opacity-75 w-[40%] text-white text-sm font-semibold rounded-full'>
                Buy
            </button>
        </div>
    )
}