import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card border border-border rounded-lg p-6 transition-all duration-normal hover:glow-blue-sm hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Enhanced Icon */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center transition-all duration-normal ${
          isHovered ? 'transform scale-110 glow-blue' : ''
        }`}>
          <Icon 
            name={service.icon} 
            size={32} 
            className="text-white" 
          />
        </div>
        {service.isPopular && (
          <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-body font-medium px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>

      {/* Service Title & Description */}
      <div className="mb-4">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-normal">
          {service.title}
        </h3>
        <p className="text-text-secondary font-body leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="mb-6">
        <h4 className="text-sm font-body font-medium text-foreground mb-3">Key Capabilities:</h4>
        <ul className="space-y-2">
          {service.capabilities.slice(0, 4).map((capability, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Check" size={14} className="text-success flex-shrink-0" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Details */}
      <div className={`transition-all duration-normal overflow-hidden ${
        isHovered ? 'max-h-32 opacity-100 mb-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-border pt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-text-secondary font-body">Projects:</span>
              <span className="text-primary font-medium ml-2">{service.metrics.projects}+</span>
            </div>
            <div>
              <span className="text-text-secondary font-body">Success Rate:</span>
              <span className="text-success font-medium ml-2">{service.metrics.successRate}</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-text-secondary font-body text-xs">Starting from </span>
            <span className="text-primary font-medium">{service.startingPrice}</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <Link to="/service-detail-specification" state={{ service }}>
          <Button 
            variant="outline" 
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
            className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-normal"
          >
            Learn More
          </Button>
        </Link>
      </div>

      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg transition-opacity duration-normal ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default ServiceCard;