import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ timeline }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={18} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Project Timeline Examples
        </h2>
      </div>

      <div className="space-y-8">
        {timeline.examples.map((example, exampleIndex) => (
          <div key={exampleIndex} className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {example.projectType}
              </h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-body text-text-secondary">
                  Total Duration: {example.totalDuration}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium">
                  {example.complexity}
                </span>
              </div>
            </div>

            <p className="text-text-secondary font-body mb-6">
              {example.description}
            </p>

            {/* Timeline Visualization */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-6"></div>
              
              <div className="space-y-6">
                {example.milestones.map((milestone, milestoneIndex) => (
                  <div key={milestoneIndex} className="relative flex items-start space-x-4">
                    {/* Milestone Marker */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      milestone.status === 'completed' 
                        ? 'bg-success text-success-foreground'
                        : milestone.status === 'in-progress' ?'bg-primary text-primary-foreground glow-blue-sm' :'bg-muted text-muted-foreground'
                    }`}>
                      <Icon 
                        name={
                          milestone.status === 'completed' 
                            ? 'CheckCircle'
                            : milestone.status === 'in-progress' ?'Clock' :'Circle'
                        } 
                        size={20} 
                      />
                    </div>

                    {/* Milestone Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-body font-semibold text-foreground">
                          {milestone.title}
                        </h4>
                        <span className="text-sm font-body text-text-secondary">
                          {milestone.duration}
                        </span>
                      </div>

                      <p className="text-sm text-text-secondary mb-3">
                        {milestone.description}
                      </p>

                      {/* Deliverables */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {milestone.deliverables.map((deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center space-x-2"
                          >
                            <Icon 
                              name="ArrowRight" 
                              size={14} 
                              className="text-primary" 
                            />
                            <span className="text-sm font-body text-text-secondary">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      {milestone.progress !== undefined && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-body text-text-secondary">
                              Progress
                            </span>
                            <span className="text-xs font-body text-text-secondary">
                              {milestone.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-normal ${
                                milestone.status === 'completed'
                                  ? 'bg-success'
                                  : milestone.status === 'in-progress' ?'bg-primary' :'bg-muted'
                              }`}
                              style={{ width: `${milestone.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {example.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name={stat.icon} size={20} className="text-primary" />
                    </div>
                    <div className="text-lg font-heading font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm font-body text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;