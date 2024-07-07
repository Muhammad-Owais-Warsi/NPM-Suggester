import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiGithubFill, RiMoonFill, RiSunFill, RiNpmjsLine } from "react-icons/ri";

const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 p-4 shadow-md flex justify-between md:flex-row flex-col">
      {/* Animated H1 Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="flex items-center text-white dark:text-gray-100 text-2xl font-bold mb-4 pt-3 md:mb-0"
      >
        <Link to="/">
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center space-x-2">
          <RiNpmjsLine size={32} className="text-red-600" />
          <span>NPM Suggester</span>
        </motion.span>
        </Link>
      </motion.div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap md:flex-row space-x-6 pt-3 mb-4 md:mb-0">
        {["Home", "About", "Contact"].map((text, index) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:w-1/9"
          >
            <Link
              to={text === "Home" ? "/" : `/${text.replace(" ", "").toLowerCase()}`}
              className="text-white dark:text-gray-200 font-semibold hover:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300"
            >
              {text}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Dark Mode Toggle and GitHub Link */}
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-yellow-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
        </motion.button>

        <motion.a
          href="https://github.com/Muhammad-Owais-Warsi/NPM-Suggester"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-gray-100 font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contribute on GitHub
          <RiGithubFill className="ml-2" size={20} /> {/* GitHub icon */}
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
