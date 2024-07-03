import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri"; // Import GitHub icon from react-icons/ri

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white px-4 pt-7">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-5xl font-bold mb-4">
                    Welcome to NPM Package Suggester
                </h1>
                <p className="text-xl mb-8">
                    Get quick recommendations for NPM packages and optimize your projects.
                </p>
                <motion.div
                    className="mb-8 flex items-center justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mr-4"
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
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-6">
                    Why Use NPM Package Suggester?
                </h2>
                <ul className="text-lg list-disc list-inside mb-8">
                    <li className="mb-2">Optimize your project's dependencies.</li>
                    <li className="mb-2">Get recommendations based on your specific needs.</li>
                    <li className="mb-2">Improve project performance and maintainability.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">
                    How It Works
                </h2>
                <p className="text-lg mb-8">
                    NPM Package Suggester leverages advanced algorithms to analyze your project's structure and dependencies. It then provides you with optimized recommendations to enhance your project's efficiency and maintainability.
                </p>
                <p className="text-lg mb-8">
                    Simply start by entering your project details or linking your repository, and let NPM Package Suggester do the rest. It's designed to integrate seamlessly into your workflow, making it easier than ever to manage NPM packages.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/main"
                        className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
                    >
                        Start Optimizing
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mb-8"
            >
                <p className="text-lg mb-4">
                    Want to contribute? Visit our GitHub repository.
                </p>
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
