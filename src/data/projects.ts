interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceCode: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
    sourceCode: '#',
    liveDemo: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality, task categorization, and real-time updates.',
    tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
    sourceCode: '#',
    liveDemo: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts using a weather API.',
    tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
    image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
    sourceCode: '#',
    liveDemo: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TypeScript to showcase projects and skills.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'CSS3'],
    image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
    sourceCode: '#',
    liveDemo: '#',
  },
];
