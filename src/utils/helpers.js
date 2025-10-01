// Scroll utilities
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateForm = (formData, requiredFields) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${field} is required`;
    }
  });
  
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Performance utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Date utilities
export const getCurrentYear = () => new Date().getFullYear();

// Analytics utilities
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Base path utilities for GitHub Pages deployment
export const getBasePath = () => {
  if (typeof window === 'undefined') return '/';
  
  // For GitHub Pages deployment, the base path includes the repository name
  if (window.location.hostname === 'kumarraviraj549.github.io' && 
      window.location.pathname.startsWith('/kumar-ravi-portfolio')) {
    return '/kumar-ravi-portfolio/';
  }
  
  return '/';
};

export const navigateToPath = (path = '') => {
  const basePath = getBasePath();
  const fullPath = basePath + path.replace(/^\//, '');
  window.history.pushState({}, '', fullPath);
};
