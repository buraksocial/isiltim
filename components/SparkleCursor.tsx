import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparkleIcon } from './Icons';

interface Point {
  x: number;
  y: number;
  id: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = ['#d4af37', '#ff8fa3', '#fff0f3', '#ff4d6d']; // Gold, Pink, White, Deep Pink

const SparkleCursor: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { 
        x: e.clientX, 
        y: e.clientY, 
        id: Date.now(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 10 + Math.random() * 14, // Bigger size: 10px to 24px
        rotation: Math.random() * 90
      };
      setPoints((prev) => [...prev.slice(-20), newPoint]); // Keep slightly more points
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cleanup old points
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev.filter((p) => Date.now() - p.id < 800));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {points.map((point) => (
          <motion.div
            key={point.id}
            initial={{ scale: 0, opacity: 1, rotate: point.rotation }}
            animate={{ 
              scale: [0, 1, 0.5], 
              opacity: [1, 0.8, 0], 
              y: 35, // Move down a bit more
              rotate: point.rotation + 90 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              color: point.color
            }}
          >
            <SparkleIcon className="w-full h-full drop-shadow-md" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleCursor;