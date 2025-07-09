import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <header className={`app__header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
        </div>
        
        {/* Desktop Navigation */}
        <ul className="app__navbar-links"> 
          {['home', 'about', 'experience', 'skills'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item === 'home' ? '' : item}`}
                className={`app__navbar-link ${active === `/${item}` || (active === '/' && item === 'home') ? 'active' : ''}`}
                onClick={() => setActive(item === 'home' ? '/' : `/${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {active === `/${item}` || (active === '/' && item === 'home') ? (
                  <motion.div
                    layoutId="active"
                    className="active-indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="app__navbar-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              ref={menuRef}
            >
              <ul className="mobile-menu"> 
                {['home', 'about', 'experience', 'skills'].map((item) => ( //is 'projects' is hide
                  <motion.li 
                    key={item}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * parseInt(item.length.toString()) }}
                  >
                    <Link
                      to={`/${item === 'home' ? '' : item}`}
                      className={`mobile-link ${active === `/${item}` || (active === '/' && item === 'home') ? 'active' : ''}`}
                      onClick={() => {
                        setActive(item === 'home' ? '/' : `/${item}`);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
