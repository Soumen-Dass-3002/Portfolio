# Soumen Dass - Portfolio

![Portfolio Banner](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-React_%7C_Vite_%7C_JavaScript_%7C_CSS3-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)

A high-performance, responsive executive portfolio built for **Soumen Dass** — 3rd-year B.Tech CS & AI scholar at Rishihood University (Newton School of Technology). Showcasing full-stack web applications, data analytics workflows, and Gen AI solutions with a modern editorial aesthetic.

---

## 🌟 Live Demo & Socials

- 🚀 **Live Portfolio**: [soumen-dass-portfolio.vercel.app](https://soumen-dass-portfolio.vercel.app/)
- 💼 **LinkedIn**: [soumen-dass](https://www.linkedin.com/in/soumen-dass-a69b94317/)
- 🐙 **GitHub**: [Soumen-Dass-3002](https://github.com/Soumen-Dass-3002)
- ✉️ **Email**: [soumendass3002@gmail.com](mailto:soumendass3002@gmail.com)
- 📱 **WhatsApp**: [+91 8882241153](https://wa.me/918882241153)

---

## 🎨 Design & Key Features

- **Editorial Paper Aesthetic**: Styled with a curated palette (`#f4f1eb` Paper, `#141414` Ink, `#d6ff32` Acid Green) and typography (`DM Sans`, `DM Mono`, `Playfair Display`).
- **📱 100% Mobile Responsive**: Seamless layout across all screen sizes (320px to 4K) with a Right-to-Left Slide-over Drawer Sidebar navigation on mobile.
- **🪐 Satellite Skill & Social Orbs**: Floating animated orbs (`Node.js`, `LinkedIn`, `GitHub`, `Python`) surrounding the circular hero portrait.
- **📈 Graph Scale Grid Background**: Custom masked SVG grid pattern overlaying the hero section.
- **📊 Real-World Analytics Highlights**: Featured Kaggle Netflix 10,000+ record Exploratory Data Analysis (EDA) & Data Analyst internship at Unessa Foundation.
- **🏆 Custom Recognition Badges**: Highlights 10th Rank in Junior Coding Olympiad (out of 16,850+ competitors) and 5th Rank in Newton School of Technology AI Hackathon.
- **📄 Executive Resume Viewer**: Integrated printable resume modal.

---

## 🛠️ Tech Stack

- **Core**: React 18, JavaScript (ES6+), HTML5
- **Styling**: Vanilla CSS3, CSS Custom Variables, Modern Flexbox & Grid Systems
- **Build Tool**: Vite
- **Typography**: Google Fonts (DM Sans, DM Mono, Playfair Display)
- **Deployment**: Vercel

---

## 📁 Project Structure

```text
Portfolio-1/
├── public/
│   ├── soumen-dass.png       # Hero portrait image
│   ├── olympiad-logo.png     # Junior Coding Olympiad logo
│   ├── hackathon-logo.png    # Newton School AI Hackathon logo
│   └── unessa-logo.png       # Unessa Foundation NGO logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation & Mobile Sidebar Drawer
│   │   ├── Hero.jsx          # Hero Overview with Satellite Orbs
│   │   ├── Marquee.jsx       # Infinite Loop Skills Ticker
│   │   ├── Profile.jsx       # Engineering Deliverables & EDA Impact
│   │   ├── Projects.jsx      # Selected Projects Showcase
│   │   ├── Experience.jsx    # Work Experience & Hackathon Achievements
│   │   ├── Skills.jsx        # Technical Toolkit
│   │   ├── Contact.jsx       # Footer & Direct Contact Links
│   │   ├── ResumeModal.jsx   # Printable Executive CV Modal
│   │   └── Icons.jsx         # Custom Vector SVG Icons
│   ├── data/
│   │   └── portfolioData.js  # Centralized Content Data & Links
│   ├── App.jsx               # Application Root Component
│   ├── main.jsx              # Vite Entrypoint
│   └── styles.css            # Master Design System & Media Queries
├── index.html                # HTML5 Template with OpenGraph & Schema.org
├── package.json
└── vite.config.js
