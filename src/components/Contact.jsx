import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact">
      <div className="footer-shell shell">
        <p className="footer-kicker">Open to internships · freelance opportunities · collaborations</p>

        <h2>
          Let’s build<br />
          <em>something useful.</em>
        </h2>

        <div className="contact-actions-row">
          <a className="email-link" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email} <Arrow />
          </a>
        </div>

        <div className="contact-intro">
          <p>Have a role, an idea, or a problem that needs a thoughtful builder? I’d love to hear about it.</p>
          <a className="contact-phone" href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>Call or WhatsApp: {personalInfo.phone}</a>
        </div>

        <div className="social-links-bar" aria-label="Social links">
          <a className="social-link-item" href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="social-link-item" href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="social-link-item" href={personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp (+91 8882241153) ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Soumen Dass</span>
          <span>Delhi, India</span>
          <button onClick={scrollToTop} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
