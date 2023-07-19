import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-12 flex items-center justify-between px-4 border-b border-b-red-500'>
      {/* LOGO */}
      <div>
        <Link className='font-semibold' href='/'>Tomichy</Link>
      </div>
      {/* MENU */}
      <div className='sm:hidden'>
        <Menu />
      </div>
      {/* MOBILE MENU */}
    </nav>
  )
}

export default Navbar