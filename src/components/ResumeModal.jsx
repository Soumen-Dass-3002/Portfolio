import React from 'react';
import { personalInfo, experienceItem, achievementsList, skillsList } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--paper)', color: 'var(--ink)', border: '2px solid var(--ink)', borderRadius: '8px', maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '32px', position: 'relative'
      }}>
        <button onClick={onClose} aria-label="Close modal" style={{
          position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: '1px solid var(--ink)', color: 'var(--ink)', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold'
        }}>
          ✕
        </button>

        <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '16px', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '28px', fontFamily: 'Playfair Display, serif' }}>{personalInfo.name}</h2>
          <p style={{ margin: '4px 0 0', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--muted)' }}>
            {personalInfo.title} | {personalInfo.location} | {personalInfo.email}
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', color: '#9ebd00', marginBottom: '6px' }}>
            Education
          </h3>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '15px' }}>{personalInfo.degree}</p>
          <p style={{ margin: '2px 0 0', fontSize: '13px', color: 'var(--muted)' }}>{personalInfo.university} ({personalInfo.graduationYear})</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', color: '#9ebd00', marginBottom: '6px' }}>
            Work Experience
          </h3>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '15px' }}>{experienceItem.role} — {experienceItem.company}</p>
          <p style={{ margin: '2px 0 6px', fontSize: '13px', color: 'var(--muted)' }}>{experienceItem.period} | {experienceItem.sub}</p>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{experienceItem.description}</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', color: '#9ebd00', marginBottom: '6px' }}>
            Achievements
          </h3>
          {achievementsList.map((ach) => (
            <div key={ach.rank} style={{ marginBottom: '8px' }}>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '14px' }}>{ach.title}</p>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--muted)' }}>{ach.detail}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', color: '#9ebd00', marginBottom: '8px' }}>
            Technical Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skillsList.map((s) => (
              <span key={s} style={{ border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '99px', fontSize: '12px', fontFamily: 'DM Mono, monospace' }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <button onClick={handleDownload} style={{
          background: 'var(--ink)', color: 'var(--paper)', border: 0, padding: '10px 20px', borderRadius: '4px', fontWeight: '600', fontSize: '13px', cursor: 'pointer'
        }}>
          🖨️ Print / Download PDF
        </button>
      </div>
    </div>
  );
}
