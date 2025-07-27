import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiBriefcase,FiCalendar,FiMapPin,FiArrowRight}=FiIcons;

const Experience=()=> {
  const experiences=[ 
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      location: 'Tel-Aviv, Israel',
      period: '2022 - Present',
      type: 'Freelance',
      description: 'Developing responsive web applications and user interfaces for various clients using React,TypeScript,and modern frontend technologies.',
      achievements: [ 
        'Built 15+ responsive web applications from design to deployment',
        'Improved client website performance by 40% through optimization',
        'Collaborated with designers to implement pixel-perfect UI designs',
        'Integrated third-party APIs and services for enhanced functionality' 
      ],
      technologies: ['React','TypeScript','JavaScript','HTML5','CSS3','Tailwind CSS']
    },
    {
      title: 'UI/UX Designer & Frontend Developer',
      company: 'Digital Agency Tel-Aviv',
      location: 'Tel-Aviv, Israel',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Combined design and development skills to create engaging user experiences for web applications and websites.',
      achievements: [ 
        'Designed and developed 20+ websites and web applications',
        'Led design workshops and user research sessions',
        'Reduced development time by 30% through reusable component libraries',
        'Mentored junior developers on frontend best practices' 
      ],
      technologies: ['React','Vue.js','Figma','Adobe XD','Sass','JavaScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Startup Tel-Aviv',
      location: 'Tel-Aviv, Israel',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on building user interfaces and improving user experience for a growing SaaS platform.',
      achievements: [ 
        'Developed responsive dashboard interfaces for 5000+ users',
        'Implemented accessibility improvements increasing WCAG compliance',
        'Collaborated with product team on feature development and UX improvements',
        'Optimized application bundle size by 50% through code splitting' 
      ],
      technologies: ['React','Redux','JavaScript','CSS3','Webpack','Jest']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Web Development Agency',
      location: 'Tel-Aviv, Israel',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey developing websites and learning modern frontend development practices.',
      achievements: [ 
        'Completed 25+ client websites with high satisfaction ratings',
        'Learned and implemented modern JavaScript frameworks',
        'Participated in code reviews and agile development processes',
        'Contributed to internal documentation and best practices' 
      ],
      technologies: ['HTML5','CSS3','JavaScript','jQuery','Bootstrap','Git']
    } 
  ];

  return ( 
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div
          initial={{opacity: 0,y: 30}} 
          whileInView={{opacity: 1,y: 0}} 
          transition={{duration: 0.6}} 
          viewport={{once: true}} 
          className="text-center mb-16" 
        > 
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> 
            Professional Experience 
          </h2> 
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
            My journey through various roles,building expertise in frontend development and user experience design 
          </p> 
        </motion.div> 

        <div className="space-y-8"> 
          {experiences.map((exp,index)=> ( 
            <motion.div
              key={index} 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              transition={{delay: index * 0.1,duration: 0.6}} 
              viewport={{once: true}} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden" 
            > 
              <div className="p-8"> 
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"> 
                  <div className="flex-1"> 
                    <div className="flex items-center space-x-3 mb-2"> 
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"> 
                        <SafeIcon icon={FiBriefcase} className="text-white text-xl" /> 
                      </div> 
                      <div> 
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3> 
                        <p className="text-lg font-semibold text-primary-600">{exp.company}</p> 
                      </div> 
                    </div> 
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4"> 
                      <div className="flex items-center space-x-2"> 
                        <SafeIcon icon={FiCalendar} className="text-primary-500" /> 
                        <span>{exp.period}</span> 
                      </div> 
                      <div className="flex items-center space-x-2"> 
                        <SafeIcon icon={FiMapPin} className="text-primary-500" /> 
                        <span>{exp.location}</span> 
                      </div> 
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"> 
                        {exp.type} 
                      </span> 
                    </div> 
                  </div> 
                </div> 
                <p className="text-gray-600 text-lg leading-relaxed mb-6"> 
                  {exp.description} 
                </p> 
                <div className="mb-6"> 
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center"> 
                    <SafeIcon icon={FiArrowRight} className="text-primary-500 mr-2" /> 
                    Key Achievements 
                  </h4> 
                  <ul className="grid md:grid-cols-2 gap-3"> 
                    {exp.achievements.map((achievement,achIndex)=> ( 
                      <motion.li
                        key={achIndex} 
                        initial={{opacity: 0,x: -20}} 
                        whileInView={{opacity: 1,x: 0}} 
                        transition={{delay: achIndex * 0.1,duration: 0.4}} 
                        viewport={{once: true}} 
                        className="flex items-start space-x-3 text-gray-600" 
                      > 
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div> 
                        <span>{achievement}</span> 
                      </motion.li> 
                    ))} 
                  </ul> 
                </div> 
                <div> 
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4> 
                  <div className="flex flex-wrap gap-2"> 
                    {exp.technologies.map((tech,techIndex)=> ( 
                      <motion.span
                        key={techIndex} 
                        initial={{opacity: 0,scale: 0.8}} 
                        whileInView={{opacity: 1,scale: 1}} 
                        transition={{delay: techIndex * 0.05,duration: 0.3}} 
                        viewport={{once: true}} 
                        whileHover={{scale: 1.05}} 
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:border-primary-300 transition-colors cursor-default" 
                      > 
                        {tech} 
                      </motion.span> 
                    ))} 
                  </div> 
                </div> 
              </div> 
            </motion.div> 
          ))} 
        </div> 
      </div> 
    </section> 
  );
};

export default Experience;