import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MethodologyOverview = () => {
  const [activeMethodology, setActiveMethodology] = useState('development');

  const methodologies = {
    development: {
      title: "Development Process",
      icon: "Code",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Our agile development methodology ensures rapid delivery while maintaining code quality and scalability.",
      phases: [
        {
          name: "Discovery & Planning",
          icon: "Search",
          duration: "1-2 weeks",
          description: "Requirements gathering, technical analysis, and project roadmap creation.",
          deliverables: ["Technical Requirements Document", "Project Timeline", "Resource Allocation Plan"]
        },
        {
          name: "Design & Architecture",
          icon: "Layers",
          duration: "1-3 weeks",
          description: "System architecture design, UI/UX mockups, and database schema planning.",
          deliverables: ["System Architecture", "UI/UX Designs", "Database Schema", "API Documentation"]
        },
        {
          name: "Development & Testing",
          icon: "Code",
          duration: "4-12 weeks",
          description: "Iterative development with continuous testing and quality assurance.",
          deliverables: ["Working Software", "Test Reports", "Code Documentation", "Performance Metrics"]
        },
        {
          name: "Deployment & Support",
          icon: "Rocket",
          duration: "1-2 weeks",
          description: "Production deployment, monitoring setup, and ongoing maintenance support.",
          deliverables: ["Production Deployment", "Monitoring Dashboard", "Support Documentation", "Training Materials"]
        }
      ]
    },
    security: {
      title: "Security Protocols",
      icon: "Shield",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      description: "Comprehensive security framework protecting against evolving cyber threats and ensuring compliance.",
      phases: [
        {
          name: "Security Assessment",
          icon: "Search",
          duration: "1 week",
          description: "Comprehensive security audit and vulnerability assessment of existing systems.",
          deliverables: ["Security Audit Report", "Vulnerability Assessment", "Risk Analysis", "Compliance Checklist"]
        },
        {
          name: "Security Architecture",
          icon: "Shield",
          duration: "2-3 weeks",
          description: "Design secure architecture with defense-in-depth principles and zero-trust model.",
          deliverables: ["Security Architecture", "Access Control Matrix", "Encryption Strategy", "Incident Response Plan"]
        },
        {
          name: "Implementation & Testing",
          icon: "Lock",
          duration: "3-6 weeks",
          description: "Security controls implementation with penetration testing and validation.",
          deliverables: ["Security Controls", "Penetration Test Report", "Security Policies", "Training Materials"]
        },
        {
          name: "Monitoring & Maintenance",
          icon: "Eye",
          duration: "Ongoing",
          description: "Continuous security monitoring, threat detection, and incident response.",
          deliverables: ["Security Dashboard", "Threat Intelligence", "Incident Reports", "Compliance Reports"]
        }
      ]
    },
    aiml: {
      title: "AI/ML Approach",
      icon: "Brain",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Data-driven AI/ML development process from problem definition to production deployment.",
      phases: [
        {
          name: "Problem Definition",
          icon: "Target",
          duration: "1-2 weeks",
          description: "Business problem analysis, success metrics definition, and feasibility assessment.",
          deliverables: ["Problem Statement", "Success Metrics", "Feasibility Report", "Data Requirements"]
        },
        {
          name: "Data Engineering",
          icon: "Database",
          duration: "2-4 weeks",
          description: "Data collection, cleaning, preprocessing, and feature engineering for model training.",
          deliverables: ["Clean Dataset", "Feature Engineering", "Data Pipeline", "Data Quality Report"]
        },
        {
          name: "Model Development",
          icon: "Brain",
          duration: "3-8 weeks",
          description: "Model selection, training, validation, and hyperparameter optimization.",
          deliverables: ["Trained Models", "Model Evaluation", "Performance Metrics", "Model Documentation"]
        },
        {
          name: "Deployment & MLOps",
          icon: "Zap",
          duration: "2-4 weeks",
          description: "Model deployment, monitoring, and continuous improvement with MLOps practices.",
          deliverables: ["Production Model", "Monitoring Dashboard", "A/B Testing", "Model Versioning"]
        }
      ]
    }
  };

  const currentMethodology = methodologies[activeMethodology];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Methodology</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            We follow proven methodologies and best practices to ensure consistent, 
            high-quality deliverables across all our service areas.
          </p>
        </motion.div>

        {/* Methodology Selector */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
          {Object.entries(methodologies).map(([key, methodology]) => (
            <button
              key={key}
              onClick={() => setActiveMethodology(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-body font-medium transition-all duration-normal ${
                activeMethodology === key
                  ? `${methodology.bgColor} ${methodology.color} border-2 border-current`
                  : 'bg-card border border-border text-text-secondary hover:text-foreground hover:bg-primary/5'
              }`}
            >
              <Icon name={methodology.icon} size={20} />
              <span>{methodology.title}</span>
            </button>
          ))}
        </div>

        {/* Methodology Content */}
        <motion.div
          key={activeMethodology}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-16 h-16 ${currentMethodology.bgColor} rounded-full mb-4`}>
              <Icon name={currentMethodology.icon} size={32} className={currentMethodology.color} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {currentMethodology.title}
            </h3>
            <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
              {currentMethodology.description}
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between mb-8">
                {currentMethodology.phases.map((phase, index) => (
                  <React.Fragment key={phase.name}>
                    <div className="flex flex-col items-center text-center max-w-xs">
                      <div className={`w-16 h-16 ${currentMethodology.bgColor} rounded-full flex items-center justify-center mb-4`}>
                        <Icon name={phase.icon} size={24} className={currentMethodology.color} />
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {phase.name}
                      </h4>
                      <p className="text-sm text-primary font-body font-medium mb-2">
                        {phase.duration}
                      </p>
                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    {index < currentMethodology.phases.length - 1 && (
                      <div className="flex-1 mx-4">
                        <div className="h-0.5 bg-border relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <Icon name="ChevronRight" size={16} className="text-border" />
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-8">
              {currentMethodology.phases.map((phase, index) => (
                <div key={phase.name} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${currentMethodology.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon name={phase.icon} size={20} className={currentMethodology.color} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-1">
                      {phase.name}
                    </h4>
                    <p className="text-sm text-primary font-body font-medium mb-2">
                      {phase.duration}
                    </p>
                    <p className="text-sm text-text-secondary font-body leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-8 text-center">
                Key Deliverables by Phase
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentMethodology.phases.map((phase, index) => (
                  <div key={phase.name} className="bg-muted rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-8 h-8 ${currentMethodology.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon name={phase.icon} size={16} className={currentMethodology.color} />
                      </div>
                      <h5 className="font-heading font-semibold text-foreground text-sm">
                        Phase {index + 1}
                      </h5>
                    </div>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-text-secondary font-body">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyOverview;