import React, { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../constants/navigation';
import { throttle, getBasePath } from '../utils/helpers';
import './Navbar.css';

const Navbar = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      const shouldBeScrolled = window.scrollY > 50;
      setScrolled(shouldBeScrolled);

      // Handle active section
      const scrollPosition = window.scrollY + 100;
      const sections = ['hero', 'about', 'skills', 'services', 'process', 'projects', 'testimonials', 'faq', 'contact'];
      
      let currentSection = 'hero';
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };

    // Add throttling for better performance
    const throttledScroll = throttle(handleScroll, 16);

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Update active section immediately for better UX
    setActiveSection(href.substring(1));
    
    // Get the correct base path for the deployment
    const basePath = getBasePath();
    
    // If we're not on the main page, navigate back first
    if (window.location.pathname !== basePath) {
      window.history.pushState({}, '', basePath);
    }
    
    // Small delay to ensure we're on the main page
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        const offset = 80; // Account for navbar height
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, []);

  const toggleMenu = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(prev => !prev);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">
          <a 
            href="#hero" 
            className="brand-name"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Kumar Ravi
          </a>
        </div>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${activeSection === href.substring(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
          
          <div className="nav-actions">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn btn-primary btn-nav"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Hire Me
            </a>
          </div>
        </div>

        <button 
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          onTouchStart={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
});

export default Navbar;