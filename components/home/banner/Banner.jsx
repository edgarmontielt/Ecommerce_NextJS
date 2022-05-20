import React from 'react'
import Data from './Data'
import Img from './Img'

export default function Banner({ src, title, description }) {
    return (
        <section className=" bg-[black] h-[550px] md:h-[700px] text-white w-full md:py-0 my-10 flex flex-wrap">
            <Data title={title} description={description} />
            <Img src={src} />
        </section>
    )
}
