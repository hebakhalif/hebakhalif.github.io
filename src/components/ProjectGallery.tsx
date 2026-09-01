import { motion } from 'framer-motion';
import { Smartphone, Eye, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Sample images - Replace with your actual app screenshots
import ofoqImg from '@/assets/ofoq_alraha.png';
import whatsappImg from '/WhatsApp Image 2026-04-09 at 10.51.37 AM.jpeg';
import screenshotApp2 from '@/assets/screenshot_app2.png';

const galleryImages = [
  {
    id: 1,
    title: 'Lavender App',
    category: 'Flutter App',
    image: whatsappImg,
    size: 'large'
  },
  {
    id: 2,
    title: 'Remind Me App',
    category: 'Flutter App',
    image: screenshotApp2,
    size: 'large'
  },
  {
    id: 3,
    title: "Ma'ab",
    category: 'Islamic App',
    image: '/WhatsApp Image 2026-09-02 at 12.25.40 AM.jpeg',
    size: 'large'
  },
];

const ProjectGallery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="gallery">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            Visual Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            App Interface <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A closer look at the user interfaces and design systems I've built for various mobile applications.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-muted/20"
            >
              <div className="aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
                      <Eye className="w-4 h-4" />
                      View Detail
                    </button>
                    <button className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
                      <Smartphone className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
