import React from 'react';
import banner from '../../../assets/images/pexels-mikebirdy-120049.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='lg:h-[800px] h-[350px] w-full filter brightness-50 backdrop-blur-3xl' src={banner} alt="Car banner" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full'>
                    <h1 className='lg:text-7xl text-4xl lg:font-semibold font-bold text-white mb-4 w-full'>
                        Drive Your Dreams Today!
                    </h1>
                    <div className='flex text-center justify-center'>
                    <p className='lg:text-lg text-white lg:mb-6 mb-3 w-full lg:w-[900px]'>
                        Discover a wide range of luxury cars available for rent at unbeatable prices. Start your adventure today and enjoy the road like never before.
                    </p>
                    </div>
                    <Link to='/availableCars' className='btn btn-warning text-lg'>
                        View Available Cars
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
