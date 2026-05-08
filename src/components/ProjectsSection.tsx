import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Lock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import lavenderLogo from '@/assets/lavender.png';
import ahwaManagerLogo from '@/assets/ahwa_manager.jpg';
import ofoqAlRahaLogo from '@/assets/ofoq_alraha.png';
import remindMeLogo from '@/assets/remind_me_app.png';

const projects = [
  {
    name: 'Lavender',
    subtitle: 'Personal Project',
    description: 'A comprehensive therapy application featuring psychological specialties, session bookings, and a system for users to track and manage their mental health journey.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Video Player', 
      'Shared Preferences', 'Hive', 'easy_localization', 
      'Clean Architecture', 'Real-time Chat', 'Payment'
    ],
    gradient: 'from-primary via-sage to-amber',
    logo: lavenderLogo,
    playStore: null,
    appStore: null,
    github: null,
    privateRepo: true,
    notReleased: true,
  },
  {
    name: 'Ahwa Manager',
    subtitle: 'Personal Project',
    description: 'A smart management application for coffee shops (Ahwa) to track customer orders, manage inventory, and generate insightful business reports and analytics.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive', 
      'easy_localization', 'Clean Architecture'
    ],
    gradient: 'from-terracotta via-primary to-amber',
    logo: ahwaManagerLogo,
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/Smart-Ahwa-Manager-App',
    privateRepo: false,
    notReleased: true,
  },
  {
    name: 'Ofoq Al Raha',
    subtitle: 'Internship Project (Fassla Software)',
    description: 'A comprehensive travel and hotel booking platform allowing users to explore destinations, book stays, and complete payments via WhatsApp integration.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive', 
      'Shared Preferences', 'easy_localization', 'Clean Architecture'
    ],
    gradient: 'from-sage via-secondary to-primary',
    logo: ofoqAlRahaLogo,
    playStore: null,
    appStore: null,
    github: null,
    privateRepo: true,
    notReleased: true,
  },
  {
    name: 'Remind Me App',
    subtitle: 'Personal Project',
    description: 'A smart daily task manager that helps you stay organized, set deadlines, and never forget your important tasks — all in one simple and easy-to-use app.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive',
      'Shared Preferences', 'easy_localization'
    ],
    gradient: 'from-amber via-primary to-sage',
    logo: remindMeLogo,
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/RemindMeApp',
    privateRepo: false,
    notReleased: true,
  },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-amber/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </motion.div>
          
          <h2 className="section-title mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've crafted, each representing my commitment to quality and innovation.
          </p>
        </motion.div>
        
        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('left')}
            className={`p-3 rounded-full glass-card ${canScrollLeft ? 'text-foreground' : 'text-muted-foreground/30'}`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('right')}
            className={`p-3 rounded-full glass-card ${canScrollRight ? 'text-foreground' : 'text-muted-foreground/30'}`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="horizontal-scroll px-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="project-card relative group min-w-[320px] max-w-[340px]"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />
              
              {/* Floating glow on hover */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl overflow-hidden"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={project.logo} alt={project.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{project.name}</h3>
                    {project.subtitle && (
                      <span className="text-xs text-muted-foreground">{project.subtitle}</span>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.playStore && (
                    <motion.a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "hsl(var(--primary) / 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Play Store
                    </motion.a>
                  )}
                  {project.appStore && (
                    <motion.a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "hsl(var(--accent) / 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      App Store
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "hsl(var(--muted) / 0.8)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      GitHub
                    </motion.a>
                  )}
                  {'privateRepo' in project && project.privateRepo && (
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 text-muted-foreground text-xs font-medium cursor-default border border-muted/40">
                      <Lock className="w-3 h-3" />
                      Private Repository
                    </span>
                  )}
                  {'notReleased' in project && project.notReleased && (
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-muted-foreground text-xs font-medium cursor-default opacity-70">
                      Not Released Yet
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-center text-muted-foreground mt-8 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Swipe or use arrows to explore more projects →
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;