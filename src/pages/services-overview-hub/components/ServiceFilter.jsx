import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ServiceFilter = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'education', label: 'Education' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'logistics', label: 'Logistics' }
  ];

  const complexityOptions = [
    { value: 'all', label: 'All Complexity' },
    { value: 'simple', label: 'Simple Projects' },
    { value: 'medium', label: 'Medium Complexity' },
    { value: 'complex', label: 'Complex Enterprise' },
    { value: 'custom', label: 'Custom Solutions' }
  ];

  const technologyOptions = [
    { value: 'all', label: 'All Technologies' },
    { value: 'react', label: 'React/Next.js' },
    { value: 'node', label: 'Node.js' },
    { value: 'python', label: 'Python/Django' },
    { value: 'cloud', label: 'Cloud Native' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI/ML' }
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      industry: 'all',
      complexity: 'all',
      technology: 'all'
    };
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(activeFilters).some(value => value !== 'all');

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Filter Title & Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Filter" size={20} className="text-primary" />
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Filter Services
            </h3>
            {hasActiveFilters && (
              <span className="bg-primary/10 text-primary text-xs font-body font-medium px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors duration-normal"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </button>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center space-x-4">
          <Select
            options={industryOptions}
            value={activeFilters.industry}
            onChange={(value) => handleFilterChange('industry', value)}
            placeholder="Industry"
            className="min-w-40"
          />
          
          <Select
            options={complexityOptions}
            value={activeFilters.complexity}
            onChange={(value) => handleFilterChange('complexity', value)}
            placeholder="Complexity"
            className="min-w-40"
          />
          
          <Select
            options={technologyOptions}
            value={activeFilters.technology}
            onChange={(value) => handleFilterChange('technology', value)}
            placeholder="Technology"
            className="min-w-40"
          />

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              iconName="X"
              iconPosition="left"
              className="text-text-secondary hover:text-error"
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Filters */}
      <div className={`lg:hidden transition-all duration-normal overflow-hidden ${
        isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-4">
          <Select
            label="Industry"
            options={industryOptions}
            value={activeFilters.industry}
            onChange={(value) => handleFilterChange('industry', value)}
          />
          
          <Select
            label="Project Complexity"
            options={complexityOptions}
            value={activeFilters.complexity}
            onChange={(value) => handleFilterChange('complexity', value)}
          />
          
          <Select
            label="Technology Stack"
            options={technologyOptions}
            value={activeFilters.technology}
            onChange={(value) => handleFilterChange('technology', value)}
          />

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              iconName="X"
              iconPosition="left"
              fullWidth
            >
              Clear All Filters
            </Button>
          )}
        </div>
      </div>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-body font-medium text-text-secondary">
              Active filters:
            </span>
            {Object.entries(activeFilters).map(([key, value]) => {
              if (value === 'all') return null;
              const option = key === 'industry' ? industryOptions.find(opt => opt.value === value) :
                           key === 'complexity' ? complexityOptions.find(opt => opt.value === value) :
                           technologyOptions.find(opt => opt.value === value);
              
              return option ? (
                <span
                  key={key}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium"
                >
                  <span>{option.label}</span>
                  <button
                    onClick={() => handleFilterChange(key, 'all')}
                    className="hover:text-error transition-colors duration-normal"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;