import React from 'react'
import { useState} from 'react'
//animation library
import { motion } from "framer-motion"
//style
import "./Navbar.css";

//assets
import  Logo  from "../assets/Mimi.png"
import  Menu  from "../assets/Menu.svg"
import  Theme  from "../assets/Moon.svg"

//hook
import { useTheme } from "../hooks/useTheme"



export default function Navbar() {
  const [isActive, setIsActive] =useState(true);
  const [isDark, setIsDark] = useState(false);
  // const div = useRef();
  const handleToggle = ()=>{
    setIsActive(!isActive);
  }

    const { changeMode, mode } = useTheme()

    const toggleMode=()=>{
        //if the mode is currently dark we pass light
        changeMode(mode === "light" ? "dark" : "light")
        console.log(mode);
        setIsDark(!isDark);
    }


  return (
    <>
    <div className='md:flex md:flex-row md:justify-between justify-center items-center mb-5 hidden md:visible xl:px-[130px]'>
      <div>
        <img src={Logo} alt="logo" className='w-40 ml-20 mr-10'/>
      </div>
      <div>
        <a href="#" className='text-1xl font-medium'>Home</a>
      </div>
      <div>
        <a href="#" className='text-1xl font-medium'>Services</a>
      </div>
      <div>
        <a href="#" className='text-1xl font-medium'>Projects</a>
      </div>
      <div>
        <a href="#" className='text-1xl font-medium'>Contacts</a>
      </div>
      <div>
        <button className='text-1xl font-medium bg-beige px-5 py-2 w-20 rounded-full mr-20'>
        <img onClick={toggleMode}
        style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
        src={Theme} alt="Theme" 
        className='w-5 mx-auto block' /> </button>
      </div>
    </div>
    

    {/* mobile menu */}
      <div className='flex flex-row visible md:invisible md:hidden items-center mx-7 mb-7'>
      <div className='flex-1'>
       <img  src={Logo} alt="logo"  className='w-[120px]'/>
      </div>
      <div className='flex-1'>
         <img onClick={handleToggle}
         style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
         src={Menu} alt="Menu" className='w-[25px] ml-[85%]'/>
      </div>
      </div>
      
      
    
    {/* mobile navbar */}
    <div  className={isActive ? "hidden": `inline-block w-[100%] h-[100%] relative text-center bg-stone-100 nav ${mode} md:hidden`}>
      <ul className='text-2xl font-normal hover:d '>
        <li className='p-3.5  border-b-2 border-stone-400'>Home</li>
        <li className='p-3.5  border-b-2 border-stone-400'>Services</li>
        <li className='p-3.5  border-b-2 border-stone-400'>Projects</li>
        <li className='p-3.5  border-b-2 mb-5 border-stone-400'>Contacts</li>
      </ul>
      <div>
      <button className='w-[100px] mx-auto block bg-beige rounded-full mb-5'> <img  onClick={toggleMode} src={Theme} alt="Theme" className='w-6 mx-auto block py-2'/> </button>
      </div>
    </div> 
    </>
  )
}

