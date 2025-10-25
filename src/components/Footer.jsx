import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">Adino</span>
          <span className="logo-dot">.</span>
        </div>
        
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Adino-Aschalew" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/Adino-Aschalew" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Adino-Aschalew" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="adinoaschalew1995@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Adino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
