// pages/Home.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-5xl font-bold mb-6">
                    Welcome to NPM Package Suggester
                </h1>
                <p className="text-xl mb-8">
                    Get quick recommendations for NPM packages and optimize your projects.
                </p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mb-6"
                >
                    <Link
                        to="/main"
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-4">
                    Why Use NPM Package Suggester?
                </h2>
                <ul className="text-lg list-disc list-inside">
                    <li className="mb-2">Optimize your project's dependencies.</li>
                    <li className="mb-2">Get recommendations based on your specific needs.</li>
                    <li className="mb-2">Improve project performance and maintainability.</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Home;
