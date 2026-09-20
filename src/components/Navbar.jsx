import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const scrollTo = (id) => {
    setSidebarOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav className="nav shell" aria-label="Main navigation">
        <button className="logo" onClick={() => scrollTo('top')} aria-label="Go to top">
          SD<span>®</span>
        </button>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <button onClick={() => scrollTo('top')}>Overview</button>
          <button onClick={() => scrollTo('profile')}>Profile</button>
          <button onClick={() => scrollTo('work')}>Projects</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('skills')}>Toolkit</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>

        <div className="nav-actions">
          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="hamburger-btn mobile-only" 
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Slide-over Mobile Sidebar Drawer */}
      <div 
        className={`sidebar-backdrop ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside className={`mobile-sidebar-drawer ${sidebarOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="sidebar-header">
          <button className="logo" onClick={() => scrollTo('top')} aria-label="Go to top">
            SD<span>®</span>
          </button>

          <button 
            className="sidebar-close-btn" 
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-nav-list">
          <button onClick={() => scrollTo('top')} className="sidebar-nav-item">
            <span className="sidebar-num">01</span>
            <span>Overview</span>
          </button>
          <button onClick={() => scrollTo('profile')} className="sidebar-nav-item">
            <span className="sidebar-num">02</span>
            <span>Profile</span>
          </button>
          <button onClick={() => scrollTo('work')} className="sidebar-nav-item">
            <span className="sidebar-num">03</span>
            <span>Projects</span>
          </button>
          <button onClick={() => scrollTo('experience')} className="sidebar-nav-item">
            <span className="sidebar-num">04</span>
            <span>Experience</span>
          </button>
          <button onClick={() => scrollTo('skills')} className="sidebar-nav-item">
            <span className="sidebar-num">05</span>
            <span>Toolkit</span>
          </button>
          <button onClick={() => scrollTo('contact')} className="sidebar-nav-item">
            <span className="sidebar-num">06</span>
            <span>Contact</span>
          </button>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-quick-links">
            <a href={personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="sidebar-social-link">
              📱 WhatsApp (+91 8882241153)
            </a>
            <a href={personalInfo.socials.email} className="sidebar-social-link">
              ✉️ {personalInfo.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
