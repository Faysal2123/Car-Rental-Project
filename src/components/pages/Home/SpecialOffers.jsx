import React from 'react';
import { motion } from 'framer-motion';

const SpecialOffers = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Exclusive Special Offers</h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Explore our exclusive deals and save big on your next rental! Take advantage of limited-time offers and experience luxury at affordable rates.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    
        <motion.div
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 p-8 rounded-xl shadow-xl text-white text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Get 15% Off for Weekend Rentals!</h3>
          <p className="text-lg mb-6">
            Enjoy your weekend getaway with a special discount on our premium car rentals. Book now and make memories that last!
          </p>
          <button className="px-8 py-3 bg-teal-500 text-gray-800 font-semibold rounded-full hover:bg-teal-600 transition-colors">
            Learn More
          </button>
        </motion.div>

    
        <motion.div
          className="bg-gradient-to-r from-teal-500 via-blue-600 to-teal-700 p-8 rounded-xl shadow-xl text-white text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Luxury Cars at $99/Day!</h3>
          <p className="text-lg mb-6">
            Drive in style this holiday season with unbeatable pricing. Our fleet of luxury cars is waiting for you!
          </p>
          <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors">
            Book Now
          </button>
        </motion.div>

  
        <motion.div
          className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 p-8 rounded-xl shadow-xl text-white text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Weekend Special: 20% Off!</h3>
          <p className="text-lg mb-6">
            Make the most of your weekend with an exclusive 20% discount. Don’t miss out on this amazing offer!
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-full hover:bg-yellow-600 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffers;
