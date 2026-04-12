import React, { useState } from "react";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+91 9142002446",
  email = "veloxastudio.in@gmail.com",
  web = { label: "veloxa.studio", url: "https://veloxa.studio" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Basic validation: require at least name, email, phone, and message
  const isFormValid = formData.firstname && formData.email && formData.phone && formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Format the message according to requirements
    const fullName = `${formData.firstname} ${formData.lastname}`.trim();
    const text = `New Website Enquiry/Feedback
Name: ${fullName}
E-mail : ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject || "No Subject"}
Message: ${formData.message}`;

    // URL encode the message
    const encodedText = encodeURIComponent(text);
    
    // Target WhatsApp number (without '+' or spaces)
    const whatsappNumber = "919142002446";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");

    // Reset form and button state after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mx-auto flex flex-col justify-between gap-16 lg:flex-row lg:gap-20">
          <div className="flex flex-col justify-between gap-10 lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2 className="mb-6 text-4xl md:text-6xl font-display font-semibold tracking-tight text-primary">
                {title}
              </h2>
              <p className="text-lg text-secondary max-w-md mx-auto lg:mx-0">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-display font-semibold lg:text-left text-primary">
                Contact Details
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-center gap-3">
                  <span className="font-medium text-white">Phone: </span>
                  {phone}
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-medium text-white">Email: </span>
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-medium text-white">Web: </span>
                  <a href={web.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-surface p-8 md:p-10 lg:w-1/2 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstname">First Name *</Label>
                <Input type="text" id="firstname" placeholder="John" value={formData.firstname} onChange={handleChange} required />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Doe" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input type="email" id="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input type="tel" id="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid w-full items-center gap-2 relative z-10">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="grid w-full gap-2 relative z-10">
              <Label htmlFor="message">Message *</Label>
              <Textarea placeholder="Tell us about your project..." id="message" className="min-h-[120px]" value={formData.message} onChange={handleChange} required />
            </div>
            <Button 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
              className="w-full mt-2 relative z-10 bg-white text-black hover:bg-white/90 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Redirecting to WhatsApp..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
