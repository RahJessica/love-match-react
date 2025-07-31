import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { div } from 'motion/react-client';
import { FaHeart } from 'react-icons/fa';

function FormUser() {
    return (
        <div className='flex flex-col justify-center items-center gap-5 border-2 border-gray-600 mx-30 my-20 px-10 py-5 w-[30vw] h-[70vh] rounded-lg shadow-gray-800'>
            <FaHeart color="red" 
                className='w-[10vw] h-[20vh]'
            />
            <h1 className='text-center text-2xl'>Love match</h1>
            <p className='text-center'>Découvrez votre partenaire idéal</p>
            <input type="text" 
            placeholder='Enter your name'
            className='w-[25vw] border border-gray-900 px-2 py-1 rounded-lg'
            />
            <p className='text-center'>and</p>
            <input type="text" 
            placeholder="Enter your crush's name"
            className='w-[25vw] border border-gray-900 px-2 py-1 rounded-lg'
            />
            <button className='bg-red-400 cursor-pointer w-20 py-2 rounded-2xl transform transition duration-200 ease-in-out hover:scale-105'>Match</button>
        </div>
    )
}

export default FormUser