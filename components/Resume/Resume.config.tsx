export const keyTechSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'C',
    iconUrl: '/assets/portfolio/skills/c.svg',
  },

  {
    text: 'Java',
    iconUrl: '/assets/portfolio/skills/java-original.svg',
  },
  {
    text: 'Python',
    iconUrl: '/assets/portfolio/skills/python-original.svg',
  },
  {
    text: 'Golang',
    iconUrl: '/assets/portfolio/skills/go-original.svg',
  },
  {
    text: 'HTML',
    iconUrl: '/assets/portfolio/skills/html5-original.svg',
  },
  {
    text: 'CSS',
    iconUrl: '/assets/portfolio/skills/css3-original.svg',
  },
  {
    text: 'JavaScript',
    iconUrl: '/assets/portfolio/skills/javascript-original.svg',
  },
  {
    text: 'PostgreSQL',
    iconUrl: '/assets/portfolio/skills/postgresql-original.svg',
  },
  {
    text: 'SQL',
    iconUrl: '/assets/portfolio/skills/mysql-original.svg',
  },
  {
    text: 'Redis',
    iconUrl: '/assets/portfolio/skills/redis-original.svg',
  },
  {
    text: 'SQLAlchemy',
    iconUrl: '/assets/portfolio/skills/sqlalchemy-original.svg',
  },    
  {
    text: 'Flask',
    iconUrl: '/assets/portfolio/skills/flask-original.svg',
  },  
  {
    text: 'FastAPI',
    iconUrl: '/assets/portfolio/skills/fastapi-original.svg',
  },
  {
    text: 'UVicorn',
    iconUrl: '/assets/portfolio/skills/uv.svg',
  },
];

