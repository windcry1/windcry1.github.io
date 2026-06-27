import './App.css';

function App() {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <a href="#about" aria-label="Yu Hao — back to introduction">Yu Hao</a>
        <p>iOS Engineer · China</p>
      </header>

      <main className="profile-content" id="about">
        <p className="section-label">Introduction</p>
        <h1>Hello, I&rsquo;m Yu Hao.</h1>

        <div className="introduction">
          <p className="lead">
            I currently work as an iOS engineer at a large internet company in China.
          </p>
          <p>
            Alongside iOS development, I have hands-on experience with AI agents,
            front-end development, and AI full-stack development. I enjoy turning
            ideas into simple, reliable software.
          </p>
        </div>

        <section className="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <div className="contact-links">
            <a href="https://github.com/windcry1" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <span>@windcry1 ↗</span>
            </a>
            <a href="mailto:lanceyu120@gmail.com">
              <span>Email</span>
              <span>lanceyu120@gmail.com ↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="profile-footer">
        <span>© {new Date().getFullYear()} Yu Hao</span>
        <span>WindCry1</span>
      </footer>
    </div>
  );
}

export default App;
