import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanySidebar = () => {
  const [projectStats, setProjectStats] = useState({
    activeProjects: 0,
    completedThisMonth: 0,
    clientSatisfaction: 0,
    uptime: 0
  });

  const targetStats = {
    activeProjects: 24,
    completedThisMonth: 8,
    clientSatisfaction: 98.5,
    uptime: 99.9
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetStats).forEach(key => {
        let current = 0;
        const increment = targetStats[key] / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetStats[key]) {
            current = targetStats[key];
            clearInterval(timer);
          }
          
          setProjectStats(prev => ({
            ...prev,
            [key]: key === 'clientSatisfaction' || key === 'uptime' 
              ? parseFloat(current.toFixed(1))
              : Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      name: "AWS Advanced Consulting Partner",
      icon: "Cloud",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Advanced cloud architecture and migration expertise"
    },
    {
      name: "SOC 2 Type II",
      icon: "Shield",
      issuer: "AICPA",
      year: "2024",
      description: "Security, availability, and confidentiality controls"
    },
    {
      name: "ISO 27001:2013",
      icon: "Award",
      issuer: "ISO",
      year: "2023",
      description: "Information security management system"
    },
    {
      name: "Microsoft Gold Partner",
      icon: "Star",
      issuer: "Microsoft",
      year: "2023",
      description: "Azure cloud solutions and development"
    }
  ];

  const partnerships = [
    {
      name: "Google Cloud Partner",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      tier: "Premier",
      description: "AI/ML and cloud infrastructure solutions"
    },
    {
      name: "Salesforce Partner",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
      tier: "Gold",
      description: "CRM integration and custom development"
    },
    {
      name: "MongoDB Partner",
      logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
      tier: "Silver",
      description: "Database solutions and optimization"
    },
    {
      name: "Stripe Partner",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
      tier: "Verified",
      description: "Payment processing and fintech solutions"
    }
  ];

  const awards = [
    {
      title: "Best AI Innovation 2024",
      organization: "TechCrunch Disrupt",
      icon: "Trophy",
      year: "2024"
    },
    {
      title: "Cybersecurity Excellence Award",
      organization: "InfoSec Global",
      icon: "Shield",
      year: "2024"
    },
    {
      title: "Top 50 Startups to Watch",
      organization: "Forbes",
      icon: "Star",
      year: "2023"
    },
    {
      title: "Innovation in Cloud Computing",
      organization: "Cloud Computing World",
      icon: "Cloud",
      year: "2023"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Real-time Project Statistics */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6 glow-blue-sm"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={20} className="text-white" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Live Statistics
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-body text-text-secondary">Active Projects</span>
            <span className="text-lg font-heading font-bold text-primary">
              {projectStats.activeProjects}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-body text-text-secondary">Completed This Month</span>
            <span className="text-lg font-heading font-bold text-success">
              {projectStats.completedThisMonth}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-body text-text-secondary">Client Satisfaction</span>
            <span className="text-lg font-heading font-bold text-primary">
              {projectStats.clientSatisfaction}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-body text-text-secondary">System Uptime</span>
            <span className="text-lg font-heading font-bold text-success">
              {projectStats.uptime}%
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-xs text-text-secondary font-body">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Updated in real-time</span>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={20} className="text-success" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Certifications
          </h3>
        </div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors duration-normal">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={cert.icon} size={16} className="text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-body font-semibold text-foreground truncate">
                  {cert.name}
                </h4>
                <p className="text-xs text-text-secondary font-body">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-xs text-text-secondary font-body mt-1">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Industry Partnerships */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Handshake" size={20} className="text-primary" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Partnerships
          </h3>
        </div>

        <div className="space-y-4">
          {partnerships.map((partner, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors duration-normal">
              <div className="w-10 h-10 bg-background rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-body font-semibold text-foreground">
                    {partner.name}
                  </h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-body font-medium">
                    {partner.tier}
                  </span>
                </div>
                <p className="text-xs text-text-secondary font-body mt-1">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Awards & Recognition */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={20} className="text-warning" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Awards & Recognition
          </h3>
        </div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors duration-normal">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={award.icon} size={16} className="text-warning" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-body font-semibold text-foreground">
                  {award.title}
                </h4>
                <p className="text-xs text-text-secondary font-body">
                  {award.organization} • {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-blue rounded-xl p-6 text-center"
      >
        <Icon name="MessageSquare" size={32} className="text-white mx-auto mb-4" />
        <h3 className="text-lg font-heading font-semibold text-white mb-2">
          Ready to Work Together?
        </h3>
        <p className="text-sm text-white/80 font-body mb-4">
          Let's discuss how we can help transform your business with our expertise.
        </p>
        <button className="w-full bg-white text-primary font-body font-semibold py-2 px-4 rounded-lg hover:bg-white/90 transition-colors duration-normal">
          Get In Touch
        </button>
      </motion.div>
    </div>
  );
};

export default CompanySidebar;