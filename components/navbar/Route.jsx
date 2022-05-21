import React from 'react'
import Link from 'next/link'

export default function Route({ to, title }) {
    return (
        <li className='hover:underline'><Link href={to}>{title}</Link></li>
    )
}
