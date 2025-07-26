import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MethodologyOverview = () => {
  const [activePhase, setActivePhase] = useState(0);

  const methodology = {
    title: "CharlieVerse Development Methodology",
    subtitle: "Agile-driven approach with continuous delivery and client collaboration",
    phases: [
      {
        id: 1,
        title: "Discovery & Planning",
        duration: "1-2 weeks",
        icon: "Search",
        description: "Comprehensive requirement analysis and project roadmap creation",
        activities: [
          "Stakeholder interviews and requirement gathering",
          "Technical feasibility assessment",
          "Architecture design and technology selection",
          "Project timeline and milestone definition"
        ],
        deliverables: ["Project Charter", "Technical Specification", "Development Roadmap"]
      },
      {
        id: 2,
        title: "Design & Prototyping",
        duration: "2-3 weeks",
        icon: "Palette",
        description: "User-centered design with interactive prototypes",
        activities: [
          "User experience research and persona development",
          "Wireframing and user interface design",
          "Interactive prototype creation",
          "Design system establishment"
        ],
        deliverables: ["UI/UX Designs", "Interactive Prototype", "Design System"]
      },
      {
        id: 3,
        title: "Development & Testing",
        duration: "4-12 weeks",
        icon: "Code",
        description: "Agile development with continuous integration and testing",
        activities: [
          "Sprint-based development cycles",
          "Automated testing implementation",
          "Code reviews and quality assurance",
          "Regular client demos and feedback"
        ],
        deliverables: ["Working Software", "Test Reports", "Documentation"]
      },
      {
        id: 4,
        title: "Deployment & Launch",
        duration: "1-2 weeks",
        icon: "Rocket",
        description: "Seamless deployment with monitoring and optimization",
        activities: [
          "Production environment setup",
          "Performance optimization",
          "Security testing and compliance",
          "Go-live support and monitoring"
        ],
        deliverables: ["Live Application", "Deployment Guide", "Monitoring Setup"]
      },
      {
        id: 5,
        title: "Support & Maintenance",
        duration: "Ongoing",
        icon: "Settings",
        description: "Continuous support with regular updates and improvements",
        activities: [
          "24/7 monitoring and support",
          "Regular security updates",
          "Performance optimization",
          "Feature enhancements"
        ],
        deliverables: ["Support SLA", "Update Reports", "Performance Metrics"]
      }
    ]
  };

  const principles = [
    {
      icon: "Users",
      title: "Client-Centric",
      description: "Regular communication and feedback loops ensure alignment with business goals"
    },
    {
      icon: "Zap",
      title: "Agile & Flexible",
      description: "Adaptive methodology that responds quickly to changing requirements"
    },
    {
      icon: "Shield",
      title: "Quality First",
      description: "Comprehensive testing and code reviews maintain high quality standards"
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description: "Architecture designed for growth and future expansion needs"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Icon name="GitBranch" size={28} className="text-primary" />
          <h3 className="text-2xl font-heading font-semibold text-foreground">
            {methodology.title}
          </h3>
        </div>
        <p className="text-text-secondary font-body max-w-2xl mx-auto">
          {methodology.subtitle}
        </p>
      </div>

      {/* Methodology Phases */}
      <div className="bg-card border border-border rounded-lg p-6">
        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {methodology.phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
                activePhase === index
                  ? 'bg-primary text-primary-foreground glow-blue-sm'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={phase.icon} size={16} />
              <span className="hidden sm:inline">{phase.title}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center">
                <Icon name={methodology.phases[activePhase].icon} size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  {methodology.phases[activePhase].title}
                </h4>
                <span className="text-primary font-body font-medium">
                  {methodology.phases[activePhase].duration}
                </span>
              </div>
            </div>
            
            <p className="text-text-secondary font-body mb-6">
              {methodology.phases[activePhase].description}
            </p>

            <div>
              <h5 className="font-body font-medium text-foreground mb-3">Key Activities:</h5>
              <ul className="space-y-2">
                {methodology.phases[activePhase].activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={14} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-body">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-body font-medium text-foreground mb-4">Deliverables:</h5>
            <div className="space-y-3">
              {methodology.phases[activePhase].deliverables.map((deliverable, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 bg-muted rounded-lg"
                >
                  <Icon name="FileText" size={16} className="text-accent" />
                  <span className="font-body font-medium text-foreground">{deliverable}</span>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-body font-medium text-foreground">
                  Phase Progress
                </span>
                <span className="text-sm text-primary font-body font-medium">
                  {activePhase + 1} of {methodology.phases.length}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-blue h-2 rounded-full transition-all duration-normal"
                  style={{ width: `${((activePhase + 1) / methodology.phases.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div>
        <h4 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
          Our Core Principles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center hover:glow-blue-sm hover:border-primary/50 transition-all duration-normal group"
            >
              <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:glow-blue transition-all duration-normal">
                <Icon name={principle.icon} size={24} className="text-white" />
              </div>
              <h5 className="font-body font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-normal">
                {principle.title}
              </h5>
              <p className="text-sm text-text-secondary font-body">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyOverview;