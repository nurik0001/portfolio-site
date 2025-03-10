import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight, FaInstagram, FaTelegram, FaWhatsapp, FaFilter, FaClock, FaMoneyBillWave, FaCode, FaChartLine } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const Testimonials = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const sliderRef = useRef(null);

  const filters = [
    { id: 'all', label: 'Все проекты', icon: FaFilter, color: 'from-blue-500 to-cyan-500' },
    { id: 'web', label: 'Веб-разработка', icon: FaCode, color: 'from-purple-500 to-pink-500' },
    { id: 'bot', label: 'Telegram боты', icon: FaTelegram, color: 'from-green-500 to-emerald-500' },
    { id: 'shop', label: 'Интернет-магазины', icon: FaMoneyBillWave, color: 'from-orange-500 to-yellow-500' }
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      position: 'CEO, TechStart',
      company: 'TechStart Solutions',
      text: 'Нурдаулет разработал для нас корпоративный портал. Работа была выполнена качественно и в срок. Особенно порадовала его внимательность к деталям и готовность оперативно вносить правки.',
      rating: 5,
      projectType: 'web',
      image: '/testimonials/person1.jpg',
      projectDetails: {
        duration: '3 недели',
        budget: '400 000 ₸',
        technologies: ['React', 'Node.js', 'MongoDB']
      },
      results: {
        performance: '+40%',
        automation: '80%',
        satisfaction: '100%'
      },
      social: {
        instagram: 'https://instagram.com/techstart',
        telegram: 'https://t.me/techstart'
      }
    },
    {
      name: 'Мария Иванова',
      position: 'Владелец',
      company: 'Beauty Shop',
      text: 'Заказывали разработку интернет-магазина. Результат превзошел ожидания! Сайт работает быстро, выглядит современно, а главное - отлично продает.',
      rating: 5,
      projectType: 'shop',
      projectDetails: {
        duration: '4 недели',
        budget: '600 000 ₸',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL']
      },
      results: {
        sales: '+120%',
        conversion: '+45%',
        retention: '85%'
      },
      social: {
        instagram: 'https://instagram.com/beautyshop',
        whatsapp: 'https://wa.me/77001234567'
      },
      image: '/testimonials/client2.jpg',
      logo: '/testimonials/beautyshop-logo.png'
    },
    {
      name: 'Ерлан Сатыбалдиев',
      position: 'Директор',
      company: 'LogiTech',
      text: 'Отличный специалист! Разработал для нас Telegram-бота для автоматизации службы поддержки. Бот работает безупречно, что значительно разгрузило наших сотрудников.',
      rating: 5,
      projectType: 'bot',
      projectDetails: {
        duration: '2 недели',
        budget: '250 000 ₸',
        technologies: ['Node.js', 'MongoDB', 'Telegram API']
      },
      results: {
        automation: '95%',
        response: '-80%',
        satisfaction: '98%'
      },
      social: {
        telegram: 'https://t.me/logitech',
        whatsapp: 'https://wa.me/77007654321'
      },
      image: '/testimonials/client3.jpg',
      logo: '/testimonials/logitech-logo.png'
    }
  ];

  // Фильтрация отзывов
  const filteredTestimonials = testimonials.filter(
    testimonial => activeFilter === 'all' || testimonial.projectType === activeFilter
  );

  // Автопрокрутка
  useEffect(() => {
    let interval;
    if (isAutoplay && filteredTestimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, filteredTestimonials.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % filteredTestimonials.length
    );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Анимированный фон */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(var(--primary-500), 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(var(--primary-500), 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(var(--primary-500), 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </motion.div>

      <div className="container relative mx-auto px-4">
        <AnimatedText type="gradient" delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-400">
            Что говорят о сотрудничестве со мной
          </p>
        </AnimatedText>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-6 py-3 rounded-xl backdrop-blur-sm border transition-all
                ${activeFilter === filter.id
                  ? 'bg-primary-500/10 border-primary-500'
                  : 'bg-secondary-800/50 border-secondary-700 hover:border-primary-500'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
              <div className="relative flex items-center space-x-2">
                <filter.icon className={`text-lg ${
                  activeFilter === filter.id ? 'text-primary-400' : 'text-gray-400 group-hover:text-primary-400'
                }`} />
                <span className={`font-medium ${
                  activeFilter === filter.id ? 'text-primary-400' : 'text-gray-400 group-hover:text-primary-400'
                }`}>
                  {filter.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Слайдер отзывов */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onHoverStart={() => setHoveredTestimonial(index)}
                  onHoverEnd={() => setHoveredTestimonial(null)}
                >
                  <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                    {/* Градиентный фон */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl" />
                    
                    {/* Цитата */}
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-4 -left-2 text-4xl text-primary-500/20" />
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? 'text-yellow-500'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Информация о клиенте */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                        
                        {/* Социальные сети */}
                        <div className="flex gap-2">
                          {Object.entries(testimonial.social).map(([platform, link]) => (
                            <motion.a
                              key={platform}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg bg-secondary-700/50 hover:bg-primary-500/10 transition-colors"
                            >
                              {platform === 'instagram' && <FaInstagram className="text-gray-400 hover:text-primary-400" />}
                              {platform === 'telegram' && <FaTelegram className="text-gray-400 hover:text-primary-400" />}
                              {platform === 'whatsapp' && <FaWhatsapp className="text-gray-400 hover:text-primary-400" />}
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Детали проекта */}
                      {hoveredTestimonial === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="mt-6 pt-6 border-t border-secondary-700"
                        >
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <div className="text-gray-400 text-sm mb-1">Длительность:</div>
                              <div className="flex items-center text-primary-400">
                                <FaClock className="mr-2" />
                                {testimonial.projectDetails.duration}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm mb-1">Бюджет:</div>
                              <div className="flex items-center text-primary-400">
                                <FaMoneyBillWave className="mr-2" />
                                {testimonial.projectDetails.budget}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm mb-1">Результаты:</div>
                              <div className="flex items-center text-primary-400">
                                <FaChartLine className="mr-2" />
                                ROI {testimonial.results.performance}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Кнопки навигации */}
          {filteredTestimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={handlePrevSlide}
                className="p-3 rounded-xl bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 hover:border-primary-500 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft className="text-gray-400 hover:text-primary-400" />
              </motion.button>
              <motion.button
                onClick={handleNextSlide}
                className="p-3 rounded-xl bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 hover:border-primary-500 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight className="text-gray-400 hover:text-primary-400" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 