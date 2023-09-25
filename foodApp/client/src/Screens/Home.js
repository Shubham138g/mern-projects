import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';

const Home = () => {
    return (
        <>
            <NavBar />
            <div>
                <Carousel />
            </div>
            <div className='m-3'>
                <Card />
            </div>
            <Footer />

        </>
    );
}

export default Home;
