import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContextualInquiry from '../../components/ui/ContextualInquiry';
import ProjectFilters from './components/ProjectFilters';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectStats from './components/ProjectStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const InteractivePortfolioGallery = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Mock project data
  const mockProjects = [
    {
      id: 1,
      title: "FinTech Payment Gateway",
      description: "Secure, scalable payment processing platform with real-time fraud detection and multi-currency support for global transactions.",
      fullDescription: `A comprehensive payment gateway solution built for a leading FinTech company, handling over $10M in daily transactions. The platform features advanced fraud detection algorithms, real-time transaction monitoring, and seamless integration with multiple payment providers.\n\nThe system was designed with security as the top priority, implementing end-to-end encryption, PCI DSS compliance, and advanced threat detection mechanisms. The platform supports over 50 currencies and integrates with major banking networks worldwide.`,
      client: "SecurePay Inc.",
      industry: "fintech",
      category: "software-development",
      status: "completed",
      completedDate: "Dec 2023",
      duration: "8 months",
      teamSize: 12,
      impact: "40% faster processing",
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Stripe API"],
      keyFeatures: [
        "Real-time fraud detection with ML algorithms",
        "Multi-currency support for 50+ currencies",
        "PCI DSS compliant security architecture",
        "High-availability with 99.99% uptime",
        "Advanced analytics and reporting dashboard",
        "Seamless API integration for merchants"
      ],
      challenges: [
        "Implementing real-time fraud detection without impacting transaction speed",
        "Ensuring PCI DSS compliance across all system components",
        "Handling high transaction volumes during peak periods",
        "Integrating with multiple payment providers and banking networks"
      ],
      solutions: [
        "Developed custom ML models for fraud detection with sub-second response times",
        "Implemented comprehensive security framework with regular audits",
        "Built auto-scaling infrastructure using Kubernetes and AWS",
        "Created unified API layer for seamless payment provider integration"
      ],
      architecture: "The system follows a microservices architecture deployed on AWS, with separate services for payment processing, fraud detection, user management, and reporting. Redis is used for caching and session management, while PostgreSQL handles transactional data with read replicas for analytics.",
      metrics: [
        { value: "$10M+", label: "Daily Volume", description: "Transaction processing" },
        { value: "99.99%", label: "Uptime", description: "System availability" },
        { value: "40%", label: "Faster", description: "Processing speed" }
      ],
      testimonial: {
        quote: "CharlieVerse delivered an exceptional payment platform that exceeded our expectations. Their attention to security and performance has been crucial to our success.",
        author: "Sarah Johnson",
        position: "CTO"
      },
      liveUrl: "https://securepay-demo.com",
      caseStudyUrl: "https://charlieverse.com/case-studies/fintech-gateway"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      description: "AI-powered healthcare analytics platform providing real-time insights for patient care optimization and operational efficiency.",
      fullDescription: `A comprehensive healthcare analytics platform that processes millions of patient records to provide actionable insights for healthcare providers. The system uses advanced machine learning algorithms to predict patient outcomes, optimize resource allocation, and improve care quality.\n\nThe platform integrates with existing hospital management systems and provides real-time dashboards for medical staff, administrators, and executives. It includes features for patient risk assessment, treatment recommendation, and operational analytics.`,
      client: "MedTech Solutions",
      industry: "healthcare",
      category: "ai-ml",
      status: "completed",
      completedDate: "Oct 2023",
      duration: "10 months",
      teamSize: 15,
      impact: "25% better outcomes",
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Apache Kafka", "Docker", "AWS", "Elasticsearch"],
      keyFeatures: [
        "Real-time patient monitoring and alerts",
        "Predictive analytics for patient outcomes",
        "Resource optimization algorithms",
        "HIPAA compliant data handling",
        "Interactive dashboards and reporting",
        "Integration with existing EMR systems"
      ],
      challenges: [
        "Processing large volumes of sensitive patient data in real-time",
        "Ensuring HIPAA compliance and data privacy",
        "Integrating with legacy hospital management systems",
        "Building accurate predictive models with limited historical data"
      ],
      solutions: [
        "Implemented streaming data pipeline using Apache Kafka for real-time processing",
        "Built comprehensive security framework with encryption and access controls",
        "Developed custom APIs for seamless EMR integration",
        "Used transfer learning and synthetic data generation for model training"
      ],
      architecture: "The platform uses a modern data architecture with Apache Kafka for streaming, PostgreSQL for structured data, and Elasticsearch for search and analytics. Machine learning models are deployed using TensorFlow Serving with auto-scaling capabilities.",
      metrics: [
        { value: "2M+", label: "Patient Records", description: "Processed daily" },
        { value: "25%", label: "Better Outcomes", description: "Patient care improvement" },
        { value: "30%", label: "Cost Reduction", description: "Operational efficiency" }
      ],
      testimonial: {
        quote: "The analytics platform has transformed how we deliver patient care. The predictive insights have significantly improved our treatment outcomes.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer"
      },
      liveUrl: "https://medtech-analytics-demo.com",
      caseStudyUrl: "https://charlieverse.com/case-studies/healthcare-analytics"
    },
    {
      id: 3,
      title: "E-commerce Security Suite",
      description: "Comprehensive cybersecurity solution protecting online retailers from threats with advanced threat detection and response capabilities.",
      fullDescription: `A complete cybersecurity suite designed specifically for e-commerce platforms, providing multi-layered protection against various cyber threats. The solution includes real-time threat monitoring, automated incident response, and comprehensive security analytics.\n\nThe system protects against DDoS attacks, payment fraud, data breaches, and other e-commerce specific threats. It integrates seamlessly with existing e-commerce platforms and provides detailed security reporting and compliance management.`,
      client: "ShopSecure Ltd.",
      industry: "ecommerce",
      category: "security",
      status: "completed",
      completedDate: "Nov 2023",
      duration: "6 months",
      teamSize: 8,
      impact: "90% threat reduction",
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "Go", "React", "MongoDB", "Redis", "Elasticsearch", "Docker", "AWS"],
      keyFeatures: [
        "Real-time threat detection and monitoring",
        "Automated incident response system",
        "DDoS protection and mitigation",
        "Payment fraud prevention",
        "Security compliance reporting",
        "24/7 security operations center"
      ],
      challenges: [
        "Detecting sophisticated cyber threats in real-time",
        "Minimizing false positives in threat detection",
        "Scaling security monitoring for high-traffic e-commerce sites",
        "Integrating with diverse e-commerce platforms and payment systems"
      ],
      solutions: [
        "Implemented AI-powered threat detection using machine learning algorithms",
        "Developed adaptive filtering system to reduce false positives",
        "Built horizontally scalable monitoring infrastructure",
        "Created universal API connectors for major e-commerce platforms"
      ],
      architecture: "The security suite uses a distributed architecture with microservices for different security functions. Real-time data processing is handled by Apache Kafka and Storm, while threat intelligence is stored in Elasticsearch for fast querying.",
      metrics: [
        { value: "90%", label: "Threat Reduction", description: "Security incidents prevented" },
        { value: "99.9%", label: "Uptime", description: "System availability" },
        { value: "2 min", label: "Response Time", description: "Average incident response" }
      ],
      testimonial: {
        quote: "CharlieVerse\'s security suite has been instrumental in protecting our e-commerce platform. We\'ve seen a dramatic reduction in security incidents.",
        author: "Lisa Rodriguez",
        position: "Security Director"
      },
      liveUrl: "https://shopsecure-demo.com",
      caseStudyUrl: "https://charlieverse.com/case-studies/ecommerce-security"
    },
    {
      id: 4,
      title: "Smart Manufacturing IoT Platform",
      description: "Industrial IoT platform connecting factory equipment for predictive maintenance and operational optimization.",
      fullDescription: `An advanced IoT platform designed for smart manufacturing, connecting thousands of industrial devices and sensors to provide real-time monitoring, predictive maintenance, and operational insights. The platform helps manufacturers reduce downtime, optimize production, and improve overall equipment effectiveness.\n\nThe system processes millions of sensor readings per day, using machine learning algorithms to predict equipment failures before they occur. It provides comprehensive dashboards for plant managers and maintenance teams.`,
      client: "IndustrialTech Corp",
      industry: "manufacturing",
      category: "software-development",
      status: "completed",
      completedDate: "Sep 2023",
      duration: "12 months",
      teamSize: 18,
      impact: "35% less downtime",
      featured: false,
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "React", "InfluxDB", "Apache Kafka", "TensorFlow", "Docker", "Kubernetes", "Azure"],
      keyFeatures: [
        "Real-time equipment monitoring",
        "Predictive maintenance algorithms",
        "Production optimization insights",
        "Energy consumption tracking",
        "Quality control automation",
        "Mobile app for field technicians"
      ],
      challenges: [
        "Handling massive volumes of sensor data in real-time",
        "Ensuring reliable connectivity in industrial environments",
        "Building accurate predictive models for diverse equipment types",
        "Integrating with legacy manufacturing systems"
      ],
      solutions: [
        "Implemented edge computing for local data processing and reduced latency",
        "Deployed redundant communication protocols for reliable connectivity",
        "Developed equipment-specific ML models using transfer learning",
        "Built custom adapters for legacy system integration"
      ],
      architecture: "The platform uses a hybrid cloud-edge architecture with local processing units in factories and centralized analytics in the cloud. Time-series data is stored in InfluxDB with Apache Kafka handling real-time data streaming.",
      metrics: [
        { value: "35%", label: "Less Downtime", description: "Equipment availability" },
        { value: "50M+", label: "Data Points", description: "Processed daily" },
        { value: "20%", label: "Energy Savings", description: "Operational efficiency" }
      ],
      testimonial: {
        quote: "The IoT platform has revolutionized our manufacturing operations. Predictive maintenance has significantly reduced our downtime costs.",
        author: "Robert Kim",
        position: "Plant Manager"
      },
      liveUrl: null,
      caseStudyUrl: "https://charlieverse.com/case-studies/smart-manufacturing"
    },
    {
      id: 5,
      title: "Educational Learning Management System",
      description: "Modern LMS platform with AI-powered personalized learning paths and comprehensive student analytics.",
      fullDescription: `A next-generation learning management system designed for modern educational institutions, featuring AI-powered personalized learning, comprehensive analytics, and seamless integration with existing educational tools. The platform supports both online and hybrid learning models.\n\nThe system includes features for course creation, student assessment, progress tracking, and collaborative learning. It uses machine learning to adapt content delivery based on individual student learning patterns and preferences.`,
      client: "EduTech University",
      industry: "education",
      category: "software-development",
      status: "in-progress",
      completedDate: "Expected Jan 2024",
      duration: "9 months",
      teamSize: 10,
      impact: "60% engagement boost",
      featured: false,
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Python", "TensorFlow", "WebRTC", "AWS", "Docker"],
      keyFeatures: [
        "AI-powered personalized learning paths",
        "Interactive virtual classrooms",
        "Comprehensive student analytics",
        "Mobile-responsive design",
        "Integration with educational tools",
        "Automated grading and feedback"
      ],
      challenges: [
        "Creating engaging online learning experiences",
        "Implementing real-time collaboration features",
        "Building scalable video conferencing capabilities",
        "Ensuring accessibility compliance for diverse learners"
      ],
      solutions: [
        "Developed interactive content delivery system with gamification elements",
        "Implemented WebRTC-based real-time collaboration tools",
        "Built scalable video infrastructure using cloud services",
        "Ensured WCAG 2.1 AA compliance throughout the platform"
      ],
      architecture: "The LMS uses a modern web architecture with React frontend, Node.js backend, and MongoDB for data storage. Machine learning services are built with Python and TensorFlow, deployed as microservices.",
      metrics: [
        { value: "60%", label: "Engagement Boost", description: "Student participation" },
        { value: "10K+", label: "Active Users", description: "Students and faculty" },
        { value: "95%", label: "Satisfaction", description: "User feedback score" }
      ],
      testimonial: {
        quote: "The new LMS has transformed our online education delivery. Students are more engaged and learning outcomes have improved significantly.",
        author: "Dr. Amanda Foster",
        position: "Dean of Digital Learning"
      },
      liveUrl: "https://edutech-lms-demo.com",
      caseStudyUrl: null
    },
    {
      id: 6,
      title: "Logistics Optimization Platform",
      description: "AI-driven logistics platform optimizing supply chain operations with real-time tracking and route optimization.",
      fullDescription: `A comprehensive logistics optimization platform that uses artificial intelligence to streamline supply chain operations, reduce costs, and improve delivery efficiency. The system provides real-time tracking, route optimization, and predictive analytics for logistics companies.\n\nThe platform integrates with existing warehouse management systems, transportation networks, and customer portals to provide end-to-end visibility and control over logistics operations.`,
      client: "LogiFlow Systems",
      industry: "logistics",
      category: "ai-ml",
      status: "completed",
      completedDate: "Aug 2023",
      duration: "7 months",
      teamSize: 14,
      impact: "30% cost reduction",
      featured: false,
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "React", "PostgreSQL", "Apache Spark", "TensorFlow", "Redis", "Docker", "AWS"],
      keyFeatures: [
        "Real-time shipment tracking",
        "AI-powered route optimization",
        "Predictive demand forecasting",
        "Warehouse management integration",
        "Customer portal and notifications",
        "Performance analytics dashboard"
      ],
      challenges: [
        "Optimizing complex multi-stop delivery routes in real-time",
        "Integrating with diverse logistics and warehouse systems",
        "Handling unpredictable demand fluctuations",
        "Ensuring accurate real-time tracking across multiple carriers"
      ],
      solutions: [
        "Implemented advanced routing algorithms using machine learning",
        "Built universal API connectors for major logistics platforms",
        "Developed demand forecasting models using historical and external data",
        "Created unified tracking system with carrier API integrations"
      ],
      architecture: "The platform uses a microservices architecture with Apache Spark for big data processing and machine learning. Real-time tracking data is processed using Apache Kafka and stored in PostgreSQL with Redis for caching.",
      metrics: [
        { value: "30%", label: "Cost Reduction", description: "Operational savings" },
        { value: "25%", label: "Faster Delivery", description: "Route optimization" },
        { value: "99%", label: "Tracking Accuracy", description: "Real-time visibility" }
      ],
      testimonial: {
        quote: "The logistics platform has dramatically improved our operational efficiency. Route optimization alone has saved us millions in fuel costs.",
        author: "James Wilson",
        position: "Operations Director"
      },
      liveUrl: null,
      caseStudyUrl: "https://charlieverse.com/case-studies/logistics-optimization"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = [...projects];

    // Category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(project => project.category === filters.category);
    }

    // Industry filter
    if (filters.industry) {
      filtered = filtered.filter(project => project.industry === filters.industry);
    }

    // Technology filter
    if (filters.technology) {
      filtered = filtered.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filters.technology.toLowerCase())
        )
      );
    }

    // Scale filter
    if (filters.scale) {
      const scaleMap = {
        'small': [1, 3],
        'medium': [4, 6],
        'large': [7, 12],
        'enterprise': [13, 100]
      };
      const [min, max] = scaleMap[filters.scale] || [0, 100];
      const duration = parseInt(filters.duration) || 0;
      filtered = filtered.filter(project => {
        const projectDuration = parseInt(project.duration.split(' ')[0]) || 0;
        return projectDuration >= min && projectDuration <= max;
      });
    }

    // Year filter
    if (filters.year) {
      filtered = filtered.filter(project => 
        project.completedDate.includes(filters.year)
      );
    }

    // Status filter
    if (filters.status) {
      filtered = filtered.filter(project => project.status === filters.status);
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.client.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
      );
    }

    // Sort
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'recent':
            return new Date(b.completedDate) - new Date(a.completedDate);
          case 'oldest':
            return new Date(a.completedDate) - new Date(b.completedDate);
          case 'alphabetical':
            return a.title.localeCompare(b.title);
          case 'client':
            return a.client.localeCompare(b.client);
          case 'duration':
            return parseInt(b.duration) - parseInt(a.duration);
          default:
            return 0;
        }
      });
    }

    setFilteredProjects(filtered);
    setViewMode(filters.viewMode || viewMode);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary font-body">Loading portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Interactive Portfolio Gallery - CharlieVerse</title>
        <meta name="description" content="Explore CharlieVerse's portfolio of innovative software development, security, and AI/ML projects. Discover our expertise through detailed case studies and project showcases." />
        <meta name="keywords" content="portfolio, projects, software development, security, AI, machine learning, case studies, CharlieVerse" />
      </Helmet>

      <Header />
      
      <main className="max-w-9xl mx-auto px-5 lg:px-8 py-8">
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8">
            Discover our innovative solutions across software development, cybersecurity, and AI/ML. 
            Each project represents our commitment to excellence and technical innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              Watch Portfolio Showcase
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
            >
              Download Portfolio PDF
            </Button>
          </div>
        </div>

        {/* Project Stats */}
        <ProjectStats projects={projects} />

        {/* Featured Projects */}
        <FeaturedProjects 
          projects={projects} 
          onViewDetails={handleViewDetails}
        />

        {/* Filters */}
        <ProjectFilters 
          onFilterChange={handleFilterChange}
          totalProjects={filteredProjects.length}
        />

        {/* Projects Grid/List */}
        <div className="mt-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-text-secondary font-body">
                Try adjusting your filters or search terms to find more projects.
              </p>
            </div>
          ) : (
            <div className={`${
              viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'
            }`}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 0 && filteredProjects.length >= 9 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconName="Plus"
              iconPosition="left"
            >
              Load More Projects
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-blue rounded-lg p-8 lg:p-12 text-center mt-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our proven expertise 
            and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Contextual Inquiry */}
      <ContextualInquiry position="sidebar" />
    </div>
  );
};

export default InteractivePortfolioGallery;