import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTelegram, FaWhatsapp, FaInstagram, FaCheck, FaSpinner } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      icon: FaTelegram,
      label: 'Telegram',
      value: '@nurdaulet',
      link: 'https://t.me/nurdaulet',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+7 (776) 305-2116',
      link: 'https://wa.me/77763052116',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@nurdaulet',
      link: 'https://instagram.com/nurdaulet',
      color: 'from-pink-400 to-purple-600'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: t('contact.email'),
      value: 'nurdauletusupov@gmail.com',
      link: 'mailto:nurdauletusupov@gmail.com',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: FaPhone,
      label: t('contact.phone'),
      value: '+7 (776) 305-2116',
      link: 'tel:+77763052116',
      color: 'from-green-400 to-teal-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: t('contact.location'),
      value: 'Астана, Казахстан',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Nurdaulet Yusupov',
      link: 'https://linkedin.com/in/nurdaulet-usupov-82875018a',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Здесь будет логика отправки формы
      await new Promise(resolve => setTimeout(resolve, 2000)); // Имитация отправки
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-secondary-900 via-secondary-800 to-primary-900 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-400">
                {t('contact.subtitle')}
              </p>
            </motion.div>

            {/* Социальные сети */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all overflow-hidden">
                    {/* Градиентный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{social.label}</p>
                        <p className="text-gray-400 group-hover:text-gray-300">{social.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Контактная информация</h2>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group relative"
                  >
                    <div className="relative bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700 group-hover:border-primary-500 transition-all overflow-hidden">
                      {/* Градиентный фон */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-white hover:text-primary-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Контактная форма */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
                  <h2 className="text-2xl font-bold text-white mb-8">Написать сообщение</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-400 mb-2">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-700 rounded-xl focus:outline-none focus:border-primary-500 text-white transition-colors resize-none"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium transition-all relative overflow-hidden ${
                        formStatus === 'loading' ? 'opacity-80' : 'hover:shadow-lg hover:shadow-primary-500/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`flex items-center justify-center ${formStatus === 'loading' ? 'invisible' : ''}`}>
                        {formStatus === 'success' ? (
                          <>
                            <FaCheck className="mr-2" />
                            Сообщение отправлено
                          </>
                        ) : (
                          t('contact.form.send')
                        )}
                      </span>
                      {formStatus === 'loading' && (
                        <FaSpinner className="absolute inset-0 m-auto animate-spin" />
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact; 