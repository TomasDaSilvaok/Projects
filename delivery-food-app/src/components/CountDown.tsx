"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endDate = new Date("2023, 08, 25")

const CountDown = () => {
  return (
    <Countdown className='text-5xl text-yellow-200 w-full md:w-[40vw] font-bold' date={endDate}/>
  )
}

export default CountDown