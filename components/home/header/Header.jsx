import React from 'react'

export default function Header() {
    return (
        <section className=' mb-10 flex'>
            <img 
                src='https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/2005651474581_6.jpg' 
                className=' w-1/2' 
                />
            <div className='mb-[14rem] ml-9 w-[30%] mt-20 flex justify-center flex-col'>
                <h1 className=' text-4xl mb-10 font-semibold'>Huawei P50 Pro</h1>
                <p className=' text-sm'>
                Huawei P50 Pro va bien contigo y soporta tu ritmo.A la vista se distingue por su diseño elegante y liviano por el tamaño y color de su pantalla True-Chroma de 6.6 pulgadas de 120 Hz
                </p>
                <button
                    className='mt-10 bg-blue-600 p-[10px] hover:opacity-75 w-[100%] text-white text-sm font-semibold rounded-full'>
                    Buy
                </button>
            </div>
        </section>
    )
}
