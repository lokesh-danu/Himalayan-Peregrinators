import React from 'react'
import bg from '../img/bg.jpg';
function Home() {
  return (
    <div className='h-screen bg-no-repeat bg-cover flex items-center' 
        style={{backgroundImage:`url(${bg})`}} >
        <h2 className='' >Himalayan Preginators</h2>
    </div>
  )
}

export default Home