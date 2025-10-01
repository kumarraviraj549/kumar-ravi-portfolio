import React from 'react';
import Button from './common/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import { SKILLS, STATS, TAGLINES } from '../constants/heroData';

const Hero = () => {
  const { displayText, isTyping } = useTypewriter(TAGLINES, 60, 30, 1200);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🚀 Available for freelance work</span>
            </div>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">Kumar Ravi Raj</span>
            </h1>
            <div className="hero-typewriter">
              <span className="typewriter-text">{displayText}</span>
              <span className="typewriter-cursor" style={{ opacity: isTyping ? 1 : 0 }}>|</span>
            </div>
            <h2 className="hero-subtitle">Fullstack Developer</h2>
            <p className="hero-description">
              Crafting exceptional digital experiences since 2015. I specialize in building 
              scalable, secure, and cloud-native applications across e-commerce, IoT, and enterprise domains 
              with expertise in ReactJS, Next.js, Node.js, GraphQL, and AWS serverless architectures.
            </p>
            <div className="skills-container">
              <h3>Tech Stack:</h3>
              <div className="skills-grid">
                {SKILLS.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-buttons">
              <Button href="#contact" variant="primary">
                Get In Touch
              </Button>
              <Button href="#projects" variant="secondary">
                View My Work
              </Button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stats-grid">
              {STATS.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>RR</span>
            </div>
            <div className="floating-icons">
              <div className="icon icon-1">⚛️</div>
              <div className="icon icon-2">🔥</div>
              <div className="icon icon-3">💻</div>
              <div className="icon icon-4">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;