import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand-text">
          <span className="brand-name" style={{ fontFamily: 'var(--font-royal)', color: '#D4AF37' }}>
            SOUMEN DASS
          </span>
          <span className="footer-copy">
            © {new Date().getFullYear()} Soumen Dass. Full-Stack Developer, AI Builder & Data Analyst.
          </span>
        </div>

        <div className="social-icon-row">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <IconGithub size={16} />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
            <IconLinkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Email">
            <IconMail size={16} />
          </a>
        </div>

        <button onClick={scrollToTop} className="back-to-top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
