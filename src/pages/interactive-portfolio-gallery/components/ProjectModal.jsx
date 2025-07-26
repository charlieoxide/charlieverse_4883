import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handleImageNavigation('prev');
    } else if (e.key === 'ArrowRight') {
      handleImageNavigation('next');
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'gallery', label: 'Gallery', icon: 'Images' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' }
  ];

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4 mt-1 text-sm text-text-secondary">
                <span className="flex items-center space-x-1">
                  <Icon name="Building" size={14} />
                  <span>{project.client}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{project.completedDate}</span>
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${
                  project.status === 'completed' 
                    ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-foreground hover:bg-muted rounded-lg transition-all duration-normal"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-body font-medium transition-all duration-normal ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Project Description
                  </h3>
                  <p className="text-text-secondary font-body leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>
                  
                  <h4 className="text-md font-heading font-semibold text-foreground mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-text-secondary font-body">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span className="text-sm font-body font-medium text-foreground">Team Size</span>
                      </div>
                      <span className="text-lg font-heading font-semibold text-foreground">
                        {project.teamSize} members
                      </span>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm font-body font-medium text-foreground">Duration</span>
                      </div>
                      <span className="text-lg font-heading font-semibold text-foreground">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-body font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handleImageNavigation('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-normal"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={() => handleImageNavigation('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-normal"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-normal ${
                            index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-normal ${
                      index === currentImageIndex 
                        ? 'border-primary' :'border-transparent hover:border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Technical Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="AlertTriangle" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary font-body">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Solutions Implemented
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary font-body">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Architecture Overview
                </h3>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-text-secondary font-body leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="bg-muted rounded-lg p-6 text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-body font-medium text-foreground mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Client Testimonial
                </h3>
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
                  <blockquote className="text-text-secondary font-body italic text-lg leading-relaxed mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-foreground">
                        {project.testimonial.author}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {project.testimonial.position}, {project.client}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex items-center space-x-4">
            {project.liveUrl && (
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                View Live Project
              </Button>
            )}
            {project.caseStudyUrl && (
              <Button
                variant="outline"
                iconName="FileText"
                iconPosition="right"
                onClick={() => window.open(project.caseStudyUrl, '_blank')}
              >
                Full Case Study
              </Button>
            )}
          </div>
          
          <Button
            variant="ghost"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;