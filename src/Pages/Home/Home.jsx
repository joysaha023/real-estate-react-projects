import React from 'react';
import Slider from '../../components/Slider/Slider';
import AboutProperty from '../../components/AboutProperty/AboutProperty';
import EstateSection from '../EstateSection/EstateSection';
import SubscribeNews from '../../components/SubscribeNews/SubscribeNews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HavenHQ - Home</title>
            </Helmet>
            <Slider></Slider>
            <AboutProperty></AboutProperty>
            <EstateSection></EstateSection>
            <SubscribeNews></SubscribeNews>
        </div>
    );
};

export default Home;