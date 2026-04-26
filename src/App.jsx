import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import ContactForm from './components/ContactForm';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="app-canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#050505' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.1}>
            <Experience />
            <Scroll html style={{ width: '100vw' }}>
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
                    <h2>RESTAURANT ORDERING APP</h2>
                    <p>A restaurant app that allows users to order food and track their order status.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                      <a href="https://hotel-customer.vercel.app/" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        ↗ Live Demo
                      </a>
                    </div>
                  </div>
                </section>

                {/* Page 3: Project 2 */}
                <section className="section">
                  <div className="project-info">
                    <h3>Project 02</h3>
                    <h2>SOCIETY MANAGEMENT</h2>
                    <p>A Society Management System is a comprehensive software solution designed to streamline the operations of residential communities, housing societies, and apartment complexes.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href="https://society-one-kohl.vercel.app/" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
                  <ContactForm />
                </section>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
