// file: src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaGraduationCap, 
  FaUsers, 
  FaAward,
  FaPlay,
  FaChevronDown
} from 'react-icons/fa';
import { fadeInUp, fadeInDown, staggerContainer } from '../utils/motionVariants';
import { schoolInfo, backgroundImages } from '../constants/content';

const HeroSection = () => {
  const stats = [
    { icon: FaGraduationCap, number: "25+", label: "Tahun Pengalaman" },
    { icon: FaUsers, number: "15K+", label: "Alumni Sukses" },
    { icon: FaAward, number: "95%", label: "Job Placement" },
    { icon: FaRocket, number: "200+", label: "Mitra Industri" }
  ];

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Campus Background"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 via-primary-700/95 to-primary-900/95"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl opacity-20 blur-sm"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-15 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-accent-300 to-accent-500 rounded-lg opacity-25"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Content */}
        <div className="text-center text-white mb-3">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
            >
              <FaAward className="mr-2 text-accent-300" />
              <span className="text-sm font-medium">Akreditasi A • Kampus Teknologi Terdepan</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-accent-200 bg-clip-text text-transparent">
                {schoolInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
              {schoolInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed">
              {schoolInfo.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-colored transition-all duration-300 flex items-center justify-center"
            >
              <FaRocket className="mr-3 group-hover:animate-bounce-subtle" />
              Daftar Sekarang
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
            >
              <FaPlay className="mr-3 group-hover:scale-110 transition-transform" />
              Virtual Tour
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className="text-3xl text-accent-300 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>
    </section>
  );
};

export default HeroSection;