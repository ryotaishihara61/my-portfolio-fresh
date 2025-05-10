import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Ryota Ishihara",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "石原 良太",
      description: "Ryota Ishihara's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "プライム上場企業での事業開発、2社のスタートアップの創業・経営を通じて得たスキル・経験を活かして、経営の改善をご支援しています",
    metadata: {
      title: "Skills",
      description:
        "Ryota Ishihara's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Ryota Ishihara's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ryota Ishihara.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Ryota Ishihara's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ryota Ishihara's resume.",
    metadata: {
      title: "Resume",
      description: "Ryota Ishihara's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Ryota Ishihara's professional journey and career timeline.",
    },
  },
};
