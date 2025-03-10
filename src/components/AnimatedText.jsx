import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const AnimatedText = ({ children, className = "", delay = 0, type = "default" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const animations = {
    default: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      },
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    gradient: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      },
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { 
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -20
      },
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { 
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.9
      },
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={animations[type].initial}
        animate={animations[type].animate}
        transition={animations[type].transition}
        className={className}
      >
        {children}
        {type === 'gradient' && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '100%' } : { x: '-100%' }}
            transition={{
              duration: 1.2,
              delay: delay + 0.3,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent"
          />
        )}
      </motion.div>
    </div>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  type: PropTypes.oneOf(['default', 'gradient', 'slide', 'scale'])
};

export default AnimatedText; 