import React from 'react';
import SectionHeader from './common/SectionHeader';
import { PROCESS_STEPS } from '../constants/processData';

const Process = () => {

  return (
        <section id="process" className="process animate-on-scroll">
      <div className="container">
        <SectionHeader 
          title="My Work Process" 
          subtitle="A proven methodology that ensures successful project delivery"
          className="process-subtitle-green"
        />
        <div className="process-timeline">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <span className="step-duration">{step.duration}</span>
                </div>
                <p>{step.description}</p>
              </div>
              {index < PROCESS_STEPS.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process