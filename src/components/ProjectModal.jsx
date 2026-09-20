import React from 'react';
import { IconX, IconGithub, IconExternalLink, IconSparkles } from './Icons';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="section-kicker">
          <IconSparkles size={14} />
          <span>PROJECT ARCHITECTURE & DETAILS</span>
        </div>

        <h2 className="royal-title" style={{ fontSize: '28px', marginBottom: '8px' }}>
          {project.title}
        </h2>

        <p className="project-subtitle" style={{ fontSize: '14px', marginBottom: '24px' }}>
          {project.subtitle}
        </p>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '15px', color: '#D4AF37', marginBottom: '8px' }}>Overview</h4>
          <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.7' }}>
            {project.description}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '15px', color: '#D4AF37', marginBottom: '12px' }}>Key Capabilities & Metrics</h4>
          <ul className="project-highlights" style={{ gap: '10px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ fontSize: '14px' }}>{h}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '15px', color: '#D4AF37', marginBottom: '12px' }}>Technologies & Stack</h4>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="tag-chip" key={tag} style={{ padding: '6px 12px', fontSize: '12px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            <IconGithub size={16} />
            <span>GitHub Repository</span>
          </a>
          <button 
            onClick={onClose} 
            className="btn-secondary" 
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
