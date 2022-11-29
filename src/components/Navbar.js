import React from 'react'
import { useState, useRef } from 'react'


//assets
import  Logo  from "../assets/Mimi.png"
import  Menu  from "../assets/Menu.svg"
import  Moon  from "../assets/Moon.svg"
import  Sun  from "../assets/Sun.svg"




export default function Navbar() {
  const [isActive, setIsActive] =useState(true);
  const { isDark, setIsDark } = useState(false);
  // const div = useRef();
  const handleToggle = ()=>{
    setIsActive(!isActive);
  }
  
  return (
    <>
    <div className='md:flex md:flex-row md:justify-between justify-center items-center mb-5 hidden md:visible'>
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
        <button className='text-1xl font-medium bg-yellow px-5 py-2 w-20 rounded-full mr-20'> <img src={Moon} alt="Theme" className='w-5 mx-auto block' /> </button>
      </div>
    </div>
    

    {/* mobile menu */}
      <div className='flex flex-row visible md:invisible md:hidden items-center mx-7 mb-7'>
      <div className='flex-1'>
       <img  src={Logo} alt="logo"  className='w-[120px]'/>
      </div>
      <div className='flex-1'>
         <img onClick={handleToggle} src={Menu} alt="Menu" className='w-[25px] ml-[85%]'/>
      </div>
      </div> 
      
    
    {/* mobile navbar */}
      <div  className={isActive ? "hidden": "inline-block w-[100%] h-[100%] relative text-center bg-stone-100 md:hidden"}>
      <ul className='text-2xl font-normal underline hover:d'>
        <li className='p-3.5'>Home</li>
        <li className='p-3.5'>Services</li>
        <li className='p-3.5'>Projects</li>
        <li className='p-3.5'>Contacts</li>
      </ul>
      <div>
      <button className='w-[25%] mx-auto block bg-yellow rounded-full mb-5'> <img src={Moon} alt="Theme" className='w-6 mx-auto block py-2'/> </button>
      </div>
    </div>
    </>
  )
}
