import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const { pathname } = useLocation();

    return (
        <div className={`mx-10 mb-10 ${pathname === '/services' && 'mt-16'}`}>
            {
                pathname !== '/services' && <>
                    <h4 className='text-3xl text-center text-gray-900 mb-5'>Our Services</h4>
                    <h2 className='text-gray-900 text-5xl mt-3 text-center font-bold'>Solutions for Every </h2>
                    <h2 className='text-gray-900 text-5xl mb-10 mt-5 text-center font-bold'> IT Business Need</h2>
                </>
            }

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                {
                    services && services.map(service => <div

                        className='shadow-xl m-5 rounded-md '
                        key={service._id}>
                        <figure className="w-[160px] mx-auto">
                            <img src={service.image} alt="Shoes" className="rounded-lg align-middle w-[160px] h-[160px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.name}</h2>
                            <p className='text-gray-800 mt-3'>{service.body}</p>
                            <div className="card-actions">
                                <Link to="/booking" className='hover:bg-gray-700 hover:text-white border border-gray-500 py-2 mt-3 rounded-[20px] px-10'>Book now</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Services;