import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaRocket, FaShieldAlt, FaMoneyBillWave, FaTelegram, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const CTASection = () => {
  // Таймер на неделю
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      const difference = endDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: FaRocket,
      title: 'Быстрый старт',
      description: 'Начинаем работу в течение 24 часов после обсуждения',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Гарантия качества',
      description: '100% возврат предоплаты при несоответствии требованиям',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Гибкая оплата',
      description: 'Поэтапная оплата и возможность рассрочки',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const contactMethods = [
    {
      icon: FaTelegram,
      label: 'Telegram',
      href: 'https://t.me/your_username',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/77763052116',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:your@email.com',
      color: 'from-red-400 to-red-500'
    }
  ];

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
        <div className="relative">
          {/* Основной контент */}
          <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-3xl p-12 border border-secondary-700 overflow-hidden">
            {/* Светящийся эффект */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-[100px] bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-3xl"
            />

            <div className="relative max-w-4xl mx-auto">
              {/* Таймер скидки */}
              <AnimatedText type="gradient" delay={0.1} className="text-center mb-8">
                <motion.div
                  className="inline-block bg-primary-500/10 rounded-full px-6 py-2"
                >
                  <div className="flex items-center justify-center text-primary-400">
                    <FaClock className="mr-2" />
                    <span className="font-medium">
                      Специальное предложение заканчивается через:
                    </span>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    {Object.entries(timeLeft).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400">{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedText>

              {/* Заголовок */}
              <AnimatedText type="gradient" delay={0.2} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Готовы начать свой проект?
                </h2>
                <p className="text-xl text-gray-400">
                  Получите бесплатную консультацию и специальное предложение при заказе в ближайшие 7 дней
                </p>
              </AnimatedText>

              {/* Преимущества */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="relative h-full"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                      <div className="relative h-full bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <benefit.icon className="text-xl text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Способы связи */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-6 py-3 bg-secondary-800/50 backdrop-blur-sm rounded-xl border border-secondary-700 group-hover:border-primary-500 transition-all overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative flex items-center">
                        <method.icon className="text-xl text-primary-400 group-hover:text-primary-300 transition-colors" />
                        <span className="ml-2 text-white font-medium">{method.label}</span>
                      </div>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Форма заявки */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative max-w-xl mx-auto"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-xl p-8 border border-secondary-700">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Оставить заявку
                  </h3>
                  <div className="space-y-4">
                    <motion.a
                      href="/contact"
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      className="block w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center">
                        <span>Обсудить проект</span>
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                              className="ml-2"
                            >
                              <FaArrowRight />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.a>
                    <p className="text-center text-gray-400 text-sm">
                      Отвечаю в течение 2-3 часов
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 