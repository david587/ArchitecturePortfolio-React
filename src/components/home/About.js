import React from 'react'
//react router
import {BrowserRouter,Route} from "react-router-dom";
//assets
import  Logo  from "../../assets/city.svg"
import  Home  from "../../assets/Home.gif"
import  Cv  from "../../assets/Cv.gif"
import { useTheme } from "../../hooks/useTheme"


export default function About() {
  const { mode } = useTheme()
  return (
    <>
    <div className='grid-reverse md:flex md:justify-between justify-center items-center xl:px-[130px]'>
        <div className='md:ml-20 flex-1 mx-3'>
            <p className='text-xl text-beige text-center my-3 md:text-left'> <img src={Home} style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
             alt="Hello" className='w-9 inline-block' /> Welcome everyone</p>
            <div className=''>
                <h1 className=' text-2xl text-center md:text-left md:text-4xl font-bold '>My name is  <span className='text-beige'>T</span>imea, Im a professional Designer, Let me Design your dream home. </h1>
                <p className='font-normal text-gray-500 text-center md:text-left py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nam at ab maiores debitis similique quasi, voluptatibus inventore vitae impedit 
                veritatis adipisci distinctio vel amet, libero magnam! Tenetur, quia.</p>
                <button className='py-2 px-3 border-solid border-beige border-2 text-xl text-beige mx-auto block md:mx-0 md:inline-block'>Contact me</button>
                <button className='py-2  mx-auto block text-beige underline decoration-solid text-xl mt-4 md:mt-0 md:mx-0 md:inline-block md:text-left md:ml-16'>Download CV <img src={Cv} style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}} alt="Cv" className='w-9 md:inline-block underline decoration-solid hidden' /></button>
            </div>
        </div>
        <div className='flex-1 mt-5 text-center'>
            <img src={Logo} alt="Timea" className='w-100 ml-auto mr-auto rounded-sm'/>
        </div>
    </div>
    </>
  )
}
