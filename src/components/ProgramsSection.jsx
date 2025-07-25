// file: src/components/ProgramsSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { staggerContainer, fadeInUp, scaleOnHover } from '../utils/motionVariants';
import { programs } from '../constants/content';

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProgram, setSelectedProgram] = useState(0);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program <span className="text-primary-600">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih program studi yang sesuai dengan passion dan cita-cita Anda. 
            Semua program dirancang untuk mempersiapkan Anda menghadapi masa depan.
          </p>
        </motion.div>

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
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                  {program.degree}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">Durasi</span>
                  <span className="text-sm font-semibold text-primary-600">
                    {program.duration}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  Pelajari Program
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;