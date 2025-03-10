import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  // Кэшируем часто используемые значения
  const codeLines = useRef([
    'function Portfolio() {',
    '  const [projects, setProjects] = useState([]);',
    '  useEffect(() => {',
    '    fetchProjects();',
    '  }, []);',
    '',
    '  const fetchProjects = async () => {',
    '    const data = await api.get("/projects");',
    '    setProjects(data);',
    '  };',
    '',
    '  return (',
    '    <div className="portfolio">',
    '      {projects.map(project => (',
    '        <ProjectCard key={project.id} {...project} />',
    '      ))}',
    '    </div>',
    '  );',
    '}',
    '',
    'export default Portfolio;'
  ]);

  const keywords = useRef(['function', 'const', 'return', 'useEffect', 'async', 'await']);
  const components = useRef(['Portfolio', 'ProjectCard']);
  const methods = useRef(['useState', 'fetchProjects', 'setProjects', 'map']);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let resizeTimeout;

    // Проверка производительности устройства
    const checkPerformance = () => {
      let lastTime = performance.now();
      let frame = 0;
      
      const checkFPS = (timestamp) => {
        frame++;
        const delta = timestamp - lastTime;
        
        if (delta >= 1000) {
          const currentFPS = (frame * 1000) / delta;
          setIsLowPerformance(currentFPS < 30);
          return true;
        }
        
        requestAnimationFrame(checkFPS);
        return false;
      };
      
      requestAnimationFrame(checkFPS);
    };

    // Throttled resize handler
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 150); // 150ms throttle
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    checkPerformance();

    let currentLine = 0;
    let currentChar = 0;
    const lineHeight = 24;
    const startX = 50;
    let startY = 50;

    // Кэшируем настройки шрифта
    ctx.font = '16px "Fira Code", monospace';

    const animate = () => {
      if (isLowPerformance) {
        // Упрощенная анимация для слабых устройств
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Если достигли конца всех строк, начинаем сначала
      if (currentLine >= codeLines.current.length) {
        currentLine = 0;
        currentChar = 0;
        startY = 50;
      }

      // Рисуем предыдущие строки с эффектом затухания
      for (let i = 0; i < currentLine; i++) {
        const opacity = Math.max(0.3, 1 - (currentLine - i) * 0.1);
        ctx.fillStyle = `rgba(200, 200, 200, ${opacity})`;
        ctx.fillText(codeLines.current[i], startX, startY + i * lineHeight);
      }

      // Рисуем текущую строку
      if (currentChar <= codeLines.current[currentLine].length) {
        const currentText = codeLines.current[currentLine].substring(0, currentChar);
        
        let coloredText = currentText;
        keywords.current.forEach(keyword => {
          coloredText = coloredText.replace(
            new RegExp(`\\b${keyword}\\b`, 'g'),
            `%red%${keyword}%white%`
          );
        });
        components.current.forEach(comp => {
          coloredText = coloredText.replace(
            new RegExp(`\\b${comp}\\b`, 'g'),
            `%blue%${comp}%white%`
          );
        });
        methods.current.forEach(method => {
          coloredText = coloredText.replace(
            new RegExp(`\\b${method}\\b`, 'g'),
            `%green%${method}%white%`
          );
        });

        let x = startX;
        const parts = coloredText.split(/%\w+%/);
        const colors = coloredText.match(/%\w+%/g) || [];
        
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (colors[i]) {
            const color = colors[i].replace(/%/g, '');
            switch (color) {
              case 'red':
                ctx.fillStyle = '#ff6b6b';
                break;
              case 'blue':
                ctx.fillStyle = '#4dabf7';
                break;
              case 'green':
                ctx.fillStyle = '#69db7c';
                break;
              default:
                ctx.fillStyle = '#e9ecef';
            }
          } else {
            ctx.fillStyle = '#e9ecef';
          }
          ctx.fillText(part, x, startY + currentLine * lineHeight);
          x += ctx.measureText(part).width;
        }

        if (!isLowPerformance && Math.floor(Date.now() / 500) % 2) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(
            x,
            startY + currentLine * lineHeight - 15,
            2,
            20
          );
        }

        currentChar++;
        if (currentChar > codeLines.current[currentLine].length + 10) {
          currentLine++;
          currentChar = 0;
        }
      }

      if (startY + currentLine * lineHeight > canvas.height - 100) {
        startY = 50;
        currentLine = 0;
        currentChar = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLowPerformance]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)',
          zIndex: -2
        }}
      />
    </>
  );
};

export default AnimatedBackground; 