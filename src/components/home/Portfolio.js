import React from 'react'
//assets
import Globe from "../../assets/Globe.gif"
import Project1 from "../../assets/Project1.jpg"
import Project2 from "../../assets/Project2.jpg"
import Project3 from "../../assets/Project3.jpg"
//css
import "./Portfolio.css"

import { useTheme } from "../../hooks/useTheme"

//router
import {Link} from "react-router-dom"

export default function () {
  const { mode } = useTheme()
  return (
    <>
    <div className={`spacer2 layer2 ${mode}`}></div>
    <div className={`bg-stone-300 portfolio ${mode} xl:px-[130px]`}>
    <p className='text-center text-xl font-light'><img src={Globe} style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
    alt="work" className='inline-block w-8'/> Show my best Portfolio</p>
    <h1 className='text-4xl font-medium text-center my-5 mx-1 md:mx-0'>The Best Porfolio From My Works</h1>
    <p className='text-center font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia laborum perspiciatis, earum deserunt voluptas vitae vero aspernatur neque harum.</p>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-2 justify-center items-center my-7 md:mx-20'>
        <div>
            <img src={Project1} alt="design" className='w-3/4 md:w-auto md:h-[170px] lg:h-[200px] xl:h-[400px] mx-auto block'/>
        </div>
        <div>
        <img src={Project2} alt="design" className='w-3/4  md:w-auto md:h-[170px] lg:h-[200px] xl:h-[400px] mx-auto block'/>
        </div>
        <div>
        <img src={Project3} alt="design" className='w-3/4  md:w-auto md:h-[170px] lg:h-[200px] xl:h-[400px]  mx-auto block'/>
        </div>
    </div>
    <div className=''>
      {/* <button className='mx-auto block px-20 py-3 bg-yellow border-2 border-yellow
      text-white font-normal rounded-lg text-xl relative text-center'>  View More
      <img src={Mouse} alt="mouse" 
      className='w-[50px] h-[52px] absolute top-0 left-0 border-white border-2 rounded-lg'/>
      </button> */}
      <button className='border-2 px-5 py-2 text-xl font-normal ml-auto mr-auto block '><a href="/projects">View More</a></button>
      <div className='h-9'></div>
    </div>
    </div>
    
    </>
  )
}
