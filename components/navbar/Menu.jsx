import React from 'react'
import Route from './Route'

export default function Menu() {
    return (
        <ul className='text-sm -mt-96 md:mt-0 absolute md:static flex ml-auto gap-2 items-end flex-col mx-auto md:flex-row md:gap-8 md:items-center'>
            <Route to={'/'} title={'Home'} />
            <Route to={'/products'} title={'Products'} />
            <Route to={'/blog'} title={'Blog'} />
            <Route to={'/products/create'} title={'Create'} />
        </ul>
    )
}