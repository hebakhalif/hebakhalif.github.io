import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Import Logos
import lavenderLogo from '@/assets/lavender.png';
import ahwaManagerLogo from '@/assets/ahwa_manager.jpg';
import ofoqAlRahaLogo from '@/assets/ofoq_alraha.png';
import remindMeLogo from '@/assets/remind_me_app.png';
import screenshotApp2 from '@/assets/screenshot_app2.png';

// Import Ofoq Al Raha screenshots
import ofoqApp1 from '@/assets/App (1).png';
import ofoqOfoq1 from '@/assets/Ofoq (1).png';
import ofoqOfoq from '@/assets/Ofoq.png';

// Import Lavender screenshots
import lavender122 from '@/assets/iPhone 13 mini - 122.png';
import lavender152 from '@/assets/iPhone 13 mini - 152.png';
import lavender88 from '@/assets/iPhone 13 mini - 88.jpg';

// Import Ahwa Manager screenshots
import ahwaSplash1 from '@/assets/splash 1.png';
import ahwaAddOrder1 from '@/assets/AddOrder 1.png';
import ahwaDashboard1 from '@/assets/dashboard1 1.png';

// Import Remind Me App screenshots
import remindMeImg1 from '@/assets/WhatsApp Image 2026-06-21 at 5.31.26 PM.jpeg';
import remindMeImg2 from '@/assets/WhatsApp Image 2026-06-21 at 5.30.50 PM.jpeg';
import remindMeImg3 from '@/assets/WhatsApp Image 2026-06-21 at 5.30.47 PM.jpeg';

const projects = [
  {
    name: "Ma'ab",
    subtitle: 'ISLAMIC / SPIRITUALITY',
    description: "A comprehensive Islamic companion app featuring Dhikr (Athkar), Quran audio recitation, Adhan alerts, and accurate prayer times with location-based scheduling.",
    technologies: [
      'Flutter', 'BLoC', 'Adhan', 'Geolocator',
      'Audio Players', 'Local Notifications', 'Hijri Calendar', 'SQLite'
    ],
    logo: '/Splash Screen.png',
    screenshots: [
      '/Splash Screen.png',
      '/Getting Started.png',
      '/Tasbih Counter.png',
      '/Calendar.png',
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.maab.islamic_app',
    appStore: null,
    github: 'https://github.com/hebakhalif/Islamic-App',
    privateRepo: false,
    notReleased: false,
  },
  {
    name: 'Lavender App',
    subtitle: 'HEALTH & WELLNESS / THERAPY',
    description: 'A comprehensive therapy application featuring psychological specialties, session bookings, and a system for users to track and manage their mental health journey.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Video Player',
      'Hive', 'Clean Architecture', 'Real-time Chat'
    ],
    logo: lavenderLogo,
    screenshots: [
      lavender122,
      lavender152,
      lavender88
    ],
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/Lavender-Therapy-App',
    privateRepo: true,
    notReleased: true,
  },
  {
    name: 'Ahwa Manager',
    subtitle: 'BUSINESS / ANALYTICS',
    description: 'A smart management application for coffee shops (Ahwa) to track orders, manage inventory, and generate insightful business reports and analytics.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive',
      'Clean Architecture'
    ],
    logo: ahwaManagerLogo,
    screenshots: [
      ahwaSplash1,
      ahwaAddOrder1,
      ahwaDashboard1
    ],
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/Smart-Ahwa-Manager-App',
    privateRepo: false,
    notReleased: true,
  },
  {
    name: 'Ofoq Al Raha',
    subtitle: 'COMMERCE / TRAVEL BOOKING',
    description: 'A comprehensive travel and booking platform allowing users to explore destinations, book stays, and complete payments via WhatsApp integration.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive',
      'Shared Preferences', 'Clean Architecture'
    ],
    logo: ofoqAlRahaLogo,
    screenshots: [
      ofoqApp1,
      ofoqOfoq1,
      ofoqOfoq
    ],
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/Ofoq-AlRaha-App',
    privateRepo: true,
    notReleased: true,
  },
  {
    name: 'Remind Me App',
    subtitle: 'UTILITY / PRODUCTIVITY',
    description: 'A smart daily task manager that helps you stay organized, set deadlines, and never forget your important tasks — all in one simple app.',
    technologies: [
      'Flutter', 'BLoC/Cubit', 'Go Router', 'Hive',
      'Shared Preferences'
    ],
    logo: remindMeLogo,
    screenshots: [
      remindMeImg1,
      remindMeImg2,
      remindMeImg3
    ],
    playStore: null,
    appStore: null,
    github: 'https://github.com/hebakhalif/RemindMeApp',
    privateRepo: false,
    notReleased: true,
  },
];

const AppStoreBadge = ({ href }: { href?: string }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1319] hover:bg-[#121f29] border border-white/5 hover:border-white/10 rounded-xl text-white select-none transition-colors shadow-sm"
    style={{ minHeight: "38px" }}
  >
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22 9.09,22.05C7.81,22.1 6.85,20.78 6,19.5C4.26,17 2.94,12.31 4.73,9.2C5.62,7.66 7.2,6.69 8.92,6.67C10.22,6.65 11.45,7.55 12.25,7.55C13.05,7.55 14.54,6.47 16.13,6.63C16.8,6.66 18.66,6.9 19.8,8.57C19.71,8.62 17.5,9.91 17.52,12.5C17.55,15.61 20.24,16.66 20.27,16.68C20.25,16.73 19.82,18.19 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[6.5px] uppercase font-sans tracking-wide leading-none text-gray-400">Download on the</span>
      <span className="text-[10px] font-semibold font-sans leading-tight mt-0.5">App Store</span>
    </div>
  </a>
);

