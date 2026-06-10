function Nav() {
  return (
    <nav className="nav">
      <a href="/">home</a>
      <a href="https://github.com/Karimmm03" target="_blank" rel="noopener noreferrer">github</a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
    </nav>
  )
}

export default function Home() {
  return (
    <main>
      <Nav />
      <h1>Karim Mostafa</h1>
    </main>
  )
}