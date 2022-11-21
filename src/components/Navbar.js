import React from 'react'
import  Logo  from "../assets/Mimi.png"

export default function Navbar() {
  return (
    <>
    <div className='grid md:flex md:flex-row md:justify-between justify-center items-center mb-5'>
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
        <button className='text-1xl font-medium bg-yellow px-5 py-2 w-40 rounded-full mr-20'>Office</button>
      </div>
    </div>
    </>
  )
}
