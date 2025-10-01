import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      clientName: "Sarah Mitchell",
      company: "RetailMax Solutions",
      date: "March 2024",
      review: "Kumar delivered an exceptional WordPress e-commerce site with WooCommerce integration. The SEO optimization and payment processing work flawlessly. Our sales increased by 35% within the first month!",
      reply: "Thank you Sarah! It was great optimizing your WordPress site for both performance and conversions. I'm thrilled about your sales growth!",
      rating: 5,
      avatar: "S"
    },
    {
      id: 2,
      clientName: "Priya Patel",
      company: "Fintech Innovations Ltd",
      date: "January 2024",
      review: "Outstanding work on our trading platform. Ravi built a robust system handling real-time data processing with excellent performance. His understanding of financial systems is impressive.",
      reply: "Thanks Priya! Financial applications demand precision and reliability. I'm thrilled that the platform is performing excellently under high load.",
      rating: 5,
      avatar: "P"
    },
    {
      id: 3,
      clientName: "James Wilson",
      company: "EduLearn Technologies",
      date: "November 2023",
      review: "Ravi created an amazing learning management platform for our educational institute. The system handles 10,000+ students seamlessly with interactive features and progress tracking.",
      reply: "Thank you James! Education technology is very close to my heart. I'm happy to contribute to students' learning journey through technology.",
      rating: 5,
      avatar: "J"
    },
    {
      id: 4,
      clientName: "David Thompson",
      company: "EduTech Solutions",
      date: "August 2023",
      review: "Professional, reliable, and talented. Ravi transformed our learning management system requirements into a polished, user-friendly platform. Excellent developer!",
      reply: "Thank you David! Educational technology is close to my heart, and I'm proud of what we accomplished together. Happy learning!",
      rating: 4,
      avatar: "D"
    },
    {
      id: 5,
      clientName: "Lisa Park",
      company: "Food & Hospitality Co.",
      date: "June 2022",
      review: "Ravi developed our food delivery app with incredible attention to user experience. The app is fast, reliable, and our customers love it. Great work!",
      reply: "Thanks Lisa! Food delivery apps require seamless user experience, and I'm glad we nailed it. Hope your business continues to grow!",
      rating: 5,
      avatar: "L"
    },
    {
      id: 6,
      clientName: "James Wilson",
      company: "Creative Agency",
      date: "April 2022",
      review: "Fantastic developer with great problem-solving skills. Ravi helped us create a complex social media dashboard that streamlined our entire workflow. Highly professional!",
      reply: "Thank you James! Complex projects like this are where I thrive. I'm happy the dashboard has improved your team's productivity significantly.",
      rating: 4,
      avatar: "J"
    },
    {
      id: 7,
      clientName: "Anna Martinez",
      company: "FinTech Innovations",
      date: "February 2022",
      review: "Ravi built our financial dashboard with exceptional security features and user-friendly interface. His expertise in handling sensitive data was impressive.",
      reply: "Thank you Anna! Security in fintech is crucial, and I'm glad we created a robust solution that meets all compliance requirements.",
      rating: 5,
      avatar: "A"
    },
    {
      id: 8,
      clientName: "Robert Kim",
      company: "Healthcare Solutions",
      date: "December 2021",
      review: "Outstanding work on our patient management system. Ravi delivered a HIPAA-compliant solution that improved our workflow efficiency by 40%.",
      reply: "Thanks Robert! Healthcare applications require special attention to privacy and usability. I'm thrilled the system is making such a positive impact.",
      rating: 4,
      avatar: "R"
    },
    {
      id: 9,
      clientName: "Sophie Turner",
      company: "Fashion E-commerce",
      date: "October 2021",
      review: "Ravi created a beautiful and fast e-commerce platform for our fashion brand. The mobile experience is flawless and sales have increased significantly!",
      reply: "Thank you Sophie! Fashion e-commerce needs to be visually stunning and fast. I'm excited that the platform is driving your business growth!",
      rating: 5,
      avatar: "S"
    },
    {
      id: 10,
      clientName: "Mark Anderson",
      company: "Travel Tech",
      date: "August 2021",
      review: "Exceptional developer! Ravi built our travel booking platform with complex integrations. His problem-solving skills and attention to detail are remarkable.",
      reply: "Thanks Mark! Travel platforms have unique challenges with multiple APIs and real-time data. I enjoyed solving those complex integration puzzles!",
      rating: 4,
      avatar: "M"
    },
    {
      id: 11,
      clientName: "Jennifer Lee",
      company: "Digital Marketing Hub",
      date: "June 2021",
      review: "Ravi transformed our marketing automation ideas into reality. The platform he built has streamlined our entire client management process beautifully.",
      reply: "Thank you Jennifer! Marketing automation requires careful workflow design. I'm happy the platform is making your team more efficient!",
      rating: 5,
      avatar: "J"
    },
    {
      id: 12,
      clientName: "Carlos Rodriguez",
      company: "Construction Management",
      date: "March 2021",
      review: "Professional and reliable! Ravi developed our project management system that handles complex construction workflows. Exceeded all expectations!",
      reply: "Thanks Carlos! Construction projects have unique requirements, and I enjoyed creating a system that handles all those complex workflows seamlessly.",
      rating: 4,
      avatar: "C"
    },
    {
      id: 13,
      clientName: "Rachel Green",
      company: "Fitness & Wellness",
      date: "January 2021",
      review: "Incredible work! Ravi built our fitness app with workout tracking, nutrition plans, and social features. Our users absolutely love it!",
      reply: "Thank you Rachel! Fitness apps need to be motivating and user-friendly. I'm thrilled your users are achieving their wellness goals!",
      rating: 5,
      avatar: "R"
    },
    {
      id: 14,
      clientName: "Thomas Brown",
      company: "Legal Services",
      date: "November 2020",
      review: "Outstanding developer! Ravi created our case management system with document handling and client portal. Streamlined our entire law firm operation.",
      reply: "Thanks Thomas! Legal software requires precision and security. I'm proud we built a system that enhances your firm's efficiency.",
      rating: 4,
      avatar: "T"
    },
    {
      id: 15,
      clientName: "Maria Santos",
      company: "Event Management",
      date: "September 2020",
      review: "Fantastic experience! Ravi developed our event planning platform with vendor management and booking systems. Saved us countless hours!",
      reply: "Thank you Maria! Event management has so many moving parts. I'm glad the platform is making your events run smoothly!",
      rating: 4,
      avatar: "M"
    },
    {
      id: 16,
      clientName: "Kevin Walsh",
      company: "Automotive Solutions",
      date: "July 2020",
      review: "Exceptional work on our vehicle inventory system! Ravi built a comprehensive solution with dealer network integration. Highly recommend!",
      reply: "Thanks Kevin! Automotive systems need real-time data sync. I enjoyed building the dealer network integrations and inventory tracking!",
      rating: 5,
      avatar: "K"
    },
    {
      id: 17,
      clientName: "Lisa Wang",
      company: "Gaming Studio",
      date: "May 2020",
      review: "Amazing developer! Ravi created our game analytics dashboard with real-time player data and monetization tracking. Perfect solution!",
      reply: "Thank you Lisa! Gaming analytics require fast data processing. I'm excited the dashboard is helping optimize your game performance!",
      rating: 4,
      avatar: "L"
    },
    {
      id: 18,
      clientName: "Peter Johnson",
      company: "Agriculture Tech",
      date: "March 2020",
      review: "Brilliant work! Ravi built our farm management system with IoT integration and crop monitoring. Revolutionary for our farming operations!",
      reply: "Thanks Peter! AgTech is fascinating with all the IoT sensors and data. I'm proud we created a system that's modernizing farming!",
      rating: 5,
      avatar: "P"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    // Ensure we always show groups of 3
    const groupIndex = Math.floor(index / 3) * 3;
    setCurrentIndex(groupIndex);
  };

  // Get current group of testimonials
  const getCurrentTestimonials = () => {
    const first = testimonials[currentIndex];
    const second = testimonials[(currentIndex + 1) % testimonials.length];
    const third = testimonials[(currentIndex + 2) % testimonials.length];
    return [first, second, third];
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 4000); // Change testimonial every 4 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlay, isPaused]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle testimonials-subtitle-green">
            What my clients say about working with me
          </p>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonials-grid" key={currentIndex}>
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.clientName}</h4>
                      <p className="client-company">{testimonial.company}</p>
                      <span className="testimonial-date">{testimonial.date}</span>
                    </div>
                  </div>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="client-review">
                    <div className="quote-icon">&quot;</div>
                    <p>{testimonial.review}</p>
                  </div>

                  <div className="my-reply">
                    <div className="reply-header">
                      <div className="reply-avatar">RR</div>
                      <span className="reply-label">My Reply:</span>
                    </div>
                    <p className="reply-text">{testimonial.reply}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small Circle Indicators at Bottom */}
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`dot ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
                onClick={() => goToTestimonial(index * 3)}
                aria-label={`View testimonial group ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${((Math.floor(currentIndex / 3) + 1) / Math.ceil(testimonials.length / 3)) * 100}%`,
                transition: 'width 0.5s ease'
              }}
            />
          </div>
        </div>

        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Join my satisfied clients and let&apos;s build something amazing together</p>
            <a href="#contact" className="btn btn-outline">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;