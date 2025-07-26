import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '../../../components/ui/Button';

const HeroOverlay = ({ isVisible }) => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Transforming Ideas into Digital Reality",
    "Securing Tomorrow\'s Technology Today",
    "AI-Powered Solutions for Modern Business"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative h-full">
        {/* Left Overlay Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 top-0 h-full w-full lg:w-2/5 flex items-center pointer-events-auto"
        >
          <div className="w-full px-6 lg:px-12 py-8">
            <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-8 lg:p-12 glow-blue">
              {/* Animated Tagline */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <motion.h1
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight"
                >
                  {taglines[currentTagline]}
                </motion.h1>
              </motion.div>

              {/* Value Proposition */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <p className="text-lg lg:text-xl text-text-secondary font-body leading-relaxed">
                  CharlieVerse delivers cutting-edge software development, cybersecurity, and AI/ML solutions that empower businesses to thrive in the digital age.
                </p>
              </motion.div>

              {/* Key Stats */}
              <motion.div
                variants={itemVariants}
                className="mb-8 grid grid-cols-3 gap-4"
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">50+</div>
                  <div className="text-sm text-text-secondary font-body">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">99%</div>
                  <div className="text-sm text-text-secondary font-body">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-text-secondary font-body">Support</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/services-overview-hub" className="flex-1">
                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="glow-blue-sm"
                  >
                    Explore Services
                  </Button>
                </Link>
                
                <Link to="/interactive-portfolio-gallery" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="Eye"
                    iconPosition="right"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-6 border-t border-border"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary font-body">
                      Ready to start your project?
                    </p>
                    <p className="text-foreground font-body font-medium">
                      Let's discuss your requirements
                    </p>
                  </div>
                  <Link to="/contact-inquiry-system">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="MessageSquare"
                      iconPosition="right"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-text-secondary font-body">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroOverlay;