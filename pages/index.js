import React from "react"

export default function Home() {
    return (
        <div className=' h-screen flex flex-wrap items-center'>
            <img src='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_960_720.png' className=' z-10 absolute top-[25%] left-[32rem] w-7/12' />
            <div className=" mb-[14rem] ml-9 w-[30%]">
                <h1 className=' text-4xl mb-10 font-semibold'>Camaro</h1>
                <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda en demostraciones de lujos y dioses  </p>
                <button
                    className='mt-10 bg-blue-600 p-[10px] hover:opacity-75 w-[100%] text-white text-sm font-semibold rounded-full'>   
                    Buy
                </button>
            </div>
        </div>
    )
}
