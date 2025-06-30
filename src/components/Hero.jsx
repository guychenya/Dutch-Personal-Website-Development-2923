import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin } = FiIcons;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl md:text-5xl font-bold text-gray-600 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                    alt="Greta Kamps"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Greta Kamps
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 space-y-2">
              <p className="font-medium">Frontend Developer & UI/UX Designer</p>
              <div className="flex items-center justify-center space-x-2 text-lg">
                <SafeIcon icon={FiMapPin} className="text-primary-500" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate frontend developer with expertise in React, TypeScript, and modern web technologies. 
              I create beautiful, responsive, and user-friendly applications that deliver exceptional digital experiences 
              and drive business success.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <SafeIcon icon={FiMail} />
              <span>Get In Touch</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              className="flex items-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300"
            >
              <SafeIcon icon={FiDownload} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/gretakamps', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/gretakamps', label: 'LinkedIn' },
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-primary-600 transition-all duration-300 border border-gray-200 hover:border-primary-300"
                aria-label={social.label}
              >
                <SafeIcon icon={social.icon} className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;