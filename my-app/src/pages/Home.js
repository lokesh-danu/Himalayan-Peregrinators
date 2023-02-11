import React from 'react'
import bg from '../img/bg.jpg';
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
      <div className='cnt bg-no-repeat bg-cover flex items-center justify-around'
        style={{ backgroundImage: `url(${bg})` }}
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
        <span className='text-projectBlue text-4xl mb-3'> What is Himalaya ?</span>
        <HashLink smooth to='#footer'>
          <BsFillArrowDownCircleFill className='text-amber-500 text-7xl'></BsFillArrowDownCircleFill>
        </HashLink>
      </div>
      <div className="h-[100vh]">
        <section className='h-[80vh]' id='home2'>
          <div >
            <p className='font-lora textlg'>
              Discover the dynamic beauty of the Himalaya, the world's highest and youngest mountain range. Experience its awe-inspiring landscapes, from towering spires to rolling rivers and lush forests. Immerse yourself in the diverse cultures and religions of the region and revel in the bounty of adventure opportunities available, from trekking to wildlife watching and stargazing. This slice of heaven on earth is a true treasure trove of nature's wonders, offering a unique and unforgettable experience that will leave an indelible impression on your life. Get ready to be mesmerized and leave feeling refreshed, both physically and mentally. Explore the Himalaya and discover why there's no better place to be.
            </p>
          </div>
        </section>
        <footer id='footer' className="footer bg-black/90 h-[20vh]">

        </footer>
      </div>
    </>
  )
}

export default Home