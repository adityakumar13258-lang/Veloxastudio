import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Welcome to Veloxa Studio. These Terms &amp; Conditions govern your use of Veloxa Studio's website and services. By engaging with our agency, accessing our website, or using our services, you agree to comply with and be bound by the following terms.
        </p>
        <p className="text-secondary leading-relaxed">
          Please read these terms carefully before proceeding with any project or service. If you do not agree with any part of these terms, you must not use our services.
        </p>
      </>
    )
  },
  {
    id: "services",
    title: "Services",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Veloxa Studio provides AI-augmented website design, development, and digital strategy services. The specific services to be provided for each client will be detailed in a separate written agreement, proposal, or statement of work.
        </p>
      </>
    )
  },
  {
    id: "project-scope",
    title: "Project Scope",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          All projects are bound by the scope defined in the initial proposal. Any additional features, pages, or complex integrations requested outside of this original scope will be considered "Scope Creep" and will be billed separately at our standard hourly rate or as a fixed-price add-on.
        </p>
        <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20 my-6 shadow-sm">
          <p className="text-white text-sm font-medium">Important Note:</p>
          <p className="text-secondary text-sm mt-2">Any scope changes must be requested in writing and approved by both parties before implementation begins.</p>
        </div>
      </>
    )
  },
  {
    id: "payments",
    title: "Payments",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Standard payment terms require a 50% non-refundable deposit to commence work, with the remaining 50% due upon project completion, prior to the website going live or transferring files.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-secondary mb-4 marker:text-indigo-500">
          <li>Invoices must be paid within 7 days of receipt.</li>
          <li>Late payments may incur a late fee of 1.5% per month.</li>
          <li>All prices are quoted and payable in INR unless otherwise specified.</li>
        </ul>
      </>
    )
  },
  {
    id: "project-timeline",
    title: "Project Timeline",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Estimated timelines are provided in the proposal. Timely completion depends on the client providing necessary content, assets, and feedback promptly. Delays in client communication may extend the project timeline.
        </p>
      </>
    )
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          The client agrees to provide all text, images, logos, and other information required for the project in a timely manner and in the requested formats. The client guarantees that they own or have permission to use all provided materials.
        </p>
      </>
    )
  },
  {
    id: "revision-policy",
    title: "Revision Policy",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Our standard packages include a specified number of revision rounds (typically 2). Revisions cover minor adjustments to design and layout, not complete redesigns or architectural changes. Additional revisions will be billed at our hourly rate.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Upon final payment, the client owns the copyright to the final website design and custom code produced specifically for them. Veloxa Studio retains the right to use the completed project and any preliminary designs in our portfolio and marketing materials.
        </p>
      </>
    )
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          We may integrate third-party services (e.g., payment gateways, booking systems, hosting providers) into your project. We are not responsible for the performance, reliability, or terms of service of these third-party providers.
        </p>
      </>
    )
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Both parties agree to keep confidential any proprietary information exchanged during the project. This includes business strategies, financial information, and technical specifications.
        </p>
      </>
    )
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Either party may terminate the agreement with 14 days written notice. If the client terminates the project before completion, the initial deposit is forfeited, and the client will be billed for any work completed beyond the deposit amount.
        </p>
      </>
    )
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Veloxa Studio shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from the use of our services.
        </p>
      </>
    )
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
      </>
    )
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          We reserve the right to modify these Terms &amp; Conditions at any time. We will notify clients of any material changes. Continued use of our services after such modifications constitutes acceptance of the updated terms.
        </p>
      </>
    )
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: (
      <>
        <p className="text-secondary leading-relaxed mb-4">
          If you have any questions about these Terms &amp; Conditions, please contact us at:
        </p>
        <ul className="list-none space-y-2 text-white font-medium mb-4 bg-white/5 p-4 rounded-xl border border-white/5">
          <li>Email: veloxastudio.in@gmail.com</li>
          <li>Address: Bari khagaul chakardha more, Patna, Bihar - 801105</li>
        </ul>
      </>
    )
  }
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

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
            Terms &amp; Conditions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mb-8"
          >
            These Terms &amp; Conditions govern your use of Veloxa Studio's website and services. By using our services, you agree to the following terms.
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
            <div>
              <span className="font-medium text-white/80 mr-2">Effective Date:</span> 
              Immediately
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Table of Contents (Desktop) */}
          <div className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-32">
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">Table of Contents</h3>
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
                className={`scroll-mt-32 ${index !== sections.length - 1 ? 'mb-16' : ''}`}
              >
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6 tracking-tight">
                  {section.title}
                </h2>
                <div className="prose prose-invert prose-p:text-secondary prose-p:leading-relaxed prose-a:text-indigo-400 max-w-none">
                  {section.content}
                </div>
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
              Need clarification?
            </h3>
            <p className="text-secondary mb-8 max-w-lg mx-auto">
              If you have any questions regarding these Terms &amp; Conditions, contact Veloxa Studio. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 bg-white text-black hover:bg-white/90">
                <a href="mailto:veloxastudio.in@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
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
