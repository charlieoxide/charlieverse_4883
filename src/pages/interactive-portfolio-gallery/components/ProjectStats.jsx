import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'Briefcase',
      label: 'Total Projects',
      value: projects.length,
      description: 'Successfully delivered',
      color: 'text-primary'
    },
    {
      icon: 'CheckCircle',
      label: 'Completed',
      value: projects.filter(p => p.status === 'completed').length,
      description: 'Projects finished',
      color: 'text-success'
    },
    {
      icon: 'Clock',
      label: 'In Progress',
      value: projects.filter(p => p.status === 'in-progress').length,
      description: 'Active projects',
      color: 'text-warning'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: new Set(projects.map(p => p.client)).size,
      description: 'Satisfied customers',
      color: 'text-accent'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: new Set(projects.flatMap(p => p.technologies)).size,
      description: 'Different tech stacks',
      color: 'text-primary'
    },
    {
      icon: 'Globe',
      label: 'Industries',
      value: new Set(projects.map(p => p.industry)).size,
      description: 'Sectors served',
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-3 ${stat.color}`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div className="text-2xl font-heading font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-body font-medium text-foreground mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-text-secondary">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;