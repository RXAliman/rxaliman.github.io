import iskolinicPic from '../../assets/images/iskolinic.webp';
import oatsPic from '../../assets/images/oats.webp';
import scrunchPic from '../../assets/images/scrunch.webp';

export const PROJECTS_DATA = {
  iskolinic: {
    id: 'iskolinic',
    name: 'ISKOLINIC - Decentralized School-based Health Records System',
    tags: ['Flutter', 'Dart', 'SQLite'],
    status: 'Deployed',
    statusType: 'deployed',
    statusUrl: 'https://github.com/RXAliman/olopsc-iskolinic',
    url: '/projects/iskolinic',
    image: iskolinicPic,
    description: 'A desktop and mobile health records application built for OLOPSC that digitizes student health management using an offline-first CRDT architecture for zero-data-loss synchronization. Recognized as Best Thesis in Computing Studies.',
    overview: 'ISKOLINIC is a comprehensive health records management platform designed specifically for school health services. It digitizes student medical charts, immunization records, visitation logs, and emergency contacts into an offline-first decentralized database.',
    keyFeatures: [
      'Offline-first architecture powered by Conflict-free Replicated Data Types (CRDTs).',
      'Real-time peer-to-peer data synchronization across clinic devices.',
      'Streamlined medical inventory tracking and medical history logging.'
    ],
    techArchitecture: 'Built with Flutter and Dart for cross-platform desktop/mobile support. Local state persistence uses SQLite with a custom CRDT sync engine built to handle intermittent network connectivity seamlessly.',
    recognition: 'Awarded Best Thesis in Computing Studies.',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/RXAliman/olopsc-iskolinic' },
      { label: 'Book of Abstracts', url: 'https://online.fliphtml5.com/rtmny/SOCORRO/#p=20' },
    ]
  },
  oats: {
    id: 'oats',
    name: 'OATS - School Alumni Tracking System',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini API'],
    status: 'Ongoing',
    statusType: 'ongoing',
    statusUrl: 'https://oats-admin.web.app',
    url: '/projects/oats',
    image: oatsPic,
    description: 'A web-based Alumni Tracking System for OLOPSC that tracks career progression and alumni engagement, developed as System Analyst leading an Agile Scrum team.',
    overview: 'OATS (OLOPSC Alumni Tracking System) enables institution administrators to track alumni employment outcomes, gather survey metrics, and foster alumni networking. Designed with modern web standards and AI-assisted data analysis.',
    keyFeatures: [
      'Alumni directory and interactive career mapping dashboards.',
      'AI-powered data analysis and career trend insights using Google Gemini API.',
    ],
    techArchitecture: 'Developed using Flutter Web with Firebase backend services for authentication, Firestore database, and Cloud Storage.',
    recognition: 'System Analysis & Lead Architecture project for OLOPSC.',
    links: [
      { label: 'Live Admin Website', url: 'https://oats-admin.web.app' },
      { label: 'User Manual', url: 'https://canva.link/mt22fwxhyifzu0o' },
    ]
  },
  scrunch: {
    id: 'scrunch',
    name: 'Scrunch - Instagram-inspired Social Media Website',
    tags: ['EJS', 'Node.js', 'Firebase'],
    status: 'Dormant',
    statusType: 'dormant',
    statusUrl: 'https://scrunch.onrender.com',
    url: '/projects/scrunch',
    image: scrunchPic,
    description: 'A full-featured, Instagram-inspired social media platform with user authentication, and photo feeds, developed as Project Lead and Backend Engineer.',
    overview: 'Scrunch is a full-stack social media web application designed to replicate core photo-sharing platform dynamics. Built from the ground up with custom backend APIs and Firebase cloud integration.',
    keyFeatures: [
      'User authentication with session management and profile personalization.',
      'Photo uploads and media optimization.',
      'Social interaction engine: likes and comments.',
      'Responsive UI rendered with EJS templating engine.'
    ],
    techArchitecture: 'Node.js/Express backend server integrated with Firebase Real-time Database.',
    recognition: 'Led project development as Backend Engineer & Project Lead.',
    links: [
      { label: 'Live Site', url: 'https://scrunch.onrender.com' },
    ]
  }
};

export const FEATURED_PROJECTS = Object.values(PROJECTS_DATA);

export const OTHER_PROJECTS = [
  {
    name: 'Portfolio Website',
    tags: ['React', 'Tailwind', 'Vite', 'Antigravity IDE'],
    description: 'My personal website and portfolio hosted on GitHub Pages.',
    url: 'https://github.com/RXAliman/rxaliman.github.io',
  },
  {
    name: 'Studyante',
    tags: ['Dart', 'Flutter', 'Hive'],
    description: "An all-in-one app for student's daily chores. A work-in-progress application to be launched soon.",
    url: 'https://github.com/RXAliman/studyante',
  },
  {
    name: 'Kurie',
    tags: ['Dart', 'Flutter', 'Firebase', 'Hive'],
    description: 'An electricity submetering application designed to streamline electricity usage tracking and billing.',
    url: 'https://github.com/RXAliman/kurie-app',
  },
  {
    name: 'Cat ID Generator',
    tags: ['React', 'Vite', 'Cataas API'],
    description: 'Generates a customized or random cat identification (ID) card in seconds.',
    url: 'https://rxaliman.github.io/cat-id-generator',
  },
  {
    name: 'Simple AI Chatbot',
    tags: ['Python', 'Dialogflow', 'Streamlit'],
    description: 'Just a test program to use Python\'s Streamlit and DialogFlow to create an AI chatbot',
    url: 'https://rxaliman-chatbot.streamlit.app/',
  },
  {
    name: 'Real Rice Purity Test',
    tags: ['Dart', 'Flutter', 'Firebase'],
    description: 'A web application hosted on Firebase Hosting. It is a satirical version of ricepuritytest.com',
    url: 'https://the-real-rice-purity-test.web.app/',
  },
  {
    name: "SENA Homeowner's Information Extractor and Local Database System (SHIELDS)",
    tags: ['Python', 'Django', 'Web'],
    description: 'A records management system for a neighborhood association.',
    url: 'https://github.com/RXAliman/django-shields',
  },
  {
    name: 'Tic-Tac-Toe Game GUI',
    tags: ['C/C++', 'SFML'],
    description: 'A C++ Tic-tac-toe game made with Simple and Fast Multimedia Library (SFML) and Code::Blocks.',
    url: 'https://github.com/RXAliman/sfml-cpp-tic-tac-toe',
  },
  {
    name: 'Logic Prompt',
    tags: ['C/C++'],
    description: 'a C++ Program that evaluates any logical symbolic statements.',
    url: 'https://github.com/RXAliman/logic-prompt',
  },
];
