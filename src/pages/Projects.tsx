import { motion } from "motion/react";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/src/components/sections/CTA";

const allProjects = [
  {
    title: "The Garden Restaurant",
    category: "Restaurant • Fine Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    link: "https://thegardenrestaurant.figma.site/"
  },
  {
    title: "Saffron Table",
    category: "Restaurant • Modern Indian",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    link: "https://benevolent-longma-e18206.netlify.app/"
  },
  {
    title: "Saffron and Spice",
    category: "Restaurant • Authentic Cuisine",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop",
    link: "https://saffronandspicegrowth.netlify.app/"
  },
  {
    title: "The Royal Spice",
    category: "Restaurant • Premium Dining",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2072&auto=format&fit=crop",
    link: "https://theroyalspicepro.netlify.app/"
  },
  {
    title: "SALTSTAYZ PREMIER SUITES",
    category: "Hospitality • Luxury Suites",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    link: "https://saltstayzpremiersuites.figma.site/"
  }
];

export default function Projects() {
  return (
    <main className="pt-32 pb-10 min-h-screen">
      <section className="relative px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight mb-6">
              Our <span className="text-gradient">Work.</span>
            </h1>
            <p className="text-lg text-secondary max-w-2xl">
              Explore our portfolio of conversion-driven websites built for the hospitality industry and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <GlassCard className="p-2 mb-6 overflow-hidden">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-medium text-white flex items-center gap-2">
                          View Live <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                    <p className="text-secondary text-sm">{project.category}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
