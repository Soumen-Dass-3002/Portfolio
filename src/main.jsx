import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'SQL',
  'Python', 'scikit-learn', 'Pandas', 'Prisma', 'REST APIs', 'Figma'
]

const tickerItems = 'FULL-STACK · DATA · ARTIFICIAL INTELLIGENCE · DESIGN-MINDED · '

const projects = [
  { number: '01', title: 'Your next full-stack product', type: 'Web application', label: 'Coming soon', className: 'project-one' },
  { number: '02', title: 'A data story worth exploring', type: 'Data analytics', label: 'Coming soon', className: 'project-two' },
  { number: '03', title: 'An AI idea brought to life', type: 'AI development', label: 'Coming soon', className: 'project-three' },
]

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <button className="logo" onClick={() => scrollTo('top')} aria-label="Go to top">SD<span>®</span></button>
        <div className="nav-links">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
        <button className="availability" onClick={() => scrollTo('contact')}><i /> Available for internships</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-tag"><span>✦</span> Full-stack developer · Data analyst · AI builder</div>
        <h1>Building what<br /><em>matters</em> next.</h1>
        <div className="hero-bottom">
          <p className="intro">I’m Soumen Dass — a third-year Computer Science & AI student creating thoughtful digital products, useful data experiences, and practical AI tools.</p>
          <button className="circle-link" onClick={() => scrollTo('work')} aria-label="View selected work">↓</button>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
        <div className="portrait-frame" aria-hidden="true">
          <div className="portrait-backdrop" />
          <img className="portrait" src="/soumen-dass.png" alt="" />
          <span className="portrait-label">Soumen<br />Dass</span>
        </div>
        <div className="orb orb-b" />
        <div className="grid-pattern" />
      </section>

      <section className="marquee" aria-label="Focus areas">
        <div className="marquee-track">
          <div className="marquee-group">{tickerItems} {tickerItems}</div>
          <div className="marquee-group" aria-hidden="true">{tickerItems} {tickerItems}</div>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-kicker"><span>01</span> Selected work</div>
        <div className="work-heading">
          <h2>Ideas, now<br />in <em>progress.</em></h2>
          <p>I’m currently shaping a focused body of work across web development, AI, and data. These spaces are reserved for the projects I’m building next.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="card-top"><span>{project.number}</span><span>{project.label}</span></div>
              <div className="mockup" aria-hidden="true">
                {project.number === '01' && <><div className="browser-bar" /><div className="mock-lines"><b /><b /><b /></div><div className="mock-panel" /></>}
                {project.number === '02' && <><div className="chart"><span /><span /><span /><span /><span /></div><div className="chart-copy" /></>}
                {project.number === '03' && <><div className="ai-ring" /><div className="ai-dot dot-one" /><div className="ai-dot dot-two" /><div className="ai-dot dot-three" /></>}
              </div>
              <div className="card-bottom"><div><h3>{project.title}</h3><p>{project.type}</p></div><Arrow /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-grid shell">
          <div className="section-kicker light"><span>02</span> A little about me</div>
          <div className="about-content">
            <p className="about-lead">A curious builder at the intersection of <em>technology, data,</em> and good design.</p>
            <p>I’m pursuing B.Tech in Computer Science & Artificial Intelligence at Rishihood University, with a minor in Design. I care about making technology feel clear, useful, and human — whether that means a full-stack application, a data dashboard, or an AI-assisted experience.</p>
            <a className="text-link" href="#contact">More about my journey <Arrow /></a>
          </div>
        </div>
        <div className="stats shell">
          <div><strong>2024—28</strong><span>B.Tech CSE & AI<br />Rishihood University</span></div>
          <div><strong>1 mo.</strong><span>Data analyst intern<br />Unessa Foundation</span></div>
          <div><strong>3+</strong><span>Disciplines in<br />active practice</span></div>
        </div>
      </section>

      <section className="experience shell section">
        <div className="section-kicker"><span>03</span> Experience & recognition</div>
        <div className="experience-grid">
          <div className="experience-item featured">
            <div className="experience-meta"><span>2026</span><span>Internship</span></div>
            <h3>Data Analyst Intern</h3>
            <p className="company">Unessa Foundation <span>— Education & social impact NGO</span></p>
            <p className="experience-copy">Organised program records and structured datasets across children, volunteers, learning activities, and community outreach — helping create a clearer foundation for analysis.</p>
            <div className="chips"><span>Data cleaning</span><span>Data organisation</span><span>Program records</span></div>
          </div>
          <div className="achievement-list">
            <p className="label">Recognition</p>
            <article><span>01</span><div><h4>10th rank, Junior Coding Olympiad</h4><p>Placed 10th among 16,850 competitors.</p></div></article>
            <article><span>02</span><div><h4>3rd rank, Game Hackathon</h4><p>Got 3rd rank for building an original Scratch game.</p></div></article>
            <article><span>03</span><div><h4>5th rank, AI Hackathon</h4><p>Newton School of Technology.</p></div></article>
          </div>
        </div>
      </section>

      <section className="skills section shell">
        <div className="section-kicker"><span>04</span> Toolkit</div>
        <div className="skills-layout">
          <h2>Tools I’m<br /><em>growing with.</em></h2>
          <div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={`skill skill-${index}`}>{skill}</span>)}</div>
        </div>
        <p className="tools-note">Also fluent in using AI as a thoughtful creative partner — from research and prototyping to writing, building, and iterating.</p>
      </section>

      <footer id="contact">
        <div className="footer-shell shell">
          <p className="footer-kicker">Have an idea, role, or challenge?</p>
          <h2>Let’s make<br />it <em>real.</em></h2>
          <a className="email-link" href="mailto:soumendass.dev@gmail.com">soumendass3002@<br />gmail.com <Arrow /></a>
          <div className="footer-bottom"><span>© 2026 Soumen Dass</span><span>Delhi, India</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
