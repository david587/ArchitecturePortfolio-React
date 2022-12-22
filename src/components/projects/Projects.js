import React from 'react'
import { useTheme } from "../../hooks/useTheme"
import "./Projects.css"

//projects images
import one from "./projectImg/014-1.jpg"
import two from "./projectImg/2.jpg"
import four from "./projectImg/4.jpg"
import five from "./projectImg/5.jpg"
import six from "./projectImg/6.jpg"
import nine from "./projectImg/9.jpg"

export default function Projects() {
const { mode } = useTheme()

  return (
    <>
     <div className={`spacer2 layer2 ${mode}`}></div>
          <div className='bg-[#d6d3d1]'>
          <h1 className='text-5xl font-normal font-sans text-center pt-5'>MY WORK</h1>
          <div className='flex flex-row justify-center items-center text-center mx-[30%] mt-14 text-medium text-xl gap-4'>
            <div className=''>
              <p className=' bg-beige px-5 rounded-sm font-light'>All</p>
            </div>
            <div className=''>
            <p className=' bg-beige px-5 rounded-sm font-light'>LivingRoom</p>
            </div>
            <div className=''>
            <p className=' bg-beige px-5 rounded-sm font-light'>Kitchen</p>
            </div>
            <div className=''>
              <p className=' bg-beige px-5 rounded-sm font-light'>Bathroom</p>
            </div>
          </div>

       {/* //grids */}
  <div className="row mt-14 md:w-[60%] mx-auto block">
    <div className="column">
        <img src={two} alt="picture"/>
        <img src={one} alt="picture"/>
    </div>
    <div className="column">
        <img src={four} alt="picture"/>
        <img src={five} alt="picture"/>
    </div>
    <div className="column">
        <img src={five} alt="picture"/>
        <img src={nine} alt="picture"/>
    </div>
    <div className="column">
        <img src={one} alt="picture"/>
        <img src={five} alt="picture"/>
    </div>
</div>


  </div>
  </>
  )
}
