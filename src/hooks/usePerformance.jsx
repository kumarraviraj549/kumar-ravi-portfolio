// Performance monitoring hook
import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const measurePaint = useCallback(() => {
    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              // console.log(`FCP: ${entry.startTime}ms`);
              // Send to analytics if needed
              if (window.gtag) {
                window.gtag('event', 'timing_complete', {
                  name: 'FCP',
                  value: Math.round(entry.startTime)
                });
              }
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('Performance monitoring not available:', e);
      }
    }
  }, []);

  const measureLCP = useCallback(() => {
    // Measure Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          // console.log(`LCP: ${lastEntry.startTime}ms`);
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'LCP',
              value: Math.round(lastEntry.startTime)
            });
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP monitoring not available:', e);
      }
    }
  }, []);

  const measureCLS = useCallback(() => {
    // Measure Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          // console.log(`CLS: ${clsValue}`);
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'CLS',
              value: Math.round(clsValue * 1000)
            });
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS monitoring not available:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      measurePaint();
      measureLCP();
      measureCLS();
    }
  }, [measurePaint, measureLCP, measureCLS]);
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (callback, options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    const observer = new IntersectionObserver(callback, defaultOptions);
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [callback, options]);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.as = 'style';
  criticalCSS.href = '/assets/critical.css';
  document.head.appendChild(criticalCSS);

  // Preload hero image if exists
  const heroImage = new Image();
  heroImage.src = '/assets/hero-bg.webp';

  // Prefetch likely next page resources
  const prefetchLink = document.createElement('link');
  prefetchLink.rel = 'prefetch';
  prefetchLink.href = '/assets/components-lazy.js';
  document.head.appendChild(prefetchLink);
};

export default usePerformanceMonitor;