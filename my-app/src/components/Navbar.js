import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  const [flag, setFlag] = useState(false);
  const [actflag ,setActflag]=useState(false);
  return (
    <>
      <nav className='nav'>
        <header className='h-3/5 bg-black/70'>

        </header>
        <div className='h-2/5 bg-black/90 flex '>
        <Link className="navBtn" to='/'>
            Our Story 
          </Link>
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
                <div>River Rafting</div>
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
          
          <div className={`overlay ${flag ? '' : 'scale-y-0 scale-x-0'}  duration-500 ease-in-out origin-top`}>
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
          <div className="navBtn">
            Social Media
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar