import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      type: 'phone',
      icon: 'Phone',
      title: 'Phone Support',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri, 9AM-6PM EST',
      description: 'Speak directly with our technical team',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      type: 'email',
      icon: 'Mail',
      title: 'Email Support',
      primary: 'hello@charlieverse.com',
      secondary: 'Response within 4 hours',
      description: 'Send detailed project requirements',
      action: 'Send Email',
      href: 'mailto:hello@charlieverse.com'
    },
    {
      type: 'chat',
      icon: 'MessageCircle',
      title: 'Live Chat',
      primary: 'Available Now',
      secondary: 'Average response: 2 minutes',
      description: 'Quick questions and instant support',
      action: 'Start Chat',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/charlieverse',
      followers: '2.5K'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/charlieverse',
      followers: '1.8K'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/charlieverse',
      followers: '892'
    },
    {
      name: 'Discord',
      icon: 'MessageSquare',
      url: 'https://discord.gg/charlieverse',
      followers: '456'
    }
  ];

  const officeLocations = [
    {
      name: 'San Francisco HQ',
      address: '123 Tech Street, Suite 400\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@charlieverse.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      lat: '37.7749',
      lng: '-122.4194'
    },
    {
      name: 'New York Office',
      address: '456 Innovation Ave, Floor 12\nNew York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@charlieverse.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      lat: '40.7128',
      lng: '-74.0060'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Get In Touch
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <div
              key={method.type}
              className="bg-muted border border-border rounded-lg p-4 hover:bg-primary/5 hover:border-primary/20 transition-all duration-normal group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-normal">
                  <Icon 
                    name={method.icon} 
                    size={20} 
                    className="text-primary" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-body font-semibold text-foreground mb-1">
                    {method.title}
                  </h4>
                  <p className="text-primary font-body font-medium mb-1">
                    {method.primary}
                  </p>
                  <p className="text-text-secondary text-sm font-body mb-2">
                    {method.secondary}
                  </p>
                  <p className="text-text-secondary text-sm font-body mb-3">
                    {method.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(method.href, '_blank')}
                    iconName={method.icon}
                    iconPosition="left"
                  >
                    {method.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Our Offices
        </h3>
        <div className="space-y-6">
          {officeLocations.map((office, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h4 className="font-body font-semibold text-foreground mb-3">
                  {office.name}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                    <span className="text-text-secondary font-body whitespace-pre-line">
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-text-secondary font-body">
                      {office.phone}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-text-secondary font-body">
                      {office.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-text-secondary font-body">
                      {office.hours}
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-48 bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={office.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                  className="border-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Follow Us
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted border border-border rounded-lg p-4 hover:bg-primary/5 hover:border-primary/20 transition-all duration-normal group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-normal">
                  <Icon 
                    name={social.icon} 
                    size={18} 
                    className="text-primary" 
                  />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">
                    {social.name}
                  </h4>
                  <p className="text-text-secondary text-sm font-body">
                    {social.followers} followers
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-error/5 border border-error/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-error mt-0.5" />
          <div>
            <h4 className="font-body font-semibold text-foreground mb-1">
              Emergency Support
            </h4>
            <p className="text-text-secondary text-sm font-body mb-2">
              For critical system issues or security incidents
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+15551234999"
                className="text-error font-body font-medium hover:underline"
              >
                +1 (555) 123-4999
              </a>
              <span className="text-text-secondary text-sm">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;