import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GlowingIcon = ({ icon: Icon, href, label, size = 24, onClick }) => {
  const content = (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Эффект свечения */}
      <div className="absolute -inset-2 bg-primary-500 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300 group-hover:duration-200" />
      
      {/* Фоновый градиент */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-0 group-hover:opacity-50 blur transition-all duration-300 group-hover:duration-200" />
      
      {/* Иконка */}
      <div className="relative p-4 bg-secondary-800 rounded-lg border border-secondary-700 group-hover:border-primary-500 transition-all duration-300">
        <Icon size={size} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
      </div>
      
      {/* Подпись */}
      {label && (
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-secondary-800 text-xs text-gray-400 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block">
        {content}
      </button>
    );
  }

  return content;
};

GlowingIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func
};

export default GlowingIcon; 