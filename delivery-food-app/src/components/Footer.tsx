import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link className='uppercase text-xl font-bold' href='/'>italia 90</Link>
      <p className='uppercase'>&#169; all rights reserved.</p>
    </div>
  )
}

export default Footer