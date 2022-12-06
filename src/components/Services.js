import React from 'react'
//assets
import Zoom from "../assets/Zoom.gif"
import Pc from "../assets/Pc.gif"
import Pen from "../assets/Pen.gif"
import Photo from "../assets/Photo.gif"
import { useTheme } from "../hooks/useTheme"
import Services from "../assets/Services.gif"

//style
import "./Services.css"

export default function Dreams() {
  const { mode } = useTheme()
  return (
    <>
    <div className={`md:px-20 py-10 div ${mode} xl:px-[130px]`}>
    <p className='text-center md:text-left font-light text-beige text-2xl underline'><img src={Services} style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
     alt="tool" className='w-9 inline-block '/> Services of my skills</p>
    <div className=' grid md:flex md:flex-row justify-between my-5 '>
      <div className='flex-1'>
        <h1 className='text-4xl font-semibold text-center'>My Services to have a better Home</h1>
      </div>
    </div>
    {/* grid */}
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 my-8'>

      <div className={`bg-stone-100 p-10 card ${mode} border-x-4 border-solid border-x-beige`}>
            <img src={Pc}
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
            alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Design Software</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>

        <div className={`bg-stone-100 p-10 card ${mode} border-4 border-solid border-beige md:border-y-4 md:border-x-0 `}>
            <img src={Pen} 
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
            alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Illustrator Design</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>

        <div className={`bg-stone-100 p-10 card ${mode} border-x-4 border-solid border-x-beige`}>
            <img src={Photo} 
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
            alt="talk" className="w-14  pb-2"/>
            <p className='text-left text-xl '>Modern Style</p>
            <p className="text-left my-5 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, a!</p>
            <p className="text-left font-medium underline text-beige">Learn More <img src={Zoom} className="w-6 inline-block"/></p>            
        </div>
      </div>
    </div>
    </div>

    
    </>
  )
}
