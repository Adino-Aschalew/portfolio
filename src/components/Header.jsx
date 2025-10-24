import { useState, useEffect } from 'react';
import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { PageLinks } from './NavLinks';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../assets/image.jpg'

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setShowNav(false);
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <HiOutlineMail />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home" className="logo-link">
            Adino<span className="logo-dot">.</span>
          </a>
        </div>
        <button 
          className={`mobile-toggle ${showNav ? 'active' : ''}`} 
          onClick={() => setShowNav(!showNav)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <motion.ul 
            className="nav-links"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {PageLinks.map((link) => (
              <motion.li 
                key={link.id} 
                className="nav-item"
                variants={navItemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                  <span className="nav-indicator"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Navigation Toggle */}

        {/* Mobile Navigation */}
        <AnimatePresence>
          {showNav && (
            <motion.div 
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
            >
              <div className="mobile-nav-header">
                <span className="nav-title">Navigation</span>
                     <img src={image} alt='profile' className='nav-img'/>
                  <small className='small'>adino aschalew</small>
               
              </div>
              
              <nav className="mobile-nav-content">
                <ul className="mobile-nav-links">
                  {PageLinks.map((link) => (
                    <motion.li 
                      key={link.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * link.id }}
                      onClick={closeMobileMenu}
                    >
                      <a href={link.href} className="mobile-nav-link">
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * index + 0.5 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;