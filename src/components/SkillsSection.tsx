import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Users, Lightbulb, Smartphone, Database, GitBranch, Cpu, Flame, Layout, Sparkles, TestTube, Figma } from 'lucide-react';

const technicalSkills = [
  { name: 'Dart & Flutter', icon: Smartphone },
  { name: 'Clean Architecture', icon: Layout },
  { name: 'State Management (BLoC, Cubit)', icon: Cpu },
  { name: 'REST APIs', icon: Database },
  { name: 'Firebase', icon: Flame },
  { name: 'Responsive UI', icon: Layout },
  { name: 'Animations', icon: Sparkles },
  { name: 'Version Control (Git)', icon: GitBranch },
  { name: 'C++', icon: Code },
  { name: 'Data Structures & Algorithms', icon: Cpu },
  { name: 'SDLC & Agile', icon: GitBranch },
  { name: 'Testing & Debugging', icon: TestTube },
  { name: 'Figma', icon: Figma },
];

const softSkills = [
  { name: 'Team Leadership', icon: Users },
  { name: 'Presentation Skills', icon: Lightbulb },
  { name: 'Strategic Planning', icon: Code },
  { name: 'Cross-cultural Communication', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Mentoring & Teaching', icon: Palette },
];

const SkillsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-muted/30 to-transparent relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 h-32 border border-amber/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Skills honed through years of practice, continuous learning, and real-world applications.
          </p>
        </motion.div>
        
        {/* Technical Skills - Card Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-amber">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-4 text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-amber/20 flex items-center justify-center group-hover:from-primary group-hover:to-amber transition-all duration-300"
                >
                  <skill.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <span className="text-xs font-medium leading-tight block">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Soft Skills + Quote Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-sage to-secondary">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-xl p-4 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-terracotta/20 to-amber/20 flex items-center justify-center group-hover:from-terracotta group-hover:to-amber transition-all duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-terracotta group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-xs font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Decorative quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center"
          >
            <motion.div
              className="glass-card rounded-2xl p-6 relative overflow-hidden w-full"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10">
                <p className="text-lg italic text-muted-foreground">
                  "Building the future of mobile experiences with clean code and a passion for innovation."
                </p>
                <p className="mt-3 text-sm font-medium text-primary">— Heba Khalifa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;