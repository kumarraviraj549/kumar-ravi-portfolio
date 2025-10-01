import { useState } from 'react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0)
  
  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website typically takes 1-2 weeks, while a complex web application can take 4-8 weeks. I always provide detailed timelines during our initial consultation."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Node.js, Python, TypeScript, and various databases. I choose the best technology stack based on your specific project requirements and business goals."
    },
    {
      question: "What's included in your pricing?",
      answer: "My pricing includes complete development, testing, deployment, documentation, and initial support. You also get source code ownership, responsive design, SEO optimization, and performance optimization. No hidden fees!"
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! All projects include 1-3 months of free support depending on the package. I also offer ongoing maintenance plans for long-term support, updates, and feature additions."
    },
    {
      question: "Can you work with my existing team or designers?",
      answer: "Absolutely! I regularly collaborate with design teams, project managers, and other developers. I'm comfortable working with existing workflows and communication tools your team uses."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, I work with clients worldwide! I'm experienced with different time zones and use various communication tools like Slack, Zoom, and project management platforms to ensure smooth collaboration regardless of location."
    },
    {
      question: "What's your development process?",
      answer: "I follow a structured 4-phase process: Discovery & Planning, Design & Prototyping, Development, and Testing & Launch. You'll receive regular updates and can provide feedback at each stage."
    },
    {
      question: "Do you offer revisions during development?",
      answer: "Yes, I include revisions in all my packages. The number varies by project scope, but I always ensure you're completely satisfied with the final result. Clear communication helps minimize revisions."
    },
    {
      question: "Can you help with SEO and performance optimization?",
      answer: "Absolutely! I build all websites with SEO best practices, fast loading times, and mobile optimization. I also provide guidance on content strategy and can implement advanced SEO features as needed."
    },
    {
      question: "Do you build mobile apps?",
      answer: "Yes, I develop both web applications and mobile apps using React Native and Progressive Web App (PWA) technologies. This allows for code sharing and faster development while maintaining native performance."
    },
    {
      question: "Can you help with hosting and domain setup?",
      answer: "Definitely! I can help you choose the right hosting solution, set up domains, configure SSL certificates, and handle the entire deployment process. I also provide guidance on ongoing maintenance."
    },
    {
      question: "How do you handle project communication?",
      answer: "I believe in transparent communication. You'll get regular progress updates, access to development environments for testing, and direct communication via your preferred method (email, Slack, calls)."
    },
    {
      question: "What if my project needs change during development?",
      answer: "I understand that requirements can evolve. I'm flexible with scope changes and will provide transparent pricing for additional features. We'll discuss any impacts on timeline and budget upfront."
    },
    {
      question: "Do you provide training on how to use the final product?",
      answer: "Yes! I provide comprehensive documentation and training sessions to ensure you and your team can effectively use and maintain your new website or application."
    },
    {
      question: "What's your refund policy?",
      answer: "I offer a satisfaction guarantee. If you're not happy with the initial concepts or direction, we can discuss adjustments or project termination with partial refunds based on work completed."
    },
    {
      question: "Can you integrate with existing systems or APIs?",
      answer: "Absolutely! I have extensive experience integrating with various APIs, payment systems, CRM platforms, and existing databases. I can work with virtually any system that has proper documentation."
    },
    {
      question: "Do you offer maintenance packages?",
      answer: "Yes, I offer several maintenance packages including security updates, content updates, performance monitoring, backup management, and feature enhancements. Packages are customized to your needs."
    },
    {
      question: "What if I need changes after the project is complete?",
      answer: "Small changes during the support period are included. For larger modifications or new features, I offer competitive hourly rates for existing clients and can provide quotes for specific requests."
    }
  ]

  return (
    <section id="faq" className="faq animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle-green">Get answers to common questions about working with me</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