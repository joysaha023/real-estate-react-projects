import React from 'react';
import Slider from '../../components/Slider/Slider';
import AboutProperty from '../../components/AboutProperty/AboutProperty';
import EstateSection from '../EstateSection/EstateSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutProperty></AboutProperty>
            <EstateSection></EstateSection>
        </div>
    );
};

export default Home;