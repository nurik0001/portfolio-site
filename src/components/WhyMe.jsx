import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaClock, FaCheck, FaShieldAlt, FaAward } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const WhyMe = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);

  const features = [
    {
      icon: FaCode,
      title: 'Современный код',
      description: 'Использую последние технологии и лучшие практики разработки',
      benefits: [
        'React и Next.js',
        'Оптимизированная производительность',
        'Чистый и поддерживаемый код'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRocket,
      title: 'Быстрый запуск',
      description: 'Оперативная разработка и запуск проекта в короткие сроки',
      benefits: [
        'Запуск за 7-14 дней',
        'Поэтапная разработка',
        'Быстрые правки'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Поддержка клиентов',
      description: 'Всегда на связи и готов помочь с любыми вопросами',
      benefits: [
        'Поддержка 24/7',
        'Быстрые ответы',
        'Обучение команды'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaClock,
      title: 'Точно в срок',
      description: 'Соблюдаю дедлайны и выполняю работу в оговоренные сроки',
      benefits: [
        'Четкие дедлайны',
        'Контроль качества',
        'Гарантия сроков'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const achievements = [
    { icon: FaAward, value: '50+', label: 'Успешных проектов' },
    { icon: FaUsers, value: '30+', label: 'Довольных клиентов' },
    { icon: FaShieldAlt, value: '100%', label: 'Гарантия качества' }
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
            Почему стоит работать со мной?
          </h2>
          <p className="text-xl text-gray-400">
            Создаю качественные веб-решения, которые помогают бизнесу расти
          </p>
        </AnimatedText>

        {/* Достижения */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary-700 hover:border-primary-500 transition-all overflow-hidden"
              >
                {/* Светящийся эффект */}
                <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <achievement.icon className="text-2xl text-primary-500" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {achievement.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full"
              >
                {/* Светящийся эффект */}
                <div className="absolute -inset-2 bg-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all overflow-hidden">
                  {/* Градиентный фон */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-2xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Список преимуществ */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                      >
                        <FaCheck className={`mr-2 text-xs flex-shrink-0 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe; 