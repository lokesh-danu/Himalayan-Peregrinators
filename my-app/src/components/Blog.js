// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useState, useEffect, useContext } from 'react';
// import Header from "../components/Header";
import axios from 'axios';
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import bg from '../img/blogBG.jpg';
function Blog() {
  // const [allPost, setAllPost] = useState([]);

  const [slider, setSlider] = useState();
  useEffect(() => {
    setSlider(document.getElementById('slider'))
    // const url=`${process.env.REACT_APP_SERVER_URL}/posts/`;
    // console.log(url);
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/`)
    //     .then(res => {
    //         console.log(res.data);
    //         setAllPost(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     });
  }, [])
  const allPost = [
    { title: "title 1", discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit blanditiis esse non soluta quasi, cumque reprehenderit quibusdam ab placeat libero magnam in, dicta labore! Ut, possimus et magni accusamus iure similique libero.", userName: "skdjbhk" },
    { title: "title 2", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 3", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 4", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 5", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 6", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 7", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "title 8", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "2", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" },
    { title: "3", discription: "ajdgshvfaidskhgv", userName: "skdjbhk" }];
  const slideLeft = () => {
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft +500
  }

  return (
    <div className='h-screen pt-10 bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${bg})` }}
    >
      <h3 className='text-center m-8 font-hand text-white'> Featured Blogs</h3>

      <div className='flex relative items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={200} />
        
        <div id='slider' className='w-fit h-[400px] flex  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {allPost.map(el => {
            return (
              <div className='rounded-lg w-[30vw] m-4 p-4 bg-white border-none shadow-xl'>
                <Link to={`/blog/${el._id}`} className="" key={el.title}>
                  <h3 className='text-center' >{el.title}</h3>
                  <p className='w-10/12 h-fit ' >{el.discription}</p>
                  <span className='' >~by:{el.userName}</span>
                </Link>
              </div>
            )
          })}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={200} />
      </div>

    </div>
  )
}

export default Blog