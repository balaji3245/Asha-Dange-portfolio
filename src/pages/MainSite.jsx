import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingActionBtn from '../components/layout/FloatingActionBtn';
import AnimatedBackground from '../components/layout/AnimatedBackground';

import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Research from '../components/sections/Research';
import Certifications from '../components/sections/Certifications';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

export default function MainSite() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <AnimatedBackground />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Research />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <FloatingActionBtn />
      </div>
    </>
  );
}
