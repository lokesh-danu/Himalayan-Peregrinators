import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [flag, setFlag] = useState(false);
  const [actflag ,setActflag]=useState(false);
  return (
    <>
      <nav className='nav px-3  justify-between  bg-black/90  md:px-6 lg:px-10'>
          <div className="navBtn">
            Our Story 
          </div>
          <div className="navBtn">
            What Sets us Apart
          </div>
          <div className="navBtn">
            What is Himalaya
            
          </div>
          <div className="navBtn " onMouseEnter={ e=>{
            setActflag (true);
          }}
          onMouseLeave={
            e=>{
              setActflag(false);
            }
          }>
            <span>Activities</span>
            <div className={`overlay ${actflag ? '' : 'scale-y-0'}  duration-500 ease-in-out origin-top`}>
                <div>Trekking</div>
                <div>Himalayan Wildlife</div>
                <div>Angling</div>
                <div>RIver Rafting</div>
                <div>Agro Touris,</div>
                <div>Young Tourism</div>
                <div>Pilgrimmage</div>
          </div>
          </div>
          <div className="navBtn" 
          onMouseEnter={ e=>{
            setFlag (true);
          }}
          onMouseLeave={
            e=>{
              setFlag(false);
            }
          }
          >
          <span>Team</span>
          
          <div className={`overlay ${flag ? '' : 'scale-y-0'}  duration-500 ease-in-out origin-top`}>
                <span>Ramesh</span>
                <span>Neha</span>
                <span>David</span>
                <span>Jagdeep</span>
          </div>
            
          </div>
          <div className="navBtn">
            Sustainaibility
          </div>
          <div className="navBtn">
            Blog
          </div>
          <div className="navBtn">
            Gallery
          </div>
          <div className="navBtn">
            Social Media
          </div>
          
      </nav>
    </>
  )
}

export default Navbar