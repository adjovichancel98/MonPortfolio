import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import vibefyImg from "../assets/projects/Vibefy1.jpg";
import reminderImg from "../assets/projects/reminderapp.png";



export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Parcours",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Développeur Flutter & Firebase",
    companyName: "Diversity (Bamako, Mali)",
    icon: mobile,
    iconBg: "#383E56",
    date: "Fév. 2024 - Présent",
    points: [
      "Développement d'une application mobile de gestion des réservations VTC.",
      "Conception de l'interface avec Figma et intégration complète avec Flutter.",
      "Connexion Firebase pour l'authentification, la gestion temps réel et la base de données.",
      "Utilisation de ClickUp pour le suivi de projet en équipe."
    ],
  },
  {
    title: "Consultant en Transformation Digitale",
    companyName: "SENS Bénin",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan. 2023 - Août 2023",
    points: [
      "Analyse des besoins et cartographie des processus avec Lucidchart.",
      "Implémentation de solutions digitales personnalisées pour les MPME.",
      "Création de sites WordPress et d'outils d'optimisation adaptés au terrain.",
    ],
  },
  {
    title: "Consultant en Transformation Digitale",
    companyName: "GIZ Bénin",
    icon: figma,
    iconBg: "#383E56",
    date: "Mai 2023 - Juil. 2023",
    points: [
      "Diagnostic des activités de plusieurs MPME.",
      "Recommandations de plans d'action digitaux et organisationnels.",
      "Accompagnement des structures sur des outils simples (Word, Excel, etc.) pour améliorer leur productivité.",
    ],
  },
  {
    title: "Développeur Web & Mobile (Alternance)",
    companyName: "PERO Groupe",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Mai 2022 - Août 2022",
    points: [
      "Participation au développement des plateformes SINEB et SILA.",
      "Montée en compétence sur Vue.js, Angular et Spring Boot.",
      "Suivi des correctifs et mise à jour des applications existantes.",
    ],
  },
  {
    title: "Développeur Mobile (Stage)",
    companyName: "RAB Tech Bénin",
    icon: mobile,
    iconBg: "#383E56",
    date: "Sept. 2020 - Nov. 2020",
    points: [
      "Développement d'une application mobile de vente de billets de cinéma (Java Android).",
      "Correction de bugs sur les applications mobiles internes.",
    ],
  },
  {
    title: "Technicien Réseau (Stage)",
    companyName: "ATI SARL",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Avr. 2019 - Juil. 2019",
    points: [
      "Installation de serveurs avec PfSense pour gérer le temps de connexion des étudiants.",
      "Maintenance du réseau et des postes informatiques dans un environnement scolaire.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// ✨ PROJETS AVEC CATÉGORIES
const projects: TProject[] = [
  // 🌐 APPLICATIONS WEB
  {
    name: "MiniERP.BJ+",
    description:
      "ERP local simplifié destiné aux TPE et boutiques de quartier, pour une gestion facile du stock, des ventes, des clients et des reçus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/adjovichancel98/MonPortfolio.git",
    category: 'web', // ✨ CATÉGORIE WEB
  },
  {
    name: "Portfolio 3D",
    description:
      "Portfolio interactif moderne avec React, Three.js, animations avancées, glassmorphism et design minimaliste.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/adjovichancel98/MonPortfolio.git",
    live_demo_link: "https://chancel-adjovi-portfolio.vercel.app",
    category: 'web', // ✨ CATÉGORIE WEB
  },

  // 📱 APPLICATIONS MOBILE
  {
    name: "Vibefy",
    description:
      "Redesign de Spotify avec visualisations audio en temps réel, intégration Spotify SDK et interface utilisateur innovante.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "spotify-sdk",
        color: "green-text-gradient",
      },
      {
        name: "audio-viz",
        color: "pink-text-gradient",
      },
    ],
    image: vibefyImg,
    sourceCodeLink: "https://github.com/adjovichancel98/VibefyAPP",
    category: 'mobile', // ✨ CATÉGORIE MOBILE
  },
  {
    name: "ÉpargneTché",
    description:
      "Application d'épargne pour les marchés africains avec système de vérification vidéo des dépôts physiques d'argent.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "video",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
    category: 'mobile', // ✨ CATÉGORIE MOBILE
  },
  {
    name: "Reminder App",
    description:
      "Application de rappels avec timeline visualizations innovantes et indicateurs de progression circulaires.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "animations",
        color: "green-text-gradient",
      },
      {
        name: "widgets",
        color: "pink-text-gradient",
      },
    ],
    image: reminderImg,
    sourceCodeLink: "https://github.com/",
    category: 'mobile', // ✨ CATÉGORIE MOBILE
  },

  // 📊 PROJETS DATA ANALYTICS
  {
    name: "Dashboard Excel Avancé",
    description:
      "Tableau de bord interactif avec pivot tables, graphiques dynamiques et formules avancées pour analyse business.",
    tags: [
      {
        name: "excel",
        color: "green-text-gradient",
      },
      {
        name: "power-query",
        color: "blue-text-gradient",
      },
      {
        name: "dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    category: 'data', // ✨ CATÉGORIE DATA
  },
  {
    name: "Analyse SQL E-commerce",
    description:
      "Analyse complète de données e-commerce : tendances ventes, segmentation clients et KPIs business.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    category: 'data', // ✨ CATÉGORIE DATA
  },
  {
    name: "Power BI Sales Dashboard",
    description:
      "Rapport de ventes interactif avec visualisations avancées, drill-down, filtres dynamiques et insights automatiques.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "dax",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    category: 'data', // ✨ CATÉGORIE DATA
  },
];

export { services, technologies, experiences, testimonials, projects };