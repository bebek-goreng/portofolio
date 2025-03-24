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
            {[
              { src: "/Tailwind CSS.png", alt: "tailwind" },
              { src: "/HTML5.png", alt: "html" },
              { src: "/CSS3.png", alt: "css" },
              { src: "/postgres.png", alt: "postgresql" },
              { src: "/docker.png", alt: "docker" },
              { src: "/javascript.png", alt: "javascript" },
              { src: "/react.png", alt: "react" },
              { src: "/nodejs.png", alt: "nodejs" },
              { src: "/git.png", alt: "git" },
              { src: "/expressjs.png", alt: "express" },
              { src: "/Vite.js.png", alt: "vite" },
              { src: "/Next.js.png", alt: "next" },
              { src: "/Nest.js.png", alt: "nest" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex justify-center items-center">
                <Image
                  src={src}
                  alt={alt}
                  width={70}
                  height={70}
                  className="w-full h-auto max-w-[50px] sm:max-w-[60px] md:max-w-[70px] lg:max-w-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Tools;
