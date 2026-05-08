import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  shape: 'circle' | 'square' | 'triangle';
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(35, 90%, 60%)',    // amber
      'hsl(140, 25%, 75%)',   // sage
      'hsl(15, 60%, 60%)',    // terracotta
      'hsl(45, 40%, 85%)',    // cream
      'hsl(35, 80%, 70%)',    // light amber
      'hsl(140, 30%, 85%)',   // light sage
    ];

    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 20,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setParticles(newParticles);
  }, []);

  const getShape = (particle: Particle) => {
    switch (particle.shape) {
      case 'square':
        return (
          <motion.div
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: '20%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: particle.duration, repeat: Infinity, ease: "linear" }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: particle.duration * 1.5, repeat: Infinity, ease: "linear" }}
          />
        );
      default:
        return (
          <div
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: '50%',
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: 'blur(0.5px)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        >
          {getShape(particle)}
        </motion.div>
      ))}
      
      {/* Large ambient blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-amber/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-sage/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FloatingParticles;