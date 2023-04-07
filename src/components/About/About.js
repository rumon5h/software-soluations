import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({duration: 2000});

const About = () => {
    return (
        <div>
            
            <div className="hero shadow-lg min-h-screen gap-3 bg-base-100">
                <div className="hero-content justify-evenly flex-col lg:flex-row-reverse">

                    <div data-aos="zoom-in-up" className='mr-10 '>
                        <h1 className="text-5xl font-bold">

                        </h1>
                        <h1 className="text-5xl py-6">Solutions for Every Business Need</h1>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <h3 className='text-3xl text-gray-700 mb-3'>Best Quality Services</h3>
                                <p>
                                    We have a team of highly experienced personnel in design, development, and business strategy. We provide you with all kinds of digital business solutions.
                                </p>
                            </div>
                            <div>
                                <h3 className='text-3xl text-gray-700 mb-3'>100% Satisfaction</h3>
                                <p>
                                    Our main business goal is to offer our clients 100% satisfaction, and our team works towards achieving this and can provide free correction if you are not satisfied.
                                </p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button className="btn shadow-2xl h-12
                        text-indigo-100
                        rounded-[25px] px-10
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        bg-gray-700">Learn More</button>

                        </div>
                    </div>
                    <img data-aos="zoom-in-up" src="images/about-image.webp" className=" max-w-[50%] rounded-lg" alt='about-background' />
                </div>
            </div>
        </div>
    );
};

export default About;