import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    teamSize: 0
  });

  const targetValues = {
    projects: 150,
    clients: 85,
    experience: 8,
    teamSize: 25
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetValues).forEach(key => {
        let current = 0;
        const increment = targetValues[key] / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValues[key]) {
            current = targetValues[key];
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      icon: 'Briefcase',
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful deliveries across industries'
    },
    {
      icon: 'Users',
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Long-term partnerships built'
    },
    {
      icon: 'Calendar',
      value: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise and growth'
    },
    {
      icon: 'UserCheck',
      value: counters.teamSize,
      suffix: '+',
      label: 'Team Members',
      description: 'Expert professionals'
    }
  ];

  return (
    <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              About <span className="text-primary">CharlieVerse</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-secondary font-body max-w-4xl mx-auto leading-relaxed">
              We are a cutting-edge technology company specializing in software development, 
              cybersecurity, and artificial intelligence solutions that transform businesses 
              and drive innovation across industries.
            </p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-16 glow-blue-sm"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-blue rounded-full mb-6">
              <Icon name="Target" size={32} className="text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
              To empower businesses with innovative technology solutions that enhance security, 
              drive efficiency, and unlock the potential of artificial intelligence. We believe 
              in creating digital experiences that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
          </div>
        </motion.div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:glow-blue-sm transition-all duration-normal group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-normal">
                <Icon 
                  name={achievement.icon} 
                  size={24} 
                  className="text-primary" 
                />
              </div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                {achievement.value}{achievement.suffix}
              </div>
              <div className="text-sm font-body font-medium text-primary mb-1">
                {achievement.label}
              </div>
              <div className="text-xs text-text-secondary font-body">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;