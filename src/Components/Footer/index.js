import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mary Muthoni. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/SGarachu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mary-muthoni-2330b5183/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/mary-garachu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
