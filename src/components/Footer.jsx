import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/example', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nurdaulet-usupov-82875018a', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/your_username', label: 'Telegram' },
    { icon: FaWhatsapp, href: 'https://wa.me/77763052116', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://instagram.com/your_username', label: 'Instagram' }
  ];

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'Обо мне' },
    { to: '/portfolio', label: 'Портфолио' },
    { to: '/contact', label: 'Контакты' }
  ];

  return (
    <footer className="relative mt-auto bg-secondary-900/95 backdrop-blur-sm z-10">
      {/* Градиентная линия сверху */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="relative">
        {/* Фоновый градиент */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/95 to-secondary-800/95 backdrop-blur-sm" />
        
        {/* Анимированный фоновый паттерн */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '30px 30px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div className="container mx-auto px-4 py-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Логотип и описание */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  NU
                </span>
              </Link>
              <p className="text-gray-100">
                Создаю современные веб-сайты
              </p>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="text-white font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-100 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-white font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-100">
                <li>
                  <a href="mailto:nurdauletusupov@gmail.com" className="hover:text-primary-400 transition-colors">
                    nurdauletusupov@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+77763052116" className="hover:text-primary-400 transition-colors">
                    +7 (776) 305-2116
                  </a>
                </li>
                <li>Астана, Казахстан</li>
              </ul>
            </div>

            {/* Социальные сети */}
            <div>
              <h3 className="text-white font-semibold mb-4">Социальные сети</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary-800/80 hover:bg-primary-500/20 flex items-center justify-center group transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-gray-100 group-hover:text-primary-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="pt-8 border-t border-secondary-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-100 text-sm text-center md:text-left">
                © {currentYear} Нурдаулет Юсупов. Все права защищены.
              </p>
              <p className="text-gray-100 text-sm flex items-center gap-1">
                Сделано с <FaHeart className="text-primary-500" /> в Казахстане
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 