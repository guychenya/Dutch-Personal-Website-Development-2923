import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { ThemeContext } from '../context/ThemeContext';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <SafeIcon icon={FiSun} className="text-xl text-yellow-400" />
      ) : (
        <SafeIcon icon={FiMoon} className="text-xl text-blue-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;