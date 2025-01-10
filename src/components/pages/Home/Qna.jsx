import React, { useState } from 'react';

const Qna = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {/* Question 1 */}
        <div className="mb-6">
          <div
            onClick={() => toggleAnswer(0)}
            className="bg-white p-6 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              What is the rental process?
            </h3>
          </div>
          {openIndex === 0 && (
            <div className="bg-gray-50 p-6 mt-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-gray-700">
                To rent a car, simply choose your preferred vehicle, provide
                the necessary documentation, and book the car. You can make the
                payment online or on-site depending on the availability of the
                vehicle.
              </p>
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="mb-6">
          <div
            onClick={() => toggleAnswer(1)}
            className="bg-white p-6 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Do you offer insurance for the cars?
            </h3>
          </div>
          {openIndex === 1 && (
            <div className="bg-gray-50 p-6 mt-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-gray-700">
                Yes, all our cars come with basic insurance coverage. You can
                also opt for additional insurance packages for extra protection.
              </p>
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div className="mb-6">
          <div
            onClick={() => toggleAnswer(2)}
            className="bg-white p-6 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              What happens if I return the car late?
            </h3>
          </div>
          {openIndex === 2 && (
            <div className="bg-gray-50 p-6 mt-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-gray-700">
                If you return the car late, there will be additional charges
                based on the rental agreement. We recommend returning the car
                on time to avoid extra fees.
              </p>
            </div>
          )}
        </div>

        {/* Question 4 */}
        <div className="mb-6">
          <div
            onClick={() => toggleAnswer(3)}
            className="bg-white p-6 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Are the cars available for long-term rentals?
            </h3>
          </div>
          {openIndex === 3 && (
            <div className="bg-gray-50 p-6 mt-2 rounded-xl shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-gray-700">
                Yes, we offer both short-term and long-term rentals. Contact
                our support team for customized pricing for long-term rentals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qna;
