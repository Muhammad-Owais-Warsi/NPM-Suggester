import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri"; // Import GitHub icon from react-icons/ri

const Home: React.FC = () => {
    return (
        <div className="min-h-screen overflow-hidden  bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white px-4 ">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Welcome to NPM Package Suggester
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Get quick recommendations for NPM packages and optimize your projects.
                </p>
                <motion.div
                    className="mb-8 flex flex-col items-center md:flex-row md:items-center justify-center gap-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mb-4 md:mb-0 md:mr-4"
                    >
                        <Link
                            to="/main"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md transition duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-800"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contributors"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md transition duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-800"
                        >
                            View Contributors
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-12 max-w-screen-lg"
            >
                <h2 className="text-xl md:text-3xl font-bold mb-6">
                    Why Use NPM Package Suggester?
                </h2>
                <ul className="text-lg md:text-xl list-disc list-inside">
                    <li className="mb-2">Optimize your project's dependencies.</li>
                    <li className="mb-2">Get recommendations based on your specific needs.</li>
                </ul>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center max-w-screen-lg"
            >
                <motion.a
                    href="https://github.com/Muhammad-Owais-Warsi/NPM-Suggester"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contribute on GitHub
                    <RiGithubFill className="ml-2" size={20} /> {/* GitHub icon */}
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Home;
