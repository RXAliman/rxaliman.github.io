import iskolinicPic from '../../assets/images/iskolinic.webp';
import oatsPic from '../../assets/images/oats.webp';
import scrunchPic from '../../assets/images/scrunch.webp';

import isko1 from '../../assets/images/iskolinic/1.webp';
import isko2 from '../../assets/images/iskolinic/2.webp';
import isko3 from '../../assets/images/iskolinic/3.webp';
import isko4 from '../../assets/images/iskolinic/4.webp';
import isko5 from '../../assets/images/iskolinic/5.webp';
import isko6 from '../../assets/images/iskolinic/6.webp';
import isko7 from '../../assets/images/iskolinic/7.webp';
import isko8 from '../../assets/images/iskolinic/8.webp';
import isko9 from '../../assets/images/iskolinic/9.webp';
import isko10 from '../../assets/images/iskolinic/10.webp';
import isko11 from '../../assets/images/iskolinic/11.webp';
import isko12 from '../../assets/images/iskolinic/12.webp';
import isko13 from '../../assets/images/iskolinic/13.webp';
import isko14 from '../../assets/images/iskolinic/14.webp';

import oats1 from '../../assets/images/oats/1.webp';
import oats2 from '../../assets/images/oats/2.webp';
import oats3 from '../../assets/images/oats/3.webp';
import oats4 from '../../assets/images/oats/4.webp';
import oats5 from '../../assets/images/oats/5.webp';
import oats6 from '../../assets/images/oats/6.webp';
import oats7 from '../../assets/images/oats/7.webp';

import scrunch1 from '../../assets/images/scrunch/1.webp';
import scrunch2 from '../../assets/images/scrunch/2.webp';
import scrunch3 from '../../assets/images/scrunch/3.webp';
import scrunch4 from '../../assets/images/scrunch/4.webp';
import scrunch5 from '../../assets/images/scrunch/5.webp';

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
    gallery: [isko1, isko2, isko3, isko4, isko5, isko6, isko7, isko8, isko9, isko10, isko11, isko12, isko13, isko14],
    description: 'A desktop and mobile health records application built for OLOPSC that digitizes student health management using an offline-first CRDT architecture for zero-data-loss synchronization. Recognized as Best Thesis in Computing Studies.',
    overview: 'ISKOLINIC is a comprehensive health records management platform designed specifically for school health services. It digitizes student medical charts, immunization records, visitation logs, and emergency contacts into an offline-first decentralized database.',
    keyFeatures: [
      'Offline-first architecture powered by Conflict-free Replicated Data Types (CRDTs).',
      'Real-time peer-to-peer data synchronization across clinic devices.',
      'Automated medical inventory tracking and medical history logging.'
    ],
    techArchitecture: 'Built with Flutter and Dart for cross-platform desktop/mobile support. Local state persistence uses SQLite with a custom CRDT sync engine built to handle intermittent network connectivity seamlessly.',
    recognition: 'Awarded Best Thesis in Computing Studies.'
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
    gallery: [oats1, oats2, oats3, oats4, oats5, oats6, oats7],
    description: 'A web-based Alumni Tracking System for OLOPSC that tracks career progression and alumni engagement, developed as System Analyst leading an Agile Scrum team.',
    overview: 'OATS (OLOPSC Alumni Tracking System) enables institution administrators to track alumni employment outcomes, gather survey metrics, and foster alumni networking. Designed with modern web standards and AI-assisted data analysis.',
    keyFeatures: [
      'Alumni directory and interactive career mapping dashboards.',
      'AI-powered resume parsing and career trend insights using Google Gemini API.',
      'Agile Scrum workflow management with institutional stakeholder feedback integration.',
      'Event management and announcement system for alumni homecoming events.'
    ],
    techArchitecture: 'Developed using Flutter Web with Firebase backend services for authentication, Firestore database, and Cloud Storage.',
    recognition: 'System Analysis & Lead Architecture project for OLOPSC.'
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
    gallery: [scrunch1, scrunch2, scrunch3, scrunch4, scrunch5],
    description: 'A full-featured, Instagram-inspired social media platform with user authentication, and photo feeds, developed as Project Lead and Backend Engineer.',
    overview: 'Scrunch is a full-stack social media web application designed to replicate core photo-sharing platform dynamics. Built from the ground up with custom backend APIs and Firebase cloud integration.',
    keyFeatures: [
      'User authentication with session management and profile personalization.',
      'Real-time photo uploads, interactive feeds, and media optimization.',
      'Social interaction engine: likes, nested comments, and user follow graph.',
      'Responsive UI rendered with EJS templating engine.'
    ],
    techArchitecture: 'Node.js/Express backend server integrated with Firebase Firestore and Firebase Storage.',
    recognition: 'Led project development as Backend Engineer & Project Lead.'
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
