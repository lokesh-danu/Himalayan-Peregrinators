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
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className='nav flex'>
        
        {/* hamburger menu  */}
        <button className='text-projectBlue text-3xl m-4 md:hidden '
          onClick={e => {
            setMenu(!menu);
          }} >
          <i className="fa-solid fa-bars "></i>
        </button>

        <div className=' flex  items-center absolute h-full right-0 md:static md:p-6' >  {/*company logo*/}
          <img src={logo} alt="" className='h-3/4 mx-4 ' />
          <div className='flex-col flex invisible w-0 lg:visible ' >
            <span className='text-[#40E0D0] font-hand text-3xl' >Himalayan</span>
            <span className='text-amber-300 font-hand text-3xl' >peregrinators</span>
          </div>
        </div>

        <div className='flex items-center invisible md:visible '>
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

      {/* hamruger menu contents */}
      <div className={`z-10 fixed top-0 py-4 md:hidden  bg-black w-[60vw] h-full opacity-95 
            ${menu ? 'translate-x-0' : 'translate-x-[-25rem] '} ease-in-out duration-500`}
      >
        <button className='absolute right-4 text-white text-3xl md:hidden '
          onClick={e => {
            setMenu(!menu);
          }} >
          <i className="fa-solid fa-x"></i>

        </button>

        <ul className="flex flex-col items-center mt-14 space-y-4 text-xl font-roboto" >
          <Link to='/'>
            <li className="btnOval  text-neutral-300 hover:text-black hover:bg-slate-50" >Home</li>
          </Link>
          <Link to='/'>
            <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >About</li>
          </Link>
          <Link to='/'>
            <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >contact</li>
          </Link>

          <Link to='/create'>
            <li className="btnOval text-neutral-300 hover:text-black hover:bg-slate-50 " >Write</li>
          </Link>
        </ul>
        <div className="flex absolute bottom-0 left-0 w-[60vw] pb-4 justify-center text-white space-x-3">
          <BsFacebook></BsFacebook>
          {/* <BsTwitter></BsTwitter> */}
          <BsInstagram></BsInstagram>
          {/* <BsPinterest></BsPinterest> */}
        </div>
      </div>
    </>
  )
}

export default Navbar