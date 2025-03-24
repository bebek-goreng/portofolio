import ParticlesContainer from '../components/ParticlesContainer';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center items-center xl:pt-30 xl:text-left h-full container mx-auto'>
          <motion.h1
            className='h1 '
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <span className='text-accent'>Hi there,</span>
            <span className=''> Iam Mahen</span>
          </motion.h1>
          <motion.p
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 xl:mb-16 pl-5'
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            A passionate software developer focused on crafting efficient and elegant solutions through code.
          </motion.p>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <div className=''>
          <ParticlesContainer />
        </div>
        <div className='w-full h-full max-w-[600px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]'>
        </div>
      </div>
    </div>
  );
};

export default Home;
