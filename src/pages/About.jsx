import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaTools, FaGraduationCap, FaBriefcase, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: FaCode, value: '50+', label: 'Проектов', color: 'from-blue-500 to-cyan-500' },
    { icon: FaUsers, value: '30+', label: 'Клиентов', color: 'from-green-500 to-emerald-500' },
    { icon: FaRocket, value: '5+', label: 'Лет опыта', color: 'from-purple-500 to-pink-500' },
    { icon: FaChartLine, value: '250%', label: 'Средний ROI', color: 'from-orange-500 to-amber-500' }
  ];

  const skills = {
    technical: [
      { name: 'Frontend', icon: FaLaptopCode, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { name: 'Mobile', icon: FaMobileAlt, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
      { name: 'Backend', icon: FaServer, items: ['Node.js', 'Python', 'PHP', 'Laravel'] },
      { name: 'Database', icon: FaDatabase, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
      { name: 'Tools', icon: FaTools, items: ['Git', 'Docker', 'AWS', 'Firebase'] }
    ],
    soft: [
      'Коммуникабельность',
      'Управление проектами',
      'Решение проблем',
      'Работа в команде',
      'Адаптивность',
      'Критическое мышление'
    ]
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-secondary-900 via-secondary-800 to-primary-900 pt-24">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('about.title')}
              </h1>
              <p className="text-xl text-gray-400">
                {t('about.subtitle')}
              </p>
            </motion.div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-700 hover:border-primary-500 transition-all overflow-hidden">
                    {/* Градиентный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="text-white text-xl" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Биография */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-secondary-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Обо мне</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.bio')}
              </p>
            </motion.div>

            {/* Опыт работы */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <FaBriefcase className="mr-3 text-primary-500" />
                Опыт работы
              </h2>
              <div className="space-y-6">
                {t('about.experience.items', { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:to-secondary-500"
                  >
                    <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                      <div className="absolute -left-3 top-8 w-6 h-6 bg-primary-500 rounded-full" />
                      <h3 className="text-xl font-semibold text-primary-400">{item.company}</h3>
                      <p className="text-white mb-2">{item.position}</p>
                      <p className="text-sm text-gray-400 mb-4">{item.period}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Навыки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <FaTools className="mr-3 text-primary-500" />
                Навыки
              </h2>
              
              {/* Технические навыки */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {skills.technical.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700 hover:border-primary-500 transition-all">
                      <div className="flex items-center mb-4">
                        <category.icon className="text-primary-500 text-xl mr-3" />
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-lg text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Софт скиллы */}
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-secondary-700/50 text-gray-300 rounded-xl text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Образование */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <FaGraduationCap className="mr-3 text-primary-500" />
                Образование
              </h2>
              <div className="space-y-6">
                {t('about.education.items', { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700"
                  >
                    <h3 className="text-xl font-semibold text-primary-400">{item.name}</h3>
                    <p className="text-white mb-2">{item.specialization}</p>
                    <p className="text-sm text-gray-400">{item.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About; 