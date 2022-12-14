import React from 'react'
//assets
import Phone from "../../assets/Phone.gif"
import Area from "../../assets/Area.gif"
import Email from "../../assets/Email.gif"
import  Logo  from "../../assets/Mimi.png"

//styles
import "./Footer.css"

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
    <div className="spacer4 layer4dark">
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2  text-left text-white'>
      <div className='mt-[60px] border-r-2 border-white h-[180px] lg:ml-20 lg:pr-10 ml-4 md:ml-0'>
          <p className='font-medium mb-4'>About Me</p>
          <p className='text-stone-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugiat autem</p>
        </div>
        <div className='mt-[60px] border-r-2 border-white h-[180px] ml-4'>
          <p className='font-medium mb-4'>Quick Links</p>
          <ul className='text-stone-300 inline-block'>
            <li className='hover:underline'>Home menu</li>
            <li className='hover:underline'>Provided services</li>
            <li className='hover:underline'>My projects</li>
            <li className='hover:underline'>Contact me</li>
            <li className='hover:underline'>Change theme</li>
          </ul>
        </div>

        <div className='mt-[60px] border-r-2 border-white h-[180px] ml-4'>
          <p className='font-medium mb-4'>Support</p>
          <ul className='text-stone-300 inline-block'>
            <li className='hover:underline'>Technical Support</li>
            <li className='hover:underline'>Problems</li>
            <li className='hover:underline'>FAQ</li>
          </ul>
        </div>

        <div className='mt-[60px] border-r-2 border-white h-[180px] ml-4'>
          <p className='font-medium mb-4'>Contact</p>
          <ul className='text-stone-300 inline-block'>
            <li className='hover:underline'> <img src={Phone} alt="phone" className='inline-block w-6'/> +36 30 346 3492</li>
            <li className='hover:underline'>  <img src={Area} alt="phone" className='inline-block w-6'/> Budapest 6. Area</li>
            <li className='hover:underline'> <img src={Email} alt="phone" className='inline-block w-6'/> Navigate to Contact Page</li>
          </ul>
        </div>
      </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center h-[80px]
        border-2 border-white mx-2 md:mx-20 '>
            <div className='text-white text-[25px] text-center'> 
            <FontAwesomeIcon icon={faFacebook} className="px-5"></FontAwesomeIcon> 
            <FontAwesomeIcon icon={faInstagram} className="px-5"></FontAwesomeIcon> 
            <FontAwesomeIcon icon={faTwitter} className="px-5"></FontAwesomeIcon> 
            </div>
            <div className='text-white font-normal text-center'>Privacy Policy <span>|</span> Terms & Conditions</div>
            <div className='mt-8 md:mt-0'>
            <img src={Logo} alt="logo" className='w-28 mx-auto block '/>
            </div>
          </div>
    </div>
    </>
  )
}
