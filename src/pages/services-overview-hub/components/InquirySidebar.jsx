import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const InquirySidebar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    projectBudget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: '', label: 'Select Service Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-apps', label: 'Mobile Applications' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'blockchain', label: 'Blockchain Development' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'consultation', label: 'Technical Consultation' }
  ];

  const budgetOptions = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-25k', label: 'Under $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: 'over-250k', label: 'Over $250,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline' },
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: 'Within 3 Months' },
    { value: '6-months', label: 'Within 6 Months' },
    { value: '12-months', label: 'Within 12 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        projectBudget: '',
        timeline: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Get Consultation
          </h3>
          <p className="text-sm text-text-secondary font-body">
            Free 30-min consultation
          </p>
        </div>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-center space-x-2 text-success">
            <Icon name="CheckCircle" size={16} />
            <span className="font-body font-medium">Inquiry Sent!</span>
          </div>
          <p className="text-sm text-success/80 font-body mt-1">
            We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
          <div className="flex items-center space-x-2 text-error">
            <Icon name="AlertCircle" size={16} />
            <span className="font-body font-medium">Failed to Send</span>
          </div>
          <p className="text-sm text-error/80 font-body mt-1">
            Please try again or contact us directly.
          </p>
        </div>
      )}

      {/* Form */}
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
          label="Email Address"
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
          label="Service Interest"
          options={serviceOptions}
          value={formData.serviceType}
          onChange={(value) => handleInputChange('serviceType', value)}
          required
        />

        <Select
          label="Project Budget"
          options={budgetOptions}
          value={formData.projectBudget}
          onChange={(value) => handleInputChange('projectBudget', value)}
        />

        <Select
          label="Timeline"
          options={timelineOptions}
          value={formData.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
        />

        <div>
          <label className="block text-sm font-body font-medium text-foreground mb-2">
            Project Details
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
          {isSubmitting ? 'Sending...' : 'Request Consultation'}
        </Button>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={16} className="text-primary" />
            <span className="text-sm font-body text-text-secondary">
              +1 (555) 123-4567
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={16} className="text-primary" />
            <span className="text-sm font-body text-text-secondary">
              hello@charlieverse.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm font-body text-text-secondary">
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-heading font-semibold text-primary">150+</div>
            <div className="text-xs text-text-secondary font-body">Projects</div>
          </div>
          <div>
            <div className="text-lg font-heading font-semibold text-success">98%</div>
            <div className="text-xs text-text-secondary font-body">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySidebar;