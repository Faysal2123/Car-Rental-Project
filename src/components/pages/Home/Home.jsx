import React from 'react';
import Banner from './Banner';
import Service from './Service';
import RecentListing from './RecentListing';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <RecentListing></RecentListing>
        </div>
    );
};

export default Home;