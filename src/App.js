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
              <p>A comprehensive showcase of deployed web applications and mobile app architectures built during full-stack studies.</p>
            </div>

            <div className="projects-grid">
              {/* Web App 1 */}
              <div className="project-card">
                <span className="project-badge web">Web App 1</span>
                <h3>Andy's Pizza Co. Menu Application</h3>
                <p>A responsive online menu application built using React components, allowing users to browse food selections, view item details, and interact with a dynamic menu interface.</p>
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
                <p>A corporate asset tracking web application featuring full CRUD functionality to manage asset registers, track cost centers, and automatically calculate net book values.</p>
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
                <p>An interactive mobile quiz application featuring custom component architecture (Exercise3.js), dynamic picker selection, and integrated animal image assets.</p>
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
                <p>A mobile product catalog application demonstrating advanced UI layout structures, custom styling sheets, and structured asset card rendering for maritime listings.</p>
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