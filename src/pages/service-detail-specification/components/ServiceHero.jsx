import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceHero = ({ service }) => {
  return (
    <div className="relative bg-gradient-to-br from-card via-background to-card border border-border rounded-xl p-8 mb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium">
                  {service.category}
                </span>
                {service.isPopular && (
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-body font-medium">
                    Most Popular
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              {service.title}
            </h1>

            <p className="text-lg text-text-secondary font-body leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-sm font-body text-text-secondary">
                  {service.duration}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm font-body text-text-secondary">
                  {service.teamSize}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-primary" />
                <span className="text-sm font-body text-text-secondary">
                  {service.rating} ({service.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-80">
            <div className="relative">
              <Image
                src={service.heroImage}
                alt={service.title}
                className="w-full h-48 lg:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;