import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceFeatureCards = () => {
  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies and best practices.',
      icon: 'Code',
      features: ['React & Node.js', 'Mobile Apps', 'Cloud Integration', 'API Development'],
      color: 'from-blue-600 to-blue-400',
      stats: { projects: '25+', satisfaction: '98%' }
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: 'Shield',
      features: ['Threat Assessment', 'Penetration Testing', 'Security Audits', 'Compliance'],
      color: 'from-blue-500 to-cyan-400',
      stats: { threats: '1000+', uptime: '99.9%' }
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      icon: 'Brain',
      features: ['Data Analytics', 'Predictive Models', 'NLP Solutions', 'Computer Vision'],
      color: 'from-blue-700 to-blue-500',
      stats: { accuracy: '95%', models: '15+' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Discover how CharlieVerse transforms businesses through innovative technology solutions
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full overflow-hidden transition-all duration-normal hover:border-primary/50 hover:glow-blue-sm">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-normal`} />
                
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-blue-sm">
                    <Icon 
                      name={service.icon} 
                      size={32} 
                      className="text-white" 
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary font-body mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-body font-medium text-foreground mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon 
                            name="Check" 
                            size={14} 
                            className="text-primary flex-shrink-0" 
                          />
                          <span className="text-sm text-text-secondary font-body">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-heading font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-xs text-text-secondary font-body capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to="/services-overview-hub" className="block">
                    <Button
                      variant="outline"
                      size="default"
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-normal"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 glow-blue">
            <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-text-secondary font-body mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your technology goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-inquiry-system">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="right"
                  className="glow-blue-sm"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/about-company-expertise">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="right"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatureCards;