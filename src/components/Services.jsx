import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaRobot, FaMobileAlt, FaShoppingCart, FaServer, FaArrowRight, FaCheck, FaClock, FaShieldAlt, FaMoneyBillWave, FaLightbulb, FaRocket } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const Services = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: FaCode,
      title: 'Веб-разработка',
      description: 'Создание современных и отзывчивых веб-приложений с использованием React, Next.js и других передовых технологий',
      features: ['SPA/PWA', 'Адаптивный дизайн', 'SEO оптимизация', 'Высокая производительность'],
      benefits: [
        'Быстрая загрузка страниц',
        'Современный UI/UX дизайн',
        'Кроссбраузерная совместимость'
      ],
      price: 'от 300 000 ₸',
      duration: '2-3 недели',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      stats: [
        { label: 'Скорость загрузки', value: '< 2с' },
        { label: 'Конверсия', value: '+45%' },
        { label: 'SEO рейтинг', value: '95+' }
      ]
    },
    {
      icon: FaRobot,
      title: 'Telegram боты',
      description: 'Разработка умных ботов для автоматизации бизнес-процессов и улучшения коммуникации с клиентами',
      features: ['Интеграция с CRM', 'Платежные системы', 'Аналитика', 'AI функции'],
      benefits: [
        'Автоматизация процессов',
        'Мгновенные ответы 24/7',
        'Интеграция с бизнес-логикой'
      ],
      price: 'от 150 000 ₸',
      duration: '1-2 недели',
      color: 'from-purple-500 to-pink-500',
      popular: false,
      stats: [
        { label: 'Автоматизация', value: '95%' },
        { label: 'Время ответа', value: '< 1с' },
        { label: 'Конверсия', value: '+60%' }
      ]
    },
    {
      icon: FaMobileAlt,
      title: 'Мобильная разработка',
      description: 'Создание кроссплатформенных мобильных приложений с использованием React Native',
      features: ['iOS и Android', 'Push уведомления', 'Офлайн режим', 'Нативные функции'],
      benefits: [
        'Единая кодовая база',
        'Нативная производительность',
        'Быстрые обновления'
      ],
      price: 'от 500 000 ₸',
      duration: '3-4 недели',
      color: 'from-green-500 to-emerald-500',
      popular: false,
      stats: [
        { label: 'Платформы', value: '2+' },
        { label: 'Рейтинг', value: '4.8★' },
        { label: 'Экономия', value: '40%' }
      ]
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce решения',
      description: 'Разработка современных интернет-магазинов с интеграцией популярных платежных систем',
      features: ['Интеграция с Kaspi', 'Управление товарами', 'Аналитика продаж', 'Программы лояльности'],
      benefits: [
        'Автоматизация продаж',
        'Удобное управление',
        'Интеграция с маркетплейсами'
      ],
      price: 'от 400 000 ₸',
      duration: '2-3 недели',
      color: 'from-orange-500 to-yellow-500',
      popular: true,
      stats: [
        { label: 'Рост продаж', value: '+85%' },
        { label: 'Конверсия', value: '3.2%' },
        { label: 'ROI', value: '320%' }
      ]
    },
    {
      icon: FaServer,
      title: 'Backend разработка',
      description: 'Создание надежных и масштабируемых серверных решений для вашего бизнеса',
      features: ['REST API', 'Базы данных', 'Микросервисы', 'Облачные решения'],
      benefits: [
        'Высокая производительность',
        'Масштабируемость',
        'Безопасность данных'
      ],
      price: 'от 250 000 ₸',
      duration: '2-3 недели',
      color: 'from-red-500 to-pink-500',
      popular: false,
      stats: [
        { label: 'Нагрузка', value: '10k+' },
        { label: 'Доступность', value: '99.9%' },
        { label: 'Скорость', value: '< 100мс' }
      ]
    }
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: 'Быстрый запуск',
      description: 'Начало работы над проектом в течение 24 часов после обсуждения',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLightbulb,
      title: 'Современные решения',
      description: 'Использование передовых технологий и лучших практик разработки',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Гарантия качества',
      description: '100% возврат предоплаты при несоответствии требованиям',
      color: 'from-green-500 to-emerald-500'
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Мои услуги
          </h2>
          <p className="text-xl text-gray-400">
            Полный спектр услуг по веб-разработке для вашего бизнеса
          </p>
        </AnimatedText>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-700 hover:border-primary-500 transition-all overflow-hidden"
              >
                {/* Светящийся эффект */}
                <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all overflow-hidden"
              >
                {/* Популярная метка */}
                {service.popular && (
                  <div className="absolute -top-3 right-6">
                    <div className={`px-4 py-1 bg-gradient-to-r ${service.color} rounded-full text-xs font-medium text-white shadow-lg`}>
                      Популярное
                    </div>
                  </div>
                )}

                {/* Градиентный фон */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Светящийся эффект */}
                <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:duration-200" />
                
                {/* Контент */}
                <div className="relative">
                  {/* Иконка */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-2xl text-white" />
                  </motion.div>

                  {/* Заголовок */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Цена и сроки */}
                  <div className="bg-secondary-700/30 rounded-xl p-4 mb-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                      {service.price}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <FaClock className="mr-2" />
                      Срок: {service.duration}
                    </div>
                  </div>

                  {/* Статистика */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {service.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredService === index ? 1 : 0,
                          y: hoveredService === index ? 0 : 10
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary-700/30 rounded-lg p-2 text-center"
                      >
                        <div className="text-sm font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Особенности */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Включено в услугу:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Преимущества */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Преимущества:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + 0.1 * i }}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                        >
                          <FaCheck className={`mr-2 text-xs flex-shrink-0 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Кнопка */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center group`}
                  >
                    Заказать
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 