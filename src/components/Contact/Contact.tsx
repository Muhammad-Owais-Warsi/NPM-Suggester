// components/Contact/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
    // Remove scroll bar by applying CSS to the body
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 to-purple-600 flex flex-col items-center justify-center text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl mb-8 max-w-prose">
                    We would love to hear from you. Please reach out to us using any of the methods below.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center space-y-6"
            >
                <div className="flex items-center space-x-4">
                    <FaEnvelope size={30} />
                    <span className="text-lg">email@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaPhone size={30} />
                    <span className="text-lg">+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt size={30} />
                    <span className="text-lg">123 Developer Lane, Suite 100, Dev City</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaEnvelope size={30} />
                    <span className="text-lg">support@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaPhone size={30} />
                    <span className="text-lg">+123 789 4560</span>
                </div>
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt size={30} />
                    <span className="text-lg">456 Tech Avenue, Suite 200, Tech City</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
