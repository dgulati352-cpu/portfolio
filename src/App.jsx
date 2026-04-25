import React, { useEffect } from 'react';

export default function App() {
  // Hide loader when component mounts
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }, []);

  return (
    <div className="portfolio-container">
      {/* Page 1: Hero */}
      <section className="section">
        <h1>Creative Developer</h1>
        <p>Crafting immersive experiences and premium web applications.</p>
        <p>Scroll down to explore my projects.</p>
      </section>

      {/* Page 2: Project 1 */}
      <section className="section right">
        <div className="project-info">
          <h3>Project 01</h3>
          <h2>MediNova Healthcare</h2>
          <p>An advanced hospital management system with AI triage, sophisticated dark theme, and robust dashboard features.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <a href="https://github.com/dgulati352-cpu" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ↗ Live Demo
            </a>
            <a href="https://github.com/dgulati352-cpu" target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', border: '1px solid #6366f1' }}>
              &lt;/&gt; Code
            </a>
          </div>
        </div>
      </section>

      {/* Page 3: Project 2 */}
      <section className="section">
        <div className="project-info">
          <h3>Project 02</h3>
          <h2>Restaurant Ordering</h2>
          <p>A full-stack ordering platform with automated table detection, real-time status updates, and a Swiggy-inspired premium light UI.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/dgulati352-cpu" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ↗ Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Page 4: Project 3 */}
      <section className="section right">
        <div className="project-info">
          <h3>Project 03</h3>
          <h2>DeepThink Cosmic</h2>
          <p>A highly responsive mobile-first cosmic interface with intelligent features and sleek workspace management.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <a href="https://github.com/dgulati352-cpu" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ↗ Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Page 5: Contact */}
      <section className="section center">
        <h2>Let's build something amazing together.</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
        <a href="mailto:dgulati352@gmail.com" className="btn" style={{ marginTop: '2rem' }}>Contact Me</a>
      </section>
    </div>
  );
}
