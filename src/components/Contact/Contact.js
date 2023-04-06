import React from 'react';


const Contact = () => {
    const handleEvent = (event) => {
        event.preventDefault();
        

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        };
        console.log(data);
    };
    return <div className='bg-gray-900 border border-gray-600 py-5'>
        <div className="w-[350px] lg:w-[450px] mx-auto">
            <div className="p-6  sm:rounded-md ">
                <form onSubmit={handleEvent}>
                    <label className="block mb-6">
                        <span className="text-gray-300">Your name</span>
                        <input
                            name="name"
                            type="text"
                            required
                            className=" px-5 border py-3 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                            placeholder="Enter your name"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-300">Email address</span>
                        <input
                            name="email"
                            type="email"
                            className="px-5 border py-3 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                            placeholder="Enter Your Email Address"
                            required
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-300">Message</span>
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