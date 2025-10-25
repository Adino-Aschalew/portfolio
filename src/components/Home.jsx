import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/image.jpg';
import '../index.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSocial, setShowSocial] = useState(false);
  const socialRef = useRef(null);
  const fullText = 'Frontend Developer';
  const typingSpeed = 100; // ms per character

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Fade in effect
  useEffect(() => {
    setIsVisible(true);
    
    // Handle click outside to close social menu
    const handleClickOutside = (event) => {
      if (socialRef.current && !socialRef.current.contains(event.target)) {
        setShowSocial(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <HiOutlineMail />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div 
          className="home-content"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="text-content" variants={itemVariants}>
            <motion.p className="greeting" variants={itemVariants}>
              Hello, I'm
            </motion.p>
            <motion.h1 className="name" variants={itemVariants}>
              Adino Aschalew
            </motion.h1>
            <motion.h2 className="title" variants={itemVariants}>
              {currentText}
              <span className="cursor">|</span>
            </motion.h2>
            <motion.p className="description" variants={itemVariants}>
              I craft exceptional digital experiences with modern web technologies.
              Let's build something amazing together!
            </motion.p>
            <motion.div className="cta-buttons" variants={itemVariants}>
              <a href="#contact" className="btn primary-btn">
                Get In Touch <FaArrowRight className="btn-icon" />
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="btn secondary-btn"
              >
                Download CV <FaDownload className="btn-icon" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="image-container" variants={itemVariants}>
            <div className="image-wrapper">
              <img 
                src={heroImage} 
                alt="Adino Aschalew" 
                className="profile-image"
              />
              <div className="floating-shapes">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`shape shape-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <div className="social-container" ref={socialRef}>
          <button 
            className={`social-toggle ${showSocial ? 'active' : ''}`}
            onClick={() => setShowSocial(!showSocial)}
            aria-label="Toggle social links"
          >
            <span className="plus-icon">+</span>
          </button>
          
          <AnimatePresence>
            {showSocial && (
              <motion.div 
                className="social-links"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={socialVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Home;