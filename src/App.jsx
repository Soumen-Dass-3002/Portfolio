import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Marquee />
        <Profile />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}

export default App;
