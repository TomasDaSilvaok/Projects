import React, { ReactNode } from 'react'

type Props = {
    children: string |JSX.Element | JSX.Element[]
}

const Button = ({children} : Props) => {
  return (
    <button className='bg-red-500 rounded-md border-none text-white p-2'>{children}</button>
  )
}

export default Button