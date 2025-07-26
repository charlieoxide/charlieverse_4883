import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { label: 'Initializing 3D Engine', icon: 'Cpu' },
    { label: 'Loading Assets', icon: 'Download' },
    { label: 'Rendering Scene', icon: 'Eye' },
    { label: 'Optimizing Performance', icon: 'Zap' },
    { label: 'Ready to Launch', icon: 'Rocket' }
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, onComplete, loadingSteps.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-9999 bg-background flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(0, 170, 255, 0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="relative text-center">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              className="mb-8"
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center glow-blue-lg"
              >
                <span className="text-3xl font-heading font-bold text-white">C</span>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-heading font-bold text-foreground mb-2"
            >
              CharlieVerse
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-text-secondary font-body mb-12"
            >
              Transforming Ideas into Digital Reality
            </motion.p>

            {/* Progress Bar */}
            <div className="w-80 mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-body text-text-secondary">
                  Loading Experience
                </span>
                <span className="text-sm font-body font-medium text-primary">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent glow-blue-sm"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Loading Steps */}
            <div className="space-y-3">
              {loadingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: index <= currentStep ? 1 : 0.3,
                    x: 0
                  }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex items-center space-x-3 ${
                    index === currentStep ? 'text-primary' : 
                    index < currentStep ? 'text-success' : 'text-text-secondary'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    index === currentStep ? 'bg-primary/20 glow-blue-sm' :
                    index < currentStep ? 'bg-success/20' : 'bg-muted'
                  }`}>
                    <Icon 
                      name={index < currentStep ? 'Check' : step.icon} 
                      size={14} 
                      className="text-current"
                    />
                  </div>
                  <span className="font-body text-sm">
                    {step.label}
                  </span>
                  {index === currentStep && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4"
                    >
                      <Icon name="Loader2" size={16} className="text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;