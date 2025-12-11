'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.95,
        transformOrigin: 'center center'
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        transformOrigin: 'center center'
      }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
        transformOrigin: 'center center'
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // Custom easing for smooth feel
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 }
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}