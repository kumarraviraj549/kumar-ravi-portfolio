// Image optimization component for better performance
import { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  fallback = '🖼️'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Generate WebP and fallback URLs
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const originalSrc = src;

  const handleLoad = () => setImageLoaded(true);
  const handleError = () => setImageFailed(true);

  if (!src || imageFailed) {
    return (
      <div 
        className={`image-fallback ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        {fallback}
      </div>
    );
  }

  return (
    <picture className={`optimized-image ${className}`}>
      {/* WebP format for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for older browsers */}
      <img
        src={originalSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${imageLoaded ? 'loaded' : 'loading'}`}
        style={{
          transition: 'opacity 0.3s ease',
          opacity: imageLoaded ? 1 : 0
        }}
      />
    </picture>
  );
};

export default OptimizedImage;