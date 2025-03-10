import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaRocket, FaMoneyBillWave, FaGlobe, FaCheck, FaArrowRight, FaPhone, FaEnvelope, FaTelegram, FaWhatsapp, FaInfoCircle, FaDesktop, FaMobile, FaTablet, FaPalette, FaCog, FaChartLine } from 'react-icons/fa';

const ProjectBrief = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    projectGoal: '',
    examples: '',
    budget: '',
    features: [],
    timeline: '',
    additionalInfo: '',
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    platforms: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectGoals = [
    { 
      id: 'leads', 
      label: 'Получение лидов',
      icon: FaRocket,
      description: 'Привлечение потенциальных клиентов через сайт'
    },
    { 
      id: 'sales', 
      label: 'Увеличение продаж',
      icon: FaMoneyBillWave,
      description: 'Создание эффективной системы онлайн-продаж'
    },
    { 
      id: 'brand', 
      label: 'Укрепление бренда',
      icon: FaGlobe,
      description: 'Повышение узнаваемости и лояльности к бренду'
    },
    { 
      id: 'automation', 
      label: 'Автоматизация процессов',
      icon: FaCog,
      description: 'Оптимизация бизнес-процессов через веб-решения'
    }
  ];

  const platforms = [
    { id: 'desktop', label: 'Десктоп', icon: FaDesktop },
    { id: 'mobile', label: 'Мобильные', icon: FaMobile },
    { id: 'tablet', label: 'Планшеты', icon: FaTablet }
  ];

  const features = [
    { 
      id: 'adaptive', 
      label: 'Адаптивный дизайн',
      icon: FaPalette,
      description: 'Оптимизация под все устройства'
    },
    { 
      id: 'admin', 
      label: 'Админ-панель',
      icon: FaCog,
      description: 'Управление контентом сайта'
    },
    { 
      id: 'seo', 
      label: 'SEO-оптимизация',
      icon: FaChartLine,
      description: 'Продвижение в поисковых системах'
    },
    { 
      id: 'analytics', 
      label: 'Аналитика',
      icon: FaChartLine,
      description: 'Отслеживание показателей'
    },
    { 
      id: 'crm', 
      label: 'Интеграция с CRM',
      icon: FaCog,
      description: 'Автоматизация работы с клиентами'
    },
    { 
      id: 'payment', 
      label: 'Прием платежей',
      icon: FaMoneyBillWave,
      description: 'Онлайн-оплата на сайте'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
    
    // Имитация отправки
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Сброс формы
      setFormData({
        businessType: '',
        projectGoal: '',
        examples: '',
        budget: '',
        features: [],
        timeline: '',
        additionalInfo: '',
        name: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        platforms: []
      });
      setCurrentStep(1);
    }, 3000);
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handlePlatformToggle = (platformId) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(id => id !== platformId)
        : [...prev.platforms, platformId]
    }));
  };

  const steps = [
    { title: 'О проекте', icon: FaBuilding },
    { title: 'Функционал', icon: FaCog },
    { title: 'Контакты', icon: FaEnvelope }
  ];

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.businessType && formData.projectGoal;
      case 2:
        return formData.features.length > 0 && formData.platforms.length > 0;
      case 3:
        return formData.name && formData.email;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length && isStepValid(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Заполните бриф проекта
            </h2>
            <p className="text-xl text-gray-400">
              Расскажите о вашем проекте, чтобы мы могли предложить оптимальное решение
            </p>
          </div>

          {/* Прогресс заполнения */}
          <div className="mb-8">
            <div className="flex justify-between items-center relative mb-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center relative z-10"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: currentStep === index + 1 ? 1.1 : 1,
                      backgroundColor: currentStep >= index + 1 ? 'rgb(var(--primary-500))' : 'rgb(var(--secondary-700))'
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      currentStep >= index + 1 ? 'bg-primary-500' : 'bg-secondary-700'
                    }`}
                  >
                    <step.icon className="text-white" />
                  </motion.div>
                  <span className="text-sm text-gray-400">{step.title}</span>
                </div>
              ))}
              {/* Линия прогресса */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-secondary-700">
                <motion.div
                  className="h-full bg-primary-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Тип бизнеса */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaBuilding className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">О вашем бизнесе</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="businessType" className="block text-gray-400 mb-2">
                          Тип бизнеса
                        </label>
                        <input
                          type="text"
                          id="businessType"
                          className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                          placeholder="Например: Магазин одежды, IT-компания"
                          value={formData.businessType}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Цели проекта */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaRocket className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Цели проекта</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectGoals.map(goal => (
                        <motion.button
                          key={goal.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectGoal: goal.id }))}
                          className={`p-6 rounded-xl border group relative overflow-hidden ${
                            formData.projectGoal === goal.id
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-secondary-700 hover:border-primary-500/50'
                          } transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative">
                            <goal.icon className="text-2xl text-primary-500 mb-3" />
                            <h4 className="text-lg font-medium text-white mb-2">{goal.label}</h4>
                            <p className="text-sm text-gray-400">{goal.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Примеры сайтов */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaGlobe className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Примеры сайтов</h3>
                    </div>
                    <textarea
                      className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white h-32 resize-none"
                      placeholder="Укажите ссылки на сайты, которые вам нравятся, и что именно в них привлекает"
                      value={formData.examples}
                      onChange={(e) => setFormData(prev => ({ ...prev, examples: e.target.value }))}
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Платформы */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaDesktop className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Целевые платформы</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {platforms.map(platform => (
                        <motion.button
                          key={platform.id}
                          type="button"
                          onClick={() => handlePlatformToggle(platform.id)}
                          className={`p-4 rounded-xl border group relative overflow-hidden ${
                            formData.platforms.includes(platform.id)
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-secondary-700 hover:border-primary-500/50'
                          } transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-center">
                            <platform.icon className="text-2xl text-primary-500 mr-3" />
                            <span className="text-white">{platform.label}</span>
                            {formData.platforms.includes(platform.id) && (
                              <FaCheck className="ml-auto text-primary-500" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Функционал */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaCog className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Необходимый функционал</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map(feature => (
                        <motion.button
                          key={feature.id}
                          type="button"
                          onClick={() => handleFeatureToggle(feature.id)}
                          className={`p-6 rounded-xl border group relative overflow-hidden ${
                            formData.features.includes(feature.id)
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-secondary-700 hover:border-primary-500/50'
                          } transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-start">
                            <div className={`w-10 h-10 rounded-xl ${
                              formData.features.includes(feature.id)
                                ? 'bg-primary-500'
                                : 'bg-secondary-700'
                              } mr-4 flex items-center justify-center transition-colors flex-shrink-0`}
                            >
                              <feature.icon className="text-white text-xl" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-medium text-white mb-1">{feature.label}</h4>
                              <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 ml-4 flex-shrink-0 ${
                              formData.features.includes(feature.id)
                                ? 'border-primary-500 bg-primary-500'
                                : 'border-secondary-600'
                              } flex items-center justify-center`}
                            >
                              {formData.features.includes(feature.id) && (
                                <FaCheck className="text-white text-sm" />
                              )}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Бюджет */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaMoneyBillWave className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Бюджет проекта</h3>
                    </div>
                    <select
                      className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="200-500">200 000 - 500 000 ₸</option>
                      <option value="500-1000">500 000 - 1 000 000 ₸</option>
                      <option value="1000+">Более 1 000 000 ₸</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Контактная информация */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaEnvelope className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Контактная информация</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2">
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-400 mb-2">
                          Телефон (необязательно)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Предпочтительный способ связи */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaPhone className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Предпочтительный способ связи</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { id: 'email', label: 'Email', icon: FaEnvelope },
                        { id: 'phone', label: 'Телефон', icon: FaPhone },
                        { id: 'telegram', label: 'Telegram', icon: FaTelegram },
                        { id: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp }
                      ].map(contact => (
                        <motion.button
                          key={contact.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredContact: contact.id }))}
                          className={`p-4 rounded-xl border group relative overflow-hidden ${
                            formData.preferredContact === contact.id
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-secondary-700 hover:border-primary-500/50'
                          } transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex flex-col items-center">
                            <contact.icon className="text-2xl text-primary-500 mb-2" />
                            <span className="text-white text-sm">{contact.label}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Дополнительная информация */}
                  <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                    <div className="flex items-center mb-4">
                      <FaInfoCircle className="text-2xl text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Дополнительная информация</h3>
                    </div>
                    <textarea
                      className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white h-32 resize-none"
                      placeholder="Любая дополнительная информация, которая поможет лучше понять ваш проект"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Навигация */}
            <div className="flex justify-between items-center">
              {currentStep > 1 ? (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-secondary-800 text-white rounded-xl font-medium flex items-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaArrowRight className="mr-2 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Назад
                </motion.button>
              ) : (
                <div></div>
              )}
              
              {currentStep < steps.length ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center group ${
                    isStepValid(currentStep)
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'bg-secondary-800 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={isStepValid(currentStep) ? { scale: 1.02 } : {}}
                  whileTap={isStepValid(currentStep) ? { scale: 0.98 } : {}}
                >
                  Далее
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={!isStepValid(currentStep)}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center group ${
                    isStepValid(currentStep)
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'bg-secondary-800 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={isStepValid(currentStep) ? { scale: 1.02 } : {}}
                  whileTap={isStepValid(currentStep) ? { scale: 0.98 } : {}}
                >
                  Отправить бриф
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </div>
          </form>

          {/* Сообщение об успешной отправке */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center"
              >
                <FaCheck className="mr-2" />
                Бриф успешно отправлен!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectBrief; 