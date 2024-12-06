import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const footerLinks = {
    Product: ['Features', 'Security', 'Team', 'Enterprise'],
    Company: ['About', 'Careers', 'Partners', 'Blog'],
    Resources: ['Documentation', 'Help Center', 'Status', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  const socialIcons = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Mail, href: '#' },
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-20"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
                Alfie
              </h3>
              <p className="text-gray-400 mb-6">
                Create moments for what matters. Smart leave management for modern teams.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className="space-y-4">
              <motion.h4 
                variants={itemVariants}
                className="text-sm font-semibold text-gray-300 uppercase tracking-wider"
              >
                {title}
              </motion.h4>
              <motion.ul variants={itemVariants} className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center"
        >
          <p>© 2024 Alfie. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
