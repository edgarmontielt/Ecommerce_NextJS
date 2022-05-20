import React from 'react'
import { BsChevronRight } from 'react-icons/bs';

export default function Chevron({ onClick }) {
    return (
        <div
            className={` fixed left-0 top-1/2 py-4 pr-3 bg-gray-800 rounded-r-full hover:bg-gray-600 cursor-pointer`}
            onClick={() => onClick(true)}
        >
            <BsChevronRight className='text-white ' />
        </div>
    )
}
