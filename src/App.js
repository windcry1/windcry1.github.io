import './App.css';

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const capabilities = [
  {
    number: '01',
    title: 'iOS Engineering',
    subtitle: '原生体验与工程质量',
    description: '专注 iOS 客户端研发，关注架构、性能与交互细节，让复杂业务保持稳定、流畅和可持续演进。',
    tags: ['Swift', 'UIKit / SwiftUI', 'Architecture'],
  },
  {
    number: '02',
    title: 'AI Agents',
    subtitle: '智能体与工作流实践',
    description: '具备 AI Agent 应用能力，能够围绕真实场景设计工具调用、上下文管理与自动化工作流。',
    tags: ['Agentic Workflow', 'LLM', 'Tool Use'],
  },
  {
    number: '03',
    title: 'AI Full-stack',
    subtitle: '从界面到智能服务',
    description: '拥有前端与 AI 全栈研发经验，能将产品构想快速连接到可交付的 Web 界面、服务与 AI 能力。',
    tags: ['Frontend', 'Backend', 'AI Product'],
  },
];

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">W</span>
          <span>WindCry1</span>
        </a>
        <nav aria-label="主要导航">
          <a href="#about">关于</a>
          <a href="#capabilities">能力</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero-copy">
            <div className="status"><span /> AVAILABLE FOR IDEAS &amp; COLLABORATION</div>
            <p className="eyebrow">iOS ENGINEER · AI BUILDER</p>
            <h1>把产品想法，<br /><em>做成真正可用的体验。</em></h1>
            <p className="intro">
              你好，我是 <strong>Yu Hao</strong>。目前在一家中国大型互联网企业担任
              <strong> iOS 研发工程师</strong>，同时持续探索 AI Agent、前端与 AI 全栈研发。
              我喜欢把工程能力、产品直觉和新技术组合起来，解决真实问题。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://github.com/windcry1" target="_blank" rel="noreferrer">
                <GithubIcon /> 查看 GitHub <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:lanceyu120@gmail.com">发邮件给我 <ArrowIcon /></a>
            </div>
            <div className="hero-meta" aria-label="个人信息概览">
              <div><span>BASE</span><strong>China</strong></div>
              <div><span>FOCUS</span><strong>iOS · AI · Web</strong></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="code-card">
              <div className="card-topbar">
                <div><i /><i /><i /></div>
                <span>profile.swift</span>
              </div>
              <pre><code><span className="code-muted">{'// Build with curiosity.'}</span>{'\n'}<span className="code-purple">struct</span> <span className="code-yellow">Engineer</span> {'{'}{'\n'}  <span className="code-blue">let</span> role = <span className="code-green">"iOS"</span>{'\n'}  <span className="code-blue">let</span> craft = [{'\n'}    <span className="code-green">"AI Agents"</span>,{'\n'}    <span className="code-green">"Frontend"</span>,{'\n'}    <span className="code-green">"Full-stack"</span>{'\n'}  ]{'\n'}{'}'}</code></pre>
              <div className="card-status"><span /> building what matters</div>
            </div>
            <div className="floating-tag tag-swift">Swift</div>
            <div className="floating-tag tag-ai">AI <span>✦</span></div>
          </div>
        </section>

        <section className="capabilities" id="capabilities">
          <div className="section-heading">
            <p className="eyebrow">WHAT I DO</p>
            <h2>跨越端、Web 与 AI，<br />把能力连成完整产品。</h2>
            <p>不止于写代码，更关心技术如何变成清晰、可靠、有价值的用户体验。</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <div className="card-number">{item.number}</div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principle">
          <div className="principle-mark">✦</div>
          <p>好的工程，不只是让功能运行。<br /><strong>它让复杂变得自然，让想法抵达用户。</strong></p>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-copy">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>有值得实现的想法？<br /><em>欢迎来聊聊。</em></h2>
        </div>
        <div className="footer-links">
          <a href="mailto:lanceyu120@gmail.com">lanceyu120@gmail.com <ArrowIcon /></a>
          <a href="https://github.com/windcry1" target="_blank" rel="noreferrer">GitHub / windcry1 <ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Yu Hao</span>
          <span>Designed &amp; built with intention.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
