import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiUsers, FiTrendingUp, FiAward, FiHeart, FiTarget } = FiIcons;

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: 'Frontend Expertise',
      description: 'Specialized in React, TypeScript, and modern frontend frameworks with focus on responsive design'
    },
    {
      icon: FiUsers,
      title: 'User-Centered Design',
      description: 'Creating intuitive interfaces that prioritize user experience and accessibility'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Focus',
      description: 'Optimizing applications for speed, scalability, and exceptional user performance'
    },
    {
      icon: FiAward,
      title: 'Quality Standards',
      description: 'Committed to writing clean, maintainable code following industry best practices'
    }
  ];

  const personalValues = [
    'Innovation & Creativity',
    'Continuous Learning',
    'User Experience',
    'Clean Code',
    'Team Collaboration',
    'Problem Solving'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                I'm a passionate Frontend Developer and UI/UX Designer based in Amsterdam with a deep love for 
                creating beautiful, functional web applications. With expertise in React, TypeScript, and modern 
                design principles, I transform ideas into engaging digital experiences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My approach combines technical excellence with creative design thinking. I believe that great 
                software not only works flawlessly but also delights users through thoughtful interface design 
                and intuitive interactions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring Amsterdam's design scene, experimenting with new 
                frontend technologies, or contributing to open-source projects that make the web more accessible 
                and beautiful for everyone.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiHeart} className="text-primary-500 mr-2" />
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiTarget} className="text-accent-500 text-sm" />
                    <span className="text-sm font-medium text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <SafeIcon icon={item.icon} className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;