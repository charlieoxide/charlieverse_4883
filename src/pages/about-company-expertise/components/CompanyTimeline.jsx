import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2016",
      title: "Company Founded",
      description: "CharlieVerse was established with a vision to transform businesses through innovative technology solutions.",
      icon: "Rocket",
      category: "Foundation",
      details: [
        "Started with a team of 3 passionate developers",
        "First office established in San Francisco",
        "Initial focus on web development services",
        "Secured first 5 clients within 6 months"
      ],
      metrics: {
        "Team Size": "3",
        "Clients": "5",
        "Revenue": "$50K"
      }
    },
    {
      id: 2,
      year: "2017",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 company, marking our entry into enterprise solutions.",
      icon: "Building",
      category: "Growth",
      details: [
        "Developed enterprise-grade e-commerce platform",
        "Implemented advanced security protocols",
        "Expanded team to 8 professionals",
        "Established quality assurance processes"
      ],
      metrics: {
        "Team Size": "8",
        "Clients": "15",
        "Revenue": "$200K"
      }
    },
    {
      id: 3,
      year: "2018",
      title: "Cybersecurity Division",
      description: "Launched dedicated cybersecurity services to address growing market demand for secure solutions.",
      icon: "Shield",
      category: "Expansion",
      details: [
        "Hired cybersecurity specialists",
        "Obtained SOC2 Type I certification",
        "Developed proprietary security frameworks",
        "Launched penetration testing services"
      ],
      metrics: {
        "Team Size": "12",
        "Clients": "25",
        "Revenue": "$500K"
      }
    },
    {
      id: 4,
      year: "2019",
      title: "AI/ML Research Lab",
      description: "Established AI/ML research division to pioneer intelligent solutions for complex business challenges.",
      icon: "Brain",
      category: "Innovation",
      details: [
        "Recruited PhD-level AI researchers",
        "Built state-of-the-art ML infrastructure",
        "Published first research papers",
        "Developed computer vision solutions"
      ],
      metrics: {
        "Team Size": "18",
        "Clients": "40",
        "Revenue": "$1.2M"
      }
    },
    {
      id: 5,
      year: "2020",
      title: "Remote-First Transformation",
      description: "Successfully transitioned to remote-first operations while maintaining productivity and client satisfaction.",
      icon: "Globe",
      category: "Adaptation",
      details: [
        "Implemented remote collaboration tools",
        "Maintained 99.9% client satisfaction",
        "Expanded talent pool globally",
        "Developed virtual project management processes"
      ],
      metrics: {
        "Team Size": "22",
        "Clients": "60",
        "Revenue": "$2.1M"
      }
    },
    {
      id: 6,
      year: "2021",
      title: "Cloud Excellence",
      description: "Achieved AWS Advanced Consulting Partner status and launched comprehensive cloud migration services.",
      icon: "Cloud",
      category: "Recognition",
      details: [
        "Became AWS Advanced Consulting Partner",
        "Migrated 50+ applications to cloud",
        "Achieved 99.99% uptime for client systems",
        "Launched DevOps automation services"
      ],
      metrics: {
        "Team Size": "28",
        "Clients": "85",
        "Revenue": "$3.5M"
      }
    },
    {
      id: 7,
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards and recognition for innovation in AI and cybersecurity solutions.",
      icon: "Award",
      category: "Achievement",
      details: [
        "Won \'Best AI Innovation\' award",
        "Featured in TechCrunch and Forbes",
        "Spoke at 10+ industry conferences",
        "Published 15+ research papers"
      ],
      metrics: {
        "Team Size": "35",
        "Clients": "120",
        "Revenue": "$5.2M"
      }
    },
    {
      id: 8,
      year: "2023",
      title: "Global Expansion",
      description: "Opened international offices and established partnerships across three continents.",
      icon: "MapPin",
      category: "Expansion",
      details: [
        "Opened offices in London and Singapore",
        "Established partnerships in 15 countries",
        "Launched 24/7 global support",
        "Achieved ISO 27001 certification"
      ],
      metrics: {
        "Team Size": "45",
        "Clients": "180",
        "Revenue": "$8.1M"
      }
    },
    {
      id: 9,
      year: "2024",
      title: "AI Revolution",
      description: "Launched next-generation AI platform and achieved breakthrough in autonomous system development.",
      icon: "Zap",
      category: "Innovation",
      details: [
        "Released CharlieAI platform",
        "Achieved 99.5% accuracy in ML models",
        "Secured 5 AI-related patents",
        "Partnered with leading universities"
      ],
      metrics: {
        "Team Size": "60",
        "Clients": "250",
        "Revenue": "$12.5M"
      }
    }
  ];

  const categories = [
    { name: "Foundation", color: "bg-blue-500", count: 1 },
    { name: "Growth", color: "bg-green-500", count: 1 },
    { name: "Expansion", color: "bg-purple-500", count: 2 },
    { name: "Innovation", color: "bg-orange-500", count: 2 },
    { name: "Adaptation", color: "bg-teal-500", count: 1 },
    { name: "Recognition", color: "bg-pink-500", count: 1 },
    { name: "Achievement", color: "bg-yellow-500", count: 1 }
  ];

  const getCategoryColor = (category) => {
    const categoryData = categories.find(cat => cat.name === category);
    return categoryData ? categoryData.color : "bg-primary";
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto mb-8">
            From a small startup to an industry leader, explore the key milestones 
            that have shaped CharlieVerse into the innovative company we are today.
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <span className="text-sm font-body text-text-secondary">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineData.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div 
                    className="bg-card border border-border rounded-xl p-6 hover:glow-blue-sm transition-all duration-normal cursor-pointer group"
                    onClick={() => setSelectedMilestone(milestone)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(milestone.category)}`}></div>
                      <span className="text-primary font-body font-semibold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-normal">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-text-secondary font-body mb-4 leading-relaxed">
                      {milestone.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-body font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone.category}
                      </span>
                      <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-normal">
                        <span className="text-sm font-body font-medium mr-2">View Details</span>
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center my-8 lg:my-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                      <Icon name={milestone.icon} size={24} className="text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <span className="text-sm font-body font-bold text-primary bg-background px-2">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone Detail Modal */}
        {selectedMilestone && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-1000 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center">
                      <Icon name={selectedMilestone.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {selectedMilestone.title}
                      </h3>
                      <p className="text-primary font-body font-medium">
                        {selectedMilestone.year} • {selectedMilestone.category}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMilestone(null)}
                    className="p-2 text-text-secondary hover:text-foreground transition-colors duration-normal"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-text-secondary font-body leading-relaxed text-lg">
                    {selectedMilestone.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {selectedMilestone.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-text-secondary font-body">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                      Company Metrics
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(selectedMilestone.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-body font-medium text-foreground">
                            {key}
                          </span>
                          <span className="font-heading font-bold text-primary">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyTimeline;