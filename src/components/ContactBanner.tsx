import { Mail, Phone, MapPin, Send, Heart, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactBanner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 scroll-mt-24" ref={containerRef} id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber/10 pointer-events-none"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          />
          
          {/* Floating sparkles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
                className="absolute pointer-events-none"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Sparkles className="w-4 h-4 text-amber/50" />
            </motion.div>
          ))}
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10"
            >
              <Heart className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Let's Build Something{' '}
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% center", "100% center", "0% center"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Amazing
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Whether you have a project in mind or just want to connect, I'd love to hear from you. 
              Let's turn your ideas into reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Phone, text: '+20 1153187854' },
                { icon: Mail, text: 'habatrka@gmail.com' },
                { icon: MapPin, text: 'Egypt' },
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ scale: 1.05, color: "hsl(var(--foreground))" }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=habatrka@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-amber to-terracotta text-primary-foreground font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95"
            >
              <Send className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>
        
        <motion.footer 
          className="mt-12 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex items-center justify-center gap-2">
            © 2025 Heba Khalifa. Crafted with passion and Flutter 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💛
            </motion.span>
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactBanner;