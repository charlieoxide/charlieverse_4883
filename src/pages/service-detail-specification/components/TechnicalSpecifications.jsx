import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSpecifications = ({ specifications }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Settings" size={18} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Technical Specifications
        </h2>
      </div>

      <div className="space-y-4">
        {specifications.map((spec, index) => (
          <div key={index} className="border border-border rounded-lg">
            <button
              onClick={() => toggleSection(spec.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-normal"
            >
              <div className="flex items-center space-x-3">
                <Icon name={spec.icon} size={20} className="text-primary" />
                <div>
                  <h3 className="font-body font-semibold text-foreground">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {spec.summary}
                  </p>
                </div>
              </div>
              <Icon 
                name={expandedSections[spec.id] ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-text-secondary" 
              />
            </button>

            {expandedSections[spec.id] && (
              <div className="px-4 pb-4 border-t border-border">
                <div className="pt-4 space-y-4">
                  {spec.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-body font-medium text-foreground mb-1">
                          {detail.feature}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {detail.description}
                        </p>
                        {detail.technologies && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {detail.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-body font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSpecifications;