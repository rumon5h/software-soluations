import React from 'react';
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen gap-3 bg-base-100">
                <div className="hero-content justify-evenly flex-col lg:flex-row-reverse">
                    <img data-aos="zoom-in-up" src="images/hero-background.jpg" className=" max-w-7xl rounded-lg shadow-2xl" alt='hero-background' />
                    <div data-aos="zoom-in-up" className='mr-10 '>
                        <h1 className="text-5xl font-bold">Real Time App</h1>
                        <h1 className="text-5xl py-6">Development Solutions</h1>
                        <div className='flex gap-3 mt-6'>
                            <button className="btn shadow-2xl 
                        h-12
                        px-5
                        text-indigo-100
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        bg-gray-700">Learn More</button>
                           <Link to="https://www.facebook.com/rumon5h" target='_blank'> <AiOutlineFacebook className=' cursor-pointer text-gray-700 w-12 h-12 rounded-lg shadow-2xl'></AiOutlineFacebook></Link>
                            <Link to="#"><AiOutlineWhatsApp className='cursor-pointer text-gray-700 w-12 h-12 rounded-lg shadow-2xl'></AiOutlineWhatsApp></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;