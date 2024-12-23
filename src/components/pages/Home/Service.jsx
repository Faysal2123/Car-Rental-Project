import React from 'react';
import img1 from '../../../assets/lottie/Animation3.json';
import img2 from '../../../assets/lottie/Animation4.json';
import img3 from '../../../assets/lottie/Animation5.json';
import img4 from '../../../assets/lottie/Animation6.json';
import Lottie from 'lottie-react';

const Service = () => {
  return (
    <div className='bg-black/80 lg:py-10 py-5'>
      
      <div>
        <h1 className='text-white lg:text-5xl font-semibold text-2xl text-center lg:mb-10 '>
          Why Choose Elite Rides Rental System?
        </h1>
      </div>

      {/* Grid for Lottie animations and texts */}
      <div className='grid grid-cols-1 lg:grid-cols-4  px-5 justify-center items-center lg:font-bold font-semibold'>
        <div className='text-center flex items-center flex-col'>
          <Lottie 
            animationData={img2} 
            style={{ height: '150px', width: '150px' }} 
          />
          <h2 className='text-white lg:mt-4 '>
            From budget-friendly options to luxury vehicles.
          </h2>
        </div>
        <div className='text-center flex items-center flex-col'>
          <Lottie 
            animationData={img4} 
            style={{ height: '150px', width: '150px' }} 
          />
          <h2 className='text-white lg:mt-4'>
            Flexible rental durations and easy booking.
          </h2>
        </div>
        <div className='text-center flex items-center flex-col'>
          <Lottie 
            animationData={img1} 
            style={{ height: '150px', width: '150px' }} 
          />
          <h2 className='text-white lg:mt-4'>
            Well-maintained and reliable vehicles.
          </h2>
        </div>
        <div className='text-center flex items-center flex-col'>
          <Lottie 
            animationData={img3} 
            style={{ height: '150px', width: '150px' }} 
          />
          <h2 className='text-white lg:mt-4'>
            24/7 customer support and assistance.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
