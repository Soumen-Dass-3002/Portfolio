import React from 'react';
import { stats } from '../data/portfolioData';

export function StatsRibbon() {
  return (
    <section className="stats-ribbon">
      <div className="container stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
