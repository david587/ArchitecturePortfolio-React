import React from 'react'
//assets
import Bar  from "../assets/Bar.gif"
import Talk from "../assets/Consultation.gif"
import Zoom from "../assets/Zoom.gif"

export default function Reasons() {
  return (
    <>
    <div className='flex justify-center'>
    <p className='text-xl font-normal'><img src={Bar} className="w-10 inline-block"/> Why should you choose me</p>
    </div>
    <h2 className='text-4xl font-bold text-center py-5'> This 3 Reasons To Why Choose Me</h2>
    <p className='font-light text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, assumenda.</p>
    <p className='font-light text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    
    <div className='grid grid-cols-1 md:grid-cols-3 mt-16 mx-20 gap-4'>
        <div className='bg-stone-100 p-10  border-2 border-solid border-t-yellow'>
            <img src={Talk} className="w-14  pb-2 bg-yellow"/>
            <p className='text-left text-xl '>Good Communication</p>
            <p className="text-left my-3 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-yellow">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>

        
    </div>
    </>
  )
}