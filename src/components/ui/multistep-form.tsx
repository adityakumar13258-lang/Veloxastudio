"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Checkbox } from "@/src/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/src/lib/utils";

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "professional", title: "Professional" },
  { id: "goals", title: "Website Goals" },
  { id: "design", title: "Design" },
  { id: "budget", title: "Budget" },
  { id: "requirements", title: "Requirements" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  profession: string;
  experience: string;
  industry: string;
  primaryGoal: string;
  targetAudience: string;
  contentTypes: string[];
  colorPreference: string;
  stylePreference: string;
  inspirations: string;
  budget: string;
  timeline: string;
  features: string[];
  additionalInfo: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    profession: "",
    experience: "",
    industry: "",
    primaryGoal: "",
    targetAudience: "",
    contentTypes: [],
    colorPreference: "",
    stylePreference: "",
    inspirations: "",
    budget: "",
    timeline: "",
    features: [],
    additionalInfo: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const features = [...prev.features];
      if (features.includes(feature)) {
        return { ...prev, features: features.filter((f) => f !== feature) };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const featuresList = formData.features.length > 0 ? formData.features.join(", ") : "None specified";
    
    const text = `New Project Enquiry
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Profession: ${formData.profession}
Industry: ${formData.industry}
Primary Goal: ${formData.primaryGoal}
Target Audience: ${formData.targetAudience}
Style Preference: ${formData.stylePreference}
Inspirations: ${formData.inspirations || "None"}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Features: ${featuresList}
Additional Info: ${formData.additionalInfo || "None"}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "919142002446";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      toast.success("Redirecting to WhatsApp...");
      setIsSubmitting(false);
    }, 1500);
  };

  // Check if step is valid for next button
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return formData.profession.trim() !== "" && formData.industry !== "";
      case 2:
        return formData.primaryGoal !== "";
      case 3:
        return formData.stylePreference !== "";
      case 4:
        return formData.budget !== "" && formData.timeline !== "";
      default:
        return true;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      {/* Progress indicator */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative z-10"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={cn(
                  "w-6 h-6 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-center text-[10px] font-bold",
                  index < currentStep
                    ? "bg-white text-black"
                    : index === currentStep
                      ? "bg-white text-black ring-4 ring-white/20"
                      : "bg-white/10 text-white/50",
                )}
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {index < currentStep ? <Check className="w-3 h-3" /> : index + 1}
              </motion.div>
              <motion.span
                className={cn(
                  "text-xs mt-2 hidden sm:block absolute top-6 whitespace-nowrap",
                  index === currentStep
                    ? "text-white font-medium"
                    : "text-secondary",
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-2 relative -top-6 -z-0">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 1: Personal Info */}
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle>Tell us about yourself</CardTitle>
                      <CardDescription>
                        Let's start with some basic information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            updateFormData("name", e.target.value)
                          }
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData("email", e.target.value)
                          }
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="company">
                          Company/Organization (Optional)
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            updateFormData("company", e.target.value)
                          }
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 2: Professional Background */}
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Professional Background</CardTitle>
                      <CardDescription>
                        Tell us about your professional experience
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="profession">
                          What's your profession? *
                        </Label>
                        <Input
                          id="profession"
                          placeholder="e.g. Restaurant Owner, Manager"
                          value={formData.profession}
                          onChange={(e) =>
                            updateFormData("profession", e.target.value)
                          }
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="industry">
                          What industry do you work in? *
                        </Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) =>
                            updateFormData("industry", value)
                          }
                        >
                          <SelectTrigger id="industry">
                            <SelectValue placeholder="Select an industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                            <SelectItem value="hotel">Hotel / Hospitality</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 3: Website Goals */}
                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Website Goals</CardTitle>
                      <CardDescription>
                        What are you trying to achieve with your website?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>
                          What's the primary goal of your website? *
                        </Label>
                        <RadioGroup
                          value={formData.primaryGoal}
                          onValueChange={(value) =>
                            updateFormData("primaryGoal", value)
                          }
                          className="space-y-3"
                        >
                          {[
                            { value: "bookings", label: "More table bookings / reservations" },
                            { value: "orders", label: "Online food ordering" },
                            { value: "leads", label: "Generate leads/inquiries" },
                            { value: "brand", label: "Improve brand presence" },
                          ].map((goal, index) => (
                            <motion.div
                              key={goal.value}
                              className={cn(
                                "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors",
                                formData.primaryGoal === goal.value ? "border-white bg-white/5" : "border-white/10 hover:bg-white/5"
                              )}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0, transition: { delay: 0.1 * index } }}
                            >
                              <RadioGroupItem value={goal.value} id={`goal-${index}`} />
                              <Label htmlFor={`goal-${index}`} className="cursor-pointer w-full text-white">
                                {goal.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="targetAudience">
                          Who is your target audience?
                        </Label>
                        <Textarea
                          id="targetAudience"
                          placeholder="Describe your ideal customers"
                          value={formData.targetAudience}
                          onChange={(e) =>
                            updateFormData("targetAudience", e.target.value)
                          }
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 4: Design Preferences */}
                {currentStep === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle>Design Preferences</CardTitle>
                      <CardDescription>
                        Tell us about your aesthetic preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>
                          What style do you prefer for your website? *
                        </Label>
                        <RadioGroup
                          value={formData.stylePreference}
                          onValueChange={(value) =>
                            updateFormData("stylePreference", value)
                          }
                          className="space-y-3"
                        >
                          {[
                            { value: "modern", label: "Modern & Sleek" },
                            { value: "minimalist", label: "Minimalist & Clean" },
                            { value: "bold", label: "Bold & Creative" },
                            { value: "premium", label: "Premium & High-end" },
                          ].map((style, index) => (
                            <motion.div
                              key={style.value}
                              className={cn(
                                "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors",
                                formData.stylePreference === style.value ? "border-white bg-white/5" : "border-white/10 hover:bg-white/5"
                              )}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
                            >
                              <RadioGroupItem value={style.value} id={`style-${index}`} />
                              <Label htmlFor={`style-${index}`} className="cursor-pointer w-full text-white">
                                {style.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="inspirations">
                          Any websites you like for inspiration?
                        </Label>
                        <Textarea
                          id="inspirations"
                          placeholder="List websites you admire or want to emulate"
                          value={formData.inspirations}
                          onChange={(e) =>
                            updateFormData("inspirations", e.target.value)
                          }
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 5: Budget & Timeline */}
                {currentStep === 4 && (
                  <>
                    <CardHeader>
                      <CardTitle>Budget & Timeline</CardTitle>
                      <CardDescription>
                        Let's talk about your investment and timeline
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="budget">
                          What's your budget range? *
                        </Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            updateFormData("budget", value)
                          }
                        >
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="starter">Starter (₹6,999)</SelectItem>
                            <SelectItem value="growth">Growth (₹9,999)</SelectItem>
                            <SelectItem value="pro">Pro (₹14,999)</SelectItem>
                            <SelectItem value="custom">Custom Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>What's your expected timeline? *</Label>
                        <RadioGroup
                          value={formData.timeline}
                          onValueChange={(value) =>
                            updateFormData("timeline", value)
                          }
                          className="space-y-3"
                        >
                          {[
                            { value: "asap", label: "ASAP (Within 3 days)" },
                            { value: "1-week", label: "Within 1 week" },
                            { value: "flexible", label: "Flexible" },
                          ].map((time, index) => (
                            <motion.div
                              key={time.value}
                              className={cn(
                                "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors",
                                formData.timeline === time.value ? "border-white bg-white/5" : "border-white/10 hover:bg-white/5"
                              )}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0, transition: { delay: 0.1 * index } }}
                            >
                              <RadioGroupItem value={time.value} id={`time-${index}`} />
                              <Label htmlFor={`time-${index}`} className="cursor-pointer w-full text-white">
                                {time.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 6: Additional Requirements */}
                {currentStep === 5 && (
                  <>
                    <CardHeader>
                      <CardTitle>Additional Requirements</CardTitle>
                      <CardDescription>
                        Any other specific needs for your website?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label>Which features do you need?</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Online Booking",
                            "Menu Display",
                            "Photo Gallery",
                            "Contact Form",
                            "WhatsApp Integration",
                            "Google Maps",
                            "Social Media Links",
                            "SEO Setup",
                          ].map((feature, index) => (
                            <motion.div
                              key={feature}
                              className={cn(
                                "flex items-center space-x-3 rounded-xl border p-4 cursor-pointer transition-colors",
                                formData.features.includes(feature.toLowerCase()) ? "border-white bg-white/5" : "border-white/10 hover:bg-white/5"
                              )}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * index } }}
                              onClick={() => toggleFeature(feature.toLowerCase())}
                            >
                              <Checkbox
                                id={`feature-${index}`}
                                checked={formData.features.includes(feature.toLowerCase())}
                                onCheckedChange={() => toggleFeature(feature.toLowerCase())}
                              />
                              <Label htmlFor={`feature-${index}`} className="cursor-pointer w-full text-white">
                                {feature}
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="additionalInfo">
                          Anything else we should know?
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any additional requirements or information"
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            updateFormData("additionalInfo", e.target.value)
                          }
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex justify-between pt-6 pb-4 border-t border-white/10 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2 rounded-full px-6 border-white/20 text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              
              <Button
                type="button"
                onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-2 rounded-full px-8 bg-white text-black hover:bg-white/90 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Redirecting...
                  </>
                ) : (
                  <>
                    {currentStep === steps.length - 1 ? "Submit to WhatsApp" : "Next Step"}
                    {currentStep === steps.length - 1 ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </>
                )}
              </Button>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default OnboardingForm;
