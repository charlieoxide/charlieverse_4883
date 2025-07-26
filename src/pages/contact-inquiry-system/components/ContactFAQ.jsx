import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactFAQ = () => {
  const [expandedItems, setExpandedItems] = useState(new Set([0])); // First item expanded by default

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'How quickly can you start working on my project?',
          answer: `Our project start times depend on several factors including project complexity, team availability, and your specific requirements.\n\nFor small to medium projects, we typically begin within 1-2 weeks after contract signing. Larger enterprise projects may require 2-4 weeks for proper planning and resource allocation.\n\nWe always provide realistic timelines during our initial consultation and work with you to meet your deadlines.`
        },
        {
          question: 'What information should I include in my inquiry?',
          answer: `To provide you with the most accurate proposal, please include:\n\n• Project objectives and goals\n• Target audience and user requirements\n• Technical specifications or preferences\n• Timeline and budget expectations\n• Any existing systems or integrations needed\n• Design preferences or brand guidelines\n\nThe more details you provide, the better we can tailor our solution to your needs.`
        },
        {
          question: 'Do you work with international clients?',
          answer: `Yes, we work with clients worldwide! We have experience collaborating across different time zones and have successfully delivered projects for clients in North America, Europe, Asia, and Australia.\n\nWe use modern communication tools and project management platforms to ensure smooth collaboration regardless of location. We're flexible with meeting times to accommodate different time zones.`
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What types of software development do you specialize in?',
          answer: `We specialize in a wide range of software development services:\n\n• Web Applications (React, Node.js, Python, PHP)\n• Mobile Applications (React Native, Flutter, Native iOS/Android)\n• Desktop Applications (Electron, .NET, Java)\n• API Development and Integration\n• Database Design and Optimization\n• Cloud Solutions (AWS, Azure, Google Cloud)\n• DevOps and CI/CD Implementation\n\nOur team has expertise across multiple technologies and can recommend the best stack for your specific needs.`
        },
        {
          question: 'Do you provide cybersecurity services?',
          answer: `Yes, we offer comprehensive cybersecurity services including:\n\n• Security Audits and Vulnerability Assessments\n• Penetration Testing\n• Compliance Implementation (GDPR, HIPAA, SOC 2)\n• Incident Response and Recovery\n• Security Training and Awareness Programs\n• Secure Code Review\n• Infrastructure Security Hardening\n\nOur security experts stay updated with the latest threats and best practices to protect your digital assets.`
        },
        {
          question: 'What AI and Machine Learning capabilities do you offer?',
          answer: `Our AI/ML services include:\n\n• Custom Machine Learning Model Development\n• Natural Language Processing (NLP) Solutions\n• Computer Vision and Image Recognition\n• Predictive Analytics and Data Mining\n• Chatbot and Virtual Assistant Development\n• AI Integration into Existing Systems\n• Data Pipeline and MLOps Implementation\n\nWe work with popular frameworks like TensorFlow, PyTorch, and scikit-learn to deliver cutting-edge AI solutions.`
        }
      ]
    },
    {
      category: 'Process',
      questions: [
        {
          question: 'What is your development process?',
          answer: `We follow an agile development methodology with these key phases:\n\n1. Discovery & Planning - Requirements gathering and project scoping\n2. Design & Architecture - UI/UX design and technical architecture\n3. Development - Iterative development with regular client feedback\n4. Testing & QA - Comprehensive testing including automated and manual testing\n5. Deployment - Production deployment and go-live support\n6. Maintenance - Ongoing support and feature enhancements\n\nWe provide regular updates and maintain transparent communication throughout the entire process.`
        },
        {
          question: 'How do you handle project communication and updates?',
          answer: `We believe in transparent and regular communication:\n\n• Weekly progress reports with detailed updates\n• Bi-weekly demo sessions to showcase completed features\n• Dedicated project manager as your single point of contact\n• Access to project management tools (Jira, Trello, or similar)\n• Slack or Teams integration for real-time communication\n• Monthly stakeholder meetings for larger projects\n\nYou'll always know the current status of your project and upcoming milestones.`
        },
        {
          question: 'Do you provide post-launch support and maintenance?',
          answer: `Yes, we offer comprehensive post-launch support:\n\n• Bug fixes and technical issues resolution\n• Performance monitoring and optimization\n• Security updates and patches\n• Feature enhancements and new functionality\n• Server maintenance and hosting support\n• User training and documentation\n• 24/7 emergency support for critical issues\n\nWe offer flexible maintenance packages tailored to your specific needs and budget.`
        }
      ]
    },
    {
      category: 'Pricing',
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: `We offer flexible pricing models to suit different project needs:\n\n• Fixed Price - Best for well-defined projects with clear scope\n• Time & Materials - Ideal for projects with evolving requirements\n• Dedicated Team - Perfect for long-term partnerships\n• Retainer - Ongoing support and maintenance agreements\n\nPricing depends on project complexity, timeline, technology stack, and team size. We provide detailed estimates after understanding your requirements.`
        },
        {
          question: 'Do you offer free consultations?',
          answer: `Yes, we offer a complimentary 30-minute consultation call where we:\n\n• Discuss your project requirements and goals\n• Provide initial technical recommendations\n• Explain our development process\n• Answer any questions about our services\n• Provide a rough timeline and budget estimate\n\nThis consultation helps us understand your needs better and allows you to evaluate if we're the right fit for your project.`
        },
        {
          question: 'What payment terms do you offer?',
          answer: `We offer flexible payment terms:\n\n• Milestone-based payments for fixed-price projects\n• Monthly billing for time & materials projects\n• Quarterly payments for retainer agreements\n• 50% upfront, 50% on completion for smaller projects\n\nWe accept various payment methods including bank transfers, credit cards, and digital payment platforms. Payment terms are always discussed and agreed upon before project commencement.`
        }
      ]
    }
  ];

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newExpanded = new Set(expandedItems);
    
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    
    setExpandedItems(newExpanded);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary font-body">
          Find answers to common questions about our services and process
        </p>
      </div>

      <div className="space-y-6">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>{category.category}</span>
            </h4>
            
            <div className="space-y-3">
              {category.questions.map((item, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`;
                const isExpanded = expandedItems.has(itemId);
                
                return (
                  <div
                    key={questionIndex}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                      className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-normal"
                    >
                      <span className="font-body font-medium text-foreground pr-4">
                        {item.question}
                      </span>
                      <Icon
                        name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                        size={20}
                        className="text-text-secondary flex-shrink-0"
                      />
                    </button>
                    
                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-border bg-muted/20">
                        <div className="pt-4">
                          <p className="text-text-secondary font-body whitespace-pre-line leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="HelpCircle" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-body font-semibold text-foreground mb-1">
                Still have questions?
              </h4>
              <p className="text-text-secondary text-sm font-body mb-3">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:hello@charlieverse.com"
                  className="text-primary font-body font-medium hover:underline text-sm"
                >
                  Send us an email
                </a>
                <span className="text-text-secondary text-sm">or</span>
                <a
                  href="tel:+15551234567"
                  className="text-primary font-body font-medium hover:underline text-sm"
                >
                  Call us directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;