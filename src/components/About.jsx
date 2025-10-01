import React from 'react';
import Button from './common/Button';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <h3>Passionate Full-Stack Developer with 9+ Years Experience</h3>
            <p>
              I'm Kumar Ravi Raj, a passionate full-stack developer with 9+ years of experience in building 
              scalable, secure, and cloud-native applications across e-commerce, IoT, and enterprise domains. 
              I specialize in ReactJS, Next.js, Node.js, GraphQL, and AWS serverless architectures.
            </p>
            <p>
              My expertise spans API-first and headless architectures, performance optimization, and secure coding practices. 
              I've delivered end-to-end solutions for corporate clients (LG, TATA Elxsi, Capgemini) and freelance projects, 
              including requirement gathering, architecture, development, testing, and deployment. I believe in mentoring teams 
              and driving Agile delivery while creating solutions that exceed expectations.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            <div className="about-actions">
              <Button href="#contact" variant="primary">
                Let's Work Together
              </Button>
              <Button 
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="experience-badge">
              <span className="badge-years">9+</span>
              <span className="badge-text">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About