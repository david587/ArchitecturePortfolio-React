import React from 'react'
//assets
import Bar  from "../assets/Bar.gif"
import Talk from "../assets/Consultation.gif"
import Zoom from "../assets/Zoom.gif"
import Lamp from "../assets/Lamp.gif"
import Box from "../assets/Box.gif"

//style
import "./Reasons.css"

import { useTheme } from "../hooks/useTheme"

export default function Reasons() {
  const { mode } = useTheme()
  return (
    <>
    <div className={`reasons ${mode} pt-8 pb-16`}>
    <div className="flex justify-center">
    <p className='text-xl font-normal'><img src={Bar} style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
    className="w-10 inline-block"/> Why should you choose me</p>
    </div>
    <h2 className='text-4xl font-bold text-center py-5'> This 3 Reasons To Why Choose Me</h2>
    <p className='font-light text-center mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, assumenda.</p>
    {/* <p className='font-light text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
    

    <div className='grid grid-cols-1 md:grid-cols-3  md:mx-20 md:gap-4 xl:px-[130px]'>

        <div className={`bg-stone-100 card ${mode} p-10  border-t-4 border-solid border-t-beige`}>
            <img src={Talk}
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}} 
            alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Good Communication</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>

        <div className={`bg-stone-100 p-10 card ${mode}  border-t-4 border-solid border-t-beige`}>
            <img src={Box}
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
            alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Best Quality Work</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>

        <div className={`bg-stone-100 p-10 card ${mode}  border-t-4 border-solid border-t-beige pb-8`}>
            <img 
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
            src={Lamp} alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Clean & Modern Design</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>
    </div>
    </div>
    <div className={`spacer layer1 ${mode}  flex justify-center items-center`}>
    <h1 className='mt-24 text-4xl font-bold relative text-center'>Discover luxury interior design
    </h1>
    
    </div>
    </>
  )
}
