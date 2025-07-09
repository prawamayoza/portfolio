import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projectTags = ['All', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'API'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 300);
  };

  return (
    <section id="projects" className="app__projects app__flex">
      <div className="app__projects-container">
        <div className="app__projects-header">
          <h2 className="head-text">
            My <span>Projects</span>
          </h2>
          <p className="p-text">Check out some of my recent work</p>
        </div>

        <div className="app__projects-filter">
          {projectTags.map((tag, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(tag)}
              className={`app__projects-filter-item ${activeFilter === tag ? 'active' : ''}`}
            >
              {tag}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__projects-portfolio"
        >
          {filteredProjects.map((project) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, type: 'tween' }}
              className="app__projects-item"
              key={project.id}
            >
              <div className="app__projects-img">
                <img src={project.image} alt={project.title} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__projects-hover"
                >
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__projects-hover-item"
                    >
                      <FaExternalLinkAlt />
                    </motion.div>
                  </a>
                  <a href={project.sourceCode} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__projects-hover-item"
                    >
                      <FaGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__projects-content">
                <h3 className="bold-text">{project.title}</h3>
                <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
                <div className="app__projects-tag">
                  {project.tags.map((tag, index) => (
                    <p key={index} className="p-text">{tag}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
