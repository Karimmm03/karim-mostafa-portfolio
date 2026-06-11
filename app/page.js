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

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}