import React from 'react'

//ASSETS
// import phone from "../../assets/Phone.gif";
// import location from "../../assets/Area.gif";

//icon pack
import { Icon } from '@iconify/react';

//css
import "./Contact.css"

//hook
import { useTheme } from "../../hooks/useTheme"

export default function Touch() {
  const { mode } = useTheme()
  return (
    <>
    <div className={`flex justify-center items-center my-[50px]`}>
    <h2 className={`text-[35px] text-center font-normal text-black border-2 border-black inline-block p-3 mx-auto text ${mode}`}>Contact Me</h2> 
    </div>
    <div className={`bg-stone-200 py-[50px] touch ${mode}`}>
    <h1 className='text-4xl text-center font-normal font-serif text-beige'>Get in touch with me!</h1>
    
    <div className='grid grid-cols-1 md:grid-cols-3 mt-[50px] md:mx-20 lg:mx-30'>
        <div className='leading-8 md:border-r-beige md:border-r-[3px] py-[20px] '>
        <Icon icon="material-symbols:phone-iphone" color="#cfb194" className='text-[35px] mx-auto block' />
            <p className='text-center font-serif text-beige'>PHONE</p>
            <p className='text-center'>(06)307329284</p>
        </div>
        <div className='leading-8 md:border-r-beige md:border-r-[3px] border-y-beige border-y-[2px] md:border-y-0 py-[20px]'>
        <Icon icon="mdi:address-marker-outline" color="#cfb194" className='text-[40px] mx-auto block'/>
            <p className='text-center font-serif text-beige'>ADDRESS</p>
            <p className='text-center'>Budapest VI. District </p>
        </div>
        <div className='leading-8 py-[20px] '>
        <Icon icon="ic:outline-email" color="#cfb194" className='text-[35px] mx-auto block'/>
            <p className='text-center font-serif text-beige'>EMAIL</p>
            <p className='text-center'>example@gmail.com</p>
        </div>
    </div>
    </div>
    </>
  )
}
