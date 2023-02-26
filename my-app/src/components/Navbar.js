import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { SiMinutemailer } from 'react-icons/si'
import { FcGallery } from 'react-icons/fc'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

import { HashLink } from 'react-router-hash-link';
function Navbar() {
  const [flag, setFlag] = useState(false);
  const [actflag, setActflag] = useState(false);
  return (
    <>
      <nav className='nav flex'>
          <div className=' flex mx-4 items-center w-8' >  {/*company logo*/}
            <img src={logo} alt="" className='h-3/4 mx-4 ' />
            <div className='flex flex-col ' >
              <span className='text-[#40E0D0] font-hand text-3xl' >Himalayan</span>
              <span className='text-amber-300 font-hand text-3xl' >peregrinators</span>
            </div>
          </div>

          <div className='flex items-center'>
            <Link className="navBtn" to='/'>
              Our Story
            </Link>
            <div className="navBtn">
              What Sets us Apart
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
          </div>

      </nav>
    </>
  )
}

export default Navbar