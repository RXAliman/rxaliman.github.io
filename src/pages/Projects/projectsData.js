import iskolinicPic from '../../assets/images/iskolinic.webp';
import oatsPic from '../../assets/images/oats.webp';
import scrunchPic from '../../assets/images/scrunch.webp';

export const PROJECTS_DATA = {
  iskolinic: {
    id: 'iskolinic',
    name: 'ISKOLINIC - Decentralized School-based Health Records System',
    tags: ['Flutter', 'Dart', 'SQL'],
    status: 'Deployed',
    statusType: 'deployed',
    statusUrl: 'https://github.com/RXAliman/olopsc-iskolinic',
    image: iskolinicPic,
    summary: 'A desktop and mobile application built for Our Lady of Perpetual Succor College (OLOPSC) School Health Services Unit that digitizes and centralizes student health record management. It is a specialized fork for the upcoming ISKOLINIC main repository.',
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
    image: oatsPic,
    summary: 'A web-based Alumni Tracking System developed for OLOPSC to track alumni career progression and foster community engagement.',
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
    image: scrunchPic,
    summary: 'A full-featured, Instagram-inspired social media platform built and deployed by a three-person team.',
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
