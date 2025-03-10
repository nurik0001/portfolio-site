import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 50], [0.9, 1]);
  const navbarBlur = useTransform(scrollY, [0, 50], [8, 12]);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'Обо мне' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/contact', label: 'Контакты' }
  ];

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Закрытие меню при смене маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      style={{ 
        opacity: navbarOpacity,
        backdropFilter: `blur(${navbarBlur}px)`
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 dark:bg-secondary-900/90 shadow-lg' 
          : 'bg-white/50 dark:bg-secondary-900/50'}`}
      role="navigation"
      aria-label="Главное меню"
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link 
            to="/" 
            className="relative group"
            aria-label="На главную"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                NU
              </span>
            </motion.div>
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group px-4 py-2"
                role="menuitem"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className={`relative z-10 text-sm font-medium transition-colors duration-200
                  ${location.pathname === item.path
                    ? 'text-primary-500'
                    : 'text-gray-600 dark:text-gray-300 group-hover:text-primary-500'
                  }`}
                >
                  {item.label}
                </span>
                
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Правая часть с контролами */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSelector />
            
            {/* Кнопка переключения темы */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              onKeyPress={(e) => handleKeyPress(e, toggleTheme)}
              className="relative group p-2 rounded-lg bg-gray-100 dark:bg-secondary-800"
              aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            >
              {theme === 'dark' ? (
                <FaSun className="text-gray-600 dark:text-gray-300 group-hover:text-primary-500" size={18} />
              ) : (
                <FaMoon className="text-gray-600 dark:text-gray-300 group-hover:text-primary-500" size={18} />
              )}
            </motion.button>

            {/* Кнопка мобильного меню */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              onKeyPress={(e) => handleKeyPress(e, toggleMenu)}
              className="relative group md:hidden p-2 rounded-lg bg-gray-100 dark:bg-secondary-800 z-50"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <div className="relative z-50">
                {isMenuOpen ? (
                  <FaTimes className="text-primary-500 hover:text-primary-600" size={20} />
                ) : (
                  <FaBars className="text-gray-600 dark:text-gray-300 group-hover:text-primary-500" size={18} />
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 relative z-40"
              role="menu"
              aria-label="Мобильное меню"
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 shadow-xl"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 }
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      onKeyPress={(e) => handleKeyPress(e, () => setIsMenuOpen(false))}
                      className={`relative group block px-4 py-3 transition-all duration-300
                        ${location.pathname === item.path
                          ? 'bg-primary-500/10 text-primary-500'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700'
                        }`}
                      role="menuitem"
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      <span className="relative z-10 text-base font-medium">
                        {item.label}
                      </span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 