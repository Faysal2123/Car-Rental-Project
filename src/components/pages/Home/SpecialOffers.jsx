import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const SpecialOffers = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-extrabold text-gray-900 text-center mb-4"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        Exclusive Special Offers
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 text-center mb-12"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        Explore our exclusive deals and save big on your next rental! Take
        advantage of limited-time offers and experience luxury at affordable
        rates.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Offer 1 */}
        <motion.div
          className="bg-indigo-100 p-8 rounded-xl shadow-lg text-gray-900 text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Get 15% Off for Weekend Rentals!
          </h3>
          <p className="text-lg mb-6">
            Enjoy your weekend getaway with a special discount on our premium
            car rentals. Book now and make memories that last!
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </motion.div>

        {/* Offer 2 */}
        <motion.div
          className="bg-teal-50 p-8 rounded-xl shadow-lg text-gray-900 text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Luxury Cars at $99/Day!
          </h3>
          <p className="text-lg mb-6">
            Drive in style this holiday season with unbeatable pricing. Our
            fleet of luxury cars is waiting for you!
          </p>
          <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors">
            Book Now
          </button>
        </motion.div>

        {/* Offer 3 */}
        <motion.div
          className="bg-yellow-100 p-8 rounded-xl shadow-lg text-gray-900 text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Weekend Special: 20% Off!
          </h3>
          <p className="text-lg mb-6">
            Make the most of your weekend with an exclusive 20% discount. Don’t
            miss out on this amazing offer!
          </p>
          <button className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffers;
