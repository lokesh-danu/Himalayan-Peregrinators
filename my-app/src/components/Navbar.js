import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { SiMinutemailer } from 'react-icons/si'
import { FcGallery } from 'react-icons/fc'
function Navbar() {
  const [flag, setFlag] = useState(false);
  const [actflag, setActflag] = useState(false);
  return (
    <>
      <nav className='nav '>
        <header className='h-3/5 bg-lime-500/70 flex items-center justify-between'>
          <div className='h-full flex mx-4 items-center' >
            <img src={logo} alt="" className='h-3/4 mx-4 ' />
            <div className='flex flex-col ' >
              <span className='text-[#40E0D0] font-hand text-3xl' >Himalayan</span>
              <span className='text-amber-300 font-hand text-3xl' >peregrinators</span>
              {/* <span className='text-amber-300 font-hand text-sm' > Adventuring with the best ....</span> */}
            </div>
          </div>
          {/* <div>
            <FcGallery className='text-6xl'></FcGallery>
            <span>gallery</span>
          </div> */}
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

        </header>
        <div className='h-2/5 bg-black/90 flex justify-between items-center'>
          <Link className="navBtn" to='/'>
            Our Story
          </Link>
          <div className="navBtn">
            What Sets us Apart
          </div>
          <div className="navBtn">
            What is Himalaya

          </div>
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
              <div>Trekking</div>
              <div>Himalayan Wildlife</div>
              <div>Angling</div>
              <div>River Rafting</div>
              <div>Agro Touris,</div>
              <div>Young Tourism</div>
              <div>Pilgrimmage</div>
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

            <div className={`overlay w-fit ${flag ? '' : 'scale-y-0'}  duration-500 ease-in-out origin-top`}>
              <span>Ramesh</span>
              <span>Neha</span>
              <span>David</span>
              <span>Jagdeep</span>
            </div>

          </div>
          <div className="navBtn">
            Sustainaibility
          </div>
          <Link className="navBtn" to='/blog'>
            Blog
          </Link>
          <div className="navBtn">
            Gallery
          </div>
          {/* <div className="navBtn">
            Social Media
          </div> */}

        </div>
      </nav>
    </>
  )
}

export default Navbar