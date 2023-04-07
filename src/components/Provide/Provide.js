import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Provide = () => {
    return (
        <div
            style={{ backgroundImage: `url('/images/provide-background.webp')` }}
            className='text-center p-20 m-10 image-full '>

            <h1 className='text-5xl font-bold mb-10'>We Provide</h1>
            <h1 className='text-5xl font-bold mb-10'> Outsourced IT Services </h1>
            <p className='text-gray-700'>
                We offer IT services for a specific business, which is why we don’t compromise the quality of our IT services.
            </p>

            <div className='flex justify-center items-center mt-10'>
                <AiOutlineWhatsApp className='cursor-pointer text-green-700 w-16 h-16 rounded-lg shadow-2xl mr-3'></AiOutlineWhatsApp>
                <AiOutlineWhatsApp className='cursor-pointer text-green-700 w-16 h-16 rounded-lg shadow-2xl'></AiOutlineWhatsApp>
            </div>

        </div>
    );
};

export default Provide;