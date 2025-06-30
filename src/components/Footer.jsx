import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/gretakamps', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/gretakamps', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:greta.kamps@email.com', label: 'Email' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                Greta Kamps
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Frontend Developer & UI/UX Designer passionate about creating beautiful, 
                user-friendly web applications. Based in Amsterdam, available for new opportunities.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for freelance projects</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p>Amsterdam, Netherlands</p>
                <a
                  href="mailto:greta.kamps@email.com"
                  className="hover:text-primary-400 transition-colors duration-200 block"
                >
                  greta.kamps@email.com
                </a>
                <p className="text-sm">Available for freelance work</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 text-gray-300 hover:text-primary-400 transition-all duration-300"
              aria-label={social.label}
            >
              <SafeIcon icon={social.icon} className="text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <span>© {currentYear} Greta Kamps. Made with</span>
              <SafeIcon icon={FiHeart} className="text-red-400 animate-pulse" />
              <span>in Amsterdam</span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <SafeIcon icon={FiArrowUp} className="text-lg" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;