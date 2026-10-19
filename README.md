# John Renald Hidalgo | Portfolio

My personal portfolio showcasing my experience in **IT Support**, **Quality Assurance**, and **AI Automation**, alongside selected school projects.

**Live website:** [renaldportfolio.vercel.app](https://renaldportfolio.vercel.app/)

**Repository:** [Renld64/renaldportfolio](https://github.com/Renld64/renaldportfolio)

## About me

I am an IT Support professional with hands-on experience troubleshooting hardware, software, and network issues. My interests and skills also include structured testing, system reliability, and AI-powered automation workflows that reduce repetitive work.

## Features

- Interactive 3D character and animated desktop experience
- Responsive mobile layout with my profile photo
- Career history and service descriptions
- Project galleries with individual image zoom
- Filipino Dishes App video demonstration
- Downloadable resume and social profile links
- Playable chess experience with a checkmate popup
- Return navigation that remembers the previous homepage position

## Selected projects

- **3D Shortfilm Animation** — A Blender capstone short film about students navigating challenges during the pandemic. Gallery previews were recreated with AI from reference images.
- **Filipino Dishes App** — A second-year Android Studio project developed with John Carlo Cruz and Arjahn Dave Cruz. Users can select a Filipino dish to view ingredients and cooking instructions.
- **Lakbay Transit** — An Android Studio mobile application project focused on ticket booking and communication between passengers and bus drivers.
- **Arduino Flood Monitoring System** — An Arduino-based project using sensors to monitor water levels and a GSM module to support alerts.

## Tech stack

React, TypeScript, Vite, Three.js, GSAP, Lenis, HTML, and CSS. Hosted on Vercel.

## Run locally

```bash
git clone https://github.com/Renld64/renaldportfolio.git
cd renaldportfolio
npm install
npm run dev
```

If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev` instead.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`. Vercel routing is configured in `vercel.json`.

## Configuration

- Personal information, career history, projects, and links: `src/config.ts`
- Images and resume: `public/`
- Project demo video: `public/video/`
- Hero layout: `src/components/Landing.tsx` and its stylesheet

The optional chat API requires a server-side `GROQ_API_KEY` environment variable in Vercel. Never commit API keys. Some inherited chat persona content still needs personalization; the chat feature is not configured in production.

## Connect

- **Email:** [renaldmain02@gmail.com](mailto:renaldmain02@gmail.com)
- **GitHub:** [Renld64](https://github.com/Renld64)
- **JobStreet:** [John Renald Hidalgo](https://ph.jobstreet.com/profiles/johnrenald-hidalgo-VdY85V8p7p)
- **Facebook:** [John Renald](https://www.facebook.com/john.renaldz.cortez)
- **Instagram:** [@__renald64](https://www.instagram.com/__renald64/)
- **Location:** Philippines

## Attribution and license

I customized an open-source portfolio template to showcase my experience in IT Support, Quality Assurance, and AI Automation.

The original template was created by **Redoyanul Haque**: [red1-for-hek/portfolio-website](https://github.com/red1-for-hek/portfolio-website). The site retains template components, including its 3D character and chess experience.

Distributed under the **MIT License**. The original copyright and license notice are preserved in [LICENSE](LICENSE).