import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const ContextualInquiry = ({ 
  isVisible = true,
  position = 'sidebar', // 'sidebar' | 'bottom' | 'inline'
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    serviceCategory: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const location = useLocation();

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' }
  ];

  const serviceCategories = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-apps', label: 'Mobile Applications' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'iot', label: 'IoT Solutions' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'data-analytics', label: 'Data Analytics' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: 'Within 3 Months' },
    { value: '6-months', label: 'Within 6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  // Auto-populate based on current page context
  useEffect(() => {
    const pathToServiceMap = {
      '/services-overview-hub': 'general',
      '/service-detail-specification': 'quote',
      '/interactive-portfolio-gallery': 'consultation',
      '/about-company-expertise': 'partnership',
      '/contact-inquiry-system': 'general'
    };

    const currentInquiryType = pathToServiceMap[location.pathname];
    if (currentInquiryType && !formData.inquiryType) {
      setFormData(prev => ({
        ...prev,
        inquiryType: currentInquiryType
      }));
    }
  }, [location.pathname, formData.inquiryType]);

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        serviceCategory: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
        setIsExpanded(false);
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  // Inline version for contact page
  if (position === 'inline') {
    return (
      <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
        <div className="mb-6">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
            Get In Touch
          </h3>
          <p className="text-text-secondary font-body">
            Ready to start your project? Let's discuss your requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
            />
            <Input
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your company name"
            />
            <Select
              label="Inquiry Type"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={(value) => handleInputChange('inquiryType', value)}
              placeholder="Select inquiry type"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Service Category"
              options={serviceCategories}
              value={formData.serviceCategory}
              onChange={(value) => handleInputChange('serviceCategory', value)}
              placeholder="Select service"
            />
            <Select
              label="Budget Range"
              options={budgetRanges}
              value={formData.budget}
              onChange={(value) => handleInputChange('budget', value)}
              placeholder="Select budget range"
            />
          </div>

          <Select
            label="Timeline"
            options={timelines}
            value={formData.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            placeholder="Select timeline"
          />

          <div>
            <label className="block text-sm font-body font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your project requirements..."
              rows={4}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            fullWidth
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>

          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-success font-body">
              <Icon name="CheckCircle" size={16} />
              <span>Inquiry sent successfully! We'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-error font-body">
              <Icon name="AlertCircle" size={16} />
              <span>Failed to send inquiry. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    );
  }

  // Sidebar version for desktop
  if (position === 'sidebar') {
    return (
      <div className={`hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-500 ${className}`}>
        <div className={`bg-card border border-border rounded-lg shadow-xl transition-all duration-normal ${
          isExpanded ? 'w-96' : 'w-16'
        }`}>
          {!isExpanded ? (
            <button
              onClick={toggleExpanded}
              className="w-16 h-16 flex items-center justify-center text-primary hover:bg-primary/10 rounded-lg transition-all duration-normal glow-blue-sm"
              aria-label="Open inquiry form"
            >
              <Icon name="MessageSquare" size={24} />
            </button>
          ) : (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Quick Inquiry
                </h3>
                <button
                  onClick={toggleExpanded}
                  className="p-1 text-text-secondary hover:text-foreground transition-colors duration-normal"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your name"
                />

                <Input
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Your email"
                />

                <Select
                  label="Inquiry Type"
                  options={inquiryTypes}
                  value={formData.inquiryType}
                  onChange={(value) => handleInputChange('inquiryType', value)}
                  placeholder="Select type"
                />

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Brief description..."
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
                  Send
                </Button>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-success font-body text-sm">
                    <Icon name="CheckCircle" size={14} />
                    <span>Sent successfully!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-error font-body text-sm">
                    <Icon name="AlertCircle" size={14} />
                    <span>Failed to send.</span>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Bottom panel version for mobile
  return (
    <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-500 ${className}`}>
      <div className={`bg-card border-t border-border transition-all duration-normal ${
        isExpanded ? 'h-auto' : 'h-16'
      }`}>
        {!isExpanded ? (
          <button
            onClick={toggleExpanded}
            className="w-full h-16 flex items-center justify-center space-x-3 text-primary hover:bg-primary/10 transition-all duration-normal"
          >
            <Icon name="MessageSquare" size={20} />
            <span className="font-body font-medium">Quick Inquiry</span>
            <Icon name="ChevronUp" size={16} />
          </button>
        ) : (
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Quick Inquiry
              </h3>
              <button
                onClick={toggleExpanded}
                className="p-1 text-text-secondary hover:text-foreground transition-colors duration-normal"
              >
                <Icon name="ChevronDown" size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your name"
                />
                <Input
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Your email"
                />
              </div>

              <Select
                label="Inquiry Type"
                options={inquiryTypes}
                value={formData.inquiryType}
                onChange={(value) => handleInputChange('inquiryType', value)}
                placeholder="Select type"
              />

              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Brief description..."
                  rows={2}
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
                Send Inquiry
              </Button>

              {submitStatus && (
                <div className={`flex items-center space-x-2 font-body text-sm ${
                  submitStatus === 'success' ? 'text-success' : 'text-error'
                }`}>
                  <Icon 
                    name={submitStatus === 'success' ? 'CheckCircle' : 'AlertCircle'} 
                    size={14} 
                  />
                  <span>
                    {submitStatus === 'success' ?'Sent successfully!' :'Failed to send.'
                    }
                  </span>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContextualInquiry;