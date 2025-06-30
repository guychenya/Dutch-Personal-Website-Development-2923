import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiCalendar, FiMapPin, FiAward, FiUsers, FiTrendingUp } = FiIcons;

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Digital Media & Design',
      school: 'Amsterdam University of Applied Sciences',
      location: 'Amsterdam, Netherlands',
      period: '2014 - 2018',
      gpa: '8.3/10',
      description: 'Comprehensive program combining technical skills with design principles, focusing on user experience, web development, and digital media creation.',
      highlights: [
        'Graduated Cum Laude',
        'President of Digital Design Student Association',
        'Winner of Student Innovation Award 2017',
        'Internship at leading Dutch design agency'
      ],
      courses: [
        'User Experience Design',
        'Interactive Media Design',
        'Web Development Fundamentals',
        'Visual Communication',
        'Design Thinking',
        'Digital Marketing'
      ]
    }
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      icon: FiAward,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UX Design Professional Certificate',
      issuer: 'Google',
      date: '2022',
      icon: FiAward,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced TypeScript',
      issuer: 'Frontend Masters',
      date: '2022',
      icon: FiAward,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2021',
      icon: FiAward,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Consistently maintained high academic performance throughout studies',
      icon: FiTrendingUp,
      year: '2016-2018'
    },
    {
      title: 'Best UX Project',
      description: 'Awarded for innovative mobile app design and user research',
      icon: FiAward,
      year: '2017'
    },
    {
      title: 'Design Publication',
      description: 'Featured article on responsive design principles in design magazine',
      icon: FiBookOpen,
      year: '2018'
    },
    {
      title: 'Peer Tutoring',
      description: 'Tutored fellow students in web development and design principles',
      icon: FiUsers,
      year: '2017-2018'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic foundation and continuous learning through professional certifications
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                          <SafeIcon icon={FiBookOpen} className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                          <p className="text-lg font-semibold text-primary-600">{edu.school}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiCalendar} className="text-primary-500" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiMapPin} className="text-primary-500" />
                          <span>{edu.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: hIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Relevant Courses</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, cIndex) => (
                          <span
                            key={cIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={cert.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-primary-600 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={achievement.icon} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                      <span className="text-sm text-primary-600 font-semibold">{achievement.year}</span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;