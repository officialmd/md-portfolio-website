const header = {
  homepage: '',
  title: '<Md />',
}

const about = {
  name: 'Mohamad Deifallah',
  resume: 'https://officialmd.github.io/md-portfolio-website/mohamaddeifallahresume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mohamad-deifallah/',
    github: 'https://github.com/officialmd',
  },
}

const experiences = [
  {
    company: 'Natural Resources Canada (NRCan) - Ottawa, ON',
    role:'Junior Information Management Technologist Intern',
    date: 'October 2024 - December 2024',
    description:
      'Built a dynamic sub-report selection system in Microsoft Access, leveraging VBA and SQL filters to automate report generation and reduce manual data tasks.',
    stack: ['Stack: ', 'SQL, ', 'VBA, ', 'Microsoft Access, ','MS Office'],
  },
  {
    company: 'National Research Council Canada (NRC) - Ottawa, ON',
    role:'Junior Software Developer Intern',
    date: 'January 2024 - April 2024',
    description:
      'Implemented a web application using HTML, CSS, and JavaScript, enhancing data management and user interactions for a research project. Also developed and evaluated research proposals in alignment with NRC standards.',
    stack: ['Stack: ','HTML, ', 'CSS, ', 'Javascript'],
  },

]

const projects = [
  {
    name: 'D.U.C.K.I Research Project',
    description:
      'Developed “D.U.C.K.I.” to deliver tailored AI-driven learning experiences featuring voice input, mouth movement analysis, and interactive feedback.',
    stack: ['AI (Logistic/Linear Regression, Neural Networks), ', 'MS Office'],
  },
  {
    name: 'E-Commerce Application',
    description:
      'Built a Java-based e-commerce prototype using OOP design patterns, enabling product browsing, virtual cart management, and checkout through a textual interface.',
    stack: ['Java, ', 'IntelliJ IDEA'],
    sourceCode: 'https://github.com/officialmd/E-Commerce-Application',
  },
  {
    name: 'Photo-Editing Program',
    description:
      'Designed a collaborative photo-editing program with a text-based interface, focusing on digital color representation and pixel manipulation.',
    stack: ['Python (Wing 101 IDE)'],
  },
]

const skills = [
  'HTML/CSS',
  'Python',
  'JavaScript',
  'Java',
  'C++',
  'React',
  'Django',
  'Git/Github',
  'AWS',
  'SQL',
  'Flutter',
  'Linux',
  'NodeJS'
]

const contact = {
  email: 'officialmohamad@hotmail.com',
}

export { header, about, experiences, projects, skills, contact }
