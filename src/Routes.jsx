import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Interactive3DHeroLanding from "pages/interactive-3d-hero-landing";
import ServicesOverviewHub from "pages/services-overview-hub";
import AboutCompanyExpertise from "pages/about-company-expertise";
import InteractivePortfolioGallery from "pages/interactive-portfolio-gallery";
import ServiceDetailSpecification from "pages/service-detail-specification";
import ContactInquirySystem from "pages/contact-inquiry-system";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Interactive3DHeroLanding />} />
        <Route path="/interactive-3d-hero-landing" element={<Interactive3DHeroLanding />} />
        <Route path="/services-overview-hub" element={<ServicesOverviewHub />} />
        <Route path="/about-company-expertise" element={<AboutCompanyExpertise />} />
        <Route path="/interactive-portfolio-gallery" element={<InteractivePortfolioGallery />} />
        <Route path="/service-detail-specification" element={<ServiceDetailSpecification />} />
        <Route path="/contact-inquiry-system" element={<ContactInquirySystem />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;