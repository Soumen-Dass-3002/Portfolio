import React, { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="portfolio-app">
      <Navbar 
        darkMode={darkMode} 
        onToggleTheme={handleToggleTheme} 
      />
      
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
