import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContextualInquiry from '../../components/ui/ContextualInquiry';
import ServiceHero from './components/ServiceHero';
import TechnicalSpecifications from './components/TechnicalSpecifications';
import MethodologyBreakdown from './components/MethodologyBreakdown';
import TechnologyStack from './components/TechnologyStack';
import ProjectTimeline from './components/ProjectTimeline';
import ServiceSidebar from './components/ServiceSidebar';
import ServiceTabs from './components/ServiceTabs';
import ClientTestimonials from './components/ClientTestimonials';

const ServiceDetailSpecification = () => {
  const [searchParams] = useSearchParams();
  const [currentService, setCurrentService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock service data
  const servicesData = {
    'web-development': {
      id: 'web-development',
      title: 'Custom Web Development',
      category: 'Web Development',
      icon: 'Code',
      isPopular: true,
      description: `Transform your digital presence with cutting-edge web applications built using modern technologies and industry best practices. Our comprehensive web development services deliver scalable, secure, and high-performance solutions tailored to your business needs.`,
      heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      duration: '3-6 months',
      teamSize: '4-8 developers',
      rating: 4.9,
      reviews: 127,
      highlights: [
        'Custom responsive web applications',
        'Modern JavaScript frameworks (React, Vue, Angular)',
        'Progressive Web App (PWA) capabilities',
        'API integration and development',
        'Performance optimization and SEO',
        'Cross-browser compatibility',
        'Security best practices implementation',
        '24/7 monitoring and maintenance'
      ],
      pricingTiers: [
        {
          name: 'Starter',
          price: '$15,000',
          description: 'Perfect for small businesses and startups',
          popular: false,
          features: [
            'Responsive design',
            'Basic CMS integration',
            'Contact forms',
            '3 months support'
          ]
        },
        {
          name: 'Professional',
          price: '$35,000',
          description: 'Ideal for growing businesses',
          popular: true,
          features: [
            'Advanced functionality',
            'Custom integrations',
            'E-commerce capabilities',
            '6 months support'
          ]
        },
        {
          name: 'Enterprise',
          price: '$75,000+',
          description: 'For large-scale applications',
          popular: false,
          features: [
            'Complex business logic',
            'Multi-platform support',
            'Advanced security',
            '12 months support'
          ]
        }
      ],
      caseStudy: {
        title: 'E-commerce Platform Transformation',
        description: 'Complete redesign and development of a multi-vendor marketplace',
        client: 'TechMart Solutions'
      }
    },
    'mobile-apps': {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      category: 'Mobile Development',
      icon: 'Smartphone',
      isPopular: false,
      description: `Create powerful mobile applications that engage users across iOS and Android platforms. Our mobile development expertise spans native and cross-platform solutions, ensuring optimal performance and user experience.`,
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      duration: '4-8 months',
      teamSize: '3-6 developers',
      rating: 4.8,
      reviews: 89,
      highlights: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design optimization',
        'App Store optimization',
        'Push notifications and analytics',
        'Offline functionality',
        'Third-party integrations',
        'Post-launch support and updates'
      ],
      pricingTiers: [
        {
          name: 'Basic',
          price: '$25,000',
          description: 'Simple mobile app with core features',
          popular: false,
          features: [
            'Single platform',
            'Basic functionality',
            'Standard UI components',
            '3 months support'
          ]
        },
        {
          name: 'Advanced',
          price: '$50,000',
          description: 'Feature-rich cross-platform app',
          popular: true,
          features: [
            'iOS and Android',
            'Custom animations',
            'API integrations',
            '6 months support'
          ]
        },
        {
          name: 'Premium',
          price: '$100,000+',
          description: 'Enterprise-grade mobile solution',
          popular: false,
          features: [
            'Advanced features',
            'Real-time capabilities',
            'Enterprise security',
            '12 months support'
          ]
        }
      ],
      caseStudy: {
        title: 'Healthcare Mobile App',
        description: 'HIPAA-compliant telemedicine platform for iOS and Android',
        client: 'MedConnect Inc.'
      }
    }
  };

  // Technical specifications data
  const technicalSpecifications = [
    {
      id: 'architecture',
      title: 'System Architecture',
      summary: 'Scalable and maintainable architecture patterns',
      icon: 'Building',
      details: [
        {
          feature: 'Microservices Architecture',
          description: 'Modular, independently deployable services for better scalability and maintenance',
          technologies: ['Docker', 'Kubernetes', 'API Gateway']
        },
        {
          feature: 'Cloud-Native Design',
          description: 'Built for cloud environments with auto-scaling and high availability',
          technologies: ['AWS', 'Azure', 'Google Cloud']
        },
        {
          feature: 'Event-Driven Architecture',
          description: 'Asynchronous communication patterns for better performance',
          technologies: ['Apache Kafka', 'RabbitMQ', 'Redis']
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      summary: 'Enterprise-grade security implementations',
      icon: 'Shield',
      details: [
        {
          feature: 'Authentication & Authorization',
          description: 'Multi-factor authentication with role-based access control',
          technologies: ['OAuth 2.0', 'JWT', 'SAML']
        },
        {
          feature: 'Data Encryption',
          description: 'End-to-end encryption for data at rest and in transit',
          technologies: ['AES-256', 'TLS 1.3', 'PKI']
        },
        {
          feature: 'Compliance Standards',
          description: 'Adherence to industry standards and regulations',
          technologies: ['GDPR', 'HIPAA', 'SOC 2']
        }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      summary: 'High-performance solutions with optimal resource utilization',
      icon: 'Zap',
      details: [
        {
          feature: 'Caching Strategies',
          description: 'Multi-level caching for improved response times',
          technologies: ['Redis', 'Memcached', 'CDN']
        },
        {
          feature: 'Database Optimization',
          description: 'Query optimization and database performance tuning',
          technologies: ['PostgreSQL', 'MongoDB', 'Elasticsearch']
        },
        {
          feature: 'Load Balancing',
          description: 'Distributed load handling for high availability',
          technologies: ['NGINX', 'HAProxy', 'AWS ELB']
        }
      ]
    }
  ];

  // Methodology data
  const methodologyData = {
    phases: [
      {
        title: 'Discovery & Planning',
        duration: '2-3 weeks',
        description: 'Comprehensive analysis of requirements, stakeholder interviews, and project planning to establish clear objectives and deliverables.',
        deliverables: [
          'Requirements documentation',
          'Technical architecture design',
          'Project timeline and milestones',
          'Risk assessment report'
        ],
        tools: ['Figma', 'Miro', 'Jira', 'Confluence']
      },
      {
        title: 'Design & Prototyping',
        duration: '3-4 weeks',
        description: 'User experience design, interface mockups, and interactive prototypes to validate concepts before development begins.',
        deliverables: [
          'Wireframes and mockups',
          'Interactive prototypes',
          'Design system documentation',
          'User journey maps'
        ],
        tools: ['Figma', 'Adobe XD', 'InVision', 'Principle']
      },
      {
        title: 'Development & Testing',
        duration: '8-12 weeks',
        description: 'Agile development with continuous integration, automated testing, and regular stakeholder reviews.',
        deliverables: [
          'Working software increments',
          'Automated test suites',
          'Code documentation',
          'Performance reports'
        ],
        tools: ['React', 'Node.js', 'Jest', 'Cypress', 'Docker']
      },
      {
        title: 'Deployment & Launch',
        duration: '1-2 weeks',
        description: 'Production deployment, performance monitoring setup, and go-live support with comprehensive documentation.',
        deliverables: [
          'Production deployment',
          'Monitoring dashboards',
          'User training materials',
          'Maintenance documentation'
        ],
        tools: ['AWS', 'Jenkins', 'Datadog', 'New Relic']
      }
    ],
    benefits: [
      {
        title: 'Reduced Risk',
        description: 'Early validation and iterative development minimize project risks',
        icon: 'Shield'
      },
      {
        title: 'Faster Time-to-Market',
        description: 'Agile methodology ensures quicker delivery of working features',
        icon: 'Clock'
      },
      {
        title: 'Better Quality',
        description: 'Continuous testing and code reviews ensure high-quality deliverables',
        icon: 'CheckCircle'
      },
      {
        title: 'Stakeholder Alignment',
        description: 'Regular reviews and feedback loops keep everyone aligned',
        icon: 'Users'
      }
    ]
  };

  // Technology stack data
  const technologyStackData = {
    categories: [
      {
        id: 'frontend',
        name: 'Frontend',
        icon: 'Monitor',
        description: 'Modern frontend technologies for responsive and interactive user interfaces',
        technologies: [
          {
            name: 'React',
            description: 'Component-based library for building user interfaces',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Vue.js',
            description: 'Progressive framework for building user interfaces',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            level: 'Advanced',
            rating: 4
          },
          {
            name: 'TypeScript',
            description: 'Typed superset of JavaScript for better development experience',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Tailwind CSS',
            description: 'Utility-first CSS framework for rapid UI development',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            level: 'Expert',
            rating: 5
          }
        ],
        comparison: [
          {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            performance: 90,
            scalability: 95,
            useCase: 'Large-scale applications'
          },
          {
            name: 'Vue.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            performance: 85,
            scalability: 80,
            useCase: 'Rapid prototyping'
          },
          {
            name: 'Angular',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            performance: 80,
            scalability: 90,
            useCase: 'Enterprise applications'
          }
        ]
      },
      {
        id: 'backend',
        name: 'Backend',
        icon: 'Server',
        description: 'Robust backend technologies for scalable and secure server-side applications',
        technologies: [
          {
            name: 'Node.js',
            description: 'JavaScript runtime for building scalable server applications',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Python',
            description: 'Versatile programming language for web development and AI',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            level: 'Advanced',
            rating: 4
          },
          {
            name: 'PostgreSQL',
            description: 'Advanced open-source relational database',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Redis',
            description: 'In-memory data structure store for caching and sessions',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
            level: 'Advanced',
            rating: 4
          }
        ]
      },
      {
        id: 'cloud',
        name: 'Cloud & DevOps',
        icon: 'Cloud',
        description: 'Cloud platforms and DevOps tools for deployment and infrastructure management',
        technologies: [
          {
            name: 'AWS',
            description: 'Comprehensive cloud computing platform',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Docker',
            description: 'Containerization platform for application deployment',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            level: 'Expert',
            rating: 5
          },
          {
            name: 'Kubernetes',
            description: 'Container orchestration platform for scalable deployments',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            level: 'Advanced',
            rating: 4
          },
          {
            name: 'Jenkins',
            description: 'Automation server for continuous integration and deployment',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
            level: 'Advanced',
            rating: 4
          }
        ]
      }
    ]
  };

  // Project timeline data
  const timelineData = {
    examples: [
      {
        projectType: 'E-commerce Platform',
        complexity: 'High',
        totalDuration: '6 months',
        description: 'Complete e-commerce solution with multi-vendor support, payment processing, and inventory management',
        milestones: [
          {
            title: 'Project Kickoff & Discovery',
            duration: '2 weeks',
            description: 'Requirements gathering, stakeholder interviews, and technical planning',
            deliverables: [
              'Project charter and scope',
              'Technical architecture document',
              'UI/UX wireframes',
              'Development timeline'
            ],
            status: 'completed',
            progress: 100
          },
          {
            title: 'Design & Prototyping',
            duration: '3 weeks',
            description: 'User interface design, brand integration, and interactive prototypes',
            deliverables: [
              'High-fidelity mockups',
              'Interactive prototypes',
              'Design system components',
              'User flow documentation'
            ],
            status: 'completed',
            progress: 100
          },
          {
            title: 'Core Development Phase 1',
            duration: '6 weeks',
            description: 'User authentication, product catalog, and basic shopping cart functionality',
            deliverables: [
              'User registration and login',
              'Product listing and search',
              'Shopping cart functionality',
              'Basic admin panel'
            ],
            status: 'in-progress',
            progress: 75
          },
          {
            title: 'Advanced Features Development',
            duration: '6 weeks',
            description: 'Payment integration, order management, and vendor dashboard',
            deliverables: [
              'Payment gateway integration',
              'Order processing system',
              'Vendor management portal',
              'Inventory tracking'
            ],
            status: 'pending',
            progress: 0
          },
          {
            title: 'Testing & Quality Assurance',
            duration: '3 weeks',
            description: 'Comprehensive testing, performance optimization, and security audits',
            deliverables: [
              'Automated test suites',
              'Performance optimization',
              'Security vulnerability assessment',
              'Cross-browser testing'
            ],
            status: 'pending',
            progress: 0
          },
          {
            title: 'Deployment & Launch',
            duration: '2 weeks',
            description: 'Production deployment, monitoring setup, and go-live support',
            deliverables: [
              'Production environment setup',
              'Monitoring and alerting',
              'User training and documentation',
              'Post-launch support plan'
            ],
            status: 'pending',
            progress: 0
          }
        ],
        stats: [
          { icon: 'Users', value: '8', label: 'Team Members' },
          { icon: 'Code', value: '50K+', label: 'Lines of Code' },
          { icon: 'TestTube', value: '500+', label: 'Test Cases' },
          { icon: 'Zap', value: '99.9%', label: 'Uptime SLA' }
        ]
      },
      {
        projectType: 'Mobile Banking App',
        complexity: 'Enterprise',
        totalDuration: '8 months',
        description: 'Secure mobile banking application with biometric authentication and real-time transactions',
        milestones: [
          {
            title: 'Security & Compliance Planning',
            duration: '3 weeks',
            description: 'Security architecture design and compliance requirements analysis',
            deliverables: [
              'Security architecture document',
              'Compliance checklist',
              'Risk assessment report',
              'Data protection strategy'
            ],
            status: 'completed',
            progress: 100
          },
          {
            title: 'Core Banking Integration',
            duration: '8 weeks',
            description: 'Integration with existing banking systems and APIs',
            deliverables: [
              'API integration layer',
              'Data synchronization',
              'Transaction processing',
              'Account management'
            ],
            status: 'completed',
            progress: 100
          },
          {
            title: 'Mobile App Development',
            duration: '10 weeks',
            description: 'Native iOS and Android app development with advanced features',
            deliverables: [
              'iOS and Android apps',
              'Biometric authentication',
              'Push notifications',
              'Offline capabilities'
            ],
            status: 'in-progress',
            progress: 60
          },
          {
            title: 'Security Testing & Audit',
            duration: '4 weeks',
            description: 'Comprehensive security testing and third-party security audit',
            deliverables: [
              'Penetration testing report',
              'Security audit certification',
              'Vulnerability remediation',
              'Compliance verification'
            ],
            status: 'pending',
            progress: 0
          }
        ],
        stats: [
          { icon: 'Users', value: '12', label: 'Team Members' },
          { icon: 'Shield', value: '256-bit', label: 'Encryption' },
          { icon: 'Smartphone', value: '2', label: 'Platforms' },
          { icon: 'Clock', value: '<2s', label: 'Response Time' }
        ]
      }
    ]
  };

  // Tabs data
  const tabsData = {
    process: {
      steps: [
        {
          title: 'Requirements Analysis',
          icon: 'FileText',
          description: 'Detailed analysis of business requirements and technical specifications',
          activities: [
            'Stakeholder interviews',
            'Business process mapping',
            'Technical feasibility study',
            'Risk assessment'
          ]
        },
        {
          title: 'Architecture Design',
          icon: 'Building',
          description: 'System architecture design and technology stack selection',
          activities: [
            'System architecture planning',
            'Database design',
            'API specification',
            'Security framework'
          ]
        },
        {
          title: 'Agile Development',
          icon: 'Code',
          description: 'Iterative development with continuous integration and testing',
          activities: [
            'Sprint planning',
            'Daily standups',
            'Code reviews',
            'Automated testing'
          ]
        },
        {
          title: 'Quality Assurance',
          icon: 'CheckCircle',
          description: 'Comprehensive testing and quality validation',
          activities: [
            'Unit testing',
            'Integration testing',
            'Performance testing',
            'Security testing'
          ]
        },
        {
          title: 'Deployment',
          icon: 'Upload',
          description: 'Production deployment and go-live support',
          activities: [
            'Environment setup',
            'Data migration',
            'Performance monitoring',
            'User training'
          ]
        },
        {
          title: 'Maintenance',
          icon: 'Settings',
          description: 'Ongoing support and maintenance services',
          activities: [
            'Bug fixes',
            'Feature enhancements',
            'Performance optimization',
            'Security updates'
          ]
        }
      ]
    },
    caseStudies: [
      {
        title: 'E-commerce Platform Transformation',
        client: 'TechMart Solutions',
        duration: '6 months',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        description: 'Complete redesign and development of a multi-vendor e-commerce marketplace with advanced features and integrations.',
        challenge: 'Legacy system with poor performance, limited scalability, and outdated user experience affecting sales and customer satisfaction.',
        solution: 'Modern React-based frontend with Node.js backend, microservices architecture, and cloud deployment for improved performance and scalability.',
        results: [
          { value: '300%', metric: 'Performance Boost' },
          { value: '150%', metric: 'Sales Increase' },
          { value: '99.9%', metric: 'Uptime' }
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'Docker']
      },
      {
        title: 'Healthcare Management System',
        client: 'MedConnect Inc.',
        duration: '8 months',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
        description: 'HIPAA-compliant healthcare management system with patient portal, appointment scheduling, and telemedicine capabilities.',
        challenge: 'Manual processes, paper-based records, and lack of patient engagement tools leading to inefficiencies and compliance issues.',
        solution: 'Comprehensive digital platform with secure patient portal, automated workflows, and integrated telemedicine features.',
        results: [
          { value: '75%', metric: 'Time Savings' },
          { value: '90%', metric: 'Patient Satisfaction' },
          { value: '100%', metric: 'HIPAA Compliance' }
        ],
        technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Azure', 'WebRTC', 'Kubernetes']
      }
    ],
    faq: [
      {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans range from basic to enterprise-level coverage.'
      },
      {
        question: 'Can you work with our existing systems and APIs?',
        answer: 'Absolutely. We have extensive experience integrating with existing systems, third-party APIs, and legacy applications. We conduct thorough analysis to ensure seamless integration.'
      },
      {
        question: 'What technologies do you specialize in?',
        answer: 'We specialize in modern web technologies including React, Vue.js, Node.js, Python, and cloud platforms like AWS and Azure. We stay current with the latest industry trends and best practices.'
      },
      {
        question: 'How do you ensure project quality and security?',
        answer: 'We follow industry best practices including code reviews, automated testing, security audits, and compliance with standards like GDPR and HIPAA. Quality assurance is integrated throughout our development process.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, we provide comprehensive training for your team including user training, administrator training, and technical documentation. We ensure your team is fully equipped to manage the solution.'
      }
    ],
    relatedServices: [
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        icon: 'Smartphone',
        startingPrice: '$25,000'
      },
      {
        title: 'Cloud Solutions',
        description: 'Cloud migration, infrastructure setup, and managed services',
        icon: 'Cloud',
        startingPrice: '$10,000'
      },
      {
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence',
        icon: 'Brain',
        startingPrice: '$30,000'
      },
      {
        title: 'Cybersecurity',
        description: 'Comprehensive security audits and implementation',
        icon: 'Shield',
        startingPrice: '$15,000'
      },
      {
        title: 'Data Analytics',
        description: 'Business intelligence and data visualization solutions',
        icon: 'BarChart3',
        startingPrice: '$20,000'
      },
      {
        title: 'DevOps Services',
        description: 'CI/CD pipelines and infrastructure automation',
        icon: 'GitBranch',
        startingPrice: '$12,000'
      }
    ]
  };

  // Client testimonials data
  const testimonialsData = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechMart Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      content: `CharlieVerse transformed our e-commerce platform completely. Their technical expertise and attention to detail exceeded our expectations. The new system handles 10x more traffic with significantly better performance.`,
      project: {
        name: 'E-commerce Platform Redesign',
        duration: '6 months',
        budget: '$75,000',
        teamSize: '8 developers',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
      }
    },
    {
      name: 'Michael Chen',
      position: 'VP of Engineering',
      company: 'MedConnect Inc.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      content: `Working with CharlieVerse on our healthcare platform was exceptional. They understood our complex compliance requirements and delivered a HIPAA-compliant solution that our patients love.`,
      project: {
        name: 'Healthcare Management System',
        duration: '8 months',
        budget: '$120,000',
        teamSize: '12 developers',
        technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Azure']
      }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'FinTech Innovations',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      content: `The mobile banking app developed by CharlieVerse has revolutionized our customer experience. The security features and user interface are top-notch, and our customer satisfaction scores have increased by 40%.`,
      project: {
        name: 'Mobile Banking Application',
        duration: '10 months',
        budget: '$150,000',
        teamSize: '10 developers',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS']
      }
    }
  ];

  useEffect(() => {
    const serviceId = searchParams.get('service') || 'web-development';
    const service = servicesData[serviceId];
    
    if (service) {
      setCurrentService(service);
    } else {
      setCurrentService(servicesData['web-development']);
    }
    
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary font-body">Loading service details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
              Service Not Found
            </h1>
            <p className="text-text-secondary font-body">
              The requested service could not be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/interactive-3d-hero-landing', icon: 'Home' },
    { label: 'Services', path: '/services-overview-hub', icon: 'Settings' },
    { label: currentService.title, path: '/service-detail-specification', icon: 'FileText', isActive: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb customItems={breadcrumbItems} />
        
        <ServiceHero service={currentService} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <TechnicalSpecifications specifications={technicalSpecifications} />
            <MethodologyBreakdown methodology={methodologyData} />
            <TechnologyStack techStack={technologyStackData} />
            <ProjectTimeline timeline={timelineData} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ServiceSidebar service={currentService} />
          </div>
        </div>
        
        <div className="mt-12">
          <ServiceTabs tabsData={tabsData} />
        </div>
        
        <ClientTestimonials testimonials={testimonialsData} />
      </main>
      
      {/* Contextual Inquiry Components */}
      <ContextualInquiry position="sidebar" />
      <ContextualInquiry position="bottom" />
    </div>
  );
};

export default ServiceDetailSpecification;