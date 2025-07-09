import { motion } from 'framer-motion';
import { FaCheckCircle, FaCode } from 'react-icons/fa';
import { SiSelenium, SiCypress, SiPostman, SiJest, SiN8N } from 'react-icons/si';
import { FaFile, FaShield, FaGaugeHigh, FaRobot } from 'react-icons/fa6';
import { skillsData } from '../../data/skills';
import './Skills.css';

// Map icon names to actual icon components
const iconComponents: Record<string, React.ReactNode> = {
  'check-circle': <FaCheckCircle />,
  'robot': <FaRobot />,
  'selenium': <SiSelenium />,
  'cypress': <SiCypress />,
  'playwright': <FaCode />, // Using code icon as fallback
  'postman': <SiPostman />,
  'jmeter': <FaGaugeHigh />, // Using gauge icon as fallback
  'jest': <SiJest />,
  'api': <FaCode />,
  'speedometer': <FaGaugeHigh />,
  'file-text': <FaFile />,
  'check-shield': <FaShield />,
  'n8n': <SiN8N />,
  'workflow': <FaCode />,
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
                
                <div className="app__skills-list">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`app__skills-item ${skill.isHighlighted ? 'app__skills-item--highlighted' : ''}`}
                    >
                      <div className="app__skills-item-header">
                        <div className={`app__skills-icon ${skill.isHighlighted ? 'app__skills-icon--highlighted' : ''}`}>
                          {iconComponents[skill.icon] || iconComponents['default'] || <i className={`devicon-${skill.icon}-plain`}></i>}
                        </div>
                        <span className={skill.isHighlighted ? 'app__skills-name--highlighted' : ''}>{skill.name}</span>
                      </div>
                      <div className="app__skills-progress">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="app__skills-progress-bar"
                          style={{
                            background: `linear-gradient(90deg, var(--secondary-color) 0%, var(--secondary-dark-color) 100%)`,
                          }}
                        ></motion.div>
                        <span className="app__skills-percent">{skill.level}%</span>
                      </div>
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
