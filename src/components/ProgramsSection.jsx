// file: src/components/ProgramsSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaBolt, 
  FaChartLine,
  FaClock,
  FaGraduationCap,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaBriefcase
} from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../utils/motionVariants';

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const programs = [
    {
      id: 1,
      icon: FaCode,
      title: "Teknik Informatika",
      subtitle: "Computer Science & AI",
      description: "Program studi yang fokus pada pengembangan software, artificial intelligence, cybersecurity, dan sistem informasi enterprise dengan pendekatan praktis dan industry-ready.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun (8 Semester)",
      degree: "S1",
      accreditation: "A",
      students: "2,500+",
      jobRate: "98%",
      gradient: "from-blue-500 to-purple-600",
      careerPaths: [
        "Software Engineer",
        "Data Scientist", 
        "AI/ML Engineer",
        "Cybersecurity Specialist",
        "Full-Stack Developer",
        "DevOps Engineer"
      ],
      facilities: [
        "AI & Machine Learning Lab",
        "Cybersecurity Research Center", 
        "Software Development Studio",
        "Cloud Computing Infrastructure"
      ],
      salary: "Rp 8-25 juta/bulan"
    },
    {
      id: 2,
      icon: FaDatabase,
      title: "Sistem Informasi",
      subtitle: "Business Intelligence & Analytics",
      description: "Menggabungkan teknologi informasi dengan manajemen bisnis untuk menciptakan solusi digital yang inovatif dan mengoptimalkan proses bisnis enterprise.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun (8 Semester)",
      degree: "S1",
      accreditation: "A",
      students: "1,800+",
      jobRate: "96%",
      gradient: "from-green-500 to-teal-600",
      careerPaths: [
        "Business Analyst",
        "IT Consultant",
        "System Analyst",
        "Product Manager",
        "Digital Transformation Specialist",
        "Data Analyst"
      ],
      facilities: [
        "Business Intelligence Lab",
        "ERP System Integration Lab",
        "Digital Marketing Analytics Studio",
        "Startup Incubator Hub"
      ],
      salary: "Rp 7-20 juta/bulan"
    },
    {
      id: 3,
      icon: FaBolt,
      title: "Teknik Elektro",
      subtitle: "IoT & Renewable Energy",
      description: "Mempelajari sistem kelistrikan, elektronika, renewable energy, dan teknologi IoT untuk masa depan berkelanjutan dengan fokus pada smart city solutions.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun (8 Semester)",
      degree: "S1",
      accreditation: "B+",
      students: "1,200+",
      jobRate: "94%",
      gradient: "from-orange-500 to-red-600",
      careerPaths: [
        "Electrical Engineer",
        "Power Systems Engineer",
        "IoT Solutions Developer",
        "Renewable Energy Specialist",
        "Automation Engineer",
        "Smart Grid Engineer"
      ],
      facilities: [
        "Power Systems Laboratory",
        "IoT & Embedded Systems Lab",
        "Renewable Energy Research Center",
        "Smart Grid Simulation Lab"
      ],
      salary: "Rp 6-18 juta/bulan"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-accent-100 to-orange-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30 blur-3xl"></div>

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
            <FaGraduationCap className="mr-2" />
            Program Studi Unggulan
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Pilih Program Studi
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Masa Depan Anda
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Semua program studi dirancang dengan kurikulum terkini, fasilitas modern, dan partnership industri 
            untuk mempersiapkan Anda menjadi professional yang siap menghadapi era digital.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProgram(program.id)}
              onHoverEnd={() => setHoveredProgram(null)}
              className="group bg-white rounded-3xl shadow-soft hover:shadow-large overflow-hidden transition-all duration-500 border border-gray-100"
            >
              {/* Image Header */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60`}></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                  <program.icon className={`text-lg bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`} />
                  <span className="text-sm font-bold text-gray-800">{program.degree}</span>
                </div>

                {/* Accreditation Badge */}
                <div className="absolute top-4 right-4 bg-success-500 text-white rounded-full px-3 py-1 text-sm font-bold flex items-center">
                  <FaStar className="mr-1 text-xs" />
                  {program.accreditation}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 mb-3">{program.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <FaClock className="text-primary-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Durasi</div>
                    <div className="text-sm font-bold text-gray-900">4 Tahun</div>
                  </div>
                  <div className="text-center">
                    <FaUsers className="text-secondary-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Mahasiswa</div>
                    <div className="text-sm font-bold text-gray-900">{program.students}</div>
                  </div>
                  <div className="text-center">
                    <FaBriefcase className="text-success-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Job Rate</div>
                    <div className="text-sm font-bold text-gray-900">{program.jobRate}</div>
                  </div>
                </div>

                {/* Salary Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-green-600 font-medium">Starting Salary</div>
                      <div className="text-lg font-bold text-green-700">{program.salary}</div>
                    </div>
                    <FaChartLine className="text-2xl text-green-500" />
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-colored transition-all duration-300 flex items-center justify-center group/btn`}
                >
                  Pelajari Program
                  <motion.div
                    animate={{ x: hoveredProgram === program.id ? [0, 5, 0] : 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </motion.button>

                {/* Extended Info (Hidden, shown on hover) */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredProgram === program.id ? 1 : 0, 
                    height: hoveredProgram === program.id ? 'auto' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="border-t border-gray-200 pt-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Career Paths:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.careerPaths.slice(0, 3).map((path, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {path}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Bingung Memilih Program Studi?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Tim konselor akademik kami siap membantu Anda menemukan program studi yang tepat sesuai minat dan bakat.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-colored hover:shadow-large transition-all duration-300 inline-flex items-center"
            >
              <FaUsers className="mr-3" />
              Konsultasi Gratis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;