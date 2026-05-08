import { Briefcase, Building2, GraduationCap, Trophy, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: Briefcase, label: 'Projects Built', value: 5, suffix: '+', color: 'from-primary to-amber' },
  { icon: GraduationCap, label: 'Internship Completed', value: 1, suffix: '', color: 'from-sage to-secondary' },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isInView && (
          <motion.span
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {value}{suffix}
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My Journey in{' '}
            <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every number tells a story of growth, learning, and dedication to the craft.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group w-full md:w-64"
            >
              <div className="stat-card relative overflow-hidden">
                {/* Animated gradient border on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Icon with animated background */}
                <motion.div 
                  className={`relative w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                  
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
                
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 gradient-text">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;