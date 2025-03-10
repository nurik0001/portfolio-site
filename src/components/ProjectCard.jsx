import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          srcSet={`${project.image}-small.jpg 300w, ${project.image}-medium.jpg 600w, ${project.image}-large.jpg 900w`}
          sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm">{project.description}</p>
          <div className="flex gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-white/20 text-white rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-400 text-white rounded hover:bg-primary-500 transition-colors"
                aria-label={`Посмотреть демо проекта ${project.title}`}
              >
                Демо
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors"
                aria-label={`Посмотреть код проекта ${project.title} на GitHub`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string
  }).isRequired
};

export default ProjectCard; 