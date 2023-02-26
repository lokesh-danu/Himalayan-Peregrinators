import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg'
export const Modal = ({ children, closeModal }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [querry, setQuerry] = useState();
    const enquire=()=>{

    }
    return (
        <div className="h-screen w-screen fixed top-0 flex items-center justify-center bg-blue-200/75">
            <div className=" drop-shadow-xl py-8 rounded-md h-fit w-fit lg:w-2/5 bg-white flex items-center justify-center">
                <button onClick={closeModal}
                    className="text-xl absolute right-2 top-2">
                    <CgClose></CgClose>
                </button>
                <form className='mt-2 items-stretch h-fit text-gray-700' >
                    <input type="text"
                        placeholder='name'
                        value={name}
                        onChange={e => { setName(e.target.value) }}
                    />
                    <input type="email"
                        placeholder='email'
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    <textarea name="discription" id="" placeholder='Discription for request'
                        value={querry} onChange={e => { setQuerry(e.target.value) }}
                        className="min-h-[10vh]"
                    >

                    </textarea>

                    {/* <input type="file" name="" id=""
                        className='
                        file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border-none'
                        onChange={(e) => setFile(e.target.files[0])}
                    /> */}
                    <button className='m-auto ring-2 mt-4  border-none ring-blue-500 ring-offset-2 hover:bg-lime-400 '
                        >Enquire now</button>
                </form>
                
            </div>
        </div>

    );
}