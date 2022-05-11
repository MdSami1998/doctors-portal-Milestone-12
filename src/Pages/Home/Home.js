import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Footer from '../Shared/Footer/Footer'

const Home = () => {
    return (
        <div className='sm:px-0 lg:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;