import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const TypedText = ({ strings = [], typingSpeed = 150, deleteSpeed = 75, delayBetweenStrings = 5000 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем мобильное устройство при монтировании и при изменении размера окна
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (strings.length === 0) return;

    let timeout;

    if (isMobile) {
      // Для мобильных устройств просто меняем текст каждые delayBetweenStrings миллисекунд
      timeout = setTimeout(() => {
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setCurrentText(strings[(currentStringIndex + 1) % strings.length]);
      }, delayBetweenStrings);
    } else {
      // Для десктопа - анимация печатания
      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        } else {
          timeout = setTimeout(() => {
            setCurrentText(prev => prev.slice(0, -1));
          }, deleteSpeed);
        }
      } else {
        const currentString = strings[currentStringIndex];
        if (currentText.length < currentString.length) {
          timeout = setTimeout(() => {
            setCurrentText(currentString.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenStrings);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deleteSpeed, delayBetweenStrings, isMobile]);

  // На мобильных устройствах показываем текст с плавной сменой
  if (isMobile) {
    return (
      <div className="inline-flex items-center overflow-hidden h-12 md:h-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStringIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="relative text-primary-400 font-semibold"
          >
            {strings[currentStringIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // На десктопе показываем анимацию печатания
  return (
    <div className="inline-flex items-center h-12 md:h-16">
      <div className="relative whitespace-pre text-primary-400 font-semibold">
        <AnimatePresence mode="popLayout">
          {currentText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
              style={{ marginRight: char === ' ' ? '0.25em' : '0' }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute right-[-4px] top-[50%] -translate-y-1/2 w-0.5 h-6 bg-primary-400"
        />
      </div>
    </div>
  );
};

export default TypedText; 