const AppStoreNotReleasedBadge = () => (
  <div
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1319]/25 border border-white/5 rounded-xl text-gray-500 select-none opacity-50 cursor-default"
    style={{ minHeight: "38px" }}
  >
    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22 9.09,22.05C7.81,22.1 6.85,20.78 6,19.5C4.26,17 2.94,12.31 4.73,9.2C5.62,7.66 7.2,6.69 8.92,6.67C10.22,6.65 11.45,7.55 12.25,7.55C13.05,7.55 14.54,6.47 16.13,6.63C16.8,6.66 18.66,6.9 19.8,8.57C19.71,8.62 17.5,9.91 17.52,12.5C17.55,15.61 20.24,16.66 20.27,16.68C20.25,16.73 19.82,18.19 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[6.5px] uppercase font-sans tracking-wide leading-none text-gray-500">Not Released On</span>
      <span className="text-[9px] font-semibold font-sans leading-tight mt-0.5 text-gray-500">App Store</span>
    </div>
  </div>
);

const GooglePlayBadge = ({ href }: { href?: string }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1319] hover:bg-[#121f29] border border-white/5 hover:border-white/10 rounded-xl text-white select-none transition-colors shadow-sm"
    style={{ minHeight: "38px" }}
  >
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.43,12.11C19.8,12.29 20,12.62 20,13C20,13.38 19.8,13.71 19.43,13.89L17.87,14.67L16.03,12.79L17.87,11.33M3.86,4L14.73,9.44L12.56,11.61L3.86,4M3.86,20L12.56,12.39L14.73,14.56L3.86,20Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[6.5px] uppercase font-sans tracking-wide leading-none text-gray-400">GET IT ON</span>
      <span className="text-[10px] font-semibold font-sans leading-tight mt-0.5">Google Play</span>
    </div>
  </a>
);

const PlayStoreNotReleasedBadge = () => (
  <div
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1319]/25 border border-white/5 rounded-xl text-gray-500 select-none opacity-50 cursor-default"
    style={{ minHeight: "38px" }}
  >
    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.43,12.11C19.8,12.29 20,12.62 20,13C20,13.38 19.8,13.71 19.43,13.89L17.87,14.67L16.03,12.79L17.87,11.33M3.86,4L14.73,9.44L12.56,11.61L3.86,4M3.86,20L12.56,12.39L14.73,14.56L3.86,20Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[6.5px] uppercase font-sans tracking-wide leading-none text-gray-500">Not Released On</span>
      <span className="text-[9px] font-semibold font-sans leading-tight mt-0.5 text-gray-500">Google Play</span>
    </div>
  </div>
);

const GitHubBadge = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1319] hover:bg-[#121f29] border border-white/5 hover:border-white/10 rounded-xl text-white select-none transition-colors shadow-sm"
    style={{ minHeight: "38px" }}
  >
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[6.5px] uppercase font-sans tracking-wide leading-none text-gray-400">View on</span>
      <span className="text-[10px] font-semibold font-sans leading-tight mt-0.5">GitHub</span>
    </div>
  </a>
);

const ProjectCard = ({ project, isInView, index }: { project: any; isInView: boolean; index: number }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = project.screenshots || [project.logo];

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flex flex-col bg-[#0b1319]/40 border border-white/5 rounded-3xl p-5 hover:border-white/10 hover:bg-[#0b1319]/60 transition-all duration-300 shadow-xl group"
    >
      {/* 1. Mockup Carousel Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-3 mb-5 border border-white/5">
        {/* Backdrop (Blurred Screenshot) */}
        <img
          src={slides[currentSlide]}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 pointer-events-none transition-all duration-500"
        />

        {/* Mobile Phone Mockup */}
        <div className="relative h-full aspect-[9/18.5] rounded-[20px] overflow-hidden border-[3px] border-[#1e293b] shadow-2xl bg-black flex items-center justify-center">
          <img
            src={slides[currentSlide]}
            alt={`${project.name} slide`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Carousel Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel Indicators (Dots & Index) */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
          {/* Dots */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-[#d37b64] w-3" : "bg-white/20"
                  }`}
              />
            ))}
          </div>
          {/* Index count */}
          <div className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-black/60 text-gray-300 border border-white/5">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* 2. Project Header (Logo + Title + Subtitle) */}
      <div className="flex items-center gap-3.5 mb-3.5">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-slate-900 flex items-center justify-center">
          <img src={project.logo} alt={`${project.name} logo`} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-sm font-display font-bold text-white tracking-tight leading-snug">{project.name}</h3>
          <span className="text-[9px] font-semibold text-[#d37b64] uppercase tracking-wider mt-0.5">
            {project.subtitle}
          </span>
        </div>
      </div>

      {/* 3. Description */}
      <p className="text-muted-foreground text-[11px] leading-relaxed text-left min-h-[50px] mb-4">
        {project.description}
      </p>

      {/* 4. Technology Badges */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {project.technologies.slice(0, 4).map((tech: string) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-[9px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/5"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-0.5 text-[9px] font-medium rounded-md bg-white/5 text-gray-400 border border-white/5">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* 5. Store and GitHub Badges */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {project.appStore ? <AppStoreBadge href={project.appStore} /> : <AppStoreNotReleasedBadge />}
        {project.playStore ? <GooglePlayBadge href={project.playStore} /> : <PlayStoreNotReleasedBadge />}
        {project.github && <GitHubBadge href={project.github} />}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Background glow decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title - Centered */}
        <div className="flex flex-col items-center justify-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-[#d37b64] animate-pulse" />
            <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
              Selected Projects
            </h2>
          </motion.div>


        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;