import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">Veloxa Studio</span>
            </div>
            <p className="text-secondary max-w-sm mb-8">
              AI-augmented website development agency. We build conversion engines for hospitality and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-secondary hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {["Web Design", "Development", "AI Integration", "CRO"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-secondary hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-secondary">
          <p>© {new Date().getFullYear()} Veloxa Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
