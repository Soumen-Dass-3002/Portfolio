import React from 'react';
import { profileHighlights } from '../data/portfolioData';

export function Profile() {
  return (
    <section className="profile-section section" id="profile">
      <div className="shell">
        <div className="section-kicker">
          <span>01</span> Profile & Engineering Execution
        </div>

        <div className="profile-grid">
          <div className="profile-heading">
            <h2>
              What I have built.
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '20px', lineHeight: '1.6', fontSize: '16px' }}>
              Focused on technical execution across web development, AI integration, and analytical data engineering. Here is a summary of my core impact and deliverables.
            </p>
          </div>

          <div className="profile-cards-list">
            {profileHighlights.map((item, idx) => (
              <div className="profile-card" key={idx}>
                <div className="profile-card-icon">0{idx + 1} ✦</div>
                <h3>{item.category}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
