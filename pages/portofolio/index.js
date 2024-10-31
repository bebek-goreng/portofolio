// Work Component
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <motion.div
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0 mt-28"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h2 className="h2 xl:mt-8 text-accent">
              <span>My</span> Portfolio
            </h2>
            <p className="mb-6 max-w-[400px] mx-auto lg:mx-0">
              Here’s a collection of projects I've poured my skills and creativity into. From concept to execution, I’m thrilled to showcase what I’ve built and learned along the way. Dive in and explore my work!
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
