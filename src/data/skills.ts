interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    isHighlighted?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Quality Assurance',
    skills: [
      { name: 'Manual Testing', level: 95, icon: 'check-circle', isHighlighted: true },
      { name: 'Automated Testing', level: 50, icon: 'robot', isHighlighted: true },
      { name: 'Selenium', level: 50, icon: 'selenium', isHighlighted: true },
      { name: 'Cypress', level: 60, icon: 'cypress', isHighlighted: true },
      { name: 'Playwright', level: 50, icon: 'playwright', isHighlighted: true },
      { name: 'Postman', level: 70, icon: 'postman', isHighlighted: true },
      { name: 'JMeter', level: 40, icon: 'jmeter', isHighlighted: true },
      { name: 'Jest', level: 50, icon: 'jest', isHighlighted: true },
      { name: 'API Testing', level: 50, icon: 'api', isHighlighted: true },
      { name: 'Performance Testing', level: 50, icon: 'speedometer', isHighlighted: true },
      { name: 'Test Documentation', level: 95, icon: 'file-text', isHighlighted: true },
      { name: 'Quality System', level: 95, icon: 'check-shield', isHighlighted: true },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', level: 85, icon: 'git' },
      { name: 'GitHub', level: 80, icon: 'github' },
      { name: 'Figma', level: 70, icon: 'figma' },
      { name: 'n8n', level: 50, icon: 'n8n', isHighlighted: true },
      { name: 'Workflow Automation', level: 50, icon: 'workflow', isHighlighted: true },
    ],
  },
];