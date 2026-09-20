import React from 'react';
import { experienceItem, achievementsList } from '../data/portfolioData';

export function Experience() {
  return (
    <section className="experience shell section" id="experience">
      <div className="section-kicker">
        <span>03</span> Experience & recognition
      </div>

      <div className="experience-grid">
        <div className="experience-item featured">
          <div className="experience-meta">
            <span>{experienceItem.period}</span>
            <span>{experienceItem.type}</span>
          </div>

          <h3>{experienceItem.role}</h3>

          <div className="company">
            <img src={experienceItem.logo} alt={experienceItem.company} className="company-logo-img" />
            <span>{experienceItem.company} — {experienceItem.sub}</span>
          </div>

          <p className="experience-copy">
            {experienceItem.description}
          </p>

          <div className="chips">
            {experienceItem.chips.map((chip, idx) => (
              <span key={idx}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="achievement-list">
          <p className="label">Recognition</p>

          {achievementsList.map((ach) => (
            <article key={ach.rank}>
              <img src={ach.logo} alt={ach.title} className="achievement-logo" />
              <div>
                <h4>{ach.title}</h4>
                <p>{ach.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
