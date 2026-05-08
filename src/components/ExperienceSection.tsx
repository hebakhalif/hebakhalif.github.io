import { Briefcase, ChevronRight, MapPin, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Mobile Application Developer (Intern)',
    company: 'Fassla Software, Nasr City, Egypt',
    period: 'Dec 2025 — Mar 2026',
    type: 'Full-time, On-site',
    gradient: 'from-primary to-amber',
    accomplishments: [
      'Developing diverse international projects and delivering high-quality solutions to global clients',
      'Refactoring and optimizing legacy code into clean, reusable, and maintainable solutions',
      'Actively collaborating with the development team and using Git/GitHub for efficient version control and project management',
    ],
  },
  {
    title: 'Technical Mentor',
    company: 'Remote',
    period: 'Sep 2025 — Nov 2025',
    type: 'Part-time, Remote',
    gradient: 'from-sage to-secondary',
    accomplishments: [
      'Leading weekly sessions focused on software engineering best practices and principles',
      'Mentoring developers in mobile app development using Flutter and clean architecture',
    ],
  },
];

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
  isInView: boolean;
}

const ExperienceCard = ({ experience, index, isInView }: ExperienceCardProps) => (
  <motion.div
    className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
  >
    {/* Gradient accent line */}
    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${experience.gradient} rounded-l-2xl`} />
    
    {/* Hover glow */}
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    />
    
    <div className="relative z-10 flex items-start gap-4 pl-4">
      <motion.div 
        className={`p-3 rounded-xl bg-gradient-to-br ${experience.gradient} flex-shrink-0`}
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Briefcase className="w-6 h-6 text-white" />
      </motion.div>
      
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="flex items-center gap-1 text-sm font-medium text-primary">
            <Clock className="w-3 h-3" />
            {experience.period}
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {experience.type}
          </span>
        </div>
        
        <h3 className="text-xl font-display font-bold mb-1">{experience.title}</h3>
        <p className="flex items-center gap-1 text-muted-foreground mb-4 text-sm">
          <MapPin className="w-3 h-3" />
          {experience.company}
        </p>
        
        <ul className="space-y-2">
          {experience.accomplishments.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-2 text-sm text-foreground/80"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
            >
              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent via-sage-light/30 to-transparent relative overflow-hidden" ref={containerRef}>
      {/* Floating decoration */}
      <motion.div
        className="absolute top-40 right-10 w-40 h-40 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>
        
        <div className="space-y-6 mb-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} isInView={isInView} />
          ))}
        </div>
        
        {/* Internships section removed as requested */}
      </div>
    </section>
  );
};

export default ExperienceSection;