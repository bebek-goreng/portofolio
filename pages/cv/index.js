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
        <h1 className="text-3xl mt-8 sm:text-4xl font-bold text-center mb-2 xl:mt-10 lg:mt-10 sm:mt-4">Sofyan Mahendra</h1>
        <p className="text-center text-md sm:text-lg mb-4">Software Developer Enthusiast</p>

        <div className="flex justify-center h-[45%] w-[60%] mb-4 md:h-[50%] md:w-[17%] sm:h-[90%] sm:w-[30%]">
          <img
            src="sofyan-mahendra-cv.png"
            alt="CV Preview"
            className="w-64 sm:w-80 border rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <div className='flex gap-4'>
            <a
              href="/sofyan-mahendra-cv.pdf"
              download="sofyan-mahendra-cv.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded text-base hover:bg-blue-600 transition"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/file/d/1U1iE-xKUA9f2EmD7UM4P62A29ueapVh2/view?usp=sharing"
              className="bg-blue-500 text-white px-4 py-2 rounded text-base hover:bg-blue-600 transition"
              target='_blank'
            >
              View CV
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CV;
