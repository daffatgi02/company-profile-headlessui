// file: src/components/FeaturesSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaBook, 
  FaChalkboardTeacher, 
  FaBuilding, 
  FaHandshake,
  FaCertificate,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../utils/motionVariants';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // State untuk track card mana yang sedang di-hover
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "Kurikulum Berbasis Industri 4.0",
      description: "Pembelajaran terkini dengan teknologi AI, Machine Learning, Cloud Computing, dan Internet of Things yang sesuai kebutuhan industri global.",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      details: [
        "Curriculum berbasis KKNI terbaru",
        "Sertifikasi internasional terintegrasi",
        "Project-based learning methodology",
        "Industry 4.0 technology integration"
      ]
    },
    {
      id: 2,
      icon: FaChalkboardTeacher,
      title: "Dosen Expert & Praktisi",
      description: "Tim pengajar terdiri dari akademisi berpengalaman dan praktisi industri dengan track record di perusahaan global terkemuka.",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      details: [
        "95% bergelar S2/S3 dari universitas ternama",
        "Pengalaman industri 10+ tahun",
        "Publikasi jurnal internasional aktif",
        "Certified professionals & consultants"
      ]
    },
    {
      id: 3,
      icon: FaBuilding,
      title: "Smart Campus & Lab Modern",
      description: "Fasilitas pembelajaran berstandar internasional dengan teknologi terdepan untuk mendukung riset dan pengembangan inovasi.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      details: [
        "Smart classroom dengan IoT integration",
        "Research center & innovation lab",
        "High-performance computing facility",
        "Modern co-working & collaboration space"
      ]
    },
    {
      id: 4,
      icon: FaHandshake,
      title: "Global Industry Partnership",
      description: "Kerjasama strategis dengan 200+ perusahaan multinasional dan startup unicorn untuk program magang dan penempatan kerja.",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      details: [
        "Job guarantee program 95% success rate",
        "Exclusive internship dengan tech giants",
        "Industry mentorship & career coaching",
        "Alumni network di 50+ negara"
      ]
    },
    {
      id: 5,
      icon: FaCertificate,
      title: "Double Degree Program",
      description: "Kesempatan meraih gelar ganda dari universitas partner internasional dan sertifikasi profesi global yang diakui industri.",
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      details: [
        "Partnership dengan 15+ universitas top dunia",
        "AWS, Google, Microsoft certification",
        "Exchange program ke Silicon Valley",
        "Professional certification included"
      ]
    },
    {
      id: 6,
      icon: FaRocket,
      title: "Startup Incubator Hub",
      description: "Ekosistem entrepreneurship yang mendukung mahasiswa untuk mengembangkan startup dengan mentorship dari founder sukses.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      details: [
        "Seed funding up to $50,000",
        "Mentorship dari unicorn founders",
        "Access to venture capital network",
        "Demo day dengan investor global"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-accent-100 to-orange-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary-50 text-primary-600 rounded-full px-6 py-3 text-sm font-semibold mb-6"
          >
            <FaLightbulb className="mr-2" />
            Mengapa Memilih ABC?
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Keunggulan 
            </span>{' '}
            yang Membuat Kami
            <br />
            <span className="text-gray-900">Berbeda</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kami menawarkan pengalaman pendidikan yang komprehensif dengan fokus pada 
            inovasi teknologi, entrepreneurship, dan pengembangan karakter global-ready professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(feature.id)} // Set card yang di-hover
              onHoverEnd={() => setHoveredCard(null)} // Reset saat mouse leave
              className={`group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer`}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-colored transition-all duration-300`}
              >
                <feature.icon className="text-white text-2xl" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredCard === feature.id 
                    ? 'text-primary-600' 
                    : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Feature Details - HANYA MUNCUL DI CARD YANG DI-HOVER */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === feature.id ? 1 : 0, 
                    height: hoveredCard === feature.id ? 'auto' : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    {feature.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -10, opacity: 0 }}
                        animate={hoveredCard === feature.id ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Learn More Button - HANYA MUNCUL DI CARD YANG DI-HOVER */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredCard === feature.id ? 1 : 0,
                    y: hoveredCard === feature.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-6"
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary-600 font-semibold text-sm cursor-pointer flex items-center group/btn"
                  >
                    Pelajari Lebih Lanjut 
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-3xl opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-pattern-dots"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Siap Memulai Perjalanan Akademik Anda?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan mahasiswa yang telah memilih ABC sebagai langkah awal menuju karir impian di era digital.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
              >
                <FaRocket className="mr-3" />
                Konsultasi Gratis
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;