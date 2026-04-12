import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { Button } from "@/src/components/ui/Button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹6,999",
    description: "Perfect for a quick, professional online presence.",
    features: [
      "1-page landing page",
      "Mobile-friendly design",
      "Menu section with prices",
      "Contact info, address",
      "WhatsApp/Call buttons",
      "Google Map integration",
      "1 round of revisions"
    ]
  },
  {
    name: "Growth",
    price: "₹9,999",
    description: "Ideal for growing restaurants needing more pages and features.",
    isPopular: true,
    features: [
      "Everything in Starter",
      "3–4 pages (Home, Menu, About, Contact)",
      "Photo gallery",
      "Inquiry / feedback form",
      "Links to Zomato/Swiggy",
      "Social Media Integration",
      "2 rounds of revisions"
    ]
  },
  {
    name: "Pro",
    price: "₹14,999",
    description: "The ultimate package for a premium, fully-featured digital experience.",
    features: [
      "Everything in Growth",
      "Custom section planning",
      "Multi-page site (Home, Menu, Gallery, About, Reviews, Contact)",
      "Online booking / table reservation",
      "Basic SEO Setup",
      "Advanced Menu page with image of all items",
      "Advanced Animations",
      "Priority delivery",
      "3 rounds of revisions + 1 month support"
    ]
  }
];

export function Pricing() {
  const navigate = useNavigate();
  return (
    <section id="pricing" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-6">
            Transparent <span className="text-gradient">Pricing.</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Investment levels designed to deliver measurable ROI through increased conversions and brand equity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                  <span className="bg-white text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <GlassCard 
                className={`h-full p-8 flex flex-col ${tier.isPopular ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''}`}
              >
                <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-semibold">{tier.price}</span>
                  <span className="text-secondary ml-2">one-time</span>
                </div>
                <p className="text-secondary text-sm mb-8 h-10">{tier.description}</p>
                
                <Button 
                  variant={tier.isPopular ? "primary" : "glass"} 
                  className="w-full mb-8"
                  onClick={() => navigate("/enquiry")}
                >
                  Get Started
                </Button>

                <div className="space-y-4 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
