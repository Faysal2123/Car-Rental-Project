import React from 'react';
import banner from'../../../assets/images/pexels-mikebirdy-120049.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='lg:h-[800px] w-full filter brightness-50 backdrop-blur-3xl' src={banner} alt="" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
                    <h1 className='lg:text-7xl text-3xl lg:font-semibold font-bold text-white mb-4'>Drive Your Dreams Today!</h1>
                    <p></p>
                    <Link to='/availableCars' className='btn btn-warning'>View Available Cars</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;