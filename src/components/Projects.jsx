import React from 'react';
import { projects } from '../data/portfolioData';

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export function Projects() {
  return (
    <section className="work shell section" id="work">
      <div className="section-kicker">
        <span>02</span> Selected work
      </div>

      <div className="work-heading">
        <h2>
          Projects<br />
          <span>I worked on.</span>
        </h2>

        <p>
          I’m currently shaping a focused body of work across web development,
          AI, and data. These spaces highlight the projects I’m actively building.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.className}`} key={project.id}>
            <div className="card-top">
              <span>{project.number}</span>
              <span>{project.label}</span>
            </div>

            <div>
              <p className="card-desc">{project.description}</p>
            </div>

            <div className="card-bottom">
              <div>
                <h3>{project.title}</h3>
                <p>{project.type}</p>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
