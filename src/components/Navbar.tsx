import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observers = navItems.map(item => {
      const el = document.getElementById(item.href.substring(1));
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.href.substring(1));
          }
        },
        { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 shadow-lg"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#home" className="text-xl font-display font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity">
          Heba<span className="text-[#d37b64]">.</span>
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-xs uppercase font-semibold tracking-widest transition-colors py-2 ${activeSection === item.href.substring(1)
                  ? "text-[#d37b64]"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d37b64]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right: CTA Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/Heba_khalifa_Cv.pdf"
            download="Heba_khalifa_Cv.pdf"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-foreground/20 hover:border-[#d37b64]/40 hover:text-[#d37b64] text-foreground font-display font-semibold text-xs tracking-wider uppercase transition-all bg-foreground/5 hover:bg-foreground/10"
          >
            DOWNLOAD CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#d37b64] text-white font-display font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#be6a53] hover:shadow-[#d37b64]/20 transition-all hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-[#d37b64] p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden w-full absolute top-full left-0 bg-background/95 backdrop-blur-lg border-b border-border/60 py-6 px-4 shadow-xl flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm uppercase font-semibold tracking-wider transition-colors py-2 border-b border-border/20 ${activeSection === item.href.substring(1)
                      ? "text-[#d37b64] pl-2 border-l-2 border-l-[#d37b64]"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="/Heba_khalifa_Cv.pdf"
                download="Heba_khalifa_Cv.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full border border-foreground/20 text-foreground font-display font-semibold text-xs tracking-wider uppercase transition-all bg-foreground/5"
              >
                DOWNLOAD CV
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#d37b64] text-white font-display font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#be6a53]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
