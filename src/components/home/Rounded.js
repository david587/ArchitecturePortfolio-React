//style
import "./Rounded.css"
import React from 'react'
// import { useRef } from "react"

import { useTheme } from "../../hooks/useTheme"
import { useState } from "react"

export default function () {
  const { mode } = useTheme()
  

  
  return (
    <>
    <div className={`spacer layer ${mode} mt-8`}>
    <div className='flex justify-center items-center mx-2 md:pl-20 pt-16'>
      <div className='flex-1'>
        <p className='md:text-5xl text-2xl font-semibold text-center'>100+</p>
        <p className='mt-2 text-center md:text-xl'>Projects <span className="hidden md:inline-block">well</span>  done</p>
      </div>
      <div className='flex-1'>
        <p className='md:text-5xl text-2xl font-semibold text-center'>1000+</p>
        <p className='mt-2 md:text-xl text-center'>Happy Client</p>
      </div>
      <div className='flex-1'>
        <p className='md:text-5xl text-2xl font-semibold text-center'>10 Years</p>
        <p className='mt-2 text-center md:text-xl'>Experience <span className="hidden md:inline-block">works</span></p>
      </div>
    </div>
    </div>
    {/* yellow line info */}
    </>
  )
}
