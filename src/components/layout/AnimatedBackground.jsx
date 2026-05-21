import React from 'react';

export default function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, 30px) scale(1.05); }
          66% { transform: translate(-20px, 50px) scale(0.97); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 40px) scale(0.95); }
          66% { transform: translate(30px, -30px) scale(1.08); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.06); }
        }
        .orb-1 { animation: orb-float-1 20s ease-in-out infinite; }
        .orb-2 { animation: orb-float-2 25s ease-in-out infinite; }
        .orb-3 { animation: orb-float-3 18s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-[#0A192F] dark:via-[#0d1f3c] dark:to-[#0A192F]" />

        {/* Dot grid - static, no animation */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Orb 1 — top left, blue — blur is static, only transform animates */}
        <div
          className="orb-1 absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Orb 2 — bottom right, indigo */}
        <div
          className="orb-2 absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Orb 3 — center, subtle cyan */}
        <div
          className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

      </div>
    </>
  );
}
