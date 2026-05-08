import { Languages, Award, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const LanguagesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-terracotta-light/30 to-transparent" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">Languages</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="glass-card rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-amber/20"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <Languages className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-display font-bold">Arabic</h3>
                <span className="text-sm text-muted-foreground">Native Speaker</span>
              </div>
            </div>
            
            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-amber rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>
            
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 text-amber" fill="currentColor" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            {/* Special highlight for IELTS */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-amber/5 to-terracotta/5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-amber/20 to-terracotta/20"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 hsl(35, 90%, 60%, 0)",
                      "0 0 15px 3px hsl(35, 90%, 60%, 0.3)",
                      "0 0 0 0 hsl(35, 90%, 60%, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Languages className="w-6 h-6 text-amber" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold">English</h3>
                  <span className="text-sm text-muted-foreground">Good</span>
                </div>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber to-terracotta rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "70%" } : { width: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;