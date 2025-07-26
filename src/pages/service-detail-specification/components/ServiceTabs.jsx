import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState('process');

  const tabs = [
    { id: 'process', label: 'Process Overview', icon: 'GitBranch' },
    { id: 'case-studies', label: 'Case Studies', icon: 'FileText' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'related', label: 'Related Services', icon: 'Link' }
  ];

  const renderProcessOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabsData.process.steps.map((step, index) => (
          <div key={index} className="bg-muted/50 border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Icon name={step.icon} size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-text-secondary font-body mb-4">
              {step.description}
            </p>
            <div className="space-y-2">
              {step.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="flex items-center space-x-2">
                  <Icon name="ArrowRight" size={14} className="text-primary" />
                  <span className="text-sm font-body text-text-secondary">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCaseStudies = () => (
    <div className="space-y-6">
      {tabsData.caseStudies.map((study, index) => (
        <div key={index} className="bg-muted/50 border border-border rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="aspect-video bg-background rounded-lg overflow-hidden mb-4">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Building" size={16} className="text-primary" />
                <span className="text-sm font-body font-medium text-foreground">
                  {study.client}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span className="text-sm font-body text-text-secondary">
                  {study.duration}
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {study.title}
              </h3>
              <p className="text-text-secondary font-body mb-4">
                {study.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2">
                    Challenge
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {study.solution}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-sm font-body text-text-secondary">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {study.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                View Full Case Study
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFAQ = () => (
    <div className="space-y-4">
      {tabsData.faq.map((item, index) => (
        <div key={index} className="bg-muted/50 border border-border rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
            {item.question}
          </h3>
          <p className="text-text-secondary font-body">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );

  const renderRelatedServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tabsData.relatedServices.map((service, index) => (
        <div key={index} className="bg-muted/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-normal group">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-normal">
            <Icon name={service.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-normal">
            {service.title}
          </h3>
          <p className="text-text-secondary font-body mb-4">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-body text-text-secondary">
              Starting from {service.startingPrice}
            </span>
            <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
              Learn More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'process':
        return renderProcessOverview();
      case 'case-studies':
        return renderCaseStudies();
      case 'faq':
        return renderFAQ();
      case 'related':
        return renderRelatedServices();
      default:
        return renderProcessOverview();
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground glow-blue-sm'
                : 'text-text-secondary hover:text-primary hover:bg-primary/10'
            }`}
          >
            <Icon name={tab.icon} size={16} className="text-current" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ServiceTabs;