import React, { useState } from 'react';
import axios from 'axios';
import { CgClose } from 'react-icons/cg';
// import useEmail from './useEmail';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
import { BsInstagram ,BsFacebook } from 'react-icons/bs';
export const Modal = ({ children, closeModal }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [querry, setQuerry] = useState();
    const [ispending, setIspending] = useState(false);
    const [state, setState] = useState();
    const [phone, setPhone] = useState();
    const enquire=(e)=>{
        
        setIspending(true);
        axios({
            method:'post',
            url:`https://dan-server.onrender.com/api/email`,
            data:{
                email:email,
                subject:'testing_123',
                des:querry,
                phone:phone
            }
        }).then(res=>{
            console.log(res);
            // window.alert(res);
            setIspending(false);
            // window.alert(`your request has been registered successfully we will get back to you`);
        }).catch(err=>{
            console.log(err);
            // window.alert(`server error . please try again later ${err}`);
        })
        closeModal();
        
    }
    return (
        <div className="h-screen w-screen fixed top-0 flex flex-col lg:flex-row items-center justify-center bg-black/80">
            
            <div className='mx-4 my-2 lg:mx-8' >
                <div>
                    <h3 className='text-yellow-300' >Get In Touch TO BOOK!</h3>
                    <span className='text-projectBlue 2xl' >Join us for a trip of a lifetime, if you crave for some high end adventure!</span>
                </div>
                <div>
                    <div className="flex my-2">
                        <div className='flex m-4'>
                            <Link to='/' className='text-4xl m-2 text-red-600 hover:scale-125 '><BsInstagram></BsInstagram></Link>
                            <Link to='/' className='text-4xl m-2 text-blue-600 hover:scale-125'><BsFacebook></BsFacebook></Link>

                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='text-sm flex items-center'>
                            <   FiPhoneCall className='m-2' ></FiPhoneCall>
                                <span className='text-sm'>+91-123456789</span>
                            </div>
                        <div className='text-sm flex items-center'>
                            <SiMinutemailer className='m-2'></SiMinutemailer>
                            <span className='text-sm'>company@example.com</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:mx-6 drop-shadow-xl px-2 lg:px-6 py-4 rounded-md h-fit w-fit  bg-white flex items-center justify-center">
                {/* <button onClick={closeModal}
                    className=" absolute right-2 top-2">
                    <CgClose></CgClose>
                </button> */}
                <form className='mt-2 items-stretch lg:w-[30vw] h-fit text-gray-700' >
                    <input type="text"
                        placeholder='your-name'
                        value={name}
                        onChange={e => { setName(e.target.value) }}
                    />
                    <input type="email"
                        placeholder='email'
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    <input type="phone"
                        placeholder='phone'
                        value={phone}
                        onChange={e => { setPhone(e.target.value) }}
                    />
                    <textarea name="discription" id="" placeholder='Discription for request'
                        value={querry} onChange={e => { setQuerry(e.target.value) }}
                        className="min-h-[15vh] lg:min-h-[25vh]"
                    >

                    </textarea>

                    {/* <input type="file" name="" id=""
                        className='
                        file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border-none'
                        onChange={(e) => setFile(e.target.files[0])}
                    /> */}
                    <div className='flex items-center justify-center pt-2' >
                        <button className='mx-3 my-2 ring-2  rounded-xl p-2  ring-blue-500 ring-offset-2 border-slate-300 border-2 hover:scale-110 ease-in-out duration-300 transition hover:bg-yellow-300 '
                        onClick={e=>{ e.preventDefault();enquire();}} >Enquire now</button>
                        <button className='mx-3 my-2 ring-2  rounded-xl p-2  ring-red-500 ring-offset-2 border-slate-300 border-2 hover:scale-110 ease-in-out duration-300 transition hover:bg-red-800 hover:text-white'
                        onClick={closeModal} >GO Back</button>

                    </div>
                    
                </form>
                
            </div>
        </div>

    );
}