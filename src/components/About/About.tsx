import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black py-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left max-w-3xl px-4"
            >
                <div className="flex items-center justify-center mb-6">
                    <FaInfoCircle size={50} className="mr-4 text-blue-500" />
                    <h1 className="text-4xl font-bold text-blue-500">
                        About Us
                    </h1>
                </div>
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
