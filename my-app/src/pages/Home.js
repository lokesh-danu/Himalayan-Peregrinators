import React from 'react';
import { useRef, useEffect, useState } from 'react';
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
import { FiPhoneCall } from 'react-icons/fi'
import { SiMinutemailer } from 'react-icons/si'
import { FcGallery } from 'react-icons/fc'
import { BsInstagram, BsFacebook, BsPersonCircle } from 'react-icons/bs'
import { Modal } from '../components/Modal';
// import home6 from '../img/home6.JPG'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Activities from '../components/Activities';
import { Link as scroll } from 'react-scroll';
function Home() {
  const [anchor, setAnchor] = useState();
  const [showModal, setShowModal] = useState(false);
  const team = ['neha', 'ramesh', 'david', 'jagdeep', 'meenakshi', 'ajay', 'aniket', 'abhishek'];
  useEffect(() => {
    setAnchor(document.querySelector('#activities'));

  }, []);

  const closeModal = () => {

    setShowModal(false);
    console.log(showModal);
    // navigate(`/register`);
  }

  const open = () => {
    setShowModal(true);
  }

  return (
    <>
      <div className="btnRectangle fixed bottom-4 right-4 h-10 w-fit bg-yellow-400"
        onClick={open}>
        <span>ENquiree Now</span>
      </div>
      {
        showModal &&
        <Modal closeModal={closeModal}>
          modal is here
        </Modal>
      }
      <div className='cnt h-[100vh] bg-no-repeat bg-cover flex items-center justify-around home'
        style={{ backgroundImage: `url(${bg})` }}
      >

        <div className='flex flex-col  h-1/3'>
          <h2 className='text-projectBlue' >Himalayan</h2>
          <h2 className='text-amber-300' >Peregrinators</h2>
          <span className='text-amber-300 ' > Adventuring with the best ....</span>

        </div>

        {/* <div className='homeGallery mt-4 flex items-center justify-center'>
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

        </div> */}

      </div>

      <div className='absolute bottom-10 right-[42%] flex-col items-center flex ' >
        <span className='text-projectBlue text-4xl mb-3'> Activities</span>
        <button onClick={e => { console.log(anchor); anchor.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} >
          <BsFillArrowDownCircleFill className='text-amber-500 text-7xl'></BsFillArrowDownCircleFill>
        </button>
      </div>
      <Activities id='activities' open={open} ></Activities>
      <div className="w-screen flex flex-col items-center justify-center py-4 px-8">
        {/* team */}
        <h3 className='font-lora my-8'>Meet our Team</h3>
        <div className='py-8 w-screen flex flex-wrap justify-center'>
          {
            team.map(el => {
              return (
                <div className=' mx-8 my-4 flex-col flex items-center'>
                  <BsPersonCircle className='text-9xl'></BsPersonCircle>
                  <span className='text-2xl m-2'>{el}</span>
                  <span>designamtion</span>
                </div>
              )
            })
          }
        </div>

        <footer id='footer' className="footer bg-black/90 h-[30vh] w-screen
          flex px-8 justify-around items-center">
          <div className='flex flex-col' >
            <Link to='/' className='text-white'>About us</Link>
            <Link to='/' className='text-white'>About us</Link>
            <Link to='/' className='text-white'>About us</Link>
            <Link to='/' className='text-white'>About us</Link>
            <Link to='/' className='text-white'>About us</Link>

          </div>
          <div className="flex flex-col">

            <div className='flex m-4'>
              <Link to='/' className='text-4xl m-2 text-red-600 hover:scale-125 '><BsInstagram></BsInstagram></Link>
              <Link to='/' className='text-4xl m-2 text-blue-600 hover:scale-125'><BsFacebook></BsFacebook></Link>

            </div>

            <div className='flex flex-col text-white'>
              <div className='text-sm flex items-center'>
                <FiPhoneCall className='m-2' ></FiPhoneCall>
                <span className='text-sm'>+91-123456789</span>
              </div>
              <div className='text-sm flex items-center'>
                <SiMinutemailer className='m-2'></SiMinutemailer>
                <span className='text-sm'>company@example.com</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <Link to='/' className="text-white">Resources</Link>
            <Link to='/' className="text-white">Resources</Link>
            <Link to='/' className="text-white">Resources</Link>
            <Link to='/' className="text-white">Resources</Link>
            <Link to='/' className="text-white">Resources</Link>
          </div>


        </footer>
      </div>
    </>
  )
}

export default Home

{/* */ }