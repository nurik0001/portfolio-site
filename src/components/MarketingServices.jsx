import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGoogle, FaCheck, FaArrowRight, FaClock, FaShieldAlt, FaTools } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const MarketingServices = () => {
  const [activeTab, setActiveTab] = useState('smm');

  const services = {
    smm: {
      title: 'SMM Продвижение',
      description: 'Комплексное продвижение в социальных сетях',
      icon: FaInstagram,
      color: 'from-pink-500 to-purple-500',
      platforms: ['Instagram', 'Facebook', 'TikTok'],
      features: [
        'Разработка контент-стратегии',
        'Создание и оформление аккаунтов',
        'Написание и публикация постов',
        'Настройка таргетированной рекламы',
        'Работа с блогерами и лидерами мнений',
        'Аналитика и отчетность'
      ],
      advantages: [
        'Увеличение охвата аудитории',
        'Рост вовлеченности подписчиков',
        'Повышение узнаваемости бренда'
      ],
      metrics: [
        { label: 'Средний рост подписчиков', value: '+500%' },
        { label: 'Увеличение охватов', value: '+300%' },
        { label: 'Рост вовлеченности', value: '+250%' }
      ],
      process: [
        { step: 1, title: 'Анализ', description: 'Изучение ниши и конкурентов' },
        { step: 2, title: 'Стратегия', description: 'Разработка контент-плана' },
        { step: 3, title: 'Реализация', description: 'Создание и публикация контента' },
        { step: 4, title: 'Продвижение', description: 'Настройка и запуск рекламы' }
      ],
      tools: ['Facebook Ads', 'Instagram Insights', 'TikTok Ads'],
      timeline: '1-3 месяца',
      guarantees: [
        'Рост целевой аудитории',
        'Повышение активности',
        'Прозрачная отчетность'
      ]
    },
    context: {
      title: 'Контекстная реклама',
      description: 'Эффективная реклама в поисковых системах',
      icon: FaGoogle,
      color: 'from-blue-500 to-cyan-500',
      platforms: ['Google Ads', 'Яндекс.Директ'],
      features: [
        'Анализ ключевых слов',
        'Создание рекламных кампаний',
        'Настройка ретаргетинга',
        'A/B тестирование',
        'Оптимизация ставок',
        'Ежемесячная аналитика'
      ],
      advantages: [
        'Быстрое привлечение клиентов',
        'Точное попадание в целевую аудиторию',
        'Контроль расходов'
      ],
      metrics: [
        { label: 'Снижение стоимости клика', value: '-40%' },
        { label: 'Рост конверсии', value: '+150%' },
        { label: 'ROI', value: '300%' }
      ],
      process: [
        { step: 1, title: 'Аудит', description: 'Анализ ниши и конкурентов' },
        { step: 2, title: 'Семантика', description: 'Сбор ключевых слов' },
        { step: 3, title: 'Запуск', description: 'Создание и запуск кампаний' },
        { step: 4, title: 'Оптимизация', description: 'Улучшение показателей' }
      ],
      tools: ['Google Analytics', 'Яндекс.Метрика', 'Google Tag Manager'],
      timeline: '2-4 недели',
      guarantees: [
        'Целевой трафик',
        'Оптимизация бюджета',
        'Подробная аналитика'
      ]
    },
    target: {
      title: 'Таргетированная реклама',
      description: 'Точное попадание в вашу целевую аудиторию',
      icon: FaInstagram,
      color: 'from-green-500 to-emerald-500',
      platforms: ['Facebook Ads', 'Instagram Ads', 'TikTok Ads'],
      features: [
        'Анализ целевой аудитории',
        'Создание рекламных креативов',
        'Настройка рекламных кампаний',
        'Тестирование аудиторий',
        'Оптимизация результатов',
        'Масштабирование кампаний'
      ],
      advantages: [
        'Точный таргетинг',
        'Быстрый результат',
        'Гибкие настройки'
      ],
      metrics: [
        { label: 'Средний CTR', value: '3.5%' },
        { label: 'Снижение CPA', value: '-35%' },
        { label: 'ROAS', value: '280%' }
      ],
      process: [
        { step: 1, title: 'Анализ', description: 'Изучение целевой аудитории' },
        { step: 2, title: 'Креативы', description: 'Создание рекламных материалов' },
        { step: 3, title: 'Запуск', description: 'Настройка и запуск рекламы' },
        { step: 4, title: 'Оптимизация', description: 'Улучшение показателей' }
      ],
      tools: ['Facebook Business Manager', 'Instagram Ads', 'TikTok Ads Manager'],
      timeline: '1-2 недели',
      guarantees: [
        'Целевые клиенты',
        'Прозрачная статистика',
        'Оптимизация расходов'
      ]
    }
  };

  const activeService = services[activeTab];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Анимированный фон */}
      <motion.div 
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
            Маркетинговые услуги
          </h2>
          <p className="text-xl text-gray-400">
            Комплексные решения для продвижения вашего бизнеса
          </p>
        </AnimatedText>

        {/* Вкладки услуг */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-medium flex items-center space-x-2 group relative overflow-hidden ${
                activeTab === key
                  ? 'bg-primary-500 text-white'
                  : 'bg-secondary-800 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="text-xl" />
              <span>{service.title}</span>
              {activeTab === key && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Основной контент */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Левая колонка */}
            <div className="space-y-8">
              {/* Описание услуги */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                <div className={`w-16 h-16 bg-gradient-to-br ${activeService.color} rounded-xl flex items-center justify-center mb-6`}>
                  <activeService.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{activeService.title}</h3>
                <p className="text-gray-400 mb-6">{activeService.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activeService.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-secondary-700/50 rounded-full text-sm text-white"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Метрики */}
              <div className="grid grid-cols-3 gap-4">
                {activeService.metrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -5 }}
                    className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700"
                  >
                    <div className="text-2xl font-bold text-primary-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Процесс работы */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                <h4 className="text-xl font-semibold text-white mb-6">Процесс работы</h4>
                <div className="space-y-6">
                  {activeService.process.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeService.color} flex items-center justify-center flex-shrink-0 mr-4`}>
                        <span className="text-white font-medium">{step.step}</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">{step.title}</h5>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-8">
              {/* Преимущества */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                <h4 className="text-xl font-semibold text-white mb-6">Преимущества</h4>
                <div className="space-y-4">
                  {activeService.advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeService.color} flex items-center justify-center mr-4`}>
                        <FaCheck className="text-white" />
                      </div>
                      <span className="text-gray-400">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Функционал */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                <h4 className="text-xl font-semibold text-white mb-6">Что входит в услугу</h4>
                <div className="grid grid-cols-1 gap-4">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${activeService.color} mr-3`} />
                      <span className="text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Инструменты и сроки */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                  <div className="flex items-center mb-4">
                    <FaTools className="text-primary-500 mr-2" />
                    <h4 className="text-lg font-semibold text-white">Инструменты</h4>
                  </div>
                  <div className="space-y-2">
                    {activeService.tools.map((tool, index) => (
                      <div key={index} className="text-gray-400 flex items-center">
                        <FaCheck className="text-primary-500 mr-2 text-sm" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-primary-500 mr-2" />
                    <h4 className="text-lg font-semibold text-white">Сроки</h4>
                  </div>
                  <div className="text-gray-400">
                    {activeService.timeline}
                  </div>
                </div>
              </div>

              {/* Гарантии */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                <div className="flex items-center mb-6">
                  <FaShieldAlt className="text-primary-500 mr-2" />
                  <h4 className="text-xl font-semibold text-white">Гарантии</h4>
                </div>
                <div className="space-y-4">
                  {activeService.guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <FaCheck className="text-primary-500 mr-3" />
                      <span className="text-gray-400">{guarantee}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Кнопка действия */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 bg-gradient-to-r ${activeService.color} text-white rounded-xl font-medium flex items-center justify-center group`}
              >
                Заказать {activeService.title.toLowerCase()}
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MarketingServices; 