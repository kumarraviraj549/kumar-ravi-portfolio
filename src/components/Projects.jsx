import React, { useState } from 'react';
import Button from './common/Button';
import SectionHeader from './common/SectionHeader';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "WordPress Business Website",
      description: "Built and deployed a custom WordPress site for a retail business with payment integration, WooCommerce store, and SEO optimization. Configured hosting, CDN, and security plugins.",
      year: "2024",
      techStack: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL"],
      liveDemo: "#",
      image: "🛒"
    },
    {
      id: 2,
      title: "Cloud Migration & Serverless API",
      description: "Migrated a legacy API system to AWS serverless architecture, reducing costs by 40%. Implemented CI/CD pipeline using GitHub Actions with automated deployments.",
      year: "2024",
      techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "GitHub Actions"],
    liveDemo: "#",
      image: "🏥"
    },
    {
      id: 3,
      title: "Learning Management System",
      description: "Developed a scalable LMS with student dashboards, progress tracking, and real-time chat. Integrated role-based authentication with JWT & OAuth2.",
      year: "2023",
      techStack: ["React", "Node.js", "MongoDB", "GraphQL", "JWT", "OAuth2"],
    liveDemo: "#",
      image: "🏠"
    },
    {
      id: 4,
      title: "Financial Trading Dashboard",
      description: "Real-time trading dashboard with portfolio management, market analysis, automated trading strategies, and risk management tools.",
      year: "2023",
      techStack: ["React", "Node.js", "MongoDB", "WebSocket", "Chart.js", "AWS"],
    liveDemo: "#",
      image: "�"
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      description: "LMS with course creation, student progress tracking, live classes, assignments, certificates, and payment integration for educational institutions.",
      year: "2023",
      techStack: ["React", "Node.js", "MongoDB", "WebRTC", "AWS S3", "Stripe"],
    liveDemo: "#",
      image: "🎓"
    },
    {
      id: 6,
      title: "Restaurant Management Suite",
      description: "Complete restaurant solution with online ordering, kitchen management, inventory tracking, staff scheduling, and customer loyalty programs.",
      year: "2022",
      techStack: ["React", "Express", "MongoDB", "Socket.io", "PayPal", "PWA"],
    liveDemo: "#",
      image: "�️"
    },
    {
      id: 7,
      title: "Corporate WordPress Multisite",
      description: "Custom WordPress multisite network for a consulting firm with 15+ subsidiaries. Advanced SEO, custom post types, and integrated CRM.",
      year: "2024",
      techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS", "Redis"],
    liveDemo: "#",
      image: "📝"
    },
    {
      id: 8,
      title: "AWS Serverless Architecture",
      description: "Scalable serverless infrastructure with auto-scaling, load balancing, CI/CD pipelines, and monitoring for high-traffic applications.",
      year: "2024",
      techStack: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation", "Docker"],
    liveDemo: "#",
      image: "☁️"
    },
    {
      id: 9,
      title: "Event Management Platform",
      description: "Complete event management solution with ticketing, attendee management, live streaming integration, and analytics for event organizers.",
      year: "2023",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "WebRTC", "AWS"],
    liveDemo: "#",
      image: "�"
    },
    {
      id: 10,
      title: "Manufacturing ERP System",
      description: "Enterprise resource planning system for manufacturing with inventory management, production scheduling, quality control, and reporting.",
      year: "2022",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    liveDemo: "#",
      image: "🏭"
    },
    {
      id: 11,
      title: "Social Media Analytics Tool",
      description: "Advanced analytics platform for social media management with AI-powered insights, content scheduling, and performance tracking.",
      year: "2022",
      techStack: ["React", "Python", "Django", "PostgreSQL", "Redis", "ML APIs"],
    liveDemo: "#",
      image: "📊"
    },
    {
      id: 12,
      title: "Logistics & Supply Chain App",
      description: "End-to-end logistics management with shipment tracking, route optimization, warehouse management, and real-time notifications.",
      year: "2022",
      techStack: ["React", "Node.js", "MongoDB", "Google Maps", "Socket.io", "AWS"],
    liveDemo: "#",
      image: "�"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my recent work and technical expertise"
          className="projects-subtitle-green"
        />

        <div className="project-filters">
          <Button 
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All
          </Button>
          <Button 
            className={`filter-btn ${filter === 'React' ? 'active' : ''}`}
            onClick={() => setFilter('React')}
          >
            React
          </Button>
          <Button 
            className={`filter-btn ${filter === 'Node.js' ? 'active' : ''}`}
            onClick={() => setFilter('Node.js')}
          >
            Node.js
          </Button>
          <Button 
            className={`filter-btn ${filter === 'MongoDB' ? 'active' : ''}`}
            onClick={() => setFilter('MongoDB')}
          >
            MongoDB
          </Button>
          <button 
            className={`filter-btn ${filter === 'Express' ? 'active' : ''}`}
            onClick={() => setFilter('Express')}
          >
            Express
          </button>
          <button 
            className={`filter-btn ${filter === 'Python' ? 'active' : ''}`}
            onClick={() => setFilter('Python')}
          >
            Python
          </button>
          <button 
            className={`filter-btn ${filter === 'WordPress' ? 'active' : ''}`}
            onClick={() => setFilter('WordPress')}
          >
            WordPress
          </button>
          <button 
            className={`filter-btn ${filter === 'AWS' ? 'active' : ''}`}
            onClick={() => setFilter('AWS')}
          >
            AWS
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>🔗</span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/kumarraviraj549" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit My GitHub
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;