// pages/cv.js
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';

const CV = () => {
  return (
    <>
      <Circles />
      <motion.div
        className="flex flex-col items-center justify-center h-screen container mx-auto p-4 sm:p-6"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 xl:mt-10 lg:mt-10">Sofyan Mahendra</h1>
        <p className="text-center text-md sm:text-lg mb-4">Software Developer Enthusiast</p>

        <div className="flex justify-center mb-6">
          <img
            src="/cv-preview.png"
            alt="CV Preview"
            className="w-64 sm:w-80 border rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <a
            href="/SOFYAN-MAHENDRA.pdf"
            download="SOFYAN-MAHENDRA.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded text-base hover:bg-blue-600 transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default CV;
