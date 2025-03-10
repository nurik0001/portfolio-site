import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaArrowDown, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import TypedText from '../components/TypedText';
import WhyMe from '../components/WhyMe';
import Services from '../components/Services';
import MarketingServices from '../components/MarketingServices';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import CostCalculator from '../components/CostCalculator';
import OfferPopup from '../components/OfferPopup';
import BusinessSolutions from '../components/BusinessSolutions';
import CaseStudies from '../components/CaseStudies';
import WorkProcess from '../components/WorkProcess';
import ProjectBrief from '../components/ProjectBrief';
import GlowingIcon from '../components/GlowingIcon';

const Home = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Параллакс эффекты
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // Анимация для появления элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const features = [
    {
      icon: FaCode,
      title: 'Современные технологии',
      description: 'React, Next.js, Node.js',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRocket,
      title: 'Быстрый запуск',
      description: '7-14 дней до старта',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaLightbulb,
      title: 'Уникальный дизайн',
      description: 'Индивидуальный подход',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <PageTransition>
      <OfferPopup />
      <div className="relative min-h-screen">
        {/* Фиксированный фон с градиентом */}
        <motion.div 
          style={{ y: bgY }}
          className="fixed inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-primary-900"
        >
          {/* Сетка и градиентный фон */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10" />
          </div>
        </motion.div>

        {/* Основной контент */}
        <div className="relative">
          {/* Hero секция */}
          <motion.div 
            style={{ y: textY, opacity: opacityHero }}
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8"
          >
            <motion.div 
              className="container relative mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center">
                

                  <motion.h1 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-32"
                  >
                    {t('home.greeting')} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient">
                      {t('home.name')}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                  >
                    {t('home.description')}
                  </motion.p>

                  <motion.div 
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-primary-400 mb-12 min-h-[60px]"
                  >
                    <TypedText
                      strings={[
                        'Создаю современные веб-решения, которые работают на вас',
                        'Разрабатываю веб-приложения под ключ',
                        'Создаю эффективные лендинги',
                        'Разрабатываю Telegram-ботов'
                      ]}
                    />
                  </motion.div>

                  {/* Карточки преимуществ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.title}
                        variants={itemVariants}
                        className="relative group"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all duration-300">
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                          <feature.icon className="text-3xl text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA кнопки */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12"
                  >
                    <motion.a
                      href="/portfolio"
                      className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white rounded-xl font-medium text-base sm:text-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Посмотреть проекты</span>
                    </motion.a>

                    <motion.a
                      href="/contact"
                      className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-secondary-800/50 backdrop-blur-sm text-white rounded-xl font-medium text-base sm:text-lg border border-secondary-700 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Связаться со мной</span>
                    </motion.a>
                  </motion.div>

                  {/* Социальные сети */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex justify-center gap-4 sm:gap-6"
                  >
                    {[
                      { icon: FaGithub, link: "https://github.com", label: "GitHub" },
                      { icon: FaLinkedin, link: "https://linkedin.com/in/nurdaulet-usupov-82875018a", label: "LinkedIn" },
                      { icon: FaTelegram, link: "https://t.me/your_username", label: "Telegram" },
                      { icon: FaWhatsapp, link: "https://wa.me/77763052116", label: "WhatsApp" }
                    ].map((social) => (
                      <GlowingIcon
                        key={social.link}
                        icon={social.icon}
                        href={social.link}
                        label={social.label}
                      />
                    ))}
                  </motion.div>

                  {/* Скролл индикатор */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-white/50 cursor-pointer hover:text-primary-500 transition-colors"
                    >
                      <FaArrowDown size={24} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Остальные секции */}
          <div className="relative bg-secondary-900">
            <WhyMe />
            <Services />
            <BusinessSolutions />
            <CaseStudies />
            <WorkProcess />
            <CostCalculator />
            <MarketingServices />
            <Testimonials />
            <ProjectBrief />
            <CTASection />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home; 