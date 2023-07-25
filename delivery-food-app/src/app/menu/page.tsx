import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] items-center p-4 lg:px-20 xl:px-40'>
      {menu.map(category => (
        <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage: `url(${category.img})`}} className='w-full bg-cover h-1/3 md:h-2/3 p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
          <div className={`flex flex-col h-full justify-center text-${category.color} w-1/2`}>
            <h1 className='text-2xl md:text-3xl font-bold uppercase'>{category.title}</h1>
            <p className='text-xs my-4 md:my-8 md:text-sm'>{category.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage