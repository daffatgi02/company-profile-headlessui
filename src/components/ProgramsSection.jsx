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
  FaBriefcase,
  FaPlay,
  FaHeart,
  FaBookmark,
  FaEye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward
} from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../utils/motionVariants';

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProgram, setSelectedProgram] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      id: 1,
      icon: FaCode,
      title: "Teknik Informatika",
      subtitle: "Computer Science & AI",
      description: "Program studi yang fokus pada pengembangan software, artificial intelligence, cybersecurity, dan sistem informasi enterprise dengan pendekatan praktis dan industry-ready.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun",
      degree: "S1",
      accreditation: "A",
      students: "2,500+",
      jobRate: "98%",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
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
      salary: "Rp 8-25 juta",
      rating: 4.9,
      reviews: 245
    },
    {
      id: 2,
      icon: FaDatabase,
      title: "Sistem Informasi",
      subtitle: "Business Intelligence & Analytics",
      description: "Menggabungkan teknologi informasi dengan manajemen bisnis untuk menciptakan solusi digital yang inovatif dan mengoptimalkan proses bisnis enterprise.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun",
      degree: "S1",
      accreditation: "A",
      students: "1,800+",
      jobRate: "96%",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
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
      salary: "Rp 7-20 juta",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      icon: FaBolt,
      title: "Teknik Elektro",
      subtitle: "IoT & Renewable Energy",
      description: "Mempelajari sistem kelistrikan, elektronika, renewable energy, dan teknologi IoT untuk masa depan berkelanjutan dengan fokus pada smart city solutions.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Tahun",
      degree: "S1",
      accreditation: "B+",
      students: "1,200+",
      jobRate: "94%",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
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
      salary: "Rp 6-18 juta",
      rating: 4.7,
      reviews: 156
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-accent-200/40 to-orange-200/40 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

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
            className="inline-flex items-center bg-white shadow-soft text-primary-600 rounded-full px-6 py-3 text-sm font-semibold mb-8 border border-primary-100"
          >
            <FaGraduationCap className="mr-2" />
            Program Studi Unggulan
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Wujudkan Impian Karir
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Masa Depan Anda
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Pilih program studi yang dirancang khusus dengan kurikulum industry-ready,
            fasilitas modern, dan jaminan karir yang cemerlang di era digital.
          </p>

          {/* Program Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                onClick={() => setSelectedProgram(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${selectedProgram === index
                    ? `bg-gradient-to-r ${program.gradient} text-white shadow-colored`
                    : 'bg-white text-gray-600 hover:text-gray-900 shadow-soft hover:shadow-medium'
                  }`}
              >
                <program.icon className="inline mr-2" />
                {program.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Program Card */}
        <motion.div
          key={selectedProgram}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className={`bg-gradient-to-br ${programs[selectedProgram].bgGradient} rounded-3xl overflow-hidden shadow-large border border-white/50 backdrop-blur-sm`}>
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Image Section */}
              <div className="relative h-80 lg:h-full">
                <img
                  src={programs[selectedProgram].image}
                  alt={programs[selectedProgram].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${programs[selectedProgram].gradient} opacity-20`}></div>

                {/* Floating Info Cards - PERBAIKAN */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-large"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${programs[selectedProgram].gradient} rounded-xl flex items-center justify-center`}>
                      {/* PERBAIKAN: Render icon menggunakan createElement atau conditional */}
                      {(() => {
                        const IconComponent = programs[selectedProgram].icon;
                        return <IconComponent className="text-white text-xl" />;
                      })()}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{programs[selectedProgram].degree}</div>
                      <div className="text-sm text-gray-600">{programs[selectedProgram].duration}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Rating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-large"
                >
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-gray-900">{programs[selectedProgram].rating}</span>
                    <span className="text-sm text-gray-600">({programs[selectedProgram].reviews} reviews)</span>
                  </div>
                </motion.div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-large hover:bg-white transition-colors duration-300"
                >
                  <FaPlay className="text-primary-600 text-xl ml-1" />
                </motion.button>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {programs[selectedProgram].title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${programs[selectedProgram].gradient} bg-clip-text text-transparent mb-4`}>
                      {programs[selectedProgram].subtitle}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <FaHeart className="text-gray-600 hover:text-red-500" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <FaBookmark className="text-gray-600 hover:text-blue-500" />
                    </motion.button>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {programs[selectedProgram].description}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                    <FaUsers className="text-primary-500 text-xl mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">Students</div>
                    <div className="font-bold text-gray-900">{programs[selectedProgram].students}</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                    <FaBriefcase className="text-success-500 text-xl mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">Job Rate</div>
                    <div className="font-bold text-gray-900">{programs[selectedProgram].jobRate}</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                    <FaAward className="text-yellow-500 text-xl mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">Akreditasi</div>
                    <div className="font-bold text-gray-900">{programs[selectedProgram].accreditation}</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/50">
                    <FaChartLine className="text-green-500 text-xl mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">Salary</div>
                    <div className="font-bold text-gray-900 text-xs">{programs[selectedProgram].salary}</div>
                  </div>
                </div>

                {/* Career Paths */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FaBriefcase className="mr-2 text-primary-500" />
                    Career Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[selectedProgram].careerPaths.slice(0, 4).map((path, idx) => (
                      <span key={idx} className="text-xs bg-white/80 text-gray-700 px-3 py-2 rounded-full border border-gray-200 font-medium">
                        {path}
                      </span>
                    ))}
                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-2 rounded-full font-medium">
                      +{programs[selectedProgram].careerPaths.length - 4} more
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 bg-gradient-to-r ${programs[selectedProgram].gradient} text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-colored hover:shadow-large transition-all duration-300 flex items-center justify-center group`}
                  >
                    Daftar Program
                    <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl font-semibold border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 flex items-center justify-center"
                  >
                    <FaEye className="mr-2" />
                    Detail Program
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(program.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProgram(index)}
              className={`group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 border-2 cursor-pointer ${selectedProgram === index
                  ? `border-primary-200 shadow-colored`
                  : 'border-gray-100 hover:border-gray-200'
                }`}
            >
              {/* Compact Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60`}></div>

                {/* Quick Info Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                    <program.icon className={`text-sm bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`} />
                    <span className="text-xs font-bold text-gray-800">{program.degree}</span>
                  </div>

                  <div className="bg-success-500 text-white rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <FaStar className="mr-1 text-xs" />
                    {program.accreditation}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === program.id ? 1 : 0
                  }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredCard === program.id ? 1 : 0
                    }}
                    className="bg-white rounded-full p-3"
                  >
                    <FaEye className="text-primary-600 text-xl" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Compact Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${selectedProgram === index ? 'text-primary-600' : 'text-gray-900'
                  }`}>
                  {program.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Mini Stats */}
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FaUsers className="mr-1" />
                    {program.students}
                  </span>
                  <span className="flex items-center">
                    <FaBriefcase className="mr-1" />
                    {program.jobRate}
                  </span>
                  <span className="flex items-center">
                    <FaStar className="mr-1 text-yellow-400" />
                    {program.rating}
                  </span>
                </div>

                {/* Quick CTA */}
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedProgram === index
                    ? `bg-gradient-to-r ${program.gradient} text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                  {selectedProgram === index ? 'Program Terpilih' : 'Pilih Program'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-pattern-dots"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Masih Ragu Memilih Program?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Konsultasi gratis dengan academic advisor kami untuk menemukan program studi yang tepat sesuai passion dan karir impian Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FaUsers className="mr-3" />
                  Konsultasi Gratis
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FaCalendarAlt className="mr-3" />
                  Campus Tour
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;