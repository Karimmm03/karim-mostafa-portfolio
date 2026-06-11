const PROJECTS = [
  {
    year: '2025',
    name: 'Tactix 3.0',
    href: 'https://github.com/Karimmm03',
    desc: 'Production sports analysis platform. Team management, player stats, media uploads, AI insights, and role-based access control.',
    stack: ['Node.js', 'MongoDB', 'Redis', 'OpenAI', 'AWS S3', 'Vercel'],
  },
  {
    year: '2025',
    name: 'pray',
    href: 'https://github.com/Karimmm03/prayer-cli',
    desc: 'Go CLI for Islamic prayer times. Standard library only, file-backed caching, live ANSI countdown, cross-platform notifications.',
    stack: ['Go', 'CLI', 'AlAdhan API'],
  },
  {
    year: '2024',
    name: 'user-auth-api',
    href: 'https://github.com/Karimmm03',
    desc: 'Production-grade authentication service. JWT + refresh token rotation, forgot-password flow, PostgreSQL, rate limiting.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
  },
]

function Nav() {
  return (
    <nav className="nav">
      <a href="/">home</a>
      <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">github</a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
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
        <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">↗ github</a>
        <a href="https://linkedin.com/in/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">↗ linkedin</a>
        <a href="https://x.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">↗ x.com</a>
      </div>

      <p className="hero-bio">
        CS student at Shorouk Academy, Cairo. Building production-grade backend
        systems with Node.js. Targeting engineering roles at top-tier tech companies.
      </p>
      <p className="hero-bio">
        Currently working on{' '}
        <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">Tactix</a>
        {' '}— a sports analysis platform — and exploring system design, DSA, and Go.
      </p>

      <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
        ↗ resume.pdf
      </a>
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

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
    </main>
  )
}