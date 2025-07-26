import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={18} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Client Testimonials
        </h2>
      </div>

      <div className="relative">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-body font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <span className="text-text-secondary">•</span>
                        <span className="text-sm font-body text-text-secondary">
                          {testimonial.position}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="Building" size={16} className="text-primary" />
                        <span className="text-sm font-body text-text-secondary">
                          {testimonial.company}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <Icon
                            key={starIndex}
                            name="Star"
                            size={16}
                            className={starIndex < testimonial.rating ? 'text-warning' : 'text-border'}
                          />
                        ))}
                        <span className="text-sm font-body text-text-secondary ml-2">
                          {testimonial.rating}/5
                        </span>
                      </div>
                      
                      <blockquote className="text-text-secondary font-body italic mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Project Details */}
                      <div className="bg-background/50 rounded-lg p-4">
                        <h4 className="font-body font-semibold text-foreground mb-2">
                          Project: {testimonial.project.name}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" size={14} className="text-primary" />
                            <span className="text-text-secondary">
                              {testimonial.project.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="DollarSign" size={14} className="text-primary" />
                            <span className="text-text-secondary">
                              {testimonial.project.budget}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Users" size={14} className="text-primary" />
                            <span className="text-text-secondary">
                              {testimonial.project.teamSize}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {testimonial.project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-body font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-normal"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-normal"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-normal ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm font-body font-medium transition-colors duration-normal ${
              isAutoPlaying 
                ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
            <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;