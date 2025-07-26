import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();

  const pathMapping = {
    '/interactive-3d-hero-landing': { label: 'Home', icon: 'Home' },
    '/services-overview-hub': { label: 'Services', icon: 'Settings' },
    '/service-detail-specification': { label: 'Service Details', icon: 'FileText' },
    '/interactive-portfolio-gallery': { label: 'Portfolio', icon: 'Briefcase' },
    '/about-company-expertise': { label: 'About', icon: 'Users' },
    '/contact-inquiry-system': { label: 'Contact', icon: 'Mail' }
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/interactive-3d-hero-landing', icon: 'Home' }];

    if (location.pathname !== '/interactive-3d-hero-landing') {
      const currentPath = location.pathname;
      const currentMapping = pathMapping[currentPath];
      
      if (currentMapping) {
        // Handle service detail special case
        if (currentPath === '/service-detail-specification') {
          breadcrumbs.push({
            label: 'Services',
            path: '/services-overview-hub',
            icon: 'Settings'
          });
        }
        
        breadcrumbs.push({
          label: currentMapping.label,
          path: currentPath,
          icon: currentMapping.icon,
          isActive: true
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm font-body mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.path || index} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-text-secondary mx-2" 
              />
            )}
            
            {item.isActive ? (
              <span className="flex items-center space-x-2 text-primary font-medium">
                <Icon 
                  name={item.icon} 
                  size={16} 
                  className="text-primary" 
                />
                <span>{item.label}</span>
              </span>
            ) : (
              <Link
                to={item.path}
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-normal group"
              >
                <Icon 
                  name={item.icon} 
                  size={16} 
                  className="text-current group-hover:text-primary transition-colors duration-normal" 
                />
                <span className="group-hover:text-primary transition-colors duration-normal">
                  {item.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;