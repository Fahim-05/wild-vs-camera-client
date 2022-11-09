import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Memory from '../Memory/Memory';
import Sample from '../Sample/Sample';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Sample></Sample>
            <Features></Features>
            <Memory></Memory>
            <Footer></Footer>
        </div>
    );
};

export default Home;