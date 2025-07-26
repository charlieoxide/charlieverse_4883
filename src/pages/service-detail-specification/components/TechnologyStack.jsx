import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnologyStack = ({ techStack }) => {
  const [activeCategory, setActiveCategory] = useState(techStack.categories[0]?.id || '');

  const activeData = techStack.categories.find(cat => cat.id === activeCategory);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Layers" size={18} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Technology Stack
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground glow-blue-sm'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} className="text-current" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      {activeData && (
        <div className="space-y-6">
          <p className="text-text-secondary font-body">
            {activeData.description}
          </p>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeData.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-muted/50 border border-border rounded-lg p-4 hover:bg-muted transition-colors duration-normal group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-normal">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {tech.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full font-body font-medium ${
                        tech.level === 'Expert' ?'bg-success/10 text-success'
                          : tech.level === 'Advanced' ?'bg-primary/10 text-primary' :'bg-warning/10 text-warning'
                      }`}>
                        {tech.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Icon
                            key={starIndex}
                            name="Star"
                            size={12}
                            className={starIndex < tech.rating ? 'text-warning' : 'text-border'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {activeData.comparison && (
            <div className="mt-8">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Technology Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-body font-semibold text-foreground">
                        Technology
                      </th>
                      <th className="text-left p-4 font-body font-semibold text-foreground">
                        Performance
                      </th>
                      <th className="text-left p-4 font-body font-semibold text-foreground">
                        Scalability
                      </th>
                      <th className="text-left p-4 font-body font-semibold text-foreground">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeData.comparison.map((item, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              className="w-6 h-6 object-contain"
                            />
                            <span className="font-body font-medium text-foreground">
                              {item.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-border rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${item.performance}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-body text-text-secondary">
                              {item.performance}%
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-border rounded-full h-2">
                              <div
                                className="bg-accent h-2 rounded-full"
                                style={{ width: `${item.scalability}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-body text-text-secondary">
                              {item.scalability}%
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-body text-text-secondary">
                            {item.useCase}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TechnologyStack;