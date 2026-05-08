import { Heart, Globe, Users, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const volunteering = [
  {
    title: 'LinkedIn Content Creator',
    organization: 'Educational Tech Community',
    period: '2025 — Present',
    description: 'Regularly sharing educational posts and technical insights about Flutter development and mobile engineering to help the community grow.',
    icon: Globe,
    color: 'text-sage',
  },
  {
    title: 'Community Mentor',
    organization: 'Self-organized Support',
    period: 'Ongoing',
    description: 'Helping beginners start their journey in Flutter development by providing guidance, resources, and answering technical queries.',
    icon: Users,
    color: 'text-primary',
  },
];

const VolunteeringSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-sage-light/20 to-transparent relative overflow-hidden" ref={containerRef}>
      {/* Floating hearts decoration */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Heart className="w-16 h-16 text-terracotta" fill="currentColor" />
        </motion.div>
      ))}
      
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-terracotta/10"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-terracotta" fill="currentColor" />
            <span className="text-sm font-medium text-terracotta">Giving Back</span>
          </motion.div>
          
          <h2 className="section-title">
            Volunteering &{' '}
            <span className="gradient-text">Community</span>
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          {volunteering.map((item, index) => (
            <motion.div
              key={item.organization}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ x: 10, scale: 1.01 }}
            >
              {/* Hover gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-terracotta/5 to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10 flex items-start gap-4">
                <motion.div 
                  className={`p-3 rounded-xl bg-secondary/50 flex-shrink-0`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <motion.span 
                      className="text-sm font-medium text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.period}
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-display font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;