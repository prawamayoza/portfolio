import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTools } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="app__about app__flex">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__about-container"
      >
        <div className="app__about-header">
          <h2 className="head-text">
            About <span>Me</span>
          </h2>
          <p className="p-text">Get to know me better</p>
        </div>

        <div className="app__about-content">
          <div className="app__about-info">
            <h3 className="app__about-subtitle">Who I Am</h3>
            <p className="p-text">
              I’m a passionate Quality Assurance specialist with a strong foundation in software testing and modern web technologies. I specialize in ensuring the quality, reliability, and usability of web applications through thorough manual and automated testing
            </p>
            <p className="p-text">
            With a keen eye for detail and a commitment to delivering clean, efficient, and user-friendly software, I analyse system workflows, prepare comprehensive test cases and scenarios, and apply both unit testing and automation testing to identify potential issues.
            </p>
            <p className='p-text'>
            With over 1 year of experience as a Software Quality Assurance, I play an essential role in making sure that every product meets user expectations and business requirements.
            </p>
          </div>

          <div className="app__about-cards">
            <motion.div
              whileHover={{ y: -10 }}
              className="app__about-card"
            >
              <div className="app__about-card-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
              <p className="p-text">
                Bachelor's in Information Systems<br />
                Subang State Polytechnic, (2020-2023) <br />
                CGPA: 3.21
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="app__about-card"
            >
              <div className="app__about-card-icon">
                <FaCode />
              </div>
              <h3>Experience</h3>
              <p className="p-text">
                1+ years of professional experience in Software Quality Assurance, skilled in automation testing, manual testing, load testing, unit testing, and API testing using Postman, ensuring high-quality and reliable software products.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="app__about-card"
            >
              <div className="app__about-card-icon">
                <FaTools />
              </div>
              <h3>Skills</h3>
              <p className="p-text">
                Manual Testing, Automation Testing (cypress, playwright), Unit Testing(jest), Load Testing (jmeter), Api Testing (postman), and more.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
