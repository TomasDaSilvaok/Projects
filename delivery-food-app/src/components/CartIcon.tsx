import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src='/cart.png' alt='cart-image' fill />
            </div>
            <span>Carrito (3)</span>
        </div>
    )
}

export default CartIcon