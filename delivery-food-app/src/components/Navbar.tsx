import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='h-12 flex items-center text-red-500 uppercase justify-between px-4 border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex items-center gap-4 flex-1'>
        <Link className='hover:underline hover:text-red-400 transition-all' href='/'>Inicio</Link>
        <Link className='hover:underline hover:text-red-400 transition-all' href='/menu'>Menu</Link>
        <Link className='hover:underline hover:text-red-400 transition-all' href='/contact'>Contacto</Link>
      </div>
      {/* LOGO */}
      <div className='hover:scale-105 transition-transform'>
        <Link className='font-semibold text-xl flex-1 md:font-bold md:text-2xl md:text-center' href='/'>italia 90</Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex md:justify-end items-center gap-2 flex-1'>
        <div className='flex bg-orange-300 items-center p-1 rounded-lg gap-2 cursor-pointer hover:bg-orange-400 hover:text-white transition-colors md:absolute md:top-2 md:right-1 lg:static'>
          <Image src='/phone.png' width={20} height={20} alt='phone-img'/>
          <span>02320-1239</span>
        </div>
        <Link className='hover:underline hover:text-red-400 transition-all' href='/orders'>Órdenes</Link>
        <Link className='hover:underline hover:text-red-400 transition-all' href='/cart'>
          <CartIcon />
        </Link>
      </div>
      {/* MENU */}
    </nav>
  )
}

export default Navbar