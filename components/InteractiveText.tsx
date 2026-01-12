import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className = "" }) => {
  const letters = text.split("");

  return (
    <div className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          whileHover={{ 
            y: -8, 
            scale: 1.15,
            color: "#ff4d6d", // romantic-300
            transition: { type: "spring", stiffness: 300 } 
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default InteractiveText;