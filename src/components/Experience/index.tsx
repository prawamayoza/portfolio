import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: 'Software Quality Assurance',
    company: 'Tjal Teknologi Studio',
    type: 'Contract',
    duration: 'Oct 2023 - Present · 1 yr 10 mos',
    location: 'Bandung, West Java, Indonesia · Remote',
    description: 'As a Quality Assurance professional with hands-on experience in ensuring software product quality, I am responsible for verifying that all features function according to business requirements and user expectations. In my role, I apply both black-box testing and automation testing approaches to identify potential issues from a user perspective, utilizing automation tools such as Selenium.',
    responsibilities: [
      'Conducting API testing using Postman and Swagger to ensure seamless integration between systems.',
      'Performing performance testing using JMeter to evaluate system reliability under load.',
      'Applying systematic approaches and strong attention to detail to help development teams deliver reliable solutions.',
      'Learning and implementing n8n for workflow automation to enhance technical capabilities.'
    ],
    skills: ['Quality System', 'Postman API', 'Selenium', 'JMeter', 'n8n', 'Black-box Testing', 'API Testing', 'Performance Testing', 'Workflow Automation']
  },
  {
    id: 2,
    role: 'Quality Assurance',
    company: 'Inari Digital Indonesia',
    type: 'Full-time',
    duration: 'Jan 2025 - Jun 2025 · 6 mos',
    location: 'Bandung, West Java, Indonesia · Remote',
    description: 'Worked on a project basis under Wolin Ventures Pte. Ltd. as a Quality Assurance Engineer. Responsible for ensuring software quality throughout the development lifecycle.',
    responsibilities: [
      'Performing manual testing to validate features based on requirements.',
      'Developing and maintaining automated test scripts using Cypress and Playwright for regression and end-to-end testing.',
      'Writing and executing unit tests using Jest to ensure component-level reliability.',
      'Collaborating with developers and product teams to identify bugs early and improve product quality.',
      'Creating and managing test case documentation as part of the pre-testing process.'
    ],
    skills: ['Manual Testing', 'Unit Testing', 'Cypress', 'Playwright', 'Jest', 'Test Documentation', 'Regression Testing', 'End-to-end Testing']
  },
  {
    id: 3,
    role: 'System Analyst',
    company: 'Jokian.ku',
    type: 'Freelance',
    duration: 'Aug 2022 - Dec 2024 · 2 yrs 5 mos',
    location: 'Indonesia · Remote',
    description: 'Provided professional services in the development and design of custom software systems tailored to meet each client\'s unique needs.',
    responsibilities: [
      'Developing effective and efficient systems to support clients’ business operations.',
      'Analyzing system requirements, designing workflows, and ensuring solutions align with business objectives.',
      'Preparing comprehensive system development documentation, including technical specifications and user guides.',
      'Working closely with clients to ensure practical and effective solutions that meet their expectations.'
    ],
    skills: ['Laravel', 'Problem Solving', 'System Analysis', 'Documentation', 'Requirements Gathering', 'Workflow Design']
  },
  {
    id: 4,
    role: 'Quality Assurance Intern',
    company: 'Kesia.id',
    type: 'Internship',
    duration: 'Oct 2022 - Jan 2023 · 4 mos',
    location: 'Bandung, West Java, Indonesia · On-site',
    description: 'Worked as a Quality Assurance Intern applying black-box testing methods to validate system functionality based on user expectations and requirements.',
    responsibilities: [
      'Creating User Acceptance Testing (UAT) documents.',
      'Participating in understanding and analyzing hospital information system flow.',
      'Preparing test cases to ensure features met both functional and business needs.',
      'Gaining domain knowledge in healthcare systems while strengthening software testing skills.'
    ],
    skills: ['Quality Assurance', 'Manual Testing', 'Black-box Testing', 'UAT Documentation', 'Test Case Design', 'Healthcare Systems', 'Requirements Analysis']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="app__experience">
      <div className="app__experience-container">
        <div className="app__experience-header">
          <motion.h2 
            className="head-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work <span>Experience</span>
          </motion.h2>
          <p className="p-text">My professional journey and roles</p>
        </div>
        
        <motion.div
          className="app__experience-portfolio"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {experienceData.map((exp) => (
            <motion.div 
              key={exp.id}
              className="app__experience-item"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, type: 'tween' }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            >
              <div className="app__experience-content">
                <h3 className="bold-text">{exp.role} <span className="p-text">@ {exp.company}</span></h3>
                
                <div className="app__experience-meta">
                  <span>
                    <FaBriefcase /> {exp.type}
                  </span>
                  <span>
                    <FaCalendar /> {exp.duration}
                  </span>
                  <span>
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                
                <p className="app__experience-description">{exp.description}</p>
                
                <div className="app__experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="app__experience-tag">
                  {exp.skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
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

export default Experience;
