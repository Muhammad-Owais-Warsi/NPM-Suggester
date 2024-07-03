// components/Contact/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";

const Contact: React.FC = () => {
    // Remove scroll bar by applying CSS to the body
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-violet-600 flex flex-col items-center justify-center text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl mb-8 max-w-prose">
                    We would love to hear from you.
                </p>
            </motion.div>
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
        </div>
    );
};

export default Contact;
