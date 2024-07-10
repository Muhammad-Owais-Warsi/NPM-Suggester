import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  // Enable scrolling on mount and disable on unmount
  React.useEffect(() => {
    document.body.style.overflow = "auto"; // Re-enable scrolling on mount
    return () => {
      document.body.style.overflow = "hidden"; // Disable scrolling on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center text-black  dark:bg-gray-900 dark:text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left md:w-1/2 px-8 py-16 md:py-0"
      >
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-500  dark:text-cyan-400">
            Contact Us
          </h1>
        </div>
        <p className="text-xl mb-8 max-w-prose">
          We would love to hear from you. Please reach out to us using the form
          below.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-gray-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/company/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </motion.div>
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-left md:w-1/2 px-8 py-16 md:py-0 ml-11"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-6 ">
          Send Us a Message
        </h2>
        <form className="flex flex-col items-center md:items-start space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 w-full md:w-96 rounded-md bg-gray-200 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 w-full md:w-96 rounded-md bg-gray-200 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 w-full md:w-96 rounded-md bg-gray-200 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md transition duration-300 transform hover:scale-105 hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
