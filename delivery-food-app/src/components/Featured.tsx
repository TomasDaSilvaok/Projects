import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <section className='w-screen overflow-x-scroll text-red-500'>
            <div className='w-max flex'>
                {featuredProducts.map(item => (
                    <div key={item.id} className='w-screen h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex flex-col items-center justify-between p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw]'>
                        {item.img &&
                            <div className='relative flex-1 w-full'>
                                <Image src={item.img} alt='' fill className='object-contain hover:rotate-[60deg] transition-all duration-300' />
                            </div>
                        }
                        <div className='flex-1 flex p-2 flex-col items-center justify-center text-center gap-2'>
                            <h2 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h2>
                            <p className='p-4'>{item.desc}</p>
                            <span className='text-xl font-bold'>${item.price}</span>
                            <button className='bg-red-500 rounded-md border-none text-white p-2'>Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Featured