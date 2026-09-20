import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin } from './Icons';

export function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero shell" id="top">
      <h1 className="hero-roles-headline">
        <span className="highlight-hero-role">Full-stack developer</span> · <span className="highlight-hero-role">Data analyst</span> · <span className="highlight-hero-role">AI builder</span>
      </h1>

      <div className="hero-bottom">
        <div>
          <p className="hero-roles-sub">
            Crafting high-impact web products, data analytics solutions, and intelligent AI tools.
          </p>

          <div className="hero-actions-group">
            <button className="btn-see-work" onClick={() => scrollTo('work')}>
              See my work ↓
            </button>
            <button className="btn-hero-resume" onClick={onOpenResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Grid pattern scale behind portrait */}
      <div className="grid-pattern" aria-hidden="true" />

      {/* Circle Portrait Frame with floating skill/social circles */}
      <div className="portrait-circle-wrapper">
        <div className="skill-orb skill-orb-1">Node.js</div>

        {/* Gen AI orb replaced with LinkedIn link & icon */}
        <a 
          href={personalInfo.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="skill-orb skill-orb-2"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <IconLinkedin size={24} />
        </a>

        {/* SQL orb replaced with GitHub link & icon */}
        <a 
          href={personalInfo.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="skill-orb skill-orb-3"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <IconGithub size={24} />
        </a>

        <div className="skill-orb skill-orb-4">Python</div>

        <div className="circle-portrait-frame">
          <img 
            className="circle-portrait-img" 
            src="/soumen-dass.png" 
            alt="Soumen Dass" 
          />
          <span className="portrait-tag-badge">SOUMEN DASS</span>
        </div>
      </div>
    </section>
  );
}
