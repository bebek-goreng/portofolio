import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [error, setError] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!name || !email || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    const mailtoLink = `mailto:oresuki01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    setIsSubmitted(true);

    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 60000); 
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            className="h2 text-center mb-12"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let's <span className="text-accent">connect</span>
          </motion.h2>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {error && <p className="text-red-500">{error}</p>} 
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isSubmitted} 
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isSubmitted ? 'Sending...' : "Let's talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
