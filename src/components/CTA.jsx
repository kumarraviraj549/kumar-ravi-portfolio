import React from 'react';
import Button from './common/Button';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Start Your Next Project?</h2>
            <p>
              Let&apos;s collaborate to bring your ideas to life. I&apos;m currently available 
              for new projects and would love to discuss how I can help you achieve 
              your goals.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary btn-large">
              Start a Project
            </a>
            <a href="mailto:Kumarraviraj549@gmail.com" className="btn btn-outline btn-large">
              Send Email
            </a>
          </div>
        </div>
        <div className="cta-features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <span className="feature-text">Fast Delivery</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💎</span>
            <span className="feature-text">Quality Code</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🤝</span>
            <span className="feature-text">Ongoing Support</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💰</span>
            <span className="feature-text">Fair Pricing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA