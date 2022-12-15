import React from 'react'

//iconpack
import { Icon } from '@iconify/react';
//hook
import { useTheme } from "../../hooks/useTheme"

export default function() {
  const { mode } = useTheme()

  return (
   <>
   <div className={`md:px-20 px-10 bg-stone-300 contact ${mode}`}>
   <div className='leading-8 font-normal font-serif'>
    <h1 className='text-center pt-10'>IF YOU GOT ANY QUESTIONS</h1>
    <h2 className='text-center'>PLEASE DO NOT HESISTATE TO SEND ME A MESSAGE.</h2>
   </div>
   <form action="/send" method='post' className='pt-8 font-normal text-[15px] font-serif text-black '>
    <input className='p-2 w-[80%] bg-white mx-auto block ' type="text" placeholder='Your Name' />
    <input className='p-2 w-[80%] mt-4 bg-white mx-auto block' type="text" placeholder='Your Email' />
    <input className='p-2 w-[80%] mt-4 bg-white mx-auto block' type="text" placeholder='Subject'/>
    <input className='px-2 py-8 w-[80%] mt-4 bg-white mx-auto block' type="text" placeholder='Message'/>
   </form>
   <button className='bg-beige px-4 py-3 rounded-sm mx-auto block mt-5'>SEND MESSAGE</button>
   <h1 className='font-serif text-center mt-10 text-3xl text-beige'>Connect with me!</h1>

   <div className='flex flex-row justify-center items-center py-[50px]'>
    <div className='md:flex-1'></div>
    <div className='flex-1'>
    <Icon icon="line-md:linkedin" className='mx-auto block text-[20px] md:text-[35px] border-2 border-beige w-12 h-12 p-2 rounded-sm bg-beige'/>
    </div>
    <div className='flex-1'>
    <Icon icon="line-md:instagram" className='mx-auto block text-[20px] md:text-[35px] border-2 border-beige w-12 h-12 p-2 rounded-sm bg-beige'/>
    </div>
    <div className='flex-1'>
    <Icon icon="line-md:twitter" className='mx-auto block text-[20px] md:text-[35px] border-2 border-beige w-12 h-12 p-2 rounded-sm bg-beige'/>
    </div>
    <div className='flex-1'>
    <Icon icon="line-md:facebook" className='mx-auto block text-[20px] md:text-[35px] border-2 border-beige w-12 h-12 p-2 rounded-sm bg-beige'/>
    </div>
    <div className='md:flex-1'></div>
   </div>

   </div>
   </>
  )
}
