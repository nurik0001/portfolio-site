import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShoppingBag, FaRobot, FaCogs, FaCheck, FaArrowRight, FaLink, FaShieldAlt, FaHandshake, FaChartLine, FaStar, FaUsers, FaLightbulb, FaRocket, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const BusinessSolutions = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);

  const solutions = [
    {
      icon: FaLink,
      title: 'Taplink под ключ',
      description: 'Мультиссылка для Instagram и визитка',
      price: 'от 50 000 ₸',
      features: [
        'Уникальный дизайн',
        'Интеграция с Instagram',
        'Онлайн-оплата',
        'Форма заказа'
      ],
      benefits: [
        'Быстрый запуск за 2-3 дня',
        'Мобильная адаптация',
        'SEO-оптимизация'
      ],
      popular: true,
      guarantee: 'Гарантия конверсии',
      deliveryTime: '2-3 дня',
      paymentPlan: '100% после выполнения',
      color: 'from-pink-500 to-rose-500',
      rating: 4.9,
      reviews: 28
    },
    {
      icon: FaShoppingBag,
      title: 'Готовый магазин под ключ',
      description: 'Для продаж в Instagram и Kaspi',
      price: 'от 200 000 ₸',
      features: [
        'Интеграция с Kaspi.kz',
        'Автопостинг в Instagram',
        'WhatsApp бизнес API',
        'Мультиязычность (KZ/RU)'
      ],
      benefits: [
        'Полная автоматизация',
        'Интеграция с CRM',
        'Аналитика продаж'
      ],
      popular: true,
      guarantee: 'Гарантия возврата 100% предоплаты',
      deliveryTime: '7-10 дней',
      paymentPlan: '50% предоплата, 50% после запуска',
      color: 'from-blue-500 to-cyan-500',
      rating: 4.8,
      reviews: 42
    },
    {
      icon: FaRobot,
      title: 'Бот для автоматизации',
      description: 'Telegram + WhatsApp боты',
      price: 'от 150 000 ₸',
      features: [
        'Прием заказов 24/7',
        'Интеграция с 1С/Kaspi',
        'Рассылка акций',
        'Аналитика продаж'
      ],
      benefits: [
        'Экономия на персонале',
        'Быстрые ответы 24/7',
        'Простое управление'
      ],
      popular: false,
      guarantee: 'Бесплатный тест 7 дней',
      deliveryTime: '5-7 дней',
      paymentPlan: 'Рассрочка на 3 месяца',
      color: 'from-purple-500 to-indigo-500',
      rating: 4.7,
      reviews: 35
    },
    {
      icon: FaCogs,
      title: 'Автоматизация бизнеса',
      description: 'CRM + Сайт + Боты',
      price: 'от 500 000 ₸',
      features: [
        'Комплексная автоматизация',
        'Интеграция всех систем',
        'Обучение персонала',
        'Техподдержка 24/7'
      ],
      benefits: [
        'Рост эффективности',
        'Снижение издержек',
        'Масштабируемость'
      ],
      popular: false,
      guarantee: 'ROI через 2-3 месяца',
      deliveryTime: '21-30 дней',
      paymentPlan: 'Индивидуальный график',
      color: 'from-green-500 to-emerald-500',
      rating: 4.9,
      reviews: 19
    }
  ];

  const advantages = [
    {
      icon: FaRocket,
      title: 'Быстрый запуск',
      description: 'Запускаем проекты за 7-14 дней',
      stats: '14+ дней',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Гарантия результата',
      description: 'Возврат предоплаты при несоответствии',
      stats: '100%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaHandshake,
      title: 'Простая коммуникация',
      description: 'Всегда на связи в мессенджерах',
      stats: '24/7',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { icon: FaUsers, value: '50+', label: 'Довольных клиентов' },
    { icon: FaRocket, value: '100+', label: 'Успешных проектов' },
    { icon: FaLightbulb, value: '5+', label: 'Лет опыта' },
    { icon: FaChartLine, value: '250%', label: 'Средний ROI' }
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
            Готовые решения
          </h2>
          <p className="text-xl text-gray-400">
            Выберите подходящий пакет услуг для вашего бизнеса
          </p>
        </AnimatedText>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                  className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <stat.icon className="text-xl text-primary-500" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700"
              >
                {/* Градиентный фон */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Светящийся эффект */}
                <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:duration-200" />
                
                {/* Контент */}
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <advantage.icon className="text-xl text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                    {advantage.description}
                  </p>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                    {advantage.stats}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Карточки решений */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                {/* Карточка */}
                <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 overflow-hidden">
                  {/* Популярная метка */}
                  {solution.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    >
                      <div className={`bg-gradient-to-r ${solution.color} px-4 py-1 rounded-full text-xs font-medium text-white shadow-lg`}>
                        Популярное
                      </div>
                    </motion.div>
                  )}

                  {/* Градиентный фон */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Светящийся эффект */}
                  <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:duration-200" />
                  
                  {/* Контент */}
                  <div className="relative">
                    {/* Иконка */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="text-2xl text-white" />
                    </motion.div>

                    {/* Заголовок и цена */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 mb-2">{solution.description}</p>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                        {solution.price}
                      </div>
                    </div>

                    {/* Рейтинг */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(solution.rating) ? 'text-yellow-500' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-medium">{solution.rating}</span>
                      <span className="text-gray-400 ml-2">({solution.reviews} отзывов)</span>
                    </div>

                    {/* Гарантии */}
                    <div className="bg-secondary-700/30 rounded-xl p-4 mb-6">
                      <div className="flex items-center text-sm text-primary-400 mb-2">
                        <FaShieldAlt className="mr-2 flex-shrink-0" />
                        <span>{solution.guarantee}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <FaClock className="mr-2 flex-shrink-0" />
                        <span>Срок: {solution.deliveryTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-success-400">
                        <FaMoneyBillWave className="mr-2 flex-shrink-0" />
                        <span>{solution.paymentPlan}</span>
                      </div>
                    </div>

                    {/* Особенности */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Включено в пакет:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} mr-2`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Преимущества */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Преимущества:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + 0.1 * i }}
                            className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                          >
                            <FaCheck className={`mr-2 text-xs flex-shrink-0 bg-gradient-to-br ${solution.color} bg-clip-text text-transparent`} />
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
                      className={`w-full px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center group`}
                    >
                      Заказать
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions; 