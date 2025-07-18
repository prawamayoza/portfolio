import { motion } from 'framer-motion';
import { FaCheckCircle, FaCode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiSelenium, SiCypress, SiPostman, SiJest, SiN8N, SiFigma } from 'react-icons/si';
import { FaFile, FaShield, FaGaugeHigh, FaRobot, FaPlay, FaSitemap } from 'react-icons/fa6';
import { skillsData } from '../../data/skills';
import './Skills.css';

// Map icon names to actual icon components
const iconComponents: Record<string, React.ReactNode> = {
  'check-circle': <FaCheckCircle />,
  'robot': <FaRobot />,
  'selenium': <SiSelenium />,
  'cypress': <SiCypress />,
  'playwright': <FaPlay />,
  'postman': <SiPostman />,
  'jmeter': <FaGaugeHigh />,
  'jest': <SiJest />,
  'api': <FaCode />,
  'speedometer': <FaGaugeHigh />,
  'file-text': <FaFile />,
  'check-shield': <FaShield />,
  'n8n': <SiN8N />,
  'workflow': <FaCode />,
  'uml': <FaSitemap />,
  'git': <FaGitAlt />,
  'github': <FaGithub />,
  'figma': <SiFigma />,
  'default': <FaCode />
};

const Skills = () => {
  return (
    <section id="skills" className="app__skills">
      <div className="app__skills-container">
        <div className="app__skills-header">
          <h2 className="head-text">
            My <span>Skills</span>
          </h2>
          <p className="p-text">Technologies I work with</p>
        </div>

        <motion.div
          className="app__skills-portfolio"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              className="app__skills-category"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, type: 'tween' }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            >
              <div className="app__skills-content">
                <h3 className="bold-text">{category.title}</h3>
                
                <div className="app__skills-grid">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`app__skills-item ${skill.isHighlighted ? 'app__skills-item--highlighted' : ''}`}
                    >
                      <div className="app__skills-icon">
                        {iconComponents[skill.icon] || iconComponents['default'] || <i className={`devicon-${skill.icon}-plain`}></i>}
                      </div>
                      <span className="app__skills-name">{skill.name}</span>
                    </div>
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

export default Skills;
