import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const InteractiveCard = ({ children, className = '', variant = 'book' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  // Определяем мобильное устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || variant !== 'book') return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;

    // Для эффекта открывающейся книги используем только поворот по Y
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 30;
    setRotateY(rotateYValue);
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || variant !== 'book') return;
    e.preventDefault();

    const touch = e.touches[0];
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Вычисляем изменение позиции от начала касания
    const deltaX = touch.clientX - touchStartRef.current.x;
    
    // Ограничиваем поворот для более плавного эффекта на мобильных
    const rotateYValue = Math.min(Math.max((deltaX / rect.width) * 20, -15), 15);
    setRotateY(rotateYValue);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  const handleTouchEnd = () => {
    // Плавно возвращаем карточку в исходное положение
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    setScale(1.02);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  if (variant === 'keyboard') {
    return (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
          {/* Эффект свечения клавиатуры */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={{
        rotateY: variant === 'book' ? rotateY : 0,
        scale
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5
      }}
    >
      {/* Эффект тени книги - оптимизированный для мобильных */}
      <motion.div
        className={`absolute inset-0 ${
          isMobile 
            ? 'bg-black/10 blur-[10px]' 
            : 'bg-black/20 blur-xl'
        } rounded-xl`}
        animate={{
          opacity: isOpen ? (isMobile ? 0.3 : 0.5) : 0,
          rotateY: -rotateY * (isMobile ? 0.3 : 0.5),
          scale: isOpen ? 0.95 : 1,
        }}
      />

      {/* Эффект страниц книги - уменьшенное количество слоев для мобильных */}
      {Array.from({ length: isMobile ? 2 : 3 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-white/5 rounded-xl"
          animate={{
            rotateY: rotateY * (1 - index * (isMobile ? 0.3 : 0.2)),
            z: -10 * (index + 1),
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        />
      ))}

      {/* Основной контент */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
        animate={{
          rotateY,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard; 