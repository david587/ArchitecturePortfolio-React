import React from 'react'
//assets
import  Logo  from "../assets/Profile.jpg"
import  Wave  from "../assets/Wave.gif"

export default function About() {
  return (
    <>
    <div className='grid-reverse md:flex md:justify-between justify-center items-center'>
        <div className='ml-20 flex-1'>
            <p className='text-xl text-green'> <img src={Wave} alt="Hello" className='w-9 inline-block' /> Welcome everyone</p>
            <div className=''>
                <h1 className='text-4xl font-bold '>My name is  <span className='text-green'>T</span>imea, Improve your Home design, Let me make a Change. </h1>
                <p className='font-normal text-gray-500 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nam at ab maiores debitis similique quasi, voluptatibus inventore vitae impedit 
                veritatis adipisci distinctio vel amet, libero magnam! Tenetur, quia.</p>
                <button className='py-2 px-3 border-solid border-green border-2 text-xl text-green'>Contact me</button>
                <button className='py-2 ml-16 text-xl text-green'>Download CV</button>
            </div>
        </div>
        <div className='mr-20a flex-1 pl-40 mt-5'>
            <img src={Logo} alt="Timea" className='w-80'/>
        </div>
    </div>
    </>
  )
}
