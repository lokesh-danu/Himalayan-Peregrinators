import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { SiMinutemailer } from 'react-icons/si'
import { FcGallery } from 'react-icons/fc'
import {BsInstagram ,BsFacebook} from 'react-icons/bs'
function Navbar() {
  const [flag, setFlag] = useState(false);
  const [actflag, setActflag] = useState(false);
  return (
    <>
      <nav className='nav '>
        <header className='h-3/5  flex items-center justify-between'>
          <div className='h-full flex mx-4 items-center' >
            <img src={logo} alt="" className='h-3/4 mx-4 ' />
            <div className='flex flex-col ' >
              <span className='text-[#40E0D0] font-hand text-3xl' >Himalayan</span>
              <span className='text-amber-300 font-hand text-3xl' >peregrinators</span>
              {/* <span className='text-amber-300 font-hand text-sm' > Adventuring with the best ....</span> */}
            </div>
          </div>
          
          <div className='flex h-full items-center'>
            <div className='flex'>
              <Link to='/' className='text-4xl m-2 text-red-600 hover:scale-125 '><BsInstagram></BsInstagram></Link>
              <Link to='/' className='text-4xl m-2 text-blue-600 hover:scale-125'><BsFacebook></BsFacebook></Link>
              
            </div>

            <div className='flex flex-col'>
              <div className='text-sm flex items-center'>
                <FiPhoneCall className='m-2' ></FiPhoneCall>
                <span className='text-sm'>+91-123456789</span>
              </div>
              <div className='text-sm flex items-center'>
                <SiMinutemailer className='m-2'></SiMinutemailer>
                <span className='text-sm'>company@example.com</span>
              </div>
            </div>
          </div>
        </header>

        <div className='h-2/5 bg-black/90 flex justify-center items-center'>
          <Link className="navBtn" to='/'>
            Our Story
          </Link>
          <div className="navBtn">
            What Sets us Apart
          </div>
          {/* <div className="navBtn">
            What is Himalaya

          </div> */}
          <div className="navBtn relative" onMouseEnter={e => {
            setActflag(true);
          }}
            onMouseLeave={
              e => {
                setActflag(false);
              }
            }>
            <span>Activities</span>
            <div className={`overlay w-fit ${actflag ? '' : 'scale-y-0'}  duration-500 ease-in-out origin-top`}>
              <div className='navSelect'>Trekking</div>
              <div className='navSelect'>Himalayan Wildlife</div>
              <div className='navSelect'>Angling</div>
              <div className='navSelect'>River Rafting</div>
              <div className='navSelect'>Agro Touris,</div>
              <div className='navSelect'>Young Tourism</div>
              <div className='navSelect'>Pilgrimmage</div>
            </div>
          </div>
          <div className="navBtn"
            onMouseEnter={e => {
              setFlag(true);
            }}
            onMouseLeave={
              e => {
                setFlag(false);
              }
            }
          >
            <span>Team</span>

            <div className={`overlay w-fit ${flag ? '' : 'scale-y-0'}  duration-300 ease-in-out origin-top`}>
              <span className='navSelect'>Ramesh</span>
              <span className='navSelect'>Neha</span>
              <span className='navSelect'>David</span>
              <span className='navSelect'>Jagdeep</span>
            </div>

          </div>
          <div className="navBtn">
            Sustainaibility
          </div>
          <Link className="navBtn" to='/blog'>
            Blog
          </Link>
          {/* <div className="navBtn">
            Gallery
          </div> */}
          {/* <div className="navBtn">
            Social Media
          </div> */}

        </div>
      </nav>
    </>
  )
}

export default Navbar