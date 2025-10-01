import React from 'react';
import Button from './common/Button';
import SectionHeader from './common/SectionHeader';
import { SERVICES } from '../constants/servicesData';

const Services = () => {
  return (
    <section id="services" className="services animate-on-scroll">
      <div className="container">
        <SectionHeader 
          title="Services I Offer" 
          subtitle="Web development solutions tailored to your business needs"
          className="services-subtitle-green"
        />
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-on-scroll${service.popular ? ' popular' : ''}`}
              tabIndex={0}
              aria-label={service.title + ' service'}
            >
              {service.popular && (
                <div className="service-badge">Most Popular</div>
              )}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <Button href="#contact" variant="outline">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="services-note">
          <p>
            <strong>Custom projects welcome!</strong> These are starting prices for standard projects. 
            Contact me for a personalized quote based on your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;