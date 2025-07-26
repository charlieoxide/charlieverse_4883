import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const ServiceCategoryFilter = ({ 
  categories = [],
  onFilterChange = () => {},
  showSearch = true,
  className = ""
}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const defaultCategories = [
    { id: 'web-development', label: 'Web Development', count: 12, icon: 'Code' },
    { id: 'mobile-apps', label: 'Mobile Apps', count: 8, icon: 'Smartphone' },
    { id: 'cloud-solutions', label: 'Cloud Solutions', count: 15, icon: 'Cloud' },
    { id: 'ai-ml', label: 'AI & Machine Learning', count: 6, icon: 'Brain' },
    { id: 'blockchain', label: 'Blockchain', count: 4, icon: 'Link' },
    { id: 'iot', label: 'IoT Solutions', count: 7, icon: 'Wifi' },
    { id: 'cybersecurity', label: 'Cybersecurity', count: 9, icon: 'Shield' },
    { id: 'data-analytics', label: 'Data Analytics', count: 11, icon: 'BarChart3' }
  ];

  const activeCategories = categories.length > 0 ? categories : defaultCategories;

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('categories');
    if (categoryParam) {
      setSelectedCategories(categoryParam.split(','));
    }
  }, [location.search]);

  const handleCategoryToggle = (categoryId) => {
    const newSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newSelected);
    
    // Update URL parameters
    const urlParams = new URLSearchParams(location.search);
    if (newSelected.length > 0) {
      urlParams.set('categories', newSelected.join(','));
    } else {
      urlParams.delete('categories');
    }
    
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
    onFilterChange({ categories: newSelected, search: searchTerm });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ categories: selectedCategories, search: value });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSearchTerm('');
    const urlParams = new URLSearchParams(location.search);
    urlParams.delete('categories');
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
    onFilterChange({ categories: [], search: '' });
  };

  const filteredCategories = activeCategories.filter(category =>
    category.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Input */}
        {showSearch && (
          <div className="relative flex-1 max-w-md">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal"
            />
          </div>
        )}

        {/* Desktop Category Filters */}
        <div className="hidden lg:flex items-center gap-2 flex-wrap">
          {activeCategories.slice(0, 6).map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryToggle(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
                selectedCategories.includes(category.id)
                  ? 'bg-primary text-primary-foreground glow-blue-sm'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon 
                name={category.icon} 
                size={16} 
                className="text-current" 
              />
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategories.includes(category.id)
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-text-secondary/20 text-text-secondary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}

          {activeCategories.length > 6 && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-normal"
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon 
                  name={isDropdownOpen ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-xl z-1010">
                  <div className="p-2 max-h-64 overflow-y-auto">
                    {activeCategories.slice(6).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategoryToggle(category.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
                          selectedCategories.includes(category.id)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-popover-foreground hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon 
                            name={category.icon} 
                            size={16} 
                            className="text-current" 
                          />
                          <span>{category.label}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategories.includes(category.id)
                            ? 'bg-primary-foreground/20 text-primary-foreground'
                            : 'bg-text-secondary/20 text-text-secondary'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-2 bg-muted text-muted-foreground rounded-lg font-body font-medium hover:bg-primary/10 hover:text-primary transition-all duration-normal"
          >
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} />
              <span>
                Categories {selectedCategories.length > 0 && `(${selectedCategories.length})`}
              </span>
            </div>
            <Icon 
              name={isDropdownOpen ? "ChevronUp" : "ChevronDown"} 
              size={16} 
            />
          </button>

          {isDropdownOpen && (
            <div className="mt-2 bg-popover border border-border rounded-lg shadow-xl">
              <div className="p-2 max-h-64 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryToggle(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-body font-medium transition-all duration-normal ${
                      selectedCategories.includes(category.id)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-popover-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={category.icon} 
                        size={16} 
                        className="text-current" 
                      />
                      <span>{category.label}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategories.includes(category.id)
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-text-secondary/20 text-text-secondary'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {(selectedCategories.length > 0 || searchTerm) && (
          <button
            onClick={clearAllFilters}
            className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-error transition-colors duration-normal"
          >
            <Icon name="X" size={16} />
            <span className="font-body font-medium">Clear All</span>
          </button>
        )}
      </div>

      {/* Active Filters Display */}
      {selectedCategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-body font-medium text-text-secondary">
              Active filters:
            </span>
            {selectedCategories.map((categoryId) => {
              const category = activeCategories.find(cat => cat.id === categoryId);
              return category ? (
                <span
                  key={categoryId}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium"
                >
                  <Icon name={category.icon} size={14} />
                  <span>{category.label}</span>
                  <button
                    onClick={() => handleCategoryToggle(categoryId)}
                    className="ml-1 hover:text-error transition-colors duration-normal"
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

export default ServiceCategoryFilter;