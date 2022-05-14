import React from 'react'
import Route from './Route'

export default function Menu() {
    return (
        <ul className='text-sm flex mx-auto gap-8 items-center'>
            <Route to={'/'} title={'Home'} />
            <Route to={'/products'} title={'Products'} />
            <Route to={'/blog'} title={'Blog'} />
        </ul>
    )
}
