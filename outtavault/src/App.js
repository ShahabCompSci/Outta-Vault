import React from 'react';
import './App.css';
import logo from './assets/img/logo.png'; // Replace this with your actual logo path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="Krys Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <button className="get-started">Get Started</button>
        </nav>

        <div className="hero-section">
          <h1>Financial Choice.</h1>
          <p>Make it easier with Krys, your trusted financial partner.</p>
          <div className="stats">
            <span>4M+ Users</span>
            <span>1M Digital Transactions</span>
          </div>
          <div className="cta-buttons">
            <button className="cta-button">See the Performance</button>
          </div>
        </div>

        <div className="services-section">
          <h2>Manage Your Money from One Application</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Basic Card</h3>
              <p>Great for everyday use</p>
            </div>
            <div className="service-item">
              <h3>Platinum Card</h3>
              <p>For those who need more</p>
            </div>
            <div className="service-item">
              <h3>Premium Card</h3>
              <p>Best for exclusive users</p>
            </div>
          </div>
        </div>

        <div className="download-section">
          <h2>Application to Make It Easier For You</h2>
          <button className="download-button">Download Now</button>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Krys. All Rights Reserved.</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
 