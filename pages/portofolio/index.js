// Work Component
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 pb-26 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <motion.div
            className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0 mt-5"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h2 className="h2 xl:mt-8 text-accent">
              <span>My</span> Portfolio
            </h2>
            <p className="mb-6 max-w-[400px] mx-auto lg:mx-0">
              Heres a collection of projects Ive poured my skills and creativity into.
            </p>
          </motion.div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
