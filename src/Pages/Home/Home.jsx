import React from 'react';
import Slider from '../../components/Slider/Slider';
import AboutProperty from '../../components/AboutProperty/AboutProperty';
import EstateSection from '../EstateSection/EstateSection';
import SubscribeNews from '../../components/SubscribeNews/SubscribeNews';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutProperty></AboutProperty>
            <EstateSection></EstateSection>
            <SubscribeNews></SubscribeNews>
        </div>
    );
};

export default Home;