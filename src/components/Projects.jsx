import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiGithub, FiFolder, FiStar, FiUsers, FiTrendingUp } = FiIcons;

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern React and Node.js architecture.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Admin dashboard with analytics',
        'Mobile-responsive design'
      ],
      stats: {
        users: '10k+',
        performance: '99.9%',
        rating: '4.8/5'
      },
      github: 'https://github.com/gretakamps/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      status: 'Production'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and advanced project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Real-time collaboration',
        'Advanced filtering & search',
        'Team workspaces',
        'Progress tracking & analytics'
      ],
      stats: {
        users: '5k+',
        performance: '98.5%',
        rating: '4.7/5'
      },
      github: 'https://github.com/gretakamps/task-manager',
      live: 'https://taskmanager-demo.vercel.app',
      status: 'Production'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics platform with interactive charts, forecasting, and location-based weather tracking using multiple APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Express.js', 'MongoDB', 'Weather APIs', 'Chart.js'],
      features: [
        'Interactive weather charts',
        'Multi-location tracking',
        'Historical data analysis',
        'Weather alerts & notifications'
      ],
      stats: {
        users: '3k+',
        performance: '97.8%',
        rating: '4.6/5'
      },
      github: 'https://github.com/gretakamps/weather-dashboard',
      live: 'https://weather-analytics.vercel.app',
      status: 'Production'
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'A powerful analytics tool for social media managers to track engagement, analyze trends, and generate comprehensive reports across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Social APIs'],
      features: [
        'Multi-platform integration',
        'Advanced analytics & reporting',
        'Automated scheduling',
        'Competitor analysis'
      ],
      stats: {
        users: '7k+',
        performance: '99.2%',
        rating: '4.9/5'
      },
      github: 'https://github.com/gretakamps/social-analytics',
      live: 'https://social-analytics-demo.vercel.app',
      status: 'Production'
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with advanced search filters, virtual tours, mortgage calculator, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Mapbox', 'Tailwind'],
      features: [
        'Advanced property search',
        'Virtual tour integration',
        'Mortgage calculator',
        'Agent dashboard'
      ],
      stats: {
        users: '12k+',
        performance: '98.9%',
        rating: '4.8/5'
      },
      github: 'https://github.com/gretakamps/real-estate-platform',
      live: 'https://realestate-demo.vercel.app',
      status: 'Production'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform with course creation tools, student progress tracking, interactive quizzes, and certification management.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'JWT'],
      features: [
        'Course creation & management',
        'Interactive quizzes & assignments',
        'Progress tracking',
        'Certificate generation'
      ],
      stats: {
        users: '8k+',
        performance: '99.1%',
        rating: '4.7/5'
      },
      github: 'https://github.com/gretakamps/lms-platform',
      live: 'https://lms-demo.vercel.app',
      status: 'Beta'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Production' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <SafeIcon icon={FiFolder} className="text-primary-500" />
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUsers} className="text-primary-500" />
                      <span className="text-gray-600">Users:</span>
                      <span className="font-semibold text-gray-900">{project.stats.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiTrendingUp} className="text-green-500" />
                      <span className="text-gray-600">Uptime:</span>
                      <span className="font-semibold text-gray-900">{project.stats.performance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="text-yellow-500" />
                      <span className="font-semibold text-gray-900">{project.stats.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-md text-xs font-medium border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex-1 justify-center"
                  >
                    <SafeIcon icon={FiExternalLink} className="text-sm" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex-1 justify-center"
                  >
                    <SafeIcon icon={FiGithub} className="text-sm" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Check out my GitHub for the latest updates and contributions to open-source projects.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/gretakamps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              <SafeIcon icon={FiGithub} />
              <span>View All Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;