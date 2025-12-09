type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "CHΛNCΞL — AI, Code & Vision",
    fullName: "Chancel Adjovi",
    email: "chancel.adjovi@epitech.eu",
  },
  hero: {
    name: "Chancel ADJOVI",
   p: [
  "Ingénieur IA & Data | Développeur Web & Mobile | Consultant digital",
  "Je conçois des solutions intelligentes alliant IA, design interactif et développement fullstack pour transformer les idées en produits utiles, performants et immersifs.",
]
  },
  contact: {
    p: "Entrer en contact",
    h2: "Contact.",
    form: {
      name: {
        span: "Votre nom",
        placeholder: "Comment vous appelez-vous ?",
      },
      email: {
        span: "Votre adresse email",
        placeholder: "Quelle est votre adresse email ?",
      },
      message: {
        span: "Votre message",
        placeholder: "Que souhaitez-vous dire ?",
      },
    },
  },
  sections: {
    about: {
      p: "Présentation",
      h2: "Aperçu.",
      content: `Je suis Chancel Adjovi Agbogbo, ingénieur en intelligence artificielle et développeur full-stack.
Je conçois des solutions numériques intelligentes en combinant IA, développement mobile (Flutter), développement web (React, Node.js) et transformation digitale.
De l’analyse des besoins jusqu’au déploiement, j’interviens sur toutes les étapes pour créer des applications utiles, performantes et centrées sur l’humain — avec des technologies modernes et des approches concrètes.`,
    },
    experience: {
      p: "Mon parcours",
      h2: "Expériences professionnelles.",
    },
    feedbacks: {
      p: "Ce qu’on dit de moi",
      h2: "Témoignages.",
    },
    works: {
      p: "Mes réalisations",
      h2: "Projets.",
      content: `Ces projets illustrent mes compétences techniques à travers des cas concrets. Vous y trouverez des démos interactives et des liens vers le code source. Ils reflètent ma capacité à résoudre des problèmes, à maîtriser plusieurs technologies et à mener des projets à bien.`,
    },
  },
};
