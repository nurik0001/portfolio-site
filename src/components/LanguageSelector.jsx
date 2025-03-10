import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaCheck } from 'react-icons/fa';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const languages = [
    { code: 'ru', label: 'РУС' },
    { code: 'kz', label: 'ҚАЗ' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div ref={menuRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group px-3 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-sm font-medium"
      >
        {/* Фоновый градиент */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 blur transition-all duration-300"
        />
        
        {/* Контент кнопки */}
        <div className="relative z-10 flex items-center space-x-2">
          <FaGlobe className="text-secondary-600 dark:text-secondary-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
          <span className="text-secondary-600 dark:text-secondary-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {currentLanguage.label}
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-32 rounded-xl overflow-hidden bg-white dark:bg-secondary-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-secondary-700 z-50"
          >
            <div className="relative py-1">
              {/* Фоновый градиент */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent opacity-50" />
              
              {/* Список языков */}
              <div className="relative">
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`group relative w-full flex items-center justify-between px-4 py-2 text-sm transition-all duration-200
                      ${language.code === i18n.language
                        ? 'text-primary-500 bg-primary-500/10'
                        : 'text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700/50'
                      }`}
                    whileHover={{ x: 4 }}
                  >
                    <span>{language.label}</span>
                    {language.code === i18n.language && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <FaCheck className="text-primary-500" size={12} />
                      </motion.div>
                    )}
                    
                    {/* Hover эффект */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 