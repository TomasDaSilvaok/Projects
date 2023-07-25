import Image from 'next/image'
import React from 'react'
import Button from './Button'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <section className='flex flex-col items-center p-4 justify-around bg-[url("/offerBg.png")] bg-cover text-white w-screen h-screen md:flex-row md:h-[80vh]'>
        {/* TEXT CONTAINER */}
        <div className='flex flex-1 flex-col justify-center items-center text-center p-4 md:w-[50vw] md:h-full md:text-left'>
            <h1 className='text-4xl font-bold md:w-[40vw] lg:text-5xl'>Deliciosa hamburguesa con papas fritas</h1>
            <p className='text-md py-8 md:w-[40vw] lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem nihil corporis incidunt aliquam quae rerum, laboriosam corrupti mollitia ad.</p>
            <CountDown />
            <div className='w-full md:w-[40vw] py-4 font-bold'>
              <Button>Ordenar ahora</Button>
            </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='flex flex-1 relative w-full md:w-[50vw] md:h-full'>
            <Image src='/offerProduct.png' alt='offer-product' fill className='object-contain'/>
        </div>
    </section>
  )
}

export default Offer