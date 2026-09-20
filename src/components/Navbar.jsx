import React from 'react';

export function Navbar({ darkMode, onToggleTheme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav shell" aria-label="Main navigation">
      <button className="logo" onClick={() => scrollTo('top')} aria-label="Go to top">
        SD<span>®</span>
      </button>

      <div className="nav-links">
        <button onClick={() => scrollTo('top')}>Overview</button>
        <button onClick={() => scrollTo('profile')}>Profile</button>
        <button onClick={() => scrollTo('work')}>Projects</button>
        <button onClick={() => scrollTo('experience')}>Experience</button>
        <button onClick={() => scrollTo('skills')}>Toolkit</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
}
