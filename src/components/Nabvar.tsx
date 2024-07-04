import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center"
            >
                <a
                    href="https://github.com/Muhammad-Owais-Warsi/NPM-Suggester"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center"
                >
                    Contribute on GitHub
                </a>
            </motion.div>
        </nav>
    );
};

export default NavBar;
