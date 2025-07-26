import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamExpertise = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specializations: ["Full-Stack Development", "Cloud Architecture", "DevOps"],
      experience: "8+ years",
      bio: `Alex leads our technical vision with expertise in scalable architecture and modern development practices. He has successfully delivered 50+ enterprise projects and specializes in cloud-native solutions.`,
      skills: [
        { name: "React/Node.js", level: 95 },
        { name: "AWS/Azure", level: 90 },
        { name: "Microservices", level: 88 },
        { name: "DevOps", level: 85 }
      ],
      achievements: [
        "Led migration of 15+ legacy systems to cloud",
        "Reduced deployment time by 70% through automation",
        "Architected solutions serving 1M+ users"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Head of Cybersecurity",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      specializations: ["Penetration Testing", "Security Architecture", "Compliance"],
      experience: "10+ years",
      bio: `Sarah brings extensive cybersecurity expertise with a focus on proactive threat detection and compliance frameworks. She has secured systems for Fortune 500 companies and government agencies.`,
      skills: [
        { name: "Penetration Testing", level: 98 },
        { name: "Security Architecture", level: 95 },
        { name: "Compliance (SOC2, ISO)", level: 92 },
        { name: "Incident Response", level: 90 }
      ],
      achievements: [
        "Prevented 99.9% of security incidents",
        "Achieved SOC2 Type II certification",
        "Trained 200+ developers in secure coding"
      ]
    },
    {
      id: 3,
      name: "Dr. Michael Thompson",
      role: "AI/ML Research Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specializations: ["Machine Learning", "Computer Vision", "NLP"],
      experience: "12+ years",
      bio: `Dr. Thompson leads our AI research initiatives with a PhD in Computer Science and extensive experience in machine learning applications. He has published 25+ research papers and holds 8 patents.`,
      skills: [
        { name: "Deep Learning", level: 96 },
        { name: "Computer Vision", level: 94 },
        { name: "NLP", level: 91 },
        { name: "MLOps", level: 87 }
      ],
      achievements: [
        "Published 25+ peer-reviewed papers",
        "Holds 8 AI-related patents",
        "Built ML models with 99.5% accuracy"
      ]
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Product Strategy Lead",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specializations: ["Product Management", "UX Strategy", "Market Analysis"],
      experience: "7+ years",
      bio: `Emily drives product innovation and user experience strategy, ensuring our solutions meet real market needs. She has launched 20+ successful products and specializes in user-centered design.`,
      skills: [
        { name: "Product Strategy", level: 93 },
        { name: "UX Research", level: 89 },
        { name: "Market Analysis", level: 91 },
        { name: "Agile Management", level: 88 }
      ],
      achievements: [
        "Launched 20+ successful products",
        "Increased user satisfaction by 40%",
        "Led cross-functional teams of 15+ members"
      ]
    }
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in cutting-edge 
            technologies, ensuring we deliver innovative solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:glow-blue-sm transition-all duration-normal cursor-pointer group"
              onClick={() => openMemberModal(member)}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-normal">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-body font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-text-secondary font-body mb-4">
                {member.experience} experience
              </p>

              <div className="space-y-2 mb-4">
                {member.specializations.slice(0, 2).map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-full mr-2"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors duration-normal">
                <span className="text-sm font-body font-medium mr-2">View Details</span>
                <Icon name="ArrowRight" size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-1000 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src={selectedMember.avatar}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {selectedMember.name}
                      </h3>
                      <p className="text-primary font-body font-medium">
                        {selectedMember.role}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeMemberModal}
                    className="p-2 text-text-secondary hover:text-foreground transition-colors duration-normal"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-text-secondary font-body leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Technical Skills
                  </h4>
                  <div className="space-y-3">
                    {selectedMember.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-body font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-body text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-blue h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-secondary font-body">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-body font-medium rounded-lg"
                      >
                        {spec}
                      </span>
                    ))}
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

export default TeamExpertise;