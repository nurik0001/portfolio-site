import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGift, FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Показываем попап только на десктопе через 30 секунд после загрузки
    const timer = setTimeout(() => {
      if (!hasBeenShown && !isMobile) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    }, 30000);

    // Отслеживаем попытку покинуть страницу только на десктопе
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasBeenShown && !isMobile) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [hasBeenShown, isMobile]);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Не показываем попап на мобильных устройствах
  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Затемненный фон */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Попап */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-[20%] left-1/2 transform -translate-x-1/2 w-[450px] lg:w-[600px] mx-auto z-50"
          >
            <div className="relative bg-secondary-800 rounded-xl border border-primary-500/20 overflow-hidden shadow-2xl shadow-primary-500/10">
              {/* Кнопка закрытия */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1.5 z-10 bg-secondary-800/50 rounded-lg backdrop-blur-sm"
              >
                <FaTimes size={16} />
              </button>

              {/* Основной контент */}
              <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-6">
                <div className="lg:flex items-start gap-6">
                  {/* Левая часть - основной контент */}
                  <div className="lg:flex-1">
                    {/* Иконка подарка */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-primary-500/10 rounded-full flex items-center justify-center">
                      <FaGift className="text-xl sm:text-3xl text-primary-500" />
                    </div>

                    {/* Заголовок */}
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white text-center mb-1 sm:mb-2">
                      Специальное предложение!
                    </h2>

                    {/* Описание */}
                    <p className="text-xs sm:text-base lg:text-lg text-gray-300 text-center mb-3 sm:mb-4">
                      Получите скидку 15% на разработку проекта при заказе в течение следующих 24 часов!
                    </p>
                  </div>

                  {/* Правая часть - преимущества */}
                  <div className="lg:w-[300px]">
                    {/* Преимущества */}
                    <div className="bg-secondary-700/50 lg:bg-transparent rounded-lg p-3 lg:p-0">
                      <h3 className="hidden lg:block text-lg font-semibold text-white mb-4">
                        Что вы получаете:
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="flex items-start text-xs sm:text-sm text-gray-300">
                          <FaCheck className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Бесплатная консультация по проекту с ведущим разработчиком</span>
                        </li>
                        <li className="flex items-start text-xs sm:text-sm text-gray-300">
                          <FaCheck className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Приоритетная разработка вашего проекта в ускоренном режиме</span>
                        </li>
                        <li className="flex items-start text-xs sm:text-sm text-gray-300">
                          <FaCheck className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Дополнительный месяц технической поддержки и обновлений</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Фиксированные кнопки внизу */}
              <div className="sticky bottom-0 left-0 right-0 bg-secondary-800/95 backdrop-blur-sm border-t border-secondary-700/50 p-2 sm:p-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                  <motion.button
                    onClick={handleClose}
                    className="order-2 sm:order-1 px-3 py-1.5 bg-white/5 text-gray-400 hover:text-white rounded-lg font-medium text-xs sm:text-sm transition-colors sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Напомнить позже
                  </motion.button>
                  <motion.a
                    href="/contact"
                    className="order-1 sm:order-2 px-3 py-1.5 bg-primary-500 text-white rounded-lg font-medium text-xs sm:text-base text-center shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all group sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Получить скидку
                    <FaArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup; 