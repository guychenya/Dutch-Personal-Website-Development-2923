import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiLayers, FiTool, FiPalette, FiSmartphone, FiUsers } = FiIcons;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: FiPalette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'User Research', level: 80 },
        { name: 'Wireframing', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Systems', level: 88 },
        { name: 'Accessibility', level: 85 },
        { name: 'Usability Testing', level: 75 }
      ]
    },
    {
      title: 'Responsive Design',
      icon: FiSmartphone,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Mobile-First Design', level: 95 },
        { name: 'CSS Grid', level: 90 },
        { name: 'Flexbox', level: 95 },
        { name: 'Media Queries', level: 90 },
        { name: 'Cross-Browser Testing', level: 85 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Progressive Web Apps', level: 75 },
        { name: 'Touch Interfaces', level: 85 }
      ]
    },
    {
      title: 'Development Tools',
      icon: FiTool,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 90 },
        { name: 'npm/Yarn', level: 90 },
        { name: 'Chrome DevTools', level: 90 },
        { name: 'ESLint/Prettier', level: 85 },
        { name: 'Jest/Testing', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: FiLayers,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Ecosystem', level: 95 },
        { name: 'Redux/Context', level: 85 },
        { name: 'Material-UI', level: 80 },
        { name: 'Styled Components', level: 85 },
        { name: 'Framer Motion', level: 80 },
        { name: 'React Router', level: 90 },
        { name: 'Axios/Fetch API', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: FiUsers,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Client Relations', level: 85 },
        { name: 'Mentoring', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Time Management', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities in frontend development and design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <SafeIcon icon={category.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Frontend development evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and design principles. I regularly participate in design communities and explore 
              emerging technologies that enhance user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;