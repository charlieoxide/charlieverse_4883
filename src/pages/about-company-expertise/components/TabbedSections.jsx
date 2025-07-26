import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TabbedSections = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const tabs = [
    { id: 'philosophy', label: 'Technology Philosophy', icon: 'Lightbulb' },
    { id: 'testimonials', label: 'Client Testimonials', icon: 'MessageSquare' },
    { id: 'recognition', label: 'Industry Recognition', icon: 'Award' },
    { id: 'careers', label: 'Career Opportunities', icon: 'Users' }
  ];

  const philosophyPrinciples = [
    {
      title: "Innovation First",
      icon: "Zap",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that push the boundaries of what's possible.",
      details: [
        "Early adoption of emerging technologies",
        "Continuous research and development",
        "Investment in experimental projects",
        "Collaboration with academic institutions"
      ]
    },
    {
      title: "Security by Design",
      icon: "Shield",
      description: "Security is not an afterthought but a fundamental principle woven into every aspect of our development process.",
      details: [
        "Zero-trust architecture principles",
        "End-to-end encryption implementation",
        "Regular security audits and assessments",
        "Compliance with international standards"
      ]
    },
    {
      title: "Scalable Architecture",
      icon: "Layers",
      description: "We build systems that grow with your business, ensuring long-term sustainability and performance.",
      details: [
        "Microservices architecture patterns",
        "Cloud-native design principles",
        "Horizontal and vertical scaling strategies",
        "Performance optimization techniques"
      ]
    },
    {
      title: "User-Centric Design",
      icon: "Users",
      description: "Every solution we create is designed with the end-user in mind, prioritizing usability and experience.",
      details: [
        "Human-centered design methodology",
        "Accessibility compliance (WCAG 2.1)",
        "Continuous user feedback integration",
        "Cross-platform compatibility"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      client: "Sarah Johnson",
      company: "TechCorp Industries",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `CharlieVerse transformed our entire digital infrastructure. Their AI-powered analytics platform increased our operational efficiency by 40% and provided insights we never thought possible. The team's expertise in machine learning is truly exceptional.`,
      project: "AI Analytics Platform",
      industry: "Manufacturing",
      results: [
        "40% increase in operational efficiency",
        "60% reduction in manual processes",
        "Real-time predictive analytics implementation"
      ]
    },
    {
      id: 2,
      client: "Michael Rodriguez",
      company: "SecureBank",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `The cybersecurity solution CharlieVerse implemented has been flawless. We've had zero security incidents since deployment, and their proactive monitoring has prevented multiple potential threats. Their expertise in financial security is unmatched.`,
      project: "Enterprise Security Platform",
      industry: "Financial Services",
      results: [
        "Zero security incidents in 18 months",
        "99.9% threat detection accuracy",
        "SOC2 Type II compliance achieved"
      ]
    },
    {
      id: 3,
      client: "Emily Chen",
      company: "HealthTech Solutions",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: `Working with CharlieVerse was a game-changer for our healthcare platform. They delivered a HIPAA-compliant solution that seamlessly integrates AI diagnostics with our existing systems. The patient outcomes have improved significantly.`,
      project: "AI-Powered Healthcare Platform",
      industry: "Healthcare",
      results: [
        "30% improvement in diagnostic accuracy",
        "50% reduction in processing time",
        "HIPAA compliance certification"
      ]
    }
  ];

  const recognitions = [
    {
      title: "Best AI Innovation Award 2024",
      organization: "TechCrunch Disrupt",
      description: "Recognized for breakthrough AI-powered business intelligence platform",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      date: "March 2024",
      category: "Innovation"
    },
    {
      title: "Cybersecurity Excellence Award",
      organization: "InfoSec Global Conference",
      description: "Outstanding contribution to enterprise cybersecurity solutions",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      date: "January 2024",
      category: "Security"
    },
    {
      title: "Top 50 Startups to Watch",
      organization: "Forbes Technology Council",
      description: "Featured among the most promising technology companies",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop",
      date: "December 2023",
      category: "Business"
    },
    {
      title: "Cloud Computing Innovation Award",
      organization: "Cloud World Conference",
      description: "Revolutionary approach to cloud-native application development",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      date: "October 2023",
      category: "Cloud"
    }
  ];

  const careerOpportunities = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      description: "Join our core engineering team to build next-generation web applications using cutting-edge technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expertise in React, Node.js, and cloud platforms",
        "Experience with microservices architecture",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "AI/ML Research Scientist",
      department: "Research & Development",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "PhD + 3 years",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      description: "Lead cutting-edge AI research projects and develop innovative machine learning solutions for enterprise clients.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "3+ years of industry ML experience",
        "Published research in top-tier conferences",
        "Expertise in deep learning and computer vision"
      ]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      skills: ["Security Architecture", "Penetration Testing", "Compliance"],
      description: "Design and implement comprehensive security architectures for enterprise clients across various industries.",
      requirements: [
        "7+ years of cybersecurity experience",
        "Security certifications (CISSP, CISM, etc.)",
        "Experience with compliance frameworks",
        "Strong understanding of cloud security"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "London, UK / Remote",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
      description: "Build and maintain scalable infrastructure and deployment pipelines for our global client base.",
      requirements: [
        "4+ years of DevOps experience",
        "Expertise in containerization and orchestration",
        "Experience with Infrastructure as Code",
        "Knowledge of monitoring and observability tools"
      ]
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'philosophy':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Technology Philosophy
              </h3>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                We believe technology should empower, not complicate. Our philosophy guides every 
                decision we make, from architecture choices to user experience design.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {philosophyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted rounded-xl p-6 hover:bg-primary/5 transition-colors duration-normal"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={principle.icon} size={24} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-heading font-semibold text-foreground">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-text-secondary font-body mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary font-body">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                What Our Clients Say
              </h3>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about 
                working with CharlieVerse and the results we've delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:glow-blue-sm transition-all duration-normal"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.client}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {testimonial.client}
                      </h4>
                      <p className="text-sm text-text-secondary font-body">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-text-secondary font-body italic mb-4 leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-body font-medium text-primary">
                        {testimonial.project}
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-body">
                        {testimonial.industry}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="TrendingUp" size={12} className="text-success" />
                          <span className="text-xs text-text-secondary font-body">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'recognition':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Industry Recognition
              </h3>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by leading industry 
                organizations and publications worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={recognition.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:glow-blue-sm transition-all duration-normal"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={recognition.image}
                      alt={recognition.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-body font-medium">
                        {recognition.category}
                      </span>
                      <span className="text-sm text-text-secondary font-body">
                        {recognition.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {recognition.title}
                    </h4>
                    <p className="text-sm text-primary font-body font-medium mb-3">
                      {recognition.organization}
                    </p>
                    <p className="text-text-secondary font-body leading-relaxed">
                      {recognition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Join Our Team
              </h3>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion for 
                innovation and excellence. Explore current opportunities to grow your career with us.
              </p>
            </div>

            <div className="space-y-6">
              {careerOpportunities.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:glow-blue-sm transition-all duration-normal"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary font-body">
                        <span className="flex items-center space-x-1">
                          <Icon name="Building" size={14} />
                          <span>{job.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="User" size={14} />
                          <span>{job.experience}</span>
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-body font-medium hover:bg-primary/90 transition-colors duration-normal">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-text-secondary font-body mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-body font-semibold text-foreground mb-2">
                      Required Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-body font-semibold text-foreground mb-2">
                      Requirements:
                    </h5>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary font-body">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-text-secondary font-body mb-4">
                Don't see a position that fits? We're always interested in hearing from talented individuals.
              </p>
              <button className="bg-outline border border-border text-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-primary/5 transition-colors duration-normal">
                Send Us Your Resume
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-body font-medium transition-all duration-normal ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground glow-blue-sm'
                  : 'bg-card border border-border text-text-secondary hover:text-foreground hover:bg-primary/5'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedSections;