import React from 'react';
import { skillsList } from '../data/portfolioData';

export function Skills() {
  return (
    <section className="skills section shell" id="skills">
      <div className="section-kicker">
        <span>04</span> Toolkit
      </div>

      <div className="skills-layout">
        <h2>
          My toolkit
        </h2>

        <div className="skill-cloud">
          {skillsList.map((skill, index) => (
            <span key={skill} className={`skill skill-${index}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="tools-note" style={{ marginTop: '50px', color: 'var(--muted)', fontSize: '14px', maxWidth: '460px' }}>
        Fluent in modern web engineering, data analytical tools, and leveraging AI as a thoughtful creative partner — from research and prototyping to building scalable products.
      </p>
    </section>
  );
}
