import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStore, FaRobot, FaMobileAlt, FaSearch, FaInstagram, FaChartLine, FaUsers, FaMoneyBillWave, FaCode, FaGithub, FaExternalLinkAlt, FaTimes, FaFilter } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Все проекты', icon: FaFilter, color: 'from-blue-500 to-cyan-500' },
    { id: 'ecommerce', label: 'Интернет-магазины', icon: FaStore, color: 'from-green-500 to-emerald-500' },
    { id: 'landing', label: 'Лендинги', icon: FaSearch, color: 'from-purple-500 to-pink-500' },
    { id: 'webapp', label: 'Веб-приложения', icon: FaCode, color: 'from-orange-500 to-amber-500' },
    { id: 'bot', label: 'Telegram боты', icon: FaRobot, color: 'from-blue-400 to-indigo-500' },
    { id: 'mobile', label: 'Мобильные приложения', icon: FaMobileAlt, color: 'from-pink-500 to-rose-500' },
    { id: 'instagram', label: 'Instagram магазины', icon: FaInstagram, color: 'from-purple-400 to-pink-400' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Магазин одежды в Алматы',
      description: 'Интернет-магазин с интеграцией Kaspi.kz и автоматизацией продаж через Instagram',
      category: 'ecommerce',
      tags: ['React', 'Node.js', 'Kaspi API', 'Instagram API'],
      image: '/projects/fashion-store.jpg',
      stats: [
        { label: 'Рост продаж', value: '+85%', icon: FaChartLine, color: 'from-green-500 to-emerald-500' },
        { label: 'Клиентов', value: '1000+', icon: FaUsers, color: 'from-blue-500 to-cyan-500' },
        { label: 'ROI', value: '312%', icon: FaMoneyBillWave, color: 'from-purple-500 to-pink-500' }
      ],
      features: [
        'Автоматическая синхронизация с Kaspi.kz',
        'Интеграция с Instagram Shopping',
        'Автоматические уведомления клиентам',
        'Аналитика продаж и отчеты'
      ],
      technologies: [
        'React', 'Node.js', 'MongoDB', 'Express', 'Redux',
        'Tailwind CSS', 'Kaspi API', 'Instagram API'
      ],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/example'
      }
    },
    {
      id: 2,
      title: 'Доставка еды в Астане',
      description: 'Автоматизация приема заказов через Telegram бота и интеграция с сервисами доставки',
      category: 'bot',
      tags: ['Node.js', 'Telegram API', 'MongoDB'],
      image: '/projects/food-delivery.jpg',
      stats: [
        { label: 'Заказов', value: '3000+', icon: FaChartLine, color: 'from-blue-500 to-cyan-500' },
        { label: 'Курьеров', value: '50+', icon: FaUsers, color: 'from-green-500 to-emerald-500' },
        { label: 'Экономия', value: '45%', icon: FaMoneyBillWave, color: 'from-purple-500 to-pink-500' }
      ],
      features: [
        'Автоматический прием заказов 24/7',
        'Интеграция с сервисами доставки',
        'Система распределения заказов',
        'Отслеживание курьеров'
      ],
      technologies: [
        'Node.js', 'MongoDB', 'Telegram Bot API', 'Express',
        'Redis', 'WebSocket', 'Google Maps API'
      ],
      links: {
        live: 'https://t.me/example_bot',
        github: 'https://github.com/example'
      }
    }
  ];

  // Закрытие модального окна при нажатии Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-secondary-900 via-secondary-800 to-primary-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Мои проекты
            </h1>
            <p className="text-xl text-gray-400">
              Примеры моих последних работ
            </p>
          </motion.div>

          {/* Фильтры и поиск */}
          <div className="mb-12 space-y-6">
            {/* Поиск */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск проектов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary-800/50 border border-secondary-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </motion.div>

            {/* Категории */}
        <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
                <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                    ${selectedCategory === category.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-${selectedCategory === category.id ? '100' : '0'} group-hover:opacity-10 transition-opacity`} />
                  <div className="relative flex items-center gap-2">
                    <category.icon className="text-lg" />
              {category.label}
                  </div>
                </motion.button>
          ))}
        </motion.div>
          </div>

        {/* Сетка проектов */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-700 group-hover:border-primary-500 transition-all duration-300">
                  {/* Изображение проекта */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-50" />
                  </div>

                  {/* Контент */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Технологии */}
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                    {/* Кнопки */}
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => {
                          setSelectedProject(project);
                          setIsModalOpen(true);
                        }}
                        className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium transition-colors hover:bg-primary-600"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Подробнее
                      </motion.button>
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                      </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>

          {/* Модальное окно с деталями проекта */}
          <AnimatePresence>
            {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
              >
                {/* Затемнённый фон */}
                <motion.div
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setIsModalOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* Контент модального окна */}
                <motion.div
                  className="relative w-full max-w-4xl bg-secondary-800 rounded-2xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  {/* Кнопка закрытия */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-2 bg-secondary-700/50 hover:bg-secondary-600 text-white rounded-lg backdrop-blur-sm transition-colors z-10"
                  >
                    <FaTimes size={20} />
                  </button>

                  {/* Изображение проекта */}
                  <div className="relative aspect-video">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-transparent to-transparent" />
                  </div>

                  {/* Информация о проекте */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Особенности проекта */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Особенности:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Технологии */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Технологии:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ссылки */}
                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub size={20} />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt size={20} />
                        Открыть сайт
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
          </motion.div>
        )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Portfolio; 