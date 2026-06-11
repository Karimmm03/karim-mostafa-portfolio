import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const PROJECTS = [
  {
    year: '2025',
    name: 'Tactix',
    href: 'https://github.com/Karimmm03/tactix-graduation-project-Backend',
    desc: 'Production sports analysis platform. Team management, player stats, media uploads, AI insights, and role-based access control.',
    stack: ['Node.js', 'MongoDB', 'Redis', 'OpenAI', 'AWS S3', 'Vercel'],
  },
  {
    year: '2026',
    name: 'pray-cli',
    href: 'https://github.com/Karimmm03/prayer-cli',
    desc: 'Go CLI for Islamic prayer times. Standard library only, file-backed caching, live ANSI countdown, cross-platform notifications.',
    stack: ['Go', 'CLI', 'AlAdhan API'],
  },
  {
    year: '2026',
    name: 'user-auth-api',
    href: 'https://github.com/Karimmm03/user-auth-api',
    desc: 'Production-grade authentication service. JWT + refresh token rotation, forgot-password flow, PostgreSQL, rate limiting.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
]

const TOOLKIT = [
  'Node.js', 'Express', 'JavaScript', 'Go', 'C++',
  'PostgreSQL', 'MongoDB', 'Redis', 'JWT',
  'AWS S3', 'Cloudinary', 'Vercel',
  'Git', 'REST APIs', 'Linux / WSL2',
]

function Nav() {
  return (
    <nav className="nav">
      <a href="/">home</a>
      <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">github</a>
      <a href="https://drive.google.com/file/d/1Z9Qp_jy2Bysaifx_8pFrWLglj0WetiFu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero">
      <h1>
        Karim Mostafa
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="hero-role">// backend software engineer</p>

      <div className="hero-links">
        <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">
          <FaGithub size={18} />
          <span>github</span>
        </a>
        <a href="https://www.linkedin.com/in/karim-mostafa-0804k2003" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={18} />
          <span>linkedin</span>
        </a>
        <a href="https://x.com/KarimMostafa___" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={18} />
          <span>X.com</span>
        </a>
        <a href="mailto:karimmostafa842003@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail size={18} />
          <span>email</span>
        </a>
      </div>

      <p className="hero-bio">
        CS graduate. Building production-grade backend
        systems with Node.js. Targeting engineering roles at top-tier tech companies.
      </p>
      <p className="hero-bio">
        Currently working on{' '}
        <a href="https://github.com/Karimmm03/tactix-graduation-project-Backend" target="_blank" rel="noopener noreferrer">Tactix</a>
        {' '}— a sports analysis platform — and exploring system design, DSA, and Go.
      </p>

      <div className="hero-actions">
        <a href="https://drive.google.com/file/d/1Z9Qp_jy2Bysaifx_8pFrWLglj0WetiFu/view?usp=drive_link" className="action-link" target="_blank" rel="noopener noreferrer">
          ↗ resume.pdf
        </a>
        <a href="https://drive.google.com/file/d/1p9JPMT_V4Wjs5en9KQnZHe5VY3jbt3VM/view?usp=drive_link" className="action-link" target="_blank" rel="noopener noreferrer">
          ▶ intro video
        </a>
      </div>
    </div>
  )
}

function Project({ year, name, href, desc, stack }) {
  return (
    <a href={href} className="project" target="_blank" rel="noopener noreferrer">
      <span className="project-year">{year}</span>
      <div className="project-body">
        <div className="project-name">{name}</div>
        <div className="project-desc">{desc}</div>
        <div className="project-stack">
          {stack.map((tech) => (
            <span className="badge" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

function Projects() {
  return (
    <section>
      <p className="section-title">Projects</p>
      <div className="projects">
        {PROJECTS.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}

function Toolkit() {
  return (
    <section>
      <p className="section-title">Toolkit</p>
      <div className="toolkit">
        {TOOLKIT.map((tool) => (
          <span className="tool" key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>Karim Mostafa — Giza, Egypt</span>
      <span>
        <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">github</a>
        {' · '}
        <a href="https://www.linkedin.com/in/karim-mostafa-0804k2003" target="_blank" rel="noopener noreferrer">linkedin</a>
        {' · '}
        <a href="https://x.com/KarimMostafa___" target="_blank" rel="noopener noreferrer">x</a>
      </span>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Toolkit />
      <Footer />
    </main>
  )
}