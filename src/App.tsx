import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Development
import Projects from "./pages/development/Projects";
import TechStack from "./pages/development/TechStack";
import OpenSource from "./pages/development/OpenSource";

// Cybersecurity
import CyberResearch from "./pages/cybersecurity/Research";
import CyberThreatIntelligence from "./pages/cybersecurity/ThreatIntelligence";
import Advisories from "./pages/cybersecurity/Advisories";
import Pentesting from "./pages/cybersecurity/Pentesting";

// Activities
import Hackathons from "./pages/activities/Hackathons";
import CTF from "./pages/activities/CTF";
import Workshops from "./pages/activities/Workshops";

// Developers
import Documentation from "./pages/developers/Documentation";
import APIReference from "./pages/developers/APIReference";
import SDKsTools from "./pages/developers/SDKsTools";
import Community from "./pages/developers/Community";

// Business
import Solutions from "./pages/business/Solutions";
import EnterpriseSecurity from "./pages/business/EnterpriseSecurity";
import ComplianceRisk from "./pages/business/ComplianceRisk";
import Pricing from "./pages/business/Pricing";

// AWmate
import AWmateOverview from "./pages/awmate/Overview";
import AWmateFeatures from "./pages/awmate/Features";
import AWmateIntegration from "./pages/awmate/Integration";
import AWmateGetStarted from "./pages/awmate/GetStarted";

// Company
import About from "./pages/company/About";
import Foundation from "./pages/company/Foundation";
import Careers from "./pages/company/Careers";
import BrandGuidelines from "./pages/company/BrandGuidelines";
import Terms from "./pages/company/Terms";
import Policies from "./pages/company/Policies";
import RulesRegulations from "./pages/company/RulesRegulations";

// News
import Articles from "./pages/news/Articles";
import PressReleases from "./pages/news/PressReleases";
import Events from "./pages/news/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Development */}
          <Route path="/development/projects" element={<Projects />} />
          <Route path="/development/tech-stack" element={<TechStack />} />
          <Route path="/development/open-source" element={<OpenSource />} />
          
          {/* Cybersecurity */}
          <Route path="/cybersecurity/research" element={<CyberResearch />} />
          <Route path="/cybersecurity/threat-intelligence" element={<CyberThreatIntelligence />} />
          <Route path="/cybersecurity/advisories" element={<Advisories />} />
          <Route path="/cybersecurity/pentesting" element={<Pentesting />} />
          
          {/* Activities */}
          <Route path="/activities/hackathons" element={<Hackathons />} />
          <Route path="/activities/ctf" element={<CTF />} />
          <Route path="/activities/workshops" element={<Workshops />} />
          
          {/* Developers */}
          <Route path="/developers/documentation" element={<Documentation />} />
          <Route path="/developers/api-reference" element={<APIReference />} />
          <Route path="/developers/sdks-tools" element={<SDKsTools />} />
          <Route path="/developers/community" element={<Community />} />
          
          {/* Business */}
          <Route path="/business/solutions" element={<Solutions />} />
          <Route path="/business/enterprise-security" element={<EnterpriseSecurity />} />
          <Route path="/business/compliance-risk" element={<ComplianceRisk />} />
          <Route path="/business/pricing" element={<Pricing />} />
          
          {/* AWmate */}
          <Route path="/awmate/overview" element={<AWmateOverview />} />
          <Route path="/awmate/features" element={<AWmateFeatures />} />
          <Route path="/awmate/integration" element={<AWmateIntegration />} />
          <Route path="/awmate/get-started" element={<AWmateGetStarted />} />
          
          {/* Company */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/foundation" element={<Foundation />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/brand-guidelines" element={<BrandGuidelines />} />
          <Route path="/company/terms" element={<Terms />} />
          <Route path="/company/policies" element={<Policies />} />
          <Route path="/company/rules-regulations" element={<RulesRegulations />} />
          
          {/* News */}
          <Route path="/news/articles" element={<Articles />} />
          <Route path="/news/press-releases" element={<PressReleases />} />
          <Route path="/news/events" element={<Events />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
