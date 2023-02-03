import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <nav className='nav px-3  justify-between  bg-black/90  md:px-6 lg:px-10'>
          <div className="navBtn">
            Our Story
            <div className="overlay">

            </div>
          </div>
          <div className="dropdownBtn">
            What Sets us Apart
          </div>
          <div className="navBtn">
            What is Himalaya
          </div>
          <div className="navBtn">
            Activities
          </div>
          <div className="navBtn dropdownBtn" 
          onMouseEnter={ e=>{
            setFlag (true);
          }}
          onMouseLeave={
            e=>{
              setFlag(false);
            }
          }
          >
             <p> Team</p>
            {
              flag && <ul className="overlay ">
              <li>Ramesh</li>
              <li>Neha</li>
              <li>David</li>
              <li>Jagadeep</li>
            </ul>
            }
            
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