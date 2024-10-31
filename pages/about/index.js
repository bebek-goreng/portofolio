import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circle from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"; // Ensure this is defined correctly

export const aboutData = [
  {
    title: 'summary',
    info: [
      {
        title: 'Software Developer Enthusiast',
        description:
          `Hi, I’m Sofyan Mahendra! A software developer enthusiast who loves turning 
          ideas into interactive web experiences. I enjoy exploring the latest tech 
          and crafting seamless designs that feel as good as they look. Let’s build 
          something awesome!`,
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Information Systems - Universitas Terbuka Malang',
        stage: 'GPA 3.65, (2020 - 2024)',
      },
      {
        title: 'SMAN 1 DOLOPO',
        stage: '2018 - 2020',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'Fullstack web development bootcamp - By Angela Yu',
        stage: 'Udemy August 2024',
      },
      {
        title: 'Fullstack web development bootcamp - Rakamin Academy',
        stage: 'August 2024',
      },
      {
        title: 'Most outstanding student in bootcamp - Rakamin Academy',
        stage: 'August 2024',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circle />
      <div>
        <Avatar />
      </div>

      <motion.div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:mt-20 xl:py-12 xl:ml-auto xl:mx-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4">
                <div className="font-bold">{item.title}</div>
                {item.description && (
                  <p className="mt-2 text-white">{item.description}</p>
                )}
                {item.icons && (
                  <div className="flex gap-2 mt-2">{item.icons}</div>
                )}
                {item.stage && (
                  <div className="text-white">{item.stage}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
