import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = ({ projects, onViewDetails }) => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-text-secondary font-body">
            Showcasing our most impactful and innovative solutions
          </p>
        </div>
        
        <Button
          variant="outline"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group cursor-pointer ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
            onClick={() => onViewDetails(project)}
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:glow-blue-sm transition-all duration-normal h-full">
              <div className={`relative overflow-hidden ${
                index === 0 ? 'aspect-[16/10]' : 'aspect-video'
              }`}>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-normal"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-sm font-body font-medium rounded-full">
                    <Icon name="Star" size={14} className="mr-1" />
                    Featured
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-body font-medium ${
                    project.status === 'completed' 
                      ? 'bg-success/90 text-success-foreground' :'bg-warning/90 text-warning-foreground'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="w-full"
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-normal mb-2 ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-text-secondary font-body ${
                      index === 0 ? 'text-base' : 'text-sm'
                    } ${index === 0 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-text-secondary font-body mb-4">
                  <span className="flex items-center space-x-1">
                    <Icon name="Building" size={14} />
                    <span>{project.client}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{project.completedDate}</span>
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, index === 0 ? 6 : 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > (index === 0 ? 6 : 4) && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded-md">
                      +{project.technologies.length - (index === 0 ? 6 : 4)} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{project.teamSize} team</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{project.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={12} />
                      <span>{project.impact}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        className="p-2 text-text-secondary hover:text-primary transition-colors duration-normal"
                        title="View Live Project"
                      >
                        <Icon name="ExternalLink" size={16} />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewDetails(project);
                      }}
                      className="p-2 text-text-secondary hover:text-primary transition-colors duration-normal"
                      title="View Details"
                    >
                      <Icon name="Eye" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;