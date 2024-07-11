import React from "react";
import { motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";

interface HistorySectionProps {
  searchHistory: string[];
  showHistory: boolean;
  toggleHistory: () => void;
  onHistoryItemClick: (item: string) => void;
  handleDeleteHistoryItem: (index: number) => void; // New prop
}

const HistorySection: React.FC<HistorySectionProps> = ({
  searchHistory,
  showHistory,
  toggleHistory,
  onHistoryItemClick,
  handleDeleteHistoryItem, // Added prop
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md dark:bg-gray-700 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="mb-6 text-center">
        <p className="text-2xl sm:text-xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400">
          Search History
        </p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 w-full text-sm sm:text-md md:text-xl"
        onClick={toggleHistory}
      >
        {showHistory ? "Hide History" : "Show History"}
      </button>

      {showHistory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="mt-4 bg-white bg-opacity-70 p-4 rounded-md shadow-lg"
        >
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-700">
            {searchHistory.map((item, idx) => (
              <li key={idx} className="mb-2 flex justify-between items-center">
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => onHistoryItemClick(item)}
                >
                  {item}
                </span>
                <FiTrash2
                  className="cursor-pointer text-red-600"
                  onClick={() => handleDeleteHistoryItem(idx)}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HistorySection;
