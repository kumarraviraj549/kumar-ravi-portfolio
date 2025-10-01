import React from 'react';
import { SOCIAL_LINKS } from '../constants/contact';
import { QUICK_LINKS } from '../constants/navigation';
import { getCurrentYear } from '../utils/helpers';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">Kumar Ravi Raj</h3>
              <p className="brand-tagline">Senior Full Stack Developer</p>
              <p className="brand-description">
                Building scalable, secure, and cloud-native applications. 
                Let&apos;s create exceptional digital experiences together.
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  {QUICK_LINKS.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li>Web Development</li>
                  <li>Mobile Apps</li>
                  <li>API Development</li>
                  <li>Consulting</li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Technologies</h4>
                <ul>
                  <li>React & Node.js</li>
                  <li>Python & AWS</li>
                  <li>MongoDB & SQL</li>
                  <li>WordPress & More</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Kumar Ravi Raj. All rights reserved.
            </p>
            <p className="footer-note">
              Built with ❤️ using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;