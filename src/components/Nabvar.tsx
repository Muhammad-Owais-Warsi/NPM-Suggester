// components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <ul className="flex justify-center space-x-6">
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
        </nav>
    );
};

export default NavBar;
