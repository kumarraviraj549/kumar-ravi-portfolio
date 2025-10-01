import React, { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../constants/navigation';
import { throttle } from '../utils/helpers';
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
    
    // Scroll to the section directly
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

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>  
      <div className="nav-content">
        <a href="#hero" className="nav-brand">
        </a>
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-actions">
            <ThemeToggle />
            <a href="#contact" className="btn btn-nav btn-primary">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
