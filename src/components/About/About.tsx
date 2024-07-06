import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
    // Remove scroll bar by applying CSS to the body
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-violet-600 flex flex-col items-center justify-center text-white pb-11">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <FaInfoCircle size={50} className="m-0" />
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-xl mb-8 max-w-prose">
                    We are dedicated to helping developers optimize their projects by providing quick recommendations for NPM packages. Our goal is to make your development process smoother and more efficient.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-4 max-w-prose">
                    To empower developers by providing accurate and relevant package suggestions, helping them to keep their projects up-to-date and optimized.
                </p>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg mb-4 max-w-prose">
                    To become the go-to tool for developers looking to manage their dependencies and streamline their workflow.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
