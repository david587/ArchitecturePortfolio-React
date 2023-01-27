import React from 'react'
//hook
import { useTheme } from "../../hooks/useTheme"
//assets
import  Logo  from "../../assets/me.svg5"
import  LogoIcon  from "../../assets/Mimi.png"

export default function AboutMe() {
  const { mode } = useTheme()

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 mx:11 xl:mx-[150px] md:pb-[70px] mt-14 justify-center items-center '>
          <div className='mr-10 md:mr-0'>
          <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-beige relative mx-auto block'>
            <img className='absolute top-[40px] left-[40px] w-[350px] lg:w-[450px] mx-auto block' src={Logo} alt="me" />
            </div>
          </div>
              
        
            
        <div className='my-20 mx-11'>
            <p className='xl:text-xl font-medium text-center md:text-left'>Who am i</p>
            <h1 className='text-5xl xl:text-7xl font-medium font-serif underline text-center md:text-left'>Hello</h1>
            <p className='mt-5 font-medium text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto totam odit dignissimos, nobis cum eveniet magnam hic, culpa odio ab, quia quibusdam vero iste earum nulla voluptatem! Explicabo, voluptatem est!</p>
            <p className='mt-5 font-medium text-center md:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus rem pariatur tenetur totam ratione labore voluptatibus amet voluptatum vel at?</p>
          </div>
          </div>

          {/* //project */}
    </div>
  )
}
