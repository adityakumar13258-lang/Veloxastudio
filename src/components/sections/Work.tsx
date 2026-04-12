import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Garden Restaurant",
    category: "Restaurant • Fine Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    stats: "+42% Online Reservations",
    link: "https://thegardenrestaurant.figma.site/"
  },
  {
    title: "SALTSTAYZ PREMIER SUITES",
    category: "Hospitality • Luxury Suites",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    stats: "+28% Direct Bookings",
    link: "https://saltstayzpremiersuites.figma.site/"
  }
];

export function Work() {
  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-6">
              Selected <span className="text-gradient">Work.</span>
            </h2>
            <p className="text-lg text-secondary">
              Digital experiences that elevate brands and drive measurable business outcomes.
            </p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
            View all projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      {project.stats}
                    </span>
                  </div>
                  <p className="text-secondary text-sm">{project.category}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
