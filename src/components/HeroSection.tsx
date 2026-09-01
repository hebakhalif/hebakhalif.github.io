import { Mail, Github, Linkedin, Sparkles, Code, Star, Rocket } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import profileImage from '@/assets/heba-profile.jpg';

const FloatingIcon = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    className={`absolute z-20 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: delay * 0.5
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      {/* Background Ornaments (Intense Glows) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow behind Text */}
        <motion.div
          className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[90px]"
          animate={{
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow behind Image */}
        <motion.div
          className="absolute top-[15%] right-[-5%] w-[600px] h-[600px] bg-accent/35 rounded-full blur-[100px]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/2 -skew-x-12 transform origin-top-right" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium tracking-wide text-primary"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Mobile Application Developer
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">Heba Khalifa</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              A Flutter Developer passionate about building smooth and impactful mobile apps.
              I turn ideas into clean, well-crafted applications with a focus on great user
              experience and solid architecture. I enjoy working with teams and helping
              others grow technically.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5"
            >
              {[
                { href: "https://mail.google.com/mail/?view=cm&fs=1&to=habatrka@gmail.com", icon: Mail, label: "Email", color: "bg-[#d37b64]" },
                { href: "https://github.com/hebakhalif", icon: Github, label: "GitHub", color: "bg-[#6f584b]" },
                { href: "https://www.linkedin.com/in/heba-khalifa1", icon: Linkedin, label: "LinkedIn", color: "bg-[#a9c9b6]" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${item.color} text-white font-bold shadow-lg transition-all`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-xs md:text-sm">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Google Play Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mt-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.maab.islamic_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3a7d4f] text-white font-bold shadow-lg transition-all"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.43,12.11C19.8,12.29 20,12.62 20,13C20,13.38 19.8,13.71 19.43,13.89L17.87,14.67L16.03,12.79L17.87,11.33M3.86,4L14.73,9.44L12.56,11.61L3.86,4M3.86,20L12.56,12.39L14.73,14.56L3.86,20Z" />
                </svg>
                <span className="text-xs md:text-sm">Google Play</span>
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-orange-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
              {/* Decorative Rings */}
              <motion.div
                className="absolute inset-[-20px] border-2 border-dashed border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-40px] border border-accent/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-[#c8a882] shadow-2xl z-10">
                <img
                  src={profileImage}
                  alt="Heba Khalifa"
                  className="w-full h-full object-cover"
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              </div>

              {/* Floating decorative icons */}
              <FloatingIcon delay={0.5} className="top-0 right-10 lg:right-0">
                <div className="p-3 rounded-2xl bg-amber/20 backdrop-blur-sm shadow-lg border border-white/10">
                  <Rocket className="w-6 h-6 text-amber" />
                </div>
              </FloatingIcon>

              <FloatingIcon delay={0.7} className="top-1/4 -left-4 lg:left-0">
                <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-sm shadow-lg border border-white/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </FloatingIcon>

              <FloatingIcon delay={0.9} className="bottom-20 -right-4 lg:right-0">
                <div className="p-3 rounded-2xl bg-terracotta/20 backdrop-blur-sm shadow-lg border border-white/10">
                  <Star className="w-6 h-6 text-terracotta" fill="currentColor" />
                </div>
              </FloatingIcon>

              <FloatingIcon delay={1.1} className="bottom-10 left-10">
                <div className="p-2 rounded-xl bg-sage/20 backdrop-blur-sm shadow-lg border border-white/10">
                  <Sparkles className="w-5 h-5 text-sage" />
                </div>
              </FloatingIcon>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Background Blur Particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full blur-[1px] animate-ping" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-accent rounded-full blur-[1px] animate-ping delay-700" />
    </section>
  );
};

export default HeroSection;