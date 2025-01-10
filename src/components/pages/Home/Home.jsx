import React from 'react';
import Banner from './Banner';
import Service from './Service';
import RecentListing from './RecentListing';
import SpecialOffers from './SpecialOffers';
import Qna from './Qna';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <RecentListing></RecentListing>
            <SpecialOffers></SpecialOffers>
            <Qna></Qna>
        </div>
    );
};

export default Home;