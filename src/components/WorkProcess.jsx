import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaSearch, FaPalette, FaCode, FaRocket, FaMoneyBillWave, FaShieldAlt, FaCheck, FaClock, FaUsers, FaLightbulb } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const WorkProcess = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: FaFileContract,
      title: 'Договор и предоплата',
      description: 'Заключаем официальный договор и вносите 50% предоплату',
      color: 'from-blue-500 to-purple-500',
      details: [
        'Официальный договор',
        'Гибкие условия оплаты',
        'Фиксированные сроки',
        'Четкие этапы работ'
      ]
    },
    {
      icon: FaSearch,
      title: 'Анализ и прототип',
      description: 'Изучаем ваш бизнес и создаем прототип будущего сайта',
      color: 'from-purple-500 to-pink-500',
      details: [
        'Анализ конкурентов',
        'Изучение целевой аудитории',
        'Разработка прототипа',
        'Согласование структуры'
      ]
    },
    {
      icon: FaPalette,
      title: 'Дизайн',
      description: 'Разрабатываем уникальный дизайн с учетом ваших пожеланий',
      color: 'from-pink-500 to-red-500',
      details: [
        'Уникальный дизайн',
        'Адаптивная верстка',
        'Современные тренды',
        'Пользовательский опыт'
      ]
    },
    {
      icon: FaCode,
      title: 'Разработка',
      description: 'Создаем функционал и интегрируем необходимые сервисы',
      color: 'from-red-500 to-orange-500',
      details: [
        'Чистый код',
        'Оптимизация скорости',
        'Интеграция сервисов',
        'Тестирование'
      ]
    },
    {
      icon: FaRocket,
      title: 'Запуск',
      description: 'Тестируем, вносим правки и запускаем проект',
      color: 'from-orange-500 to-yellow-500',
      details: [
        'Финальное тестирование',
        'Размещение на хостинге',
        'Настройка домена',
        'Обучение команды'
      ]
    }
  ];

  const benefits = [
    {
      icon: FaClock,
      title: 'Быстрый старт',
      description: 'Начинаем работу в течение 24 часов после обсуждения',
      color: 'from-blue-500 to-cyan-500',
      stats: '24ч'
    },
    {
      icon: FaUsers,
      title: 'Опытная команда',
      description: 'Команда опытных специалистов для вашего проекта',
      color: 'from-green-500 to-emerald-500',
      stats: '5+ лет'
    },
    {
      icon: FaLightbulb,
      title: 'Инновационный подход',
      description: 'Используем современные технологии и методологии',
      color: 'from-purple-500 to-pink-500',
      stats: '100+'
    }
  ];

  const guarantees = [
    {
      icon: FaFileContract,
      title: 'Официальный договор',
      description: 'Работаем по договору с указанием всех условий и сроков',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Удобная оплата',
      description: 'Kaspi Gold, банковский перевод или наличные',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Гарантия возврата',
      description: '100% возврат предоплаты при несоответствии требованиям',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <div className="container relative mx-auto px-4">
        <AnimatedText type="gradient" delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-400">
            Прозрачный процесс разработки с гарантией результата
          </p>
        </AnimatedText>

        {/* Процесс работы */}
        <div className="relative mb-20">
          {/* Линия соединяющая этапы */}
          <div className="absolute top-[45%] left-0 right-0 h-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Номер этапа */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                {/* Карточка этапа */}
                <div className="pt-8 h-full">
                  <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 hover:border-primary-500 transition-all overflow-hidden group">
                    {/* Градиентный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110`}>
                      <step.icon className="text-2xl text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors mb-4">
                      {step.description}
                    </p>

                    {/* Детали этапа */}
                    <div className="space-y-2">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: hoveredStep === index ? 1 : 0,
                            x: hoveredStep === index ? 0 : -20
                          }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                        >
                          <FaCheck className={`mr-2 text-xs flex-shrink-0 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Преимущества */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Наши преимущества
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-full"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all">
                    {/* Градиентный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="text-2xl text-white" />
                    </motion.div>

                    <div className="text-3xl font-bold text-white mb-2 text-center">
                      {benefit.stats}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Гарантии */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Наши гарантии
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-full"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all">
                    {/* Градиентный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${guarantee.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <guarantee.icon className="text-2xl text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess; 