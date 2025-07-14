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
      "Développement d’une application mobile de gestion des réservations VTC.",
      "Conception de l’interface avec Figma et intégration complète avec Flutter.",
      "Connexion Firebase pour l’authentification, la gestion temps réel et la base de données.",
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
      "Création de sites WordPress et d’outils d’optimisation adaptés au terrain.",
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
      "Recommandations de plans d’action digitaux et organisationnels.",
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

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
