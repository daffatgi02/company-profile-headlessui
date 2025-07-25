// file: src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown } from '../utils/motionVariants';
import { schoolInfo } from '../constants/content';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="13" cy="13" r="1"/%3E%3Ccircle cx="19" cy="19" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center text-white">
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {schoolInfo.name}
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
            {schoolInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-8">
            {schoolInfo.description}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Daftar Sekarang
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;