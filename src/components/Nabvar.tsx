import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri"; // Import GitHub icon from react-icons/ri

const NavBar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md flex items-center justify-between">
            {/* Animated H1 Tag */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl font-bold"
            >
                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    NPM Suggester
                </motion.span>
            </motion.h1>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
                {["Home", "About", "Contact"].map((text, index) => (
                    <motion.li
                        key={text}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            to={text === "Home" ? "/" : `/${text.replace(" ", "").toLowerCase()}`}
                            className="text-white font-semibold hover:text-gray-200 transition-colors duration-300"
                        >
                            {text}
                        </Link>
                    </motion.li>
                ))}
            </ul>

            {/* GitHub Link */}
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
        </nav>
    );
};

export default NavBar;
