import Banner from '@/components/HomeSections/Banner';
import Features from '@/components/HomeSections/Features';
import Feedback from '@/components/HomeSections/Feedback';
import GetInTouch from '@/components/HomeSections/GetInTouch';
import Services from '@/components/HomeSections/Services';
import TopProducts from '@/components/HomeSections/TopProducts';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <TopProducts></TopProducts>
            <Services></Services>
            <Feedback></Feedback>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;