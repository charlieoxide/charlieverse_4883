import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnologyPartnership = () => {
  const partnerships = [
    {
      id: 1,
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center",
      tier: "Advanced Partner",
      description: "Cloud infrastructure and serverless solutions",
      certifications: ["Solutions Architect", "DevOps Engineer"],
      icon: "Cloud"
    },
    {
      id: 2,
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      tier: "Gold Partner",
      description: "Enterprise cloud and AI services",
      certifications: ["Azure Expert", "AI Engineer"],
      icon: "Zap"
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      tier: "Premier Partner",
      description: "Machine learning and data analytics",
      certifications: ["ML Engineer", "Data Engineer"],
      icon: "Brain"
    },
    {
      id: 4,
      name: "Docker",
      logo: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop&crop=center",
      tier: "Certified Partner",
      description: "Containerization and DevOps",
      certifications: ["Docker Certified"],
      icon: "Package"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "Shield",
      color: "text-success"
    },
    {
      id: 2,
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: "Lock",
      color: "text-primary"
    },
    {
      id: 3,
      name: "GDPR Compliant",
      description: "Data Protection Standards",
      icon: "FileCheck",
      color: "text-accent"
    },
    {
      id: 4,
      name: "PCI DSS",
      description: "Payment Card Industry",
      icon: "CreditCard",
      color: "text-warning"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Technology Partnerships */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Handshake" size={24} className="text-primary" />
          <h3 className="text-2xl font-heading font-semibold text-foreground">
            Technology Partnerships
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {partnerships.map((partner) => (
            <div
              key={partner.id}
              className="bg-card border border-border rounded-lg p-4 hover:glow-blue-sm hover:border-primary/50 transition-all duration-normal group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-medium text-foreground truncate group-hover:text-primary transition-colors duration-normal">
                    {partner.name}
                  </h4>
                  <span className="text-xs text-primary font-body font-medium">
                    {partner.tier}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary font-body mb-3">
                {partner.description}
              </p>
              
              <div className="space-y-1">
                {partner.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="Award" size={12} className="text-accent" />
                    <span className="text-xs text-text-secondary font-body">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Award" size={24} className="text-primary" />
          <h3 className="text-2xl font-heading font-semibold text-foreground">
            Certifications & Compliance
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card border border-border rounded-lg p-4 hover:glow-blue-sm hover:border-primary/50 transition-all duration-normal group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${cert.color}`}>
                  <Icon name={cert.icon} size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-normal">
                    {cert.name}
                  </h4>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary font-body">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPartnership;