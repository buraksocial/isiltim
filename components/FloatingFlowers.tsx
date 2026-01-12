import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RoseIcon, DaisyIcon } from './Icons';
import { FlowerProps } from '../types';

const FloatingFlowers: React.FC = () => {
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    // Generate random flowers
    const newFlowers: FlowerProps[] = Array.from({ length: 20 }).map((_, i) => ({
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      scale: 0.5 + Math.random() * 0.8,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      type: Math.random() > 0.6 ? 'rose' : 'daisy',
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower, i) => (
        <motion.div
          key={i}
          className={`absolute ${flower.type === 'rose' ? 'text-romantic-300' : 'text-white/80'}`}
          initial={{ 
            left: `${flower.x}%`, 
            top: '110%', 
            opacity: 0,
            rotate: flower.rotation 
          }}
          animate={{ 
            top: '-10%', 
            opacity: [0, 1, 1, 0],
            rotate: flower.rotation + 180
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity, 
            delay: flower.delay,
            ease: "linear"
          }}
          style={{ scale: flower.scale }}
        >
          {flower.type === 'rose' ? (
            <RoseIcon className="w-12 h-12 drop-shadow-sm opacity-60" />
          ) : (
            <DaisyIcon className="w-10 h-10 drop-shadow-sm opacity-50" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlowers;