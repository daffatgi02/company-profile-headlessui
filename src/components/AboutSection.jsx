// file: src/components/AboutSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInLeft, fadeInRight } from '../utils/motionVariants';
import { schoolInfo } from '../constants/content';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-primary-600">{schoolInfo.shortName}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sebagai institusi pendidikan tinggi yang berdedikasi pada kemajuan teknologi dan inovasi, 
              kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul secara akademis, 
              tetapi juga siap menghadapi tantangan global.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 25 tahun dalam dunia pendidikan, kami telah meluluskan 
              ribuan mahasiswa yang kini berkarir di berbagai perusahaan terkemuka baik nasional maupun internasional.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-primary-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-secondary-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">10,000+</div>
                <div className="text-gray-600">Alumni Sukses</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="/api/placeholder/600/400" 
                alt="Campus Building"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;