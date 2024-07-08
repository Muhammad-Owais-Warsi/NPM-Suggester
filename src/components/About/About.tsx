import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-violet-600 flex flex-col items-center justify-center text-white py-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl px-4"
            >
                <FaInfoCircle size={50} className="mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-8">
                    We are dedicated to helping developers optimize their projects by providing quick recommendations for NPM packages. Our goal is to make your development process smoother and more efficient.
                </p>
                <p className="text-lg mb-8">
                    Our mission is to empower developers with accurate and relevant package suggestions, enhancing project efficiency and reducing development time.
                </p>
                <p className="text-lg mb-8">
                    Our vision is to become the preferred tool for developers seeking to manage dependencies effortlessly and streamline their workflow.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