export const otherSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'NumPy',
    iconUrl: '/assets/portfolio/skills/numpy-original.svg',
  },
  {
    text: 'Pandas',
    iconUrl: '/assets/portfolio/skills/pandas-original.svg',
  },
    {
    text: 'Matplotlib',
    iconUrl: '/assets/portfolio/skills/matplotlib-original.svg',
  },
    {
    text: 'Scikit-Learn',
    iconUrl: '/assets/portfolio/skills/scikitlearn-original.svg',
  },
    {
    text: 'TensorFlow',
    iconUrl: '/assets/portfolio/skills/tensorflow-original.svg',
  },
    {
    text: 'PyTorch',
    iconUrl: '/assets/portfolio/skills/pytorch-original.svg',
  },
  {
    text: 'OpenCV',
    iconUrl: '/assets/portfolio/skills/opencv-original.svg',
  },

    {
    text: 'LangChain',
    iconUrl: '/assets/portfolio/skills/langchain.svg',
  },
  {
    text: 'CrewAI',
    iconUrl: '/assets/portfolio/skills/crewai.svg',
  },
    {
    text: 'Model Context Protocol (MCP)',
    iconUrl: '/assets/portfolio/skills/modelcontextprotocol.svg',
  },
    {
    text: 'Gradio',
    iconUrl: '/assets/portfolio/skills/gradio.svg',
  },
    {
    text: 'Azure',
    iconUrl: '/assets/portfolio/skills/azure-original.svg',
  },
  {
    text: 'Git',
    iconUrl: '/assets/portfolio/skills/git-original.svg',
  },
  {
    text: 'GitHub',
    iconUrl: '/assets/portfolio/skills/github-original.svg',
  },
  {
    text: 'PyPI',
    iconUrl: '/assets/portfolio/skills/pypi-original.svg',
  },
  {
    text: 'Bash',
    iconUrl: '/assets/portfolio/skills/bash-original.svg',
  },
  {
    text: 'Docker',
    iconUrl: '/assets/portfolio/skills/docker-original.svg',
  },
  {
    text: 'JSON',
    iconUrl: '/assets/portfolio/skills/json-original.svg',
  },
  {
    text: 'YAML',
    iconUrl: '/assets/portfolio/skills/yaml-original.svg',
  },
  {
    text: 'Jupyter Notebook',
    iconUrl: '/assets/portfolio/skills/jupyter-original.svg',
  },
  {
    text: 'Google Colab',
    iconUrl: '/assets/portfolio/skills/googlecolab-original.svg',
  },
  {
    text: 'VS Code',
    iconUrl: '/assets/portfolio/skills/vscode-original.svg',
  },
  {
    text: 'Vercel',
    iconUrl: '/assets/portfolio/skills/vercel.svg',
  },
  {
    text: 'Render',
    iconUrl: '/assets/portfolio/skills/render.svg',
  },
  {
    text: 'Railway',
    iconUrl: '/assets/portfolio/skills/railway-original.svg',
  },
    {
    text: 'Supabase',
    iconUrl: '/assets/portfolio/skills/supabase-original.svg',
  },
    {
    text: 'Hugging Face',
    iconUrl: '/assets/portfolio/skills/huggingface.svg',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'DeepFake Detector',
    companyImg: '',
    role: '',
    shortSummary:
      'Developed a state-of-the-art DeepFake detection tool using advanced machine learning models to identify manipulated media content with high accuracy. The project combines computer vision, deep learning, and face detection technologies to combat the spread of synthetic media.',
    timeFrame: '2024',
    responsibilities: [
      {
        text: 'Built DeepFake detection system achieving high accuracy in identifying manipulated videos and images',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://deepfakevideodetector.vercel.app/',
      },
      {
        text: 'Implemented MTCNN for robust face detection and extraction from video frames',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Integrated EfficientNetV2 architecture for efficient and accurate classification',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Nl2Sql2NL',
    companyImg: '',
    role: '',
    shortSummary: `Developed an advanced Natural Language to SQL to Natural Language system using Model Context Protocol (MCP). This innovative project bridges the gap between human language and database queries, allowing users to interact with databases using plain English and receive natural language responses.`,
    timeFrame: '2025',
    responsibilities: [
      {
        text: 'Built NL2SQL system using Model Context Protocol for seamless language-to-database translation',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://nl2sql2nl.vercel.app/',
      },
      {
        text: 'Implemented advanced NLP models for natural language understanding and query generation',
        iconUrl: '/assets/portfolio/check.svg',
      },
    {
      text: 'Integrated MCP framework for improved context understanding and query accuracy',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Developed SQL-to-Natural Language converter for user-friendly database response interpretation',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Created intelligent context management system for handling complex multi-turn conversations',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Optimized model performance for real-time query processing and response generation',
      iconUrl: '/assets/portfolio/check.svg',
    },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Research Paper RAG',
    companyImg: '',
    role: '',
    shortSummary:
      'Developed an advanced Retrieval-Augmented Generation (RAG) system for research paper analysis and querying. This innovative project combines large language models with vector databases to enable intelligent document retrieval and question-answering capabilities for academic research papers.',
    timeFrame: '2025',
    responsibilities: [
    {
      text: 'Built comprehensive RAG pipeline for research paper indexing and intelligent retrieval',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Implemented vector embeddings using state-of-the-art transformer models for semantic search',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Integrated LangChain framework for document processing and chain orchestration',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Developed semantic chunking strategies for optimal document segmentation and retrieval',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Created intelligent question-answering system with citation and source attribution',
      iconUrl: '/assets/portfolio/check.svg',
    },
    {
      text: 'Optimized retrieval performance using FAISS vector database for fast similarity search',
      iconUrl: '/assets/portfolio/check.svg',
    },
    ],
  },
  // {
  //   variant: 'withResponsibilities',
  //   company: 'Chernivtsi National University',
  //   companyImg: '/assets/portfolio/uchnu.png',
  //   role: 'Applied Scientist',
  //   shortSummary:
  //     'I worked in an interdisplinary international research team on the development of cutting-edge medical image processing techniques. I have published a number of papers in high-impact journals and conferences.',
  //   timeFrame: '2016-2019',
  //   responsibilities: [
  //     {
  //       text: 'Google Scholar Profile',
  //       iconUrl: '/assets/portfolio/check.svg',
  //       url: 'https://scholar.google.ca/citations?user=Wu7U4yoAAAAJ&hl=en&oi=ao',
  //     },
  //     {
  //       text: 'Publication in Nature | Scientific Reports',
  //       iconUrl: '/assets/portfolio/quote.svg',
  //       url: 'https://www.nature.com/articles/s41598-021-83986-4',
  //     },
  //   ],
  // },
  // {
  //   variant: 'withResponsibilities',
  //   company: 'University of Oulu, Finland',
  //   companyImg: '/assets/portfolio/uoulu.png',
  //   role: 'Postdoc Research Scientist',
  //   shortSummary:
  //     'Participated in projects centered on the development of non-invasive cancer-detection algorithms. During the projects, I\n' +
  //     'expanded my horizons in machine learning and learned various image processing algorithms and methods.',
  //   timeFrame: '2017 - 2019',
  //   responsibilities: [
  //     {
  //       text: 'Publication in Nature | Scientific Reports',
  //       iconUrl: '/assets/portfolio/quote.svg',
  //       url: 'https://www.nature.com/articles/s41598-021-83986-4',
  //     },
  //   ],
  // },
  // {
  //   variant: 'simple',
  //   company: 'CNRS, Ecole Polytechnique, France',
  //   companyImg: '/assets/portfolio/uecole.png',
  //   role: 'Postdoc Research Scientist',
  //   shortSummary: `This project was supported by the European Union's Horizon research and innovation programme under the Marie Skłodowska-Curie grant agreement and was aimed on the development of cutting-edge medical image processing techniques`,
  //   timeFrame: '2016 - 2017',
  // },
];

export type IProfessionalExperience =
  | {
      variant: 'withResponsibilities';
      company: string;
      companyImg: string;
      role: string;
      timeFrame: string;
      shortSummary: string;
      responsibilities: { text: string; iconUrl: string; url?: string }[];
    }
  | {
      variant: 'simple';
      role: string;
      company: string;
      companyImg: string;
      timeFrame: string;
      shortSummary: string;
    };