import React from 'react'
import { useState,useEffect,useRef} from 'react'
//animation library
import { motion } from "framer-motion"
//style
import "./Navbar.css";

//assets
import  Logo  from "../../assets/Mimi.png"
import  Menu  from "../../assets/Menu.svg"
import  Theme  from "../../assets/Moon.svg"

//hook
import { useTheme } from "../../hooks/useTheme"

import {NavLink,Link} from "react-router-dom"
import { ClickScroll } from '../handleScroll';
import App from '../../App';

export default function Navbar({Appref}) {

  // const [notes, setNotes] = useState(storedNotes)
  const { changeMode, mode } = useTheme()
 
  const [isActive, setIsActive] =useState(true);
  const handleToggle = ()=>{
    setIsActive(!isActive);
  }

  useEffect(() => {
    window.localStorage.setItem('mode', JSON.stringify(mode))
  }, [mode])

  
  const data = JSON.parse(window.localStorage.getItem('mode'));
  //when we reload the page check the localstorage
  useEffect(()=>{
    if(data!==mode){
      changeMode(mode === "dark" ? "light":"dark")
    }
  },[])
   
  const toggleMode=()=>{
    changeMode(mode === "dark" ? "light":"dark")
  }
  
  const [btnRef, setBtnRef] = useState(null);

 

  const checkoutBtnRef = (Appref) => {
    if (Appref) setBtnRef(Appref);
  };

  useEffect(() => {
    console.log(Appref);
    checkoutBtnRef(Appref)
  }, [Appref]);


  //Scroll to services
  const handleClickScroll = ()=>{
    checkoutBtnRef(btnRef)
    // console.log(btnRef);
    console.log(btnRef);
    ClickScroll(btnRef);

  }
  

  return (
    <>
    
    <div className='md:flex md:flex-row md:justify-between justify-center items-center mb-5 hidden md:visible xl:px-[130px]'>
      <div>
        <Link  to="/"><img src={Logo} alt="logo" className='w-40 ml-20 mr-10'/></Link>
      </div>
      <div>
        <NavLink  className="text-1xl font-medium" to="/">Home</NavLink>
        {/* <a href="#" className='text-1xl font-medium'>Home</a> */}
      </div>
      <div>
        <NavLink onClick={handleClickScroll} className="text-1xl font-medium" to="/services">Services</NavLink>
        {/* <a href="#" className='text-1xl font-medium'>Services</a> */}
      </div>
      <div>
        <NavLink className="text-1xl font-medium" to="/projects">Projects</NavLink>
        {/* <a href="#" className='text-1xl font-medium'>Projects</a> */}
      </div>
      <div>
        <NavLink className="text-1xl font-medium" to="/contacts">Contacts</NavLink>
        {/* <a href="#" className='text-1xl font-medium'>Contacts</a> */}
      </div>
      <div>
        <button className='text-1xl font-medium bg-beige px-5 py-2 w-20 rounded-full mr-20'>
        <img onClick={toggleMode}
        style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}}
        src={Theme} alt="Theme" 
        className='w-5 mx-auto block' /> </button>
      </div>
    </div>
    {/* {isfalse && <Services Appref={ref} text="hello"/>} */}
    
    

    {/* mobile menu */}
      <div className='flex flex-row visible md:invisible md:hidden items-center mx-7 mb-7'>
      <div className='flex-1'>
      <Link  to="/"><img src={Logo} alt="logo" className='w-[120px]'/></Link>
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
      <NavLink  to="/"><li onClick={handleToggle} className='p-3.5  border-b-2 border-stone-400'>Home</li></NavLink>
        {/* <li className='p-3.5  border-b-2 border-stone-400'>Home</li> */}
      <NavLink onClick={handleClickScroll} to="/services"><li onClick={handleToggle} className='p-3.5  border-b-2 border-stone-400'>Services</li></NavLink>
        {/* <li className='p-3.5  border-b-2 border-stone-400'>Services</li> */}
      <NavLink  to="/projects"><li onClick={handleToggle} className='p-3.5  border-b-2 border-stone-400'>Projects</li></NavLink>
        {/* <li className='p-3.5  border-b-2 border-stone-400'>Projects</li> */}
      <NavLink  to="/contacts"><li onClick={handleToggle} className='p-3.5  border-b-2 mb-5 border-stone-400'>Contacts</li></NavLink>
        {/* <li className='p-3.5  border-b-2 mb-5 border-stone-400'>Contacts</li> */}
      </ul>
      <div>
      <button className='w-[100px] mx-auto block bg-beige rounded-full mb-5'> <img  onClick={toggleMode} src={Theme} alt="Theme" className='w-6 mx-auto block py-2'/> </button>
      </div>
    </div> 
    </>
  )
}