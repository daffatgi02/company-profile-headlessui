// file: src/components/common/OptimizedImage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "",
  width,
  height,
  sizes = "100vw",
  priority = false,
  placeholder = "/assets/images/placeholder.jpg",
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  // Generate responsive image sources
  const generateSrcSet = (originalSrc) => {
    const formats = ['webp', 'jpg'];
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    
    return formats.map(format => 
      sizes.map(size => 
        `${originalSrc.replace(/\.(jpg|jpeg|png)$/i, '')}_${size}w.${format} ${size}w`
      ).join(', ')
    ).join(', ');
  };

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageSrc(placeholder);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      )}

      <motion.img
        src={imageSrc}
        srcSet={!imageError ? generateSrcSet(src) : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: imageLoaded ? 1 : 0,
          scale: imageLoaded ? 1 : 1.1
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full object-cover"
        {...props}
      />
      
      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;