// file: src/components/AboutSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHistory, 
  FaTrophy, 
  FaUsers, 
  FaGlobeAsia,
  FaChartLine,
  FaHandshake
} from 'react-icons/fa';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../utils/motionVariants';
import { schoolInfo } from '../constants/content';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: FaHistory,
      number: "25+",
      label: "Tahun Berpengalaman",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaUsers,
      number: "15,000+",
      label: "Alumni Sukses",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaTrophy,
      number: "A",
      label: "Akreditasi",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaGlobeAsia,
      number: "200+",
      label: "Mitra Global",
      color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: FaChartLine,
      title: "Pertumbuhan Karir Terjamin",
      description: "95% lulusan mendapat pekerjaan dalam 6 bulan dengan gaji rata-rata 25% di atas standar industri"
    },
    {
      icon: FaHandshake,
      title: "Kemitraan Industri Strong",
      description: "Kolaborasi dengan 200+ perusahaan multinasional untuk program magang dan rekrutmen eksklusif"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-primary-50 text-primary-600 rounded-full px-4 py-2 text-sm font-semibold mb-6"
              >
                <FaTrophy className="mr-2" />
                Tentang Kami
              </motion.div>

              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Membangun 
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Masa Depan </span>
                Digital Indonesia
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sebagai institusi pendidikan tinggi pionir dalam teknologi dan inovasi, 
                <strong className="text-primary-600"> {schoolInfo.shortName} </strong>
                telah menjadi pilihan utama ribuan mahasiswa untuk meraih karir impian di era digital.
              </p>

              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${achievement.color} p-6 rounded-2xl text-white shadow-large group-hover:shadow-colored transition-all duration-300`}>
                    <achievement.icon className="text-2xl mb-3 opacity-90" />
                    <div className="text-3xl font-bold mb-1">{achievement.number}</div>
                    <div className="text-sm opacity-90 font-medium">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Campus Students Studying"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Job Placement Rate</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl opacity-80 -z-10"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-70 -z-10"
            />

            {/* Undraw Illustration Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-12 -right-12 w-48 h-48 hidden lg:block"
            >
              <img 
                src="https://illustration.undraw.co/education.svg" 
                alt="Education Illustration"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;