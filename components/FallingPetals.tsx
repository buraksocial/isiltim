import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PetalIcon } from './Icons';

interface Petal {
  id: number;
  x: number;
  scale: number;
  rotation: number;
  duration: number;
  delay: number;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals
    const newPetals: Petal[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      scale: 0.3 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 15,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-romantic-300/60"
          initial={{ 
            left: `${petal.x}%`, 
            top: '-10%', 
            opacity: 0,
            rotate: petal.rotation 
          }}
          animate={{ 
            top: '110%', 
            opacity: [0, 1, 1, 0],
            rotate: petal.rotation + 360,
            x: [`${petal.x}%`, `${petal.x + 5}%`, `${petal.x - 5}%`, `${petal.x}%`] // Swaying motion
          }}
          transition={{ 
            duration: petal.duration, 
            repeat: Infinity, 
            delay: petal.delay,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
          style={{ scale: petal.scale }}
        >
          <PetalIcon className="w-12 h-12" />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;