'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from './Button'

const slides = [
    { id: 1, title: "Fresco & crujiente siempre", url: '/slide1.png' },
    { id: 2, title: "Entrega a domicilio donde estés", url: '/slide2.png' },
    { id: 3, title: "La mejor pizza para compartir en familia", url: '/slide3.jpg' }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
            <div className='flex-1 p-4 flex flex-col justify-center gap-8 font-bold items-center text-red-500 bg-fuchsia-50'>
                <h1 className='text-4xl text-center uppercase md:text-5xl lg-text-6xl'>{slides[currentSlide].title}</h1>
                <Button>Ordenar ahora</Button>
            </div>
            <div className='w-full relative flex-1'>
                <Image src={slides[currentSlide].url} fill alt='slide1' className='object-cover' />
            </div>
        </div>
    )
}

export default Slider