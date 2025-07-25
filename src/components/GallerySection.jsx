// file: src/components/GallerySection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import OptimizedImage from './common/OptimizedImage';
import { facilityAssets } from '../constants/assets';
import { facilities } from '../constants/content';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (facility) => {
    setSelectedImage(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fasilitas <span className="text-primary-600">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi fasilitas modern dan lengkap yang mendukung proses pembelajaran 
            dan pengembangan mahasiswa di UTN.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => openModal(facility)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <OptimizedImage
                  src={facility.image}
                  alt={facility.name}
                  className="aspect-square"
                  width={300}
                  height={300}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{facility.name}</h3>
                    <p className="text-sm opacity-90">{facility.description}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Gallery */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            {selectedImage && (
              <>
                <div className="relative">
                  <OptimizedImage
                    src={selectedImage.image}
                    alt={selectedImage.name}
                    className="w-full h-96 object-cover"
                    priority={true}
                  />
                  
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedImage.name}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default GallerySection;