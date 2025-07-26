import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleCardClick = (e) => {
    if (e.target.closest('.image-navigation') || e.target.closest('.tech-badge')) {
      return;
    }
    onViewDetails(project);
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="bg-card border border-border rounded-lg p-6 hover:glow-blue-sm transition-all duration-normal cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs font-body font-medium rounded-full">
                    <Icon name="Star" size={12} className="mr-1" />
                    Featured
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-4">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-normal">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${
                  project.status === 'completed' 
                    ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              
              <p className="text-text-secondary font-body mb-3">
                {project.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-text-secondary font-body">
                <span className="flex items-center space-x-1">
                  <Icon name="Building" size={14} />
                  <span>{project.client}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{project.completedDate}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project.duration}</span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded-md">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-text-secondary">
                  <Icon name="Users" size={14} />
                  <span>{project.teamSize} team members</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-text-secondary">
                  <Icon name="TrendingUp" size={14} />
                  <span>{project.impact}</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-card border border-border rounded-lg overflow-hidden hover:glow-blue-sm transition-all duration-normal cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-normal"
        />
        
        {project.images.length > 1 && isHovered && (
          <div className="image-navigation absolute inset-0 flex items-center justify-between p-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleImageNavigation('prev');
              }}
              className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-normal"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleImageNavigation('next');
              }}
              className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-normal"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        )}
        
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-normal ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs font-body font-medium rounded-full">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${
            project.status === 'completed' 
              ? 'bg-success/90 text-success-foreground' :'bg-warning/90 text-warning-foreground'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-normal mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary font-body text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-text-secondary font-body mb-4">
          <span className="flex items-center space-x-1">
            <Icon name="Building" size={12} />
            <span>{project.client}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{project.completedDate}</span>
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="tech-badge px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs text-text-secondary">
            <span className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{project.teamSize}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{project.duration}</span>
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;