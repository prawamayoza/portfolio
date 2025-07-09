import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import avatar from '../../assets/images/avatar.jpg';
import cvFile from '../../assets/files/CV-Yoza Prawama.pdf';
import './Home.css';

const TEXTS = [
  'Quality Assurance',
  'Automation Testing',
  'Unit Testing'
];

const TypeWriter = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = TEXTS[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        // Delete text
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      } else {
        // Type text
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        // Move to next text after deleting
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, typingSpeed]);

  return <span className="type-animation">{displayText}<span className="cursor">|</span></span>;
};

const Home = () => {
  return (
    <section className="app__home">
      <div className="app__home-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="app__home-content"
        >
          <div className="app__home-info">
            <h4 className="app__home-subtitle">Hello, I'm</h4>
            <h1 className="app__home-title">Yoza Prawama</h1>
            <div className="app__home-typewriter">
              <TypeWriter />
            </div>
            <p className="app__home-description">
              I'm a dedicated Quality Assurance specialist skilled in automation testing, unit testing, and ensuring high-quality software through modern testing practices. I focus on delivering clean, efficient, and user-friendly applications.
            </p>
            <div className="app__home-buttons" style={{ justifyContent: 'center' }}>
              <a
                href={cvFile}
                download="CV-Yoza-Prawama.pdf"
                className="app__home-button primary"
              >
                Download CV
              </a>
            </div>
            <div className="app__home-social">
              <a
                href="https://github.com/prawamayoza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yoza-prawama-334456268"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:prawamayoza@gmail.com"
                aria-label="Email"
                className="social-icon"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/6285863518629"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-icon"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <motion.div 
            className="app__home-avatar-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="app__home-avatar">
              <img 
                src={avatar} 
                alt="Profile" 
                className="app__home-avatar"
              />
              <div className="app__home-avatar-border"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
