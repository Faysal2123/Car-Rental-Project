import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
          At Dream Drive, we are passionate about delivering unforgettable
          driving experiences. With a diverse fleet of luxury, sports, and
          classic cars, we provide top-tier car rental services tailored to your
          style and needs. Whether it's a weekend getaway or a special occasion,
          our mission is to make every journey extraordinary.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To redefine car rental with style, comfort, and customer
              satisfaction at the heart of everything we do.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in transparency, reliability, and excellence. Our
              team ensures a seamless and memorable experience for every
              customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;