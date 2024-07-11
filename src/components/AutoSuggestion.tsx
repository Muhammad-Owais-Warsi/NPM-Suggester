import React from 'react';
import { motion } from 'framer-motion';

interface AutoSuggestionProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const AutoSuggestion: React.FC<AutoSuggestionProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute mt-2 w-full bg-white dark:bg-slate-950 rounded-md shadow-lg z-10 max-h-60 overflow-auto"
    >
      {suggestions.map((suggestion, idx) => (
        <li
          key={idx}
          className="px-4 py-2 cursor-pointer hover:bg-gray-600"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </motion.ul>
  );
};

export default AutoSuggestion;
