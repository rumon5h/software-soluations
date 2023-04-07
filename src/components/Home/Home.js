import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Provide from '../Provide/Provide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Provide/>  
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;

