import React, { useState } from 'react';
import './App.css';
import headshot from './headshot.jpg'; // Place your headshot image in the src folder

function App() {
  const [currentPage, setCurrentPage] = useState('bio');

  return (
    <div className="portfolio-container">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand">Paul Chin | Executive to Technologist</div>
        <div className="nav-links">
          <button 
            className={currentPage === 'bio' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setCurrentPage('bio')}
          >
            Page 1: Bio & Experience
          </button>
          <button 
            className={currentPage === 'projects' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setCurrentPage('projects')}
          >
            Page 2: Project Gallery
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {currentPage === 'bio' ? (
          <div className="page-section fade-in">
            <div className="hero-section">
              <div className="hero-text">
                <h1>From Executive Boardroom to Full-Stack Engineering</h1>
                <p className="hero-subtitle">
                  Bridging 30+ years of corporate governance, financial leadership, and risk management with modern Full-Stack IT engineering.
                </p>
              </div>
              <div className="hero-image-container">
                <img 
                  src={headshot} 
                  alt="Paul Chin Professional Headshot" 
                  className="headshot-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/180?text=Paul+Chin";
                  }}
                />
              </div>
            </div>

            <section className="card-section">
              <h2>Professional Background</h2>
              <div className="experience-grid">
                <div className="info-card">
                  <h3>Finance Director & Chief Risk and Governance Officer</h3>
                  <span className="card-company">Fenner PLC (Greater China Region)</span>
                  <p>Directed financial operations, governance, risk management frameworks, human resources, and IT infrastructure across multinational environments.</p>
                </div>
                <div className="info-card">
                  <h3>Senior Investigation Officer</h3>
                  <span className="card-company">Singapore Police Force</span>
                  <p>Spearheaded complex investigative cases requiring meticulous analytical rigor, evidence evaluation, and adherence to legal frameworks.</p>
                </div>
              </div>
            </section>

            <section className="card-section">
              <h2>Education & Academic Distinction</h2>
              <div className="education-grid">
                <div className="info-card">
                  <h3>Republic Polytechnic</h3>
                  <span className="card-company">Diploma in Information Technology (Full Stack)</span>
                  <p>Director's Roll of Honour | Lee Foundation Higher Year Scholar (AY2026)</p>
                </div>
                <div className="info-card">
                  <h3>University of Manchester</h3>
                  <span className="card-company">Master of Business Administration (MBA)</span>
                </div>
                <div className="info-card">
                  <h3>National University of Singapore (NUS)</h3>
                  <span className="card-company">Bachelor of Accountancy (B.Acc.)</span>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="page-section fade-in">
            <div className="gallery-header">
              <h2>Project Gallery</h2>
              <p>A comprehensive showcase of deployed web applications and mobile app architectures built during full-stack studies, featuring personal design rationales and engineering decisions.</p>
            </div>

            <div className="projects-grid">
              {/* Web App 1 */}
              <div className="project-card">
                <span className="project-badge web">Web App 1</span>
                <h3>Andy's Pizza Co. Menu Application</h3>
                <p>
                  <strong>Design Rationale:</strong> Built to explore component-driven architecture and clean separation of concerns. I wanted to design an intuitive, high-performance customer-facing menu experience that prioritizes frictionless user navigation and fast load times.
                  <br /><br />
                  <strong>Tech Stack & Deployment:</strong> Built with <strong>React</strong> and <strong>JavaScript</strong> for modular component state management, deployed live on <strong>Netlify</strong>.
                </p>
                <div className="tech-stack">
                  <span>React</span><span>JavaScript</span><span>Netlify</span>
                </div>
                <div className="project-links">
                  <a href="https://c204-lesson7-paulchin.netlify.app" target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                  <a href="https://github.com/25031330-PaulChin/pizza-app" target="_blank" rel="noreferrer" className="btn secondary">GitHub Code</a>
                </div>
              </div>

              {/* Web App 2 */}
              <div className="project-card">
                <span className="project-badge web">Web App 2</span>
                <h3>Fixed Asset Management System</h3>
                <p>
                  <strong>Design Rationale:</strong> Drawing directly from my 30+ years of financial leadership and asset tracking governance, I designed this system to mirror enterprise internal controls. It enforces full CRUD accountability to manage asset registers and automatically calculate net book values with precision.
                  <br /><br />
                  <strong>Tech Stack & Deployment:</strong> Powered by <strong>Node.js</strong> and <strong>Express</strong> backend logic with <strong>EJS</strong> templating for server-side rendering, hosted live on <strong>Render</strong>.
                </p>
                <div className="tech-stack">
                  <span>Node.js</span><span>Express</span><span>EJS</span><span>Render</span>
                </div>
                <div className="project-links">
                  <a href="https://fixed-asset-app.onrender.com" target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                  <a href="https://github.com/25031330-PaulChin/fixed-asset-app" target="_blank" rel="noreferrer" className="btn secondary">GitHub Code</a>
                </div>
              </div>

              {/* Mobile App 1 */}
              <div className="project-card">
                <span className="project-badge mobile">Mobile App 1</span>
                <h3>Animal Quiz Mobile Application</h3>
                <p>
                  <strong>Design Rationale:</strong> Architected to test cross-platform mobile engagement and state validation. I structured the component hierarchy around modular logic (`Exercise3.js`) to handle interactive option picking cleanly while maintaining fluid UI rendering across different screen sizes.
                  <br /><br />
                  <strong>Tech Stack:</strong> Developed using <strong>React Native</strong> and <strong>Expo</strong> for robust mobile cross-platform execution.
                </p>
                <div className="tech-stack">
                  <span>React Native</span><span>Expo</span><span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/25031330-PaulChin/animal-quiz-app" target="_blank" rel="noreferrer" className="btn secondary full-width">GitHub Code Repository</a>
                </div>
              </div>

              {/* Mobile App 2 */}
              <div className="project-card">
                <span className="project-badge mobile">Mobile App 2</span>
                <h3>Boat Catalog Mobile Application</h3>
                <p>
                  <strong>Design Rationale:</strong> Designed as a structured product showcase for mobile commerce. My focus was on clean grid layout hierarchies, reusable stylesheet definitions, and efficient asset card rendering to deliver an organized catalog experience.
                  <br /><br />
                  <strong>Tech Stack:</strong> Engineered with <strong>React Native</strong> and <strong>Expo</strong> component structures.
                </p>
                <div className="tech-stack">
                  <span>React Native</span><span>Expo</span><span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/25031330-PaulChin/boat-app" target="_blank" rel="noreferrer" className="btn secondary full-width">GitHub Code Repository</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Paul Chin. Built with React & Modern Full-Stack Standards.</p>
      </footer>
    </div>
  );
}

export default App;