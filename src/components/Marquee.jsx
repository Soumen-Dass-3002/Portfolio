import React from 'react';

const tickerItems = 'FRONTEND DEVELOPER · AI DEVELOPER · DATA ANALYST · REACT · PYTHON · GEN AI · NODE.JS · SQL · ';

export function Marquee() {
  return (
    <section className="marquee" aria-label="Focus areas ticker">
      <div className="marquee-track">
        <div className="marquee-group">
          <span>{tickerItems}</span>
          <span>{tickerItems}</span>
        </div>
        <div className="marquee-group" aria-hidden="true">
          <span>{tickerItems}</span>
          <span>{tickerItems}</span>
        </div>
      </div>
    </section>
  );
}
