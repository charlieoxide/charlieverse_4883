import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContextualInquiry from '../../components/ui/ContextualInquiry';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import ContactFAQ from './components/ContactFAQ';
import Icon from '../../components/AppIcon';

const ContactInquirySystem = () => {
  useEffect(() => {
    document.title = 'Contact Us - CharlieVerse | Get In Touch';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-9xl mx-auto px-5 lg:px-8 py-8">
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body font-medium mb-6">
              <Icon name="MessageSquare" size={16} />
              <span>Let's Start a Conversation</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Contact CharlieVerse
            </h1>
            
            <p className="text-xl text-text-secondary font-body leading-relaxed mb-8">
              Ready to transform your ideas into reality? Our expert team is here to help you build innovative software solutions, secure your digital assets, and leverage the power of AI/ML.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">Quick Response</h3>
                <p className="text-text-secondary text-sm">Response within 4 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">Expert Team</h3>
                <p className="text-text-secondary text-sm">Dedicated project managers</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">Secure Process</h3>
                <p className="text-text-secondary text-sm">NDA protection available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - 60% width on desktop */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          {/* Contact Methods - 40% width on desktop */}
          <div className="lg:col-span-1">
            <ContactMethods />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <ContactFAQ />
        </div>

        {/* Additional Contact Information */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with CharlieVerse. 
              Let's discuss how we can help you achieve your technology goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" size={28} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">Software Development</h3>
              <p className="text-text-secondary text-sm">Custom web, mobile, and desktop applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">Cybersecurity</h3>
              <p className="text-text-secondary text-sm">Comprehensive security solutions and audits</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={28} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">AI & ML</h3>
              <p className="text-text-secondary text-sm">Intelligent solutions and data analytics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-text-secondary text-sm">Ongoing maintenance and technical support</p>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual Inquiry Components */}
      <ContextualInquiry position="sidebar" />
      <ContextualInquiry position="bottom" />
    </div>
  );
};

export default ContactInquirySystem;