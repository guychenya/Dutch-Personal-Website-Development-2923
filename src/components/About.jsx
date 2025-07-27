import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiUsers, FiTrendingUp, FiAward, FiHeart, FiTarget } = FiIcons;

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: 'AI & Technology Leadership',
      description: 'Leading digital transformation initiatives and AI research projects with expertise in open-source solutions and enterprise SaaS implementations'
    },
    {
      icon: FiUsers,
      title: 'Global Team Management',
      description: 'Managing diverse, cross-functional teams across regulated industries with proven track record in large-scale project delivery'
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Transformation',
      description: 'Driving customer success and business growth through innovative AI-driven solutions and strategic technology implementations'
    },
    {
      icon: FiAward,
      title: 'Innovation Excellence',
      description: 'Continuously pushing boundaries with cutting-edge AI tools, local models, and emerging technologies to maximize business value'
    }
  ];

  const personalValues = [
    'Innovation & Research',
    'AI-Driven Solutions',
    'Global Leadership',
    'Digital Transformation',
    'Team Excellence',
    'Strategic Vision'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
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
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="text-xl leading-relaxed mb-6">
                I'm a highly accomplished Technology Executive and AI Research Leader based in Tel-Aviv, 
                with over 20 years of global experience driving digital transformation and innovation. 
                My expertise spans customer success, enterprise SaaS implementations, and cutting-edge 
                AI research in regulated industries.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My approach combines strategic leadership with hands-on technical expertise. I specialize 
                in exploring and leveraging open-source code, local models, and the latest AI tools to 
                create maximum value across every business process. I believe in the transformative power 
                of AI-driven solutions to solve complex challenges.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not leading technology initiatives, you'll find me researching emerging AI 
                technologies, contributing to open-source projects, or mentoring the next generation 
                of technology leaders. I'm passionate about pushing the boundaries of what's possible 
                with artificial intelligence and machine learning.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-primary-100 dark:border-gray-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <SafeIcon icon={FiHeart} className="text-primary-500 dark:text-primary-400 mr-2" />
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
                    <SafeIcon icon={FiTarget} className="text-accent-500 dark:text-accent-400 text-sm" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</span>
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
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <SafeIcon icon={item.icon} className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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