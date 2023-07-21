'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
  { id: 1, title: "homepage", url: '/' },
  { id: 2, title: "menu", url: '/menu' },
  { id: 3, title: "working hours", url: '/orders' },
  { id: 4, title: "contact", url: '/login' }
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  const user = false

  function handleOpen() {
    setOpen(!open)
  }
  return (
    <div onClick={handleOpen}>
      {open ?
        <>
          <Image src='/close.png' width={20} height={20} alt='toggle-menu' />
          <div className='absolute left-0 w-full top-24 text-white bg-red-500 flex flex-col h-[calc(100vh-6rem)] items-center justify-center text-3xl gap-8 z-10'>
            {links.map(item => {
              return (
                <Link key={item.id} href={item.url} className='hover:underline'>{item.title}</Link>
              )
            })}
            {user ? <Link href='/orders' className='hover:underline'>Orders</Link> : <Link href='/login' className='hover:underline'>Login</Link>}
            <Link href='/cart' className='hover:underline'>
              <CartIcon />
            </Link>
          </div>
        </>
        :
        <Image src='/open.png' width={20} height={20} alt='toggle-menu' />
      }
    </div>
  )
}

export default Menu