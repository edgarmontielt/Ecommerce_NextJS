import React from 'react'

export default function Banner() {
    return (
        <section className=" bg-[black] h-[400px] md:h-[700px] text-white w-full md:py-0 my-10 flex flex-wrap">
            <div className="md:w-1/2 md:pl-14 text-2xl md:mt-32 mt-10 text-center md:text-left">
                Find the best option for productivity or entertainment.
            </div>
            <img 
                src="https://shop-cdncname.huawei.com/mx/uomcdn/MXHW/pms/202112/gbom/6941487241521/800_800_2F8D021FFF9D33FABB20825C251F3D12mp.png" 
                className='mt-20 md:mt-0 absolute md:right-10' 
            />
        </section>
    )
}
