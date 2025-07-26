import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    
    // Step 2: Project Details
    serviceCategory: '',
    projectType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    
    // Step 3: Requirements
    description: '',
    requirements: [],
    hasExistingSystem: false,
    needsConsultation: false,
    
    // Step 4: Additional Information
    referralSource: '',
    urgency: '',
    preferredContact: '',
    attachments: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const location = useLocation();

  const serviceCategories = [
    { value: 'software-development', label: 'Software Development' },
    { value: 'security', label: 'Cybersecurity Solutions' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const projectTypes = {
    'software-development': [
      { value: 'web-app', label: 'Web Application' },
      { value: 'mobile-app', label: 'Mobile Application' },
      { value: 'desktop-app', label: 'Desktop Application' },
      { value: 'api-development', label: 'API Development' },
      { value: 'system-integration', label: 'System Integration' }
    ],
    'security': [
      { value: 'security-audit', label: 'Security Audit' },
      { value: 'penetration-testing', label: 'Penetration Testing' },
      { value: 'compliance', label: 'Compliance Implementation' },
      { value: 'incident-response', label: 'Incident Response' },
      { value: 'security-training', label: 'Security Training' }
    ],
    'ai-ml': [
      { value: 'ml-model', label: 'Machine Learning Model' },
      { value: 'data-analytics', label: 'Data Analytics Platform' },
      { value: 'nlp-solution', label: 'NLP Solution' },
      { value: 'computer-vision', label: 'Computer Vision' },
      { value: 'ai-integration', label: 'AI Integration' }
    ],
    'general': [
      { value: 'consultation', label: 'Technical Consultation' },
      { value: 'partnership', label: 'Partnership Inquiry' },
      { value: 'support', label: 'Technical Support' },
      { value: 'other', label: 'Other' }
    ]
  };

  const projectScopes = [
    { value: 'small', label: 'Small Project (1-3 months)' },
    { value: 'medium', label: 'Medium Project (3-6 months)' },
    { value: 'large', label: 'Large Project (6-12 months)' },
    { value: 'enterprise', label: 'Enterprise Project (12+ months)' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: 'Within 3 Months' },
    { value: '6-months', label: 'Within 6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: 'over-250k', label: 'Over $250,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const requirementOptions = [
    { value: 'responsive-design', label: 'Responsive Design' },
    { value: 'database-integration', label: 'Database Integration' },
    { value: 'third-party-apis', label: 'Third-party API Integration' },
    { value: 'user-authentication', label: 'User Authentication' },
    { value: 'payment-processing', label: 'Payment Processing' },
    { value: 'real-time-features', label: 'Real-time Features' },
    { value: 'analytics-reporting', label: 'Analytics & Reporting' },
    { value: 'cloud-deployment', label: 'Cloud Deployment' },
    { value: 'maintenance-support', label: 'Maintenance & Support' }
  ];

  const referralSources = [
    { value: 'google-search', label: 'Google Search' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'industry-event', label: 'Industry Event' },
    { value: 'existing-client', label: 'Existing Client' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Planning Phase' },
    { value: 'medium', label: 'Medium - Ready to Start Soon' },
    { value: 'high', label: 'High - Need to Start ASAP' },
    { value: 'critical', label: 'Critical - Urgent Requirement' }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video-call', label: 'Video Call' },
    { value: 'in-person', label: 'In-person Meeting' }
  ];

  // Auto-populate service category based on URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service');
    if (service && serviceCategories.find(cat => cat.value === service)) {
      setFormData(prev => ({ ...prev, serviceCategory: service }));
    }
  }, [location.search]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear related errors
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Reset dependent fields when service category changes
    if (field === 'serviceCategory') {
      setFormData(prev => ({ ...prev, projectType: '' }));
    }
  };

  const handleRequirementsChange = (requirement, checked) => {
    setFormData(prev => ({
      ...prev,
      requirements: checked
        ? [...prev.requirements, requirement]
        : prev.requirements.filter(req => req !== requirement)
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, attachments: files }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        break;

      case 2:
        if (!formData.serviceCategory) newErrors.serviceCategory = 'Service category is required';
        if (!formData.projectScope) newErrors.projectScope = 'Project scope is required';
        if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        if (!formData.budget) newErrors.budget = 'Budget range is required';
        break;

      case 3:
        if (!formData.description.trim()) newErrors.description = 'Project description is required';
        else if (formData.description.trim().length < 50) newErrors.description = 'Please provide more details (minimum 50 characters)';
        break;

      case 4:
        if (!formData.preferredContact) newErrors.preferredContact = 'Preferred contact method is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          serviceCategory: '',
          projectType: '',
          projectScope: '',
          timeline: '',
          budget: '',
          description: '',
          requirements: [],
          hasExistingSystem: false,
          needsConsultation: false,
          referralSource: '',
          urgency: '',
          preferredContact: '',
          attachments: null
        });
        setCurrentStep(1);
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Basic Information
              </h3>
              <p className="text-text-secondary font-body">
                Let's start with your contact details
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                error={errors.firstName}
              />
              <Input
                label="Last Name"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                error={errors.lastName}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                error={errors.email}
              />
              <Input
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                error={errors.phone}
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
              <Input
                label="Position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                placeholder="Your job title"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Project Details
              </h3>
              <p className="text-text-secondary font-body">
                Tell us about your project requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Service Category"
                required
                options={serviceCategories}
                value={formData.serviceCategory}
                onChange={(value) => handleInputChange('serviceCategory', value)}
                placeholder="Select service category"
                error={errors.serviceCategory}
              />
              {formData.serviceCategory && projectTypes[formData.serviceCategory] && (
                <Select
                  label="Project Type"
                  options={projectTypes[formData.serviceCategory]}
                  value={formData.projectType}
                  onChange={(value) => handleInputChange('projectType', value)}
                  placeholder="Select project type"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Project Scope"
                required
                options={projectScopes}
                value={formData.projectScope}
                onChange={(value) => handleInputChange('projectScope', value)}
                placeholder="Select project scope"
                error={errors.projectScope}
              />
              <Select
                label="Timeline"
                required
                options={timelines}
                value={formData.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                placeholder="Select timeline"
                error={errors.timeline}
              />
            </div>

            <Select
              label="Budget Range"
              required
              options={budgetRanges}
              value={formData.budget}
              onChange={(value) => handleInputChange('budget', value)}
              placeholder="Select budget range"
              error={errors.budget}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Requirements & Description
              </h3>
              <p className="text-text-secondary font-body">
                Provide detailed information about your project
              </p>
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Project Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Please describe your project in detail. Include objectives, key features, target audience, and any specific requirements..."
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal resize-none"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-error">{errors.description}</p>
              )}
              <p className="mt-1 text-xs text-text-secondary">
                {formData.description.length}/500 characters (minimum 50 required)
              </p>
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-3">
                Additional Requirements
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {requirementOptions.map((option) => (
                  <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={formData.requirements.includes(option.value)}
                    onChange={(e) => handleRequirementsChange(option.value, e.target.checked)}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Checkbox
                label="I have an existing system that needs integration"
                checked={formData.hasExistingSystem}
                onChange={(e) => handleInputChange('hasExistingSystem', e.target.checked)}
              />
              <Checkbox
                label="I would like a free consultation call"
                checked={formData.needsConsultation}
                onChange={(e) => handleInputChange('needsConsultation', e.target.checked)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Additional Information
              </h3>
              <p className="text-text-secondary font-body">
                Help us serve you better with these final details
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="How did you hear about us?"
                options={referralSources}
                value={formData.referralSource}
                onChange={(value) => handleInputChange('referralSource', value)}
                placeholder="Select referral source"
              />
              <Select
                label="Project Urgency"
                options={urgencyLevels}
                value={formData.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
                placeholder="Select urgency level"
              />
            </div>

            <Select
              label="Preferred Contact Method"
              required
              options={contactPreferences}
              value={formData.preferredContact}
              onChange={(value) => handleInputChange('preferredContact', value)}
              placeholder="Select preferred contact method"
              error={errors.preferredContact}
            />

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Project Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Icon name="Upload" size={32} className="text-text-secondary" />
                  <span className="text-text-secondary font-body">
                    Click to upload project documents
                  </span>
                  <span className="text-xs text-text-secondary">
                    PDF, DOC, TXT, Images (Max 10MB each)
                  </span>
                </label>
                {formData.attachments && formData.attachments.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="text-sm font-body font-medium text-foreground mb-2">
                      Selected files:
                    </p>
                    {formData.attachments.map((file, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="File" size={16} />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Inquiry Submitted Successfully!
        </h3>
        <p className="text-text-secondary font-body mb-6">
          Thank you for your interest in CharlieVerse. We've received your inquiry and will get back to you within 24 hours.
        </p>
        <div className="bg-muted rounded-lg p-4 text-left">
          <h4 className="font-body font-medium text-foreground mb-2">What happens next?</h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>We'll review your requirements within 2-4 hours</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-primary" />
              <span>Our team will contact you via your preferred method</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icon name="FileText" size={16} className="text-primary" />
              <span>You'll receive a detailed project proposal</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-muted px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-body font-medium text-foreground">
            Step {currentStep} of 4
          </span>
          <span className="text-sm font-body text-text-secondary">
            {Math.round((currentStep / 4) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-normal"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-normal ${
                  step === currentStep
                    ? 'bg-primary glow-blue-sm'
                    : step < currentStep
                    ? 'bg-success' :'bg-border'
                }`}
              />
            ))}
          </div>

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="default"
              onClick={nextStep}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="mt-4 flex items-center space-x-2 text-error font-body">
            <Icon name="AlertCircle" size={16} />
            <span>Failed to submit inquiry. Please try again.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;