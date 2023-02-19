import React from 'react'
import bg from '../img/bg4.png';
import Navbar from '../components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import home1 from '../img/home1.JPG'
import home2 from '../img/home2.JPG'
import home3 from '../img/home3.JPG'
import home4 from '../img/home4.JPG'
import home5 from '../img/home5.JPG'
// import home6 from '../img/home6.JPG'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='cnt h-[100vh] bg-no-repeat bg-cover flex items-center justify-around home'
        style={{ backgroundImage: `url(${bg})`}}
      >

        <div className='flex flex-col  h-1/3'>
          <h2 className='text-projectBlue' >Himalayan</h2>
          <h2 className='text-amber-300' >Peregrinators</h2>
          <span className='text-amber-300 ' > Adventuring with the best ....</span>

        </div>

        <div className='homeGallery mt-4 flex items-center justify-center'>
          <Carousel
            autoPlay={true} emulateTouch={true} infiniteLoop={true} showThumbs={false}
            className='w-[600px] h-[400px]'
          >
            <div className=''>
              <img src={home1} alt="" className='h-80 w-96' />
            </div>

            <div className=''>
              <img src={home2} alt="" className='h-80 w-96' />
            </div>

            <div className=''>
              <img src={home3} alt="" className='h-80 w-96' />
            </div>

            <div className=''>
              <img src={home4} alt="" className='h-80 w-96' />
            </div>

            <div>
              <img src={home5} alt="" className='h-80 w-96' />
            </div>

          </Carousel>

        </div>

      </div>
      <div className='absolute bottom-10 right-[42%] flex-col items-center flex ' >
        <span className='text-projectBlue text-4xl mb-3'> Activities</span>
        <HashLink smooth to='#footer'>
          <BsFillArrowDownCircleFill className='text-amber-500 text-7xl'></BsFillArrowDownCircleFill>
        </HashLink>
      </div>
      <div className="h-[100vh]">
        <section className='h-[80vh]' id='home2'>
          <div className='flex flex-col place-content-center'>
            {/* activities container */}
            <div className='bg-slate-500 h-[30vh] w-[25vw] rounded-lg m-2'>
              {/* activies container  */}


            </div>
            <div className='bg-slate-500 h-[30vh] w-[25vw] rounded-lg'>
              {/* activies container  */}


            </div>
          </div>
        </section>
        <footer id='footer' className="footer bg-blue-900 h-[20vh]">

        </footer>
      </div>
    </>
  )
}

export default Home