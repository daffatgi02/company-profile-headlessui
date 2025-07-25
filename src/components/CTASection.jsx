// file: src/components/CTASection.jsx (continued)
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, scaleOnHover } from '../utils/motionVariants';

const CTASection = () => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });

 return (
   <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
     {/* Background Pattern */}
     <div className="absolute inset-0 opacity-5">
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" fill="%23ffffff"/%3E%3C/svg%3E')]"></div>
     </div>

     {/* Floating Elements */}
     <motion.div
       animate={{
         rotate: [0, 360],
       }}
       transition={{
         duration: 20,
         repeat: Infinity,
         ease: "linear"
       }}
       className="absolute top-10 left-10 w-16 h-16 border-2 border-primary-400/20 rounded-full"
     />
     
     <motion.div
       animate={{
         rotate: [360, 0],
       }}
       transition={{
         duration: 15,
         repeat: Infinity,
         ease: "linear"
       }}
       className="absolute bottom-10 right-10 w-20 h-20 border-2 border-secondary-400/20 rounded-full"
     />

     <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
       <motion.div
         variants={fadeInUp}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
       >
         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
           Siap Memulai <span className="text-primary-400">Perjalanan</span> Anda?
         </h2>
         <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
           Bergabunglah dengan ribuan mahasiswa yang telah memilih UTN sebagai 
           langkah awal menuju masa depan yang cerah.
         </p>
       </motion.div>

       <motion.div
         variants={fadeInUp}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
       >
         <motion.button
           variants={scaleOnHover}
           whileHover="hover"
           whileTap={{ scale: 0.95 }}
           className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:bg-primary-700 transition-all duration-300"
         >
           Daftar Sekarang
         </motion.button>
         
         <motion.button
           variants={scaleOnHover}
           whileHover="hover"
           whileTap={{ scale: 0.95 }}
           className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
         >
           Download Brosur
         </motion.button>
       </motion.div>

       {/* Contact Info */}
       <motion.div
         variants={fadeInUp}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         className="grid md:grid-cols-3 gap-8 text-center"
       >
         <div className="text-gray-300">
           <h4 className="text-lg font-semibold mb-2 text-white">Telepon</h4>
           <p>+62 21 8888 9999</p>
         </div>
         <div className="text-gray-300">
           <h4 className="text-lg font-semibold mb-2 text-white">Email</h4>
           <p>info@utn.ac.id</p>
         </div>
         <div className="text-gray-300">
           <h4 className="text-lg font-semibold mb-2 text-white">Alamat</h4>
           <p>Jl. Teknologi No. 123, Jakarta Selatan</p>
         </div>
       </motion.div>
     </div>
   </section>
 );
};

export default CTASection;