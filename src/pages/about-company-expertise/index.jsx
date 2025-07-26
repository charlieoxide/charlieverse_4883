import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContextualInquiry from '../../components/ui/ContextualInquiry';
import HeroSection from './components/HeroSection';
import TeamExpertise from './components/TeamExpertise';
import CompanyTimeline from './components/CompanyTimeline';
import MethodologyOverview from './components/MethodologyOverview';
import CompanySidebar from './components/CompanySidebar';
import TabbedSections from './components/TabbedSections';

const AboutCompanyExpertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 70% width on desktop */}
            <div className="lg:w-7/10 space-y-0">
              <TeamExpertise />
              <CompanyTimeline />
              <MethodologyOverview />
            </div>

            {/* Sidebar - 30% width on desktop */}
            <div className="lg:w-3/10">
              <div className="lg:sticky lg:top-24 space-y-8">
                <CompanySidebar />
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Sections - Full Width */}
        <TabbedSections />

        {/* Footer Spacing */}
        <div className="h-16"></div>
      </main>

      {/* Contextual Inquiry Components */}
      <ContextualInquiry position="sidebar" />
      <ContextualInquiry position="bottom" />
    </div>
  );
};

export default AboutCompanyExpertise;