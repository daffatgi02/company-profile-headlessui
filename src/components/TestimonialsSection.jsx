// file: src/components/TestimonialsSection.jsx (continued)
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
 FaQuoteLeft,
 FaStar,
 FaLinkedin,
 FaTwitter,
 FaInstagram,
 FaChevronLeft,
 FaChevronRight,
 FaBuilding,
 FaMapMarkerAlt
} from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';

const TestimonialsSection = () => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });
 const [activeTestimonial, setActiveTestimonial] = useState(0);

 const testimonials = [
   {
     id: 2,
     name: "Ahmad Rahman",
     role: "Senior Data Scientist",
     company: "Tokopedia",
     location: "Jakarta, Indonesia",
     year: "Lulusan 2019",
     program: "Teknik Informatika",
     content: "Fasilitas laboratorium yang lengkap dan project-based learning di ABC sangat membantu dalam mengembangkan skill praktis yang dibutuhkan industri. Mentorship dari alumni yang sudah berkarir juga sangat berharga dalam membentuk mindset professional.",
     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
     rating: 5,
     currentSalary: "IDR 45,000,000/month",
     achievement: "Published 5 ML research papers",
     social: {
       linkedin: "#",
       instagram: "#"
     },
     companyLogo: "https://logo.clearbit.com/tokopedia.com",
     gradient: "from-green-500 to-teal-600"
   },
   {
     id: 3,
     name: "Maya Sari",
     role: "Product Manager",
     company: "Gojek",
     location: "Jakarta, Indonesia",
     year: "Lulusan 2021",
     program: "Sistem Informasi",
     content: "Bukan hanya technical skills, ABC juga mengajarkan soft skills yang sangat penting dalam berkarir. Program magang dan kemitraan industri membantu saya mendapatkan pengalaman kerja bahkan sebelum lulus. Highly recommended untuk yang ingin berkarir di tech!",
     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
     rating: 5,
     currentSalary: "IDR 38,000,000/month",
     achievement: "Managed $2M product budget",
     social: {
       linkedin: "#",
       twitter: "#",
       instagram: "#"
     },
     companyLogo: "https://logo.clearbit.com/gojek.com",
     gradient: "from-pink-500 to-rose-600"
   },
   {
     id: 4,
     name: "David Chen",
     role: "IoT Solutions Architect",
     company: "Microsoft Azure",
     location: "Seattle, USA",
     year: "Lulusan 2018",
     program: "Teknik Elektro",
     content: "ABC taught me to think beyond textbooks. The hands-on approach and industry exposure prepared me for real-world challenges. Now I'm working on cutting-edge IoT solutions that impact millions of users globally. Forever grateful to ABC!",
     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
     rating: 5,
     currentSalary: "USD 145,000/year",
     achievement: "Architect for 10+ enterprise clients",
     social: {
       linkedin: "#",
       twitter: "#"
     },
     companyLogo: "https://logo.clearbit.com/microsoft.com",
     gradient: "from-orange-500 to-red-600"
   }
 ];

 const nextTestimonial = () => {
   setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
 };

 const prevTestimonial = () => {
   setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };

 const currentTestimonial = testimonials[activeTestimonial];

 return (
   <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
     {/* Background Effects */}
     <div className="absolute inset-0">
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-5"></div>
       <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-purple-900/95"></div>
     </div>

     {/* Floating Elements */}
     <motion.div
       animate={{
         y: [0, -20, 0],
         rotate: [0, 10, 0],
       }}
       transition={{
         duration: 8,
         repeat: Infinity,
         ease: "easeInOut"
       }}
       className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl"
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
       className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-600/20 rounded-full blur-xl"
     />

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
           className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20"
         >
           <FaQuoteLeft className="mr-2" />
           Testimoni Alumni
         </motion.div>

         <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
           Cerita Sukses
           <br />
           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
             Alumni ABC
           </span>
         </h2>

         <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
           Dengarkan langsung dari para alumni yang telah berkarir di perusahaan teknologi terkemuka 
           dunia dan meraih kesuksesan di berbagai bidang.
         </p>
       </motion.div>

       {/* Main Testimonial Card */}
       <motion.div
         variants={staggerContainer}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         className="relative max-w-6xl mx-auto"
       >
         <AnimatePresence mode="wait">
           <motion.div
             key={activeTestimonial}
             initial={{ opacity: 0, y: 50, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -50, scale: 0.9 }}
             transition={{ duration: 0.5 }}
             className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
           >
             {/* Background Gradient */}
             <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 rounded-full translate-x-1/2 -translate-y-1/2`}></div>

             <div className="relative z-10">
               <div className="grid lg:grid-cols-3 gap-8 items-center">
                 
                 {/* Avatar & Info */}
                 <div className="lg:col-span-1 text-center lg:text-left">
                   <motion.div
                     whileHover={{ scale: 1.05, rotate: 2 }}
                     className="relative inline-block mb-6"
                   >
                     <img
                       src={currentTestimonial.avatar}
                       alt={currentTestimonial.name}
                       className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-2xl mx-auto lg:mx-0"
                     />
                     <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                       <img
                         src={currentTestimonial.companyLogo}
                         alt={currentTestimonial.company}
                         className="w-8 h-8 object-contain"
                       />
                     </div>
                   </motion.div>

                   <h4 className="text-2xl font-bold text-gray-900 mb-2">
                     {currentTestimonial.name}
                   </h4>
                   <p className={`text-lg font-semibold bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent mb-2`}>
                     {currentTestimonial.role}
                   </p>
                   <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-2">
                     <FaBuilding className="mr-2" />
                     <span className="font-medium">{currentTestimonial.company}</span>
                   </div>
                   <div className="flex items-center justify-center lg:justify-start text-gray-500 mb-4">
                     <FaMapMarkerAlt className="mr-2" />
                     <span className="text-sm">{currentTestimonial.location}</span>
                   </div>

                   {/* Rating */}
                   <div className="flex justify-center lg:justify-start mb-4">
                     {[...Array(currentTestimonial.rating)].map((_, i) => (
                       <FaStar key={i} className="text-yellow-400 text-lg" />
                     ))}
                   </div>

                   {/* Social Links */}
                   <div className="flex justify-center lg:justify-start space-x-3">
                     {Object.entries(currentTestimonial.social).map(([platform, url]) => {
                       const Icon = platform === 'linkedin' ? FaLinkedin : 
                                  platform === 'twitter' ? FaTwitter : FaInstagram;
                       return (
                         <motion.a
                           key={platform}
                           href={url}
                           whileHover={{ scale: 1.2, y: -2 }}
                           whileTap={{ scale: 0.9 }}
                           className={`w-10 h-10 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full flex items-center justify-center text-white hover:shadow-colored transition-all duration-300`}
                         >
                           <Icon className="text-sm" />
                         </motion.a>
                       );
                     })}
                   </div>
                 </div>

                 {/* Content */}
                 <div className="lg:col-span-2">
                   <div className="relative">
                     <FaQuoteLeft className="text-4xl text-gray-300 absolute -top-4 -left-2" />
                     <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8 pl-8">
                       "{currentTestimonial.content}"
                     </blockquote>
                   </div>

                   {/* Achievement Cards */}
                   <div className="grid md:grid-cols-3 gap-4 mb-6">
                     <div className="bg-gray-50 rounded-2xl p-4 text-center">
                       <div className="text-sm text-gray-500 mb-1">Program Studi</div>
                       <div className="font-bold text-gray-900">{currentTestimonial.program}</div>
                     </div>
                     <div className="bg-gray-50 rounded-2xl p-4 text-center">
                       <div className="text-sm text-gray-500 mb-1">Tahun Lulus</div>
                       <div className="font-bold text-gray-900">{currentTestimonial.year}</div>
                     </div>
                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 text-center border border-green-100">
                       <div className="text-sm text-green-600 mb-1">Current Salary</div>
                       <div className="font-bold text-green-700">{currentTestimonial.currentSalary}</div>
                     </div>
                   </div>

                   {/* Achievement Highlight */}
                   <div className={`bg-gradient-to-r ${currentTestimonial.gradient} rounded-2xl p-4 text-white`}>
                     <div className="text-sm opacity-90 mb-1">Key Achievement</div>
                     <div className="font-bold text-lg">{currentTestimonial.achievement}</div>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>
         </AnimatePresence>

         {/* Navigation */}
         <div className="flex items-center justify-center mt-8 space-x-4">
           <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={prevTestimonial}
             className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
           >
             <FaChevronLeft />
           </motion.button>

           {/* Dots Indicator */}
           <div className="flex space-x-2">
             {testimonials.map((_, index) => (
               <motion.button
                 key={index}
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={() => setActiveTestimonial(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
                   activeTestimonial === index 
                     ? 'bg-white w-8' 
                     : 'bg-white/30 hover:bg-white/50'
                 }`}
               />
             ))}
           </div>

           <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={nextTestimonial}
             className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
           >
             <FaChevronRight />
           </motion.button>
         </div>
       </motion.div>

       {/* Stats Section */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, delay: 0.6 }}
         className="grid md:grid-cols-4 gap-6 mt-20"
       >
         {[
           { number: "15,000+", label: "Alumni Tersebar Global", icon: "🌍" },
           { number: "95%", label: "Job Placement Rate", icon: "💼" },
           { number: "200+", label: "Perusahaan Partner", icon: "🤝" },
           { number: "50+", label: "Negara Alumni Bekerja", icon: "✈️" }
         ].map((stat, index) => (
           <motion.div
             key={index}
             whileHover={{ y: -5, scale: 1.02 }}
             className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
           >
             <div className="text-3xl mb-3">{stat.icon}</div>
             <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
             <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
           </motion.div>
         ))}
       </motion.div>

       {/* CTA */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, delay: 0.8 }}
         className="text-center mt-16"
       >
         <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
           Siap Menjadi Alumni Sukses Berikutnya?
         </h3>
         <motion.button
           whileHover={{ scale: 1.05, y: -2 }}
           whileTap={{ scale: 0.95 }}
           className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-colored transition-all duration-300 inline-flex items-center"
         >
           Mulai Perjalanan Anda
           <motion.span 
             animate={{ x: [0, 5, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="ml-2"
           >
             →
           </motion.span>
         </motion.button>
       </motion.div>
     </div>
   </section>
 );
};

export default TestimonialsSection;