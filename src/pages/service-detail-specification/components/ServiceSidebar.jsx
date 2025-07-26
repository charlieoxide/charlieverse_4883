import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceSidebar = ({ service }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectTypes = [
    { value: 'new-project', label: 'New Project' },
    { value: 'enhancement', label: 'Enhancement' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'consultation', label: 'Consultation' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: 'Within 3 Months' },
    { value: '6-months', label: 'Within 6 Months' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`transition-all duration-normal ${isSticky ? 'sticky top-20' : ''}`}>
      <div className="space-y-6">
        {/* Service Highlights */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Service Highlights
          </h3>
          <div className="space-y-3">
            {service.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                <span className="text-sm font-body text-text-secondary">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Overview */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Pricing Overview
          </h3>
          <div className="space-y-4">
            {service.pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 transition-all duration-normal ${
                  tier.popular 
                    ? 'border-primary bg-primary/5 glow-blue-sm' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-body font-semibold text-foreground">
                    {tier.name}
                  </h4>
                  {tier.popular && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-body font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-text-secondary mb-3">
                  {tier.description}
                </p>
                <div className="space-y-1">
                  {tier.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-xs font-body text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Related Case Study
          </h3>
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Play" size={32} className="text-primary" />
              </div>
            </div>
            <div>
              <h4 className="font-body font-semibold text-foreground mb-2">
                {service.caseStudy.title}
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                {service.caseStudy.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-body text-text-secondary">
                  {service.caseStudy.client}
                </span>
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Request Form */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Request Consultation
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
            />

            <Input
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
            />

            <Input
              label="Company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your company name"
            />

            <Select
              label="Project Type"
              options={projectTypes}
              value={formData.projectType}
              onChange={(value) => handleInputChange('projectType', value)}
              placeholder="Select project type"
            />

            <Select
              label="Budget Range"
              options={budgetRanges}
              value={formData.budget}
              onChange={(value) => handleInputChange('budget', value)}
              placeholder="Select budget range"
            />

            <Select
              label="Timeline"
              options={timelines}
              value={formData.timeline}
              onChange={(value) => handleInputChange('timeline', value)}
              placeholder="Select timeline"
            />

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Project Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Brief description of your project..."
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal resize-none text-sm"
              />
            </div>

            <Button
              type="submit"
              variant="default"
              size="sm"
              loading={isSubmitting}
              fullWidth
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Sending...' : 'Request Consultation'}
            </Button>

            {submitStatus === 'success' && (
              <div className="flex items-center space-x-2 text-success font-body text-sm">
                <Icon name="CheckCircle" size={14} />
                <span>Request sent successfully!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center space-x-2 text-error font-body text-sm">
                <Icon name="AlertCircle" size={14} />
                <span>Failed to send request.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;