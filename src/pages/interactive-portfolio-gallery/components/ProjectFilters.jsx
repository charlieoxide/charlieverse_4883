import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProjectFilters = ({ onFilterChange, totalProjects }) => {
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    industry: '',
    technology: '',
    scale: '',
    year: '',
    status: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Projects', count: 24, icon: 'Grid3X3' },
    { id: 'software-development', label: 'Software Development', count: 12, icon: 'Code' },
    { id: 'security', label: 'Security', count: 6, icon: 'Shield' },
    { id: 'ai-ml', label: 'AI & Machine Learning', count: 4, icon: 'Brain' },
    { id: 'mobile', label: 'Mobile Apps', count: 8, icon: 'Smartphone' },
    { id: 'web', label: 'Web Applications', count: 10, icon: 'Globe' }
  ];

  const industries = [
    { value: '', label: 'All Industries' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'education', label: 'Education' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'government', label: 'Government' }
  ];

  const technologies = [
    { value: '', label: 'All Technologies' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'aws', label: 'AWS' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'tensorflow', label: 'TensorFlow' },
    { value: 'blockchain', label: 'Blockchain' }
  ];

  const projectScales = [
    { value: '', label: 'All Scales' },
    { value: 'small', label: 'Small (1-3 months)' },
    { value: 'medium', label: 'Medium (3-6 months)' },
    { value: 'large', label: 'Large (6-12 months)' },
    { value: 'enterprise', label: 'Enterprise (12+ months)' }
  ];

  const years = [
    { value: '', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'client', label: 'By Client' },
    { value: 'duration', label: 'By Duration' }
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const category = urlParams.get('category') || 'all';
    const industry = urlParams.get('industry') || '';
    const technology = urlParams.get('technology') || '';
    const scale = urlParams.get('scale') || '';
    const year = urlParams.get('year') || '';
    const status = urlParams.get('status') || '';
    const search = urlParams.get('search') || '';
    const view = urlParams.get('view') || 'grid';
    const sort = urlParams.get('sort') || 'recent';

    setActiveFilters({ category, industry, technology, scale, year, status });
    setSearchTerm(search);
    setViewMode(view);
    setSortBy(sort);
  }, [location.search]);

  const updateURL = (newFilters, newSearch, newView, newSort) => {
    const urlParams = new URLSearchParams();
    
    if (newFilters.category !== 'all') urlParams.set('category', newFilters.category);
    if (newFilters.industry) urlParams.set('industry', newFilters.industry);
    if (newFilters.technology) urlParams.set('technology', newFilters.technology);
    if (newFilters.scale) urlParams.set('scale', newFilters.scale);
    if (newFilters.year) urlParams.set('year', newFilters.year);
    if (newFilters.status) urlParams.set('status', newFilters.status);
    if (newSearch) urlParams.set('search', newSearch);
    if (newView !== 'grid') urlParams.set('view', newView);
    if (newSort !== 'recent') urlParams.set('sort', newSort);

    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
  };

  const handleCategoryChange = (categoryId) => {
    const newFilters = { ...activeFilters, category: categoryId };
    setActiveFilters(newFilters);
    updateURL(newFilters, searchTerm, viewMode, sortBy);
    onFilterChange({ ...newFilters, search: searchTerm, viewMode, sortBy });
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    updateURL(newFilters, searchTerm, viewMode, sortBy);
    onFilterChange({ ...newFilters, search: searchTerm, viewMode, sortBy });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    updateURL(activeFilters, value, viewMode, sortBy);
    onFilterChange({ ...activeFilters, search: value, viewMode, sortBy });
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    updateURL(activeFilters, searchTerm, mode, sortBy);
    onFilterChange({ ...activeFilters, search: searchTerm, viewMode: mode, sortBy });
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    updateURL(activeFilters, searchTerm, viewMode, sort);
    onFilterChange({ ...activeFilters, search: searchTerm, viewMode, sortBy: sort });
  };

  const clearAllFilters = () => {
    const defaultFilters = {
      category: 'all',
      industry: '',
      technology: '',
      scale: '',
      year: '',
      status: ''
    };
    setActiveFilters(defaultFilters);
    setSearchTerm('');
    setSortBy('recent');
    navigate(location.pathname, { replace: true });
    onFilterChange({ ...defaultFilters, search: '', viewMode, sortBy: 'recent' });
  };

  const hasActiveFilters = activeFilters.category !== 'all' || 
    activeFilters.industry || activeFilters.technology || 
    activeFilters.scale || activeFilters.year || 
    activeFilters.status || searchTerm;

  return (
    <div className="space-y-6">
      {/* Search and View Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-body text-text-secondary">
              {totalProjects} projects
            </span>
          </div>

          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => handleViewModeChange('grid')}
              className={`p-2 rounded-md transition-all duration-normal ${
                viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => handleViewModeChange('list')}
              className={`p-2 rounded-md transition-all duration-normal ${
                viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>

          <Select
            options={sortOptions}
            value={sortBy}
            onChange={handleSortChange}
            placeholder="Sort by"
            className="w-40"
          />

          <Button
            variant="outline"
            size="sm"
            iconName={isFiltersExpanded ? "ChevronUp" : "Filter"}
            onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
            className="lg:hidden"
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
              activeFilters.category === category.id
                ? 'bg-primary text-primary-foreground glow-blue-sm'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.label}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              activeFilters.category === category.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-text-secondary/20 text-text-secondary'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      <div className={`${isFiltersExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select
              label="Industry"
              options={industries}
              value={activeFilters.industry}
              onChange={(value) => handleFilterChange('industry', value)}
              placeholder="All Industries"
            />

            <Select
              label="Technology"
              options={technologies}
              value={activeFilters.technology}
              onChange={(value) => handleFilterChange('technology', value)}
              placeholder="All Technologies"
            />

            <Select
              label="Project Scale"
              options={projectScales}
              value={activeFilters.scale}
              onChange={(value) => handleFilterChange('scale', value)}
              placeholder="All Scales"
            />

            <Select
              label="Year"
              options={years}
              value={activeFilters.year}
              onChange={(value) => handleFilterChange('year', value)}
              placeholder="All Years"
            />

            <Select
              label="Status"
              options={statusOptions}
              value={activeFilters.status}
              onChange={(value) => handleFilterChange('status', value)}
              placeholder="All Status"
            />
          </div>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-body font-medium text-text-secondary">
                  Active filters:
                </span>
                {activeFilters.category !== 'all' && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium">
                    <span>{categories.find(c => c.id === activeFilters.category)?.label}</span>
                    <button onClick={() => handleCategoryChange('all')}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium">
                    <span>"{searchTerm}"</span>
                    <button onClick={() => {
                      setSearchTerm('');
                      updateURL(activeFilters, '', viewMode, sortBy);
                      onFilterChange({ ...activeFilters, search: '', viewMode, sortBy });
                    }}>
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;