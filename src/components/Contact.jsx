import React, {useState, useContext} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {ThemeContext} from '../context/ThemeContext';

const {FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck, FiClock} = FiIcons;

const Contact = () => {
  const {darkMode} = useContext(ThemeContext);
  const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({name: '', email: '', subject: '', message: ''});
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'guy.chenya@gmail.com',
      href: 'mailto:guy.chenya@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+972 52 1234 567',
      href: 'tel:+97252123456',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Tel-Aviv, Israel',
      href: 'https://maps.google.com/?q=Tel-Aviv,Israel',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/guychenya',
      href: 'https://linkedin.com/in/guychenya',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const availability = {
    status: 'Available for new opportunities',
    response: 'Usually responds within 24 hours',
    timezone: 'IST (UTC+3)'
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: index * 0.1, duration: 0.6}}
                  viewport={{once: true}}
                  whileHover={{scale: 1.02, x: 5}}
                  href={info.href}
                  target={info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                    <SafeIcon icon={info.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              viewport={{once: true}}
              className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-primary-100 dark:border-gray-600"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Availability Status</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{availability.status}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiClock} className="text-primary-500 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">{availability.response}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiMapPin} className="text-primary-500 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">Timezone: {availability.timezone}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCheck} className="text-green-600 dark:text-green-300 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 resize-none dark:text-white"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.4, duration: 0.6}}
          viewport={{once: true}}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">Connect with me on social media</h4>
          <div className="flex justify-center space-x-6">
            {[
              {icon: FiGithub, href: 'https://github.com/guychenya', label: 'GitHub'},
              {icon: FiLinkedin, href: 'https://linkedin.com/in/guychenya', label: 'LinkedIn'},
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{scale: 1.1, y: -2}}
                whileTap={{scale: 0.95}}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
                aria-label={social.label}
              >
                <SafeIcon icon={social.icon} className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;