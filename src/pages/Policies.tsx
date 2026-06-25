import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Information We Collect</h3>
          <p className="text-secondary leading-relaxed">We collect information you provide directly to us, such as when you fill out a form, request customer support, or otherwise communicate with us. This includes your name, email address, phone number, and project details.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">How We Use Information</h3>
          <p className="text-secondary leading-relaxed">We use the information we collect to deliver, maintain, and improve our services, communicate with you, process transactions, and send you technical notices and support messages.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Cookies</h3>
          <p className="text-secondary leading-relaxed">We use cookies and similar tracking technologies to track the activity on our service and hold certain information to improve and analyze our website.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Third-Party Services</h3>
          <p className="text-secondary leading-relaxed">We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Data Security</h3>
          <p className="text-secondary leading-relaxed">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Your Rights</h3>
          <p className="text-secondary leading-relaxed">You have the right to access, update, or delete the information we have on you. Please contact us to make such requests.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Contact</h3>
          <p className="text-secondary leading-relaxed">If you have any questions about this Privacy Policy, please contact us at veloxastudio.in@gmail.com.</p>
        </div>
      </div>
    )
  },
  {
    id: "refund-policy",
    title: "Refund Policy",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Digital Service Policy</h3>
          <p className="text-secondary leading-relaxed">Veloxa Studio provides premium digital services. Due to the nature of custom design and development work, refunds are subject to specific conditions outlined below.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Advance Payment</h3>
          <p className="text-secondary leading-relaxed">We require a 50% upfront payment to begin any project. This deposit secures your spot in our schedule and covers initial research, strategy, and design phases.</p>
        </div>
        <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20 my-6 shadow-sm">
          <p className="text-white text-sm font-medium">Important Note:</p>
          <p className="text-secondary text-sm mt-2">The initial 50% deposit is strictly non-refundable once the project strategy and initial design work have commenced.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Refund Eligibility</h3>
          <p className="text-secondary leading-relaxed">Refunds are only applicable if Veloxa Studio fails to deliver the agreed-upon initial concepts within the specified timeframe, or if we mutually agree to terminate the project before any significant work has begun.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Non-refundable Situations</h3>
          <p className="text-secondary leading-relaxed">Payments are non-refundable after the client approves the initial design concepts, once development has started, or if the project is delayed due to a lack of communication or assets from the client.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Exceptions</h3>
          <p className="text-secondary leading-relaxed">Any exceptions to this policy are at the sole discretion of Veloxa Studio management and must be agreed upon in writing.</p>
        </div>
      </div>
    )
  },
  {
    id: "cancellation-policy",
    title: "Cancellation Policy",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Client Cancellation</h3>
          <p className="text-secondary leading-relaxed">Clients may request to cancel a project at any time. Cancellation requests must be submitted in writing via email to veloxastudio.in@gmail.com.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Project Cancellation</h3>
          <p className="text-secondary leading-relaxed">Veloxa Studio reserves the right to cancel a project if a client becomes unresponsive for more than 30 days, breaches our terms of service, or if the project scope changes beyond mutual agreement.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Cancellation Charges</h3>
          <p className="text-secondary leading-relaxed">If a project is canceled by the client after work has commenced, the initial deposit is forfeited. If the amount of work completed exceeds the deposit value, the client will be invoiced for the remaining balance based on our hourly rate.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Termination Rights</h3>
          <p className="text-secondary leading-relaxed">We retain the right to terminate our services immediately without refund if we discover abusive behavior, illegal requests, or consistent breach of contract terms.</p>
        </div>
      </div>
    )
  },
  {
    id: "return-policy",
    title: "Return Policy",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Digital Services Only</h3>
          <p className="text-secondary leading-relaxed">Veloxa Studio is a digital agency providing website development, design, and software solutions. We do not sell or ship physical products.</p>
        </div>
        <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20 my-6 shadow-sm">
          <p className="text-white text-sm font-medium">No Physical Returns</p>
          <p className="text-secondary text-sm mt-2">Because our deliverables are 100% digital, there are no items to return. Traditional return policies do not apply to our services.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Revision Policy</h3>
          <p className="text-secondary leading-relaxed">Instead of returns, we offer a comprehensive revision process. We work closely with our clients during the design and development phases to ensure the final product meets their expectations before final delivery and launch. Any changes requested after final approval may be subject to additional billing.</p>
        </div>
      </div>
    )
  },
  {
    id: "shipping-policy",
    title: "Shipping Policy",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Digital Delivery</h3>
          <p className="text-secondary leading-relaxed">As a provider of digital services, Veloxa Studio does not ship physical goods. All deliverables are transmitted electronically over the internet.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Website Delivery</h3>
          <p className="text-secondary leading-relaxed">Websites are considered "delivered" when they are deployed to a live server, the domain name is successfully pointed, and the client is provided with access credentials.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Digital Assets</h3>
          <p className="text-secondary leading-relaxed">Source files, graphics, and other digital assets are delivered via secure cloud storage links (such as Google Drive or Figma) upon receipt of final payment.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Project Timeline</h3>
          <p className="text-secondary leading-relaxed">Delivery timelines are estimated and specified in the initial project proposal. We strive to meet all deadlines, but complex technical requirements may adjust schedules.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Delivery Method</h3>
          <p className="text-secondary leading-relaxed">All communication regarding delivery will be handled via email or our dedicated project management channels to ensure a clear paper trail and smooth handover.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Client Responsibilities</h3>
          <p className="text-secondary leading-relaxed">Timely delivery is contingent upon the client providing required content, feedback, and approvals promptly. Veloxa Studio is not responsible for delivery delays caused by the client.</p>
        </div>
      </div>
    )
  }
];

export default function Policies() {
  const [activeSection, setActiveSection] = useState<string>("privacy-policy");
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      
      const currentScrollPosition = window.scrollY + 200; // Offset for header

      let currentSection = sections[0].id;
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentScrollPosition) {
          currentSection = sections[i].id;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-16 pb-12 md:pt-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            LEGAL
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white mb-6"
          >
            Policies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mb-8"
          >
            Learn how Veloxa Studio handles privacy, payments, refunds, cancellations and digital service delivery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-sm text-secondary"
          >
            <div>
              <span className="font-medium text-white/80 mr-2">Last Updated:</span> 
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Table of Contents (Desktop) */}
          <div className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-32">
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">Navigation</h3>
              <nav className="flex flex-col space-y-1 border-l border-white/10 relative">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`py-2 pl-4 text-sm transition-colors relative border-l-2 -ml-[1px] ${
                      activeSection === section.id 
                        ? 'text-white font-medium border-indigo-400' 
                        : 'text-secondary hover:text-white border-transparent'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-[760px] w-full">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`scroll-mt-32 ${index !== sections.length - 1 ? 'mb-24' : ''}`}
              >
                <GlassCard className="p-8 md:p-12 border border-white/5 bg-white/[0.01]">
                  <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-10 tracking-tight pb-6 border-b border-white/10">
                    {section.title}
                  </h2>
                  <div className="prose prose-invert prose-p:text-secondary prose-p:leading-relaxed prose-a:text-indigo-400 max-w-none">
                    {section.content}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 py-12 mt-12">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12 text-center border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-secondary mb-8 max-w-lg mx-auto">
              Our team is happy to help. Contact us directly or schedule a strategy call to discuss your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 bg-white text-black hover:bg-white/90">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-8 border-white/20 hover:bg-white/10">
                <Link to="/enquiry" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Book Strategy Call
                </Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

    </main>
  );
}
