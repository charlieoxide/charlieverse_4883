import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ContextualInquiry from '../../components/ui/ContextualInquiry';
import LoadingScreen from './components/LoadingScreen';
import Hero3DCanvas from './components/Hero3DCanvas';
import HeroOverlay from './components/HeroOverlay';
import ServiceFeatureCards from './components/ServiceFeatureCards';

const Interactive3DHeroLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Simulate resource loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if WebGL is supported
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          console.warn('WebGL not supported, falling back to 2D mode');
        }
        
        setIs3DLoaded(true);
      } catch (error) {
        console.error('Error preloading resources:', error);
        setIs3DLoaded(true);
      }
    };

    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowOverlay(true);
    }, 500);
  };

  const handle3DLoadComplete = () => {
    // Additional 3D-specific loading completion logic
    console.log('3D scene loaded successfully');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading Screen */}
      <LoadingScreen 
        isLoading={isLoading} 
        onComplete={handleLoadingComplete}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Header */}
        <Header />

        {/* Hero Section with 3D Canvas */}
        <section className="relative h-screen overflow-hidden">
          {/* 3D Canvas Background */}
          <div className="absolute inset-0 z-10">
            <Suspense fallback={
              <div className="w-full h-full bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-blue-sm">
                    <span className="text-2xl font-heading font-bold text-white">C</span>
                  </div>
                  <p className="text-text-secondary font-body">Loading 3D Experience...</p>
                </div>
              </div>
            }>
              {is3DLoaded && (
                <Hero3DCanvas 
                  isLoading={isLoading}
                  onLoadComplete={handle3DLoadComplete}
                />
              )}
            </Suspense>
          </div>

          {/* Hero Overlay Content */}
          <div className="relative z-20">
            <HeroOverlay isVisible={showOverlay} />
          </div>

          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 z-15 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:from-background/80 lg:via-background/20 lg:to-transparent" />
        </section>

        {/* Service Feature Cards Section */}
        <ServiceFeatureCards />

        {/* Technology Showcase Section */}
        <section className="py-20 px-6 lg:px-12 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Powered by Modern Technology
              </h2>
              <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to deliver exceptional results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
            >
              {[
                { name: 'React', logo: '⚛️' },
                { name: 'Node.js', logo: '🟢' },
                { name: 'Python', logo: '🐍' },
                { name: 'AWS', logo: '☁️' },
                { name: 'Docker', logo: '🐳' },
                { name: 'Kubernetes', logo: '⚙️' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-normal hover:glow-blue-sm"
                >
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <h3 className="font-body font-medium text-foreground">{tech.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20 px-6 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechStart Inc.",
                  role: "CTO",
                  testimonial: "CharlieVerse transformed our vision into a scalable platform that exceeded our expectations. Their expertise in both development and security gave us confidence.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  company: "DataFlow Solutions",
                  role: "CEO",
                  testimonial: "The AI/ML solutions provided by CharlieVerse have revolutionized our data processing capabilities. Outstanding technical expertise and support.",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  company: "SecureBank",
                  role: "CISO",
                  testimonial: "Their cybersecurity implementation was flawless. We've seen a 99.9% reduction in security incidents since partnering with CharlieVerse.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-normal hover:glow-blue-sm"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-text-secondary font-body mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-heading font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contextual Inquiry Component */}
        <ContextualInquiry position="sidebar" />
      </motion.div>
    </div>
  );
};

export default Interactive3DHeroLanding;