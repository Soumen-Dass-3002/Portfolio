import React from 'react';
import { skillCategories } from '../data/portfolioData';

export function Skills() {
  return (
    <section className="skills section shell" id="skills">
      <div className="section-kicker">
        <span>04</span> Toolkit
      </div>

      <div className="skills-layout">
        <h2>Skills, organised<br />by <em>how I build.</em></h2>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <section className="skill-category" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skill-cloud">
                {category.skills.map((skill) => <span key={skill} className="skill">{skill}</span>)}
              </div>
            </section>
          ))}
        </div>
      </div>

      <p className="tools-note" style={{ marginTop: '50px', color: 'var(--muted)', fontSize: '14px', maxWidth: '460px' }}>
        Fluent in modern web engineering, data analytical tools, and leveraging AI as a thoughtful creative partner — from research and prototyping to building scalable products.
      </p>
    </section>
  );
}
