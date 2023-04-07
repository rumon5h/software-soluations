import React from 'react';
import { toast } from 'react-hot-toast';


const Contact = () => {
    const handleEvent = (event) => {
        event.preventDefault();


        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        };
        console.log(data);
        toast.success(<span>
            Message sent successfully! <br /> <br />
            Thank you <b>{data.name}</b></span>)
    };
    return <div
        style={{ backgroundImage: `url('/images/provide-background.webp')` }}
        className='bg-white my-5 py-5 image-full'>
        <div data-aos="zoom-in-up" className="w-[350px] lg:w-[450px] mx-auto">
            
            <div className="p-6 shadow-xl  sm:rounded-md ">
            <h2 className='text-3xl text-center py-3'>Contact with Us</h2>
                <form onSubmit={handleEvent}>
                    <label className="block mb-6">
                        <span className="text-gray-900">Your name</span>
                        <input
                            name="name"
                            type="text"
                            required
                            className=" px-5 border py-3 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                            placeholder="Enter your name"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-900">Email address</span>
                        <input
                            name="email"
                            type="email"
                            className="px-5 border py-3 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                            placeholder="Enter Your Email Address"
                            required
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-900">Message</span>
                        <textarea
                            name="message"
                            className="px-5 border py-3 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                            rows="3"
                            placeholder="Tell us what you're thinking about..."
                        ></textarea>
                    </label>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className=" btn
                        h-10
                        px-5
                        text-indigo-100
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-gray-800" >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
};

export default Contact;