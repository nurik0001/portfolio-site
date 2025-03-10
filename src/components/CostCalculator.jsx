import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalculator, FaCheck, FaClock, FaCode, FaPalette, FaCog, FaRocket, FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

const CostCalculator = () => {
  const [projectType, setProjectType] = useState('landing');
  const [features, setFeatures] = useState([]);
  const [totalCost, setTotalCost] = useState(200000);
  const [complexity, setComplexity] = useState('medium');
  const [timeframe, setTimeframe] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const projectTypes = [
    { 
      id: 'landing', 
      name: 'Лендинг', 
      basePrice: 200000,
      icon: FaRocket,
      description: 'Одностраничный сайт для продвижения продукта или услуги',
      features: ['Адаптивный дизайн', 'Форма обратной связи', 'Оптимизация скорости']
    },
    { 
      id: 'webapp', 
      name: 'Веб-приложение', 
      basePrice: 500000,
      icon: FaCode,
      description: 'Многофункциональное веб-приложение с личным кабинетом',
      features: ['Авторизация', 'Личный кабинет', 'API интеграции']
    },
    { 
      id: 'bot', 
      name: 'Telegram бот', 
      basePrice: 150000,
      icon: FaCog,
      description: 'Автоматизированный бот для взаимодействия с клиентами',
      features: ['Автоответчик', 'Интеграция с CRM', 'Аналитика']
    },
  ];

  const additionalFeatures = [
    { 
      id: 'design', 
      name: 'Уникальный дизайн', 
      price: 100000,
      icon: FaPalette,
      description: 'Индивидуальный дизайн с учетом вашего бренда'
    },
    { 
      id: 'admin', 
      name: 'Админ-панель', 
      price: 150000,
      icon: FaCog,
      description: 'Панель управления контентом и настройками'
    },
    { 
      id: 'seo', 
      name: 'SEO оптимизация', 
      price: 50000,
      icon: FaChartLine,
      description: 'Базовая оптимизация для поисковых систем'
    },
    { 
      id: 'support', 
      name: 'Поддержка 1 месяц', 
      price: 50000,
      icon: FaShieldAlt,
      description: 'Техническая поддержка и обновления'
    },
  ];

  const complexityFactors = {
    low: 0.8,
    medium: 1,
    high: 1.3
  };

  useEffect(() => {
    calculateTotal(projectType, features, complexity);
  }, [projectType, features, complexity]);

  const handleTypeChange = (type) => {
    setProjectType(type);
    setFeatures([]);
  };

  const toggleFeature = (featureId) => {
    const newFeatures = features.includes(featureId)
      ? features.filter(id => id !== featureId)
      : [...features, featureId];
    setFeatures(newFeatures);
  };

  const calculateTotal = (type, selectedFeatures, selectedComplexity) => {
    const basePrice = projectTypes.find(t => t.id === type).basePrice;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      return sum + feature.price;
    }, 0);
    const complexityMultiplier = complexityFactors[selectedComplexity];
    const total = (basePrice + featuresPrice) * complexityMultiplier;
    setTotalCost(Math.round(total));
    
    // Расчет примерных сроков
    const baseTime = type === 'landing' ? 14 : type === 'webapp' ? 30 : 10;
    const featuresTime = selectedFeatures.length * 5;
    setTimeframe(Math.round((baseTime + featuresTime) * complexityFactors[selectedComplexity]));
  };

  const activeProject = projectTypes.find(t => t.id === projectType);

  return (
    <section className="py-20 bg-secondary-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
            <FaCalculator className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Калькулятор стоимости</h2>
          <p className="text-xl text-gray-400">Рассчитайте примерную стоимость вашего проекта</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Тип проекта */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Выберите тип проекта:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => handleTypeChange(type.id)}
                  className={`p-6 rounded-xl border group relative overflow-hidden ${
                    projectType === type.id
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-secondary-700 bg-secondary-800 hover:border-primary-500/50'
                  } transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <type.icon className="text-2xl text-primary-500 mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">{type.name}</h4>
                  <p className="text-primary-400 mb-2">от {type.basePrice.toLocaleString()} ₸</p>
                  <p className="text-sm text-gray-400">{type.description}</p>
                  <div className="mt-4 space-y-1">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <FaCheck className="text-primary-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Сложность проекта */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Сложность проекта:</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries({
                low: { name: 'Простой', factor: '-20%' },
                medium: { name: 'Средний', factor: '0%' },
                high: { name: 'Сложный', factor: '+30%' }
              }).map(([key, value]) => (
                <motion.button
                  key={key}
                  onClick={() => setComplexity(key)}
                  className={`p-4 rounded-xl border ${
                    complexity === key
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-secondary-700 bg-secondary-800 hover:border-primary-500/50'
                  } transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className="text-lg font-medium text-white mb-1">{value.name}</h4>
                  <p className="text-primary-400">{value.factor}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Дополнительные функции */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Дополнительные функции:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalFeatures.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-6 rounded-xl border group relative overflow-hidden ${
                    features.includes(feature.id)
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-secondary-700 bg-secondary-800 hover:border-primary-500/50'
                  } transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-xl ${
                      features.includes(feature.id)
                        ? 'bg-primary-500'
                        : 'bg-secondary-700'
                      } mr-4 flex items-center justify-center transition-colors`}
                    >
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="text-lg font-medium text-white mb-1">{feature.name}</h4>
                      <p className="text-sm text-gray-400 mb-2">{feature.description}</p>
                      <p className="text-primary-400">+{feature.price.toLocaleString()} ₸</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      features.includes(feature.id)
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-secondary-600'
                      } flex items-center justify-center ml-4`}
                    >
                      {features.includes(feature.id) && <FaCheck className="text-white text-sm" />}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Итоговая стоимость */}
          <motion.div
            className="bg-secondary-800 rounded-xl p-8 border border-secondary-700 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Примерная стоимость:</h3>
                  <p className="text-gray-400">Финальная стоимость может отличаться в зависимости от сложности проекта</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <motion.div
                    key={totalCost}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
                  >
                    {totalCost.toLocaleString()} ₸
                  </motion.div>
                  <div className="flex items-center justify-end mt-2 text-gray-400">
                    <FaClock className="mr-2" />
                    <span>Примерный срок: {timeframe} дней</span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-secondary-700 pt-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-4">Включено в стоимость:</h4>
                        <ul className="space-y-2">
                          {activeProject.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-400">
                              <FaCheck className="text-primary-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                          {features.map((featureId) => {
                            const feature = additionalFeatures.find(f => f.id === featureId);
                            return (
                              <li key={featureId} className="flex items-center text-gray-400">
                                <FaCheck className="text-primary-500 mr-2" />
                                {feature.name}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-4">Этапы разработки:</h4>
                        <ul className="space-y-2">
                          {[
                            'Анализ требований',
                            'Проектирование',
                            'Дизайн',
                            'Разработка',
                            'Тестирование',
                            'Запуск проекта'
                          ].map((step, index) => (
                            <li key={index} className="flex items-center text-gray-400">
                              <div className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mr-2 text-sm">
                                {index + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-primary-400 hover:text-primary-300 transition-colors flex items-center"
                >
                  {showDetails ? 'Скрыть детали' : 'Показать детали'}
                  <motion.div
                    animate={{ rotate: showDetails ? 180 : 0 }}
                    className="ml-2"
                  >
                    <FaArrowRight className="transform -rotate-90" />
                  </motion.div>
                </button>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium flex items-center group"
                >
                  Обсудить проект
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator; 