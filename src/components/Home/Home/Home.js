import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Fitness from '../Fitness/Fitness';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <Services></Services>
            <Training></Training>
            <Testimonial></Testimonial>
            <Fitness></Fitness>
            <Footer></Footer>
        </div>
    );
};

export default Home;