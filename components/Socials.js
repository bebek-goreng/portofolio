import Link from "next/link";
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiWhatsappLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl xl:mr-24">
      <Link href="https://www.instagram.com/bebekbetutuuuuuu/" target="_blank" rel="noopener noreferrer">
        <RiInstagramLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://www.linkedin.com/in/sofyan-mahendra" target="_blank" rel="noopener noreferrer">
        <RiLinkedinLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://github.com/bebek-goreng" target="_blank" rel="noopener noreferrer">
        <RiGithubLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://wa.me/6285821324501" target="_blank" rel="noopener noreferrer">
        <RiWhatsappLine className="hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Socials;
