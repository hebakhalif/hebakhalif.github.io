import { GraduationCap, Star, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Decorative gradient */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="relative z-10 flex items-start gap-6">
            <motion.div 
              className="p-4 rounded-2xl bg-gradient-to-br from-primary to-amber flex-shrink-0"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <motion.span 
                  className="px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary/20 to-amber/20 text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  2021 — 2024
                </motion.span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Thebes Academy, El Haram, Egypt
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Bachelor of Management Information Systems
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Management Information Systems Department
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-amber/10 to-primary/10 border border-amber/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Star className="w-5 h-5 text-amber" fill="currentColor" />
                  <div>
                    <span className="font-bold text-lg">GPA: 3 / 4</span>
                  </div>
                </motion.div>
                

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;