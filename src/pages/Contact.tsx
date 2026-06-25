import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Mail, MapPin, Clock, Zap, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactOptions = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Book a Free Strategy Call",
      description: "Discuss your business, goals and website opportunities in a free 15–20 minute Google Meet session.",
      buttonText: "Book Now",
      buttonLink: "/enquiry"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Chat on WhatsApp",
      description: "Message directly for pricing, project enquiries or quick questions.",
      buttonText: "Message Now",
      buttonLink: "https://wa.me/9142002446"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      description: "Send your project details and receive a detailed response within one business day.",
      email: "veloxastudio.in@gmail.com",
      buttonText: "Send Email",
      buttonLink: "mailto:veloxastudio.in@gmail.com"
    }
  ];

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "Most standard website projects are completed within 2 to 4 weeks. Complex projects with custom integrations or extensive booking systems may take 4 to 8 weeks."
    },
    {
      question: "Do you work outside hospitality?",
      answer: "Yes. While we specialize in hospitality (restaurants, cafes, hotels), our conversion-focused methodology works exceptionally well for service businesses, agencies, and clinics."
    },
    {
      question: "Do you provide hosting?",
      answer: "We offer complete end-to-end solutions including premium, high-speed cloud hosting on platforms like Vercel and Netlify, ensuring your site is blazing fast globally."
    },
    {
      question: "Can I update my website later?",
      answer: "Absolutely. We build with modern, intuitive Content Management Systems (CMS) so you or your team can easily update menus, text, and images without any coding knowledge."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide flexible ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and optimized for performance."
    }
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      {/* SECTION 1 - HERO */}
      <section className="relative z-10 px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            LET'S BUILD SOMETHING GREAT
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-8"
          >
            Let's Build a Website That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Grows Your Business</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10"
          >
            Whether you're launching a restaurant, hotel, café, or service business, let's discuss how a conversion-focused website can help you generate more enquiries, bookings, and customers.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 bg-white text-black hover:bg-white/90">
              <Link to="/enquiry">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5">
              <a href="https://wa.me/9142002446" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - CONTACT OPTIONS */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full p-8 flex flex-col group border border-white/5 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {option.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{option.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {option.description}
                </p>
                {option.email && (
                  <p className="text-white/80 text-sm font-medium mb-6">
                    {option.email}
                  </p>
                )}
                <a
                  href={option.buttonLink}
                  {...(option.buttonLink.startsWith('http') ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-indigo-400 transition-colors mt-auto"
                >
                  {option.buttonText} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 - VISIT US */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-6">
                Visit Veloxa Studio
              </h2>
              <p className="text-secondary text-lg mb-12 max-w-md">
                Prefer discussing your project directly? Feel free to reach out using the details below.
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">Business Address</h4>
                  <p className="text-secondary leading-relaxed">
                    Veloxa Studio<br />
                    Bari khagaul chakardha more, Patna, Bihar - 801105<br />
                    Serving clients across India remotely.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">Contact Details</h4>
                    <p className="text-secondary leading-relaxed">
                      veloxastudio.in@gmail.com<br />
                      +91 91420 02446
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">Business Hours</h4>
                    <p className="text-secondary leading-relaxed">
                      Monday – Saturday<br />
                      10:00 AM – 7:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="gap-2 group">
                Get Directions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <GlassCard className="p-2 overflow-hidden border border-white/10 bg-white/[0.02]">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107248889!2d85.05063712852631!3d25.608175569420005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad337b14d8727!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1707923456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(100%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </GlassCard>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <GlassCard className="p-4 flex items-center gap-3 bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Location</p>
                    <p className="text-sm font-medium text-white">Patna, Bihar</p>
                  </div>
                </GlassCard>
                
                <GlassCard className="p-4 flex items-center gap-3 bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Hours</p>
                    <p className="text-sm font-medium text-white">Mon – Sat</p>
                  </div>
                </GlassCard>

                <GlassCard className="p-4 flex items-center gap-3 bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Response</p>
                    <p className="text-sm font-medium text-white">&lt; 1 hour</p>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* SECTION 5 - WHAT HAPPENS NEXT */}
      <section className="relative z-10 px-6 py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
              What Happens Next?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {[
              { num: "01", title: "Discovery Call", desc: "Understand your business, customers and goals." },
              { num: "02", title: "Custom Proposal", desc: "Receive a tailored website strategy." },
              { num: "03", title: "Build & Launch", desc: "Your website is designed, developed and launched within days." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:border-white/20 transition-colors duration-500">
                  <span className="text-2xl font-display font-semibold text-white/50 group-hover:text-white transition-colors">{step.num}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-secondary max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondary leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - FINAL CTA */}
      <section className="relative z-10 px-6 py-24 mb-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="relative overflow-hidden p-10 md:p-20 text-center border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6">
                  Ready to Build Something Better?
                </h2>
                <p className="text-lg md:text-xl text-secondary mb-10">
                  Let's create a website that not only looks premium but helps your business attract more customers, generate more enquiries and grow with confidence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white text-black hover:bg-white/90">
                    <Link to="/enquiry">Book a Strategy Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-white/20 hover:bg-white/10">
                    <a href="https://wa.me/9142002446" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
