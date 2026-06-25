/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Header } from "./components/ui/header-2";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/ui/how-it-works";
import { Work } from "./components/sections/Work";
import { Pricing } from "./components/sections/Pricing";
import { WhyVeloxa } from "./components/sections/WhyVeloxa";
import { CTA } from "./components/sections/CTA";
import { Contact2 } from "./components/ui/contact-2";
import { Footer } from "./components/layout/Footer";
import OnboardingForm from "./components/ui/multistep-form";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Policies from "./pages/Policies";

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Work />
      <Pricing />
      <WhyVeloxa />
      <CTA />
      <Contact2 />
    </main>
  );
}

function Enquiry() {
  return (
    <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <OnboardingForm />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white/20">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </div>
  );
}
