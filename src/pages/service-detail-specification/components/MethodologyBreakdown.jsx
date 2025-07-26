import React from 'react';
import Icon from '../../../components/AppIcon';

const MethodologyBreakdown = ({ methodology }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="GitBranch" size={18} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Development Methodology
        </h2>
      </div>

      <div className="space-y-6">
        {methodology.phases.map((phase, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < methodology.phases.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
            )}

            <div className="flex items-start space-x-4">
              {/* Phase Number */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 glow-blue-sm">
                <span className="text-primary-foreground font-heading font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Phase Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <span className="text-sm font-body text-text-secondary">
                    {phase.duration}
                  </span>
                </div>

                <p className="text-text-secondary font-body mb-4">
                  {phase.description}
                </p>

                {/* Deliverables */}
                <div className="mb-4">
                  <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                    Key Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div
                        key={deliverableIndex}
                        className="flex items-center space-x-2"
                      >
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm font-body text-text-secondary">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                {phase.tools && (
                  <div>
                    <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Benefits */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Why This Methodology?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {methodology.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name={benefit.icon} size={20} className="text-primary mt-1" />
              <div>
                <h4 className="font-body font-medium text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyBreakdown;