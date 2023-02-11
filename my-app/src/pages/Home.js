import React from 'react'
import bg from '../img/bg.jpg';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='h-screen bg-no-repeat bg-cover flex items-center justify-center'
        style={{ backgroundImage: `url(${bg})` }} >
        <div className='flex flex-col items-center'>
          <h2 className='text-[#40E0D0]' >Himalayan</h2>
          <h2 className='text-amber-300' >peregrinators</h2>
          <span className='text-amber-300 ' > Adventuring with the best ....</span>
        </div>
      </div>
    </>
  )
}

export default Home