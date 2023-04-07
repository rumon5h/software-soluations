import React from 'react';
import { toast } from 'react-hot-toast';

const Booking = ({name}) => {
    const handleEvent = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        const booked = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.number.value,
            serviceName: event.target.serviceName.value,
            budget: event.target.budget.value,
            message: event.target.message.value,
            date: new Date()
        }

        toast.success(<span>Successfully booked the <b> {booked.serviceName} </b> service! <br/> <br/> We will contact you later.</span>)
        console.log(booked);
    }
    console.log(name);
    return (
        <div className='w-full  mx-auto  my-10  '>
            
            <form 
            onSubmit={handleEvent}
            className="max-w-lg mx-auto rounded-md  shadow-xl p-10">
                <h2 className='text-center text-4xl my-3'>Book a Service!</h2>
                <div className="flex flex-wrap -mx-3  mb-6">
                    <div className="w-full  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                            Your Name
                        </label>
                        <input name='name' required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Enter your name" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email Address
                        </label>
                        <input name='email' required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Enter your email" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                            Number
                        </label>
                        <input name='number' required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="number" placeholder="Enter your number" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-service-name">
                           Service Name
                        </label>
                        <input name='serviceName' required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-service-name" type="text" placeholder="Enter the service name" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-budget">
                            Enter Your budget
                        </label>
                        <input name='budget' required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-budget" type="text" placeholder="Enter your budgets $" />
                    </div>
                </div>

                
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                            Message
                        </label>

                        <textarea name='message' required className="textarea textarea-bordered textarea-lg
                        appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                        "  id="grid-message" placeholder="Message" ></textarea>
                    </div>
                </div>

                

                <button className='btn' type='submit'>Submit Now</button>

            </form>
        </div>
    );
};

export default Booking;