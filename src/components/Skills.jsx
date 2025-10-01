import React from 'react';
import SectionHeader from './common/SectionHeader';
import { SKILL_CATEGORIES } from '../constants/skillsData';

const Skills = () => {

  return (
        <section id="skills" className="skills animate-on-scroll">
      <div className="container">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to bring your ideas to life"
        />
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills