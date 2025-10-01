import { useEffect, useState, Suspense, lazy, useCallback } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { scrollToTop } from './utils/helpers';
import './App.css';
import './performance.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const shouldShow = window.pageYOffset > 300;
    if (shouldShow !== showScrollTop) {
      setShowScrollTop(shouldShow);
    }
  }, [showScrollTop]);

  useEffect(() => {
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16); // ~60fps
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);



  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));
    
    // Fallback animation trigger for sections that might not be detected
    const fallbackTimer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.animate-on-scroll:not(.animate-fade-in)');
      hiddenElements.forEach(el => {
        el.classList.add('animate-fade-in');
      });
    }, 2000);
    
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    // Google Analytics initialization
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
  }, []);

  return (
    <ThemeProvider>
      <div className="App" id="hero">
        <Navbar />
        <Hero />
        <Suspense fallback={
          <div className="loading-fallback">
            <div className="loading-spinner"></div>
            <div>Loading sections...</div>
          </div>
        }>
          <About />
          <Skills />
          <Services />
          <Process />
          <Projects />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
          <Footer />
        </Suspense>
        <button
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;