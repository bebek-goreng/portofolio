import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

const Tools = () => {
  return (
    <>
      <Circles />

      <motion.div
        className="w-full h-full flex justify-center items-center"
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <div>
          <h1 className="text-4xl mb-16 text-center">
            <span className="text-accent">Tools </span>& Tech stack I use
          </h1>
          <div className="h-full w-full grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Image src={'/Tailwind CSS.png'} alt="tailwind" width={70} height={70} />
            <Image src={'/HTML5.png'} alt="html" width={70} height={70} />
            <Image src={'/CSS3.png'} alt="css" width={70} height={70} />
            <Image src={'/postgres.png'} alt="postgresql" width={70} height={70} />
            <Image src={'/docker.png'} alt="docker" width={70} height={70} />
            <Image src={'/javascript.png'} alt="javascript" width={70} height={70} />
            <Image src={'/react.png'} alt="react" width={70} height={70} />
            <Image src={'/nodejs.png'} alt="nodejs" width={70} height={70} />
            <Image src={'/git.png'} alt="git" width={70} height={70} />
            <Image src={'/expressjs.png'} alt="express" width={70} height={70} />
            <Image src={'/Vite.js.png'} alt="vite" width={70} height={70} />
            <Image src={'/Next.js.png'} alt="next" width={70} height={70} />
            <Image src={'/Nest.js.png'} alt="nest" width={70} height={70} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Tools;
