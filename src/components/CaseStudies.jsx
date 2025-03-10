import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaRocket, FaChartLine, FaCheck, FaArrowRight, FaGithub, FaLink, FaLightbulb, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'web', label: 'Веб-разработка' },
    { id: 'automation', label: 'Автоматизация' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const cases = [
    {
      id: 1,
      title: 'Автоматизация магазина одежды',
      category: 'automation',
      description: 'Комплексное решение для автоматизации процессов магазина одежды в Алматы',
      image: '/projects/fashion-store.jpg',
      stats: [
        { label: 'Рост продаж', value: '+85%', icon: FaChartLine, color: 'from-green-500 to-emerald-500' },
        { label: 'Экономия времени', value: '40ч/мес', icon: FaClock, color: 'from-blue-500 to-cyan-500' },
        { label: 'ROI', value: '312%', icon: FaMoneyBillWave, color: 'from-purple-500 to-pink-500' }
      ],
      problem: 'Ручное управление заказами и отсутствие синхронизации между каналами продаж приводило к ошибкам и потере времени.',
      solution: 'Разработка системы автоматизации с интеграцией Kaspi.kz и Instagram, автоматическое обновление остатков и статусов заказов.',
      features: [
        'Интеграция с Kaspi.kz',
        'Автоматическое обновление остатков',
        'Система управления заказами',
        'Аналитика продаж'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Kaspi API', 'Instagram API'],
      results: [
        'Сокращение времени на обработку заказов на 75%',
        'Увеличение среднего чека на 35%',
        'Снижение количества ошибок на 95%'
      ],
      duration: '2 месяца',
      team: '3 человека',
      links: {
        github: 'https://github.com/example',
        live: 'https://example.com'
      }
    },
    {
      id: 2,
      title: 'E-commerce платформа',
      category: 'ecommerce',
      description: 'Разработка масштабируемой e-commerce платформы для сети магазинов',
      image: '/projects/ecommerce.jpg',
      stats: [
        { label: 'Конверсия', value: '+125%', icon: FaChartLine, color: 'from-blue-500 to-cyan-500' },
        { label: 'Скорость', value: '0.8сек', icon: FaRocket, color: 'from-orange-500 to-red-500' },
        { label: 'Рост GMV', value: '+150%', icon: FaMoneyBillWave, color: 'from-green-500 to-emerald-500' }
      ],
      problem: 'Устаревшая платформа не справлялась с растущим потоком заказов и имела низкую производительность.',
      solution: 'Разработка современной e-commerce платформы с микросервисной архитектурой и оптимизированной производительностью.',
      features: [
        'Умный поиск товаров',
        'Персонализированные рекомендации',
        'Мультивалютность',
        'Программа лояльности'
      ],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      results: [
        'Увеличение среднего времени на сайте на 45%',
        'Рост конверсии мобильных пользователей на 85%',
        'Сокращение времени загрузки на 70%'
      ],
      duration: '4 месяца',
      team: '5 человек',
      links: {
        github: 'https://github.com/example',
        live: 'https://example.com'
      }
    }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Заголовок */}
        <AnimatedText type="gradient" delay={0.2} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Кейсы проектов
          </h2>
          <p className="text-xl text-gray-400">
            Реальные примеры успешно реализованных проектов
          </p>
        </AnimatedText>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all
                ${activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-secondary-800/50 text-gray-400 hover:text-white hover:bg-secondary-700/50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="group"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-700 hover:border-primary-500 transition-all cursor-pointer">
                {/* Изображение */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent opacity-60" />
                </div>

                {/* Контент */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {caseItem.description}
                  </p>

                  {/* Статистика */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseItem.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="group/stat relative"
                      >
                        <div className="relative p-3 bg-secondary-900/50 rounded-xl overflow-hidden">
                          {/* Градиентный фон */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-10 transition-opacity duration-300`} />
                          
                          <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover/stat:scale-110 transition-transform duration-300`}>
                            <stat.icon className="text-white text-sm" />
                          </div>
                          <div className="text-lg font-bold text-white text-center">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 text-center">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Технологии */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary-900/50 text-gray-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Кнопка */}
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium transition-all flex items-center justify-center group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Подробнее
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Модальное окно с деталями */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Кнопка закрытия */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 z-10 bg-secondary-800/50 rounded-lg backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Контент модального окна */}
                <div className="p-8">
                  <div className="aspect-video rounded-xl overflow-hidden mb-8">
                    <img
                      src={selectedCase.image}
                      alt={selectedCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{selectedCase.title}</h3>
                  <p className="text-xl text-primary-400 mb-8">{selectedCase.description}</p>

                  {/* Проблема и решение */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-secondary-900/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FaLightbulb className="text-primary-500 mr-2" />
                        Проблема
                      </h4>
                      <p className="text-gray-400">{selectedCase.problem}</p>
                    </div>
                    <div className="bg-secondary-900/50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FaRocket className="text-primary-500 mr-2" />
                        Решение
                      </h4>
                      <p className="text-gray-400">{selectedCase.solution}</p>
                    </div>
                  </div>

                  {/* Особенности */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Особенности проекта</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCase.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 bg-secondary-900/50 rounded-xl p-4"
                        >
                          <FaCheck className="text-primary-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Результаты */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Результаты</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedCase.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 bg-secondary-900/50 rounded-xl p-4"
                        >
                          <FaChartLine className="text-primary-500 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Детали проекта */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-secondary-900/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm mb-1">Длительность</div>
                      <div className="text-white font-medium flex items-center">
                        <FaClock className="text-primary-500 mr-2" />
                        {selectedCase.duration}
                      </div>
                    </div>
                    <div className="bg-secondary-900/50 rounded-xl p-4">
                      <div className="text-gray-400 text-sm mb-1">Команда</div>
                      <div className="text-white font-medium flex items-center">
                        <FaCode className="text-primary-500 mr-2" />
                        {selectedCase.team}
                      </div>
                    </div>
                  </div>

                  {/* Ссылки */}
                  <div className="flex space-x-4">
                    {selectedCase.links.live && (
                      <motion.a
                        href={selectedCase.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium flex items-center justify-center group"
                      >
                        Открыть проект
                        <FaLink className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                    {selectedCase.links.github && (
                      <motion.a
                        href={selectedCase.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 bg-secondary-900 text-white rounded-xl font-medium flex items-center justify-center group hover:bg-secondary-800"
                      >
                        GitHub
                        <FaGithub className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies; 