// file: src/components/Footer.jsx
import { motion } from 'framer-motion';
import { schoolInfo } from '../constants/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">{schoolInfo.name}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {schoolInfo.description}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {Object.entries(schoolInfo.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                >
                  <span className="text-sm font-bold">
                    {platform.charAt(0).toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Program Studi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teknik Informatika</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sistem Informasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teknik Elektro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manajemen</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span>{schoolInfo.contact.address}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span>{schoolInfo.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>{schoolInfo.contact.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-400"
        >
          <p>&copy; {currentYear} {schoolInfo.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;