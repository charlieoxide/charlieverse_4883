import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ServiceCard from './components/ServiceCard';
import ServiceFilter from './components/ServiceFilter';
import TechnologyPartnership from './components/TechnologyPartnership';
import MethodologyOverview from './components/MethodologyOverview';
import InquirySidebar from './components/InquirySidebar';
import Icon from '../../components/AppIcon';

const ServicesOverviewHub = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    complexity: 'all',
    technology: 'all'
  });
  const [filteredServices, setFilteredServices] = useState([]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and scalable architecture. From responsive websites to complex enterprise portals.",
      icon: "Code",
      isPopular: true,
      capabilities: [
        "React/Next.js Development",
        "Node.js Backend Services",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration"
      ],
      metrics: {
        projects: 85,
        successRate: "98%"
      },
      startingPrice: "$15,000",
      industries: ["fintech", "ecommerce", "healthcare"],
      complexity: ["simple", "medium", "complex"],
      technologies: ["react", "node"]
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services protecting your digital assets with advanced threat detection and prevention systems.",
      icon: "Shield",
      isPopular: false,
      capabilities: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Compliance Management",
        "Identity & Access Management",
        "Incident Response Planning",
        "Security Training Programs"
      ],
      metrics: {
        projects: 42,
        successRate: "100%"
      },
      startingPrice: "$25,000",
      industries: ["fintech", "healthcare", "manufacturing"],
      complexity: ["medium", "complex"],
      technologies: ["cloud", "ai"]
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Intelligent solutions leveraging artificial intelligence and machine learning to automate processes and generate insights.",
      icon: "Brain",
      isPopular: true,
      capabilities: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
        "Chatbots & Virtual Assistants",
        "Data Mining & Analysis"
      ],
      metrics: {
        projects: 28,
        successRate: "95%"
      },
      startingPrice: "$35,000",
      industries: ["healthcare", "education", "logistics"],
      complexity: ["complex", "custom"],
      technologies: ["python", "ai", "cloud"]
    }
  ];

  useEffect(() => {
    filterServices();
  }, [filters]);

  const filterServices = () => {
    let filtered = services;

    if (filters.industry !== 'all') {
      filtered = filtered.filter(service => 
        service.industries.includes(filters.industry)
      );
    }

    if (filters.complexity !== 'all') {
      filtered = filtered.filter(service => 
        service.complexity.includes(filters.complexity)
      );
    }

    if (filters.technology !== 'all') {
      filtered = filtered.filter(service => 
        service.technologies.includes(filters.technology)
      );
    }

    setFilteredServices(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Services Overview - CharlieVerse | Software Development, Security & AI/ML</title>
        <meta name="description" content="Explore CharlieVerse's comprehensive technology services including web development, cybersecurity solutions, and AI/ML implementations. Get expert consultation and custom solutions." />
        <meta name="keywords" content="software development, web development, cybersecurity, AI machine learning, technology consulting, custom solutions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-9xl mx-auto px-5 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <Breadcrumb />
              
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center">
                    <Icon name="Settings" size={24} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                      Our Services
                    </h1>
                    <p className="text-text-secondary font-body">
                      Comprehensive technology solutions for modern businesses
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-primary mb-1">150+</div>
                    <div className="text-sm text-text-secondary font-body">Projects Completed</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-success mb-1">98%</div>
                    <div className="text-sm text-text-secondary font-body">Client Satisfaction</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-text-secondary font-body">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Service Filter */}
              <ServiceFilter 
                onFilterChange={handleFilterChange}
                activeFilters={filters}
              />

              {/* Services Grid */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Core Services
                  </h2>
                  <div className="text-sm text-text-secondary font-body">
                    {filteredServices.length} of {services.length} services
                  </div>
                </div>
                
                {filteredServices.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service, index) => (
                      <ServiceCard 
                        key={service.id} 
                        service={service} 
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      No Services Found
                    </h3>
                    <p className="text-text-secondary font-body mb-4">
                      Try adjusting your filters to see more services.
                    </p>
                  </div>
                )}
              </div>

              {/* Technology Partnerships */}
              <div className="mb-12">
                <TechnologyPartnership />
              </div>

              {/* Methodology Overview */}
              <div className="mb-12">
                <MethodologyOverview />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-96">
              <InquirySidebar />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServicesOverviewHub;