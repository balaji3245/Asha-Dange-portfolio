import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-[#0A192F] dark:via-[#0d1f3c] dark:to-[#0A192F]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orb 1 — top left, large blue */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 60, 20, 0],
          y: [0, 40, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — top right, indigo */}
      <motion.div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -50, -20, 0],
          y: [0, 60, 30, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb 3 — center left, cyan */}
      <motion.div
        className="absolute top-[40%] -left-32 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 80, 40, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Orb 4 — bottom right, blue */}
      <motion.div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -70, -30, 0],
          y: [0, -60, -20, 0],
          scale: [1, 1.05, 1.12, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Orb 5 — center, subtle purple */}
      <motion.div
        className="absolute top-[60%] left-[40%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -70, 30, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

    </div>
  );
}
