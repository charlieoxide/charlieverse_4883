import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Home',
      path: '/interactive-3d-hero-landing',
      icon: 'Home'
    },
    {
      label: 'Services',
      path: '/services-overview-hub',
      icon: 'Settings'
    },
    {
      label: 'Portfolio',
      path: '/interactive-portfolio-gallery',
      icon: 'Briefcase'
    },
    {
      label: 'About',
      path: '/about-company-expertise',
      icon: 'Users'
    },
    {
      label: 'Contact',
      path: '/contact-inquiry-system',
      icon: 'Mail'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path || 
           (path === '/services-overview-hub' && location.pathname === '/service-detail-specification');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-normal ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-blue' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-9xl mx-auto">
          <div className="flex items-center justify-between h-16 px-5 lg:px-8">
            {/* Logo */}
            <Link 
              to="/interactive-3d-hero-landing" 
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center group-hover:glow-blue-sm transition-all duration-normal">
                  <span className="text-white font-heading font-bold text-lg">C</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-normal">
                  CharlieVerse
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-normal group ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 glow-blue-sm' :'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon 
                    name={item.icon} 
                    size={18} 
                    className={`transition-colors duration-normal ${
                      isActivePath(item.path) ? 'text-primary' : 'text-current'
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-normal"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-2000">
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            <div className="relative bg-card border-b border-border shadow-2xl">
              <nav className="px-5 py-6 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-all duration-normal ${
                      isActivePath(item.path)
                        ? 'text-primary bg-primary/10 glow-blue-sm' :'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <Icon 
                      name={item.icon} 
                      size={20} 
                      className={`transition-colors duration-normal ${
                        isActivePath(item.path) ? 'text-primary' : 'text-current'
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
};

export default Header;