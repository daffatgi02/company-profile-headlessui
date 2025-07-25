// file: src/components/TestimonialsSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import { testimonials } from '../constants/content';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimoni <span className="text-yellow-300">Alumni</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Dengarkan cerita sukses dari para alumni yang telah berkarir di berbagai 
            perusahaan terkemuka setelah lulus dari UTN.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Main Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-primary-600 font-semibold mb-1">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[activeTestimonial].year}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-yellow-300 w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;