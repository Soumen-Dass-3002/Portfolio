import React from 'react';
import { experienceItem, currentExperienceItem, achievementsList } from '../data/portfolioData';

function ExperienceCard({ item }) {
  return (
    <article className="experience-item featured">
      <div className="experience-meta"><span>{item.period}</span><span>{item.type}</span></div>
      <h3>{item.role}</h3>
      <div className="company">
        <img src={item.logo} alt={`${item.company} logo`} className="company-logo-img" />
        <span>{item.company} — {item.sub}</span>
      </div>
      <p className="experience-copy">{item.description}</p>
      <div className="chips">{item.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
    </article>
  );
}

export function Experience() {
  return (
    <section className="experience shell section" id="experience">
      <div className="section-kicker">
        <span>03</span> Experience & recognition
      </div>

      <div className="experience-grid">
        <div className="experience-stack">
          <ExperienceCard item={currentExperienceItem} />
          <ExperienceCard item={experienceItem} />
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
