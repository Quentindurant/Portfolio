export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  category: "entreprise" | "ecole" | "exercice";
  categoryLabel: string;
  location: string;
  role: string;
  stack: string[];
  problem: string;
  features: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "telora",
    title: "TELORA",
    shortDescription:
      "Système d'authentification LDAP centralisé pour la gestion des identités utilisateurs.",
    description:
      "Système d'authentification LDAP pour la gestion centralisée des identités et accès utilisateurs à travers les applications de l'entreprise.",
    image: "/images/telora.png",
    category: "entreprise",
    categoryLabel: "Entreprise - GC Développement",
    location: "GC Développement, Cholet",
    role: "Développeur Full Stack",
    stack: ["HTML", "CSS", "PHP", "SQL", "JavaScript", "VPS"],
    problem:
      "GC Développement avait besoin d'un système centralisé pour gérer les identités et les accès utilisateurs à travers leurs multiples applications internes. Sans solution unifiée, la gestion des comptes était fragmentée et peu sécurisée.",
    features: [
      "Annuaire centralisé LDAP",
      "Interface d'administration complète",
      "Intégration avec les applications existantes",
      "Synchronisation base de données",
      "Gestion des groupes et rôles",
    ],
    screenshots: ["/images/ldap.png", "/images/telora.png"],
    liveUrl: "https://54.36.189.50/login/",
    githubUrl:
      "https://github.com/Quentindurant/LDAP_BACKUP/tree/main/Documentation_LDAP",
    featured: true,
  },
  {
    slug: "delytech",
    title: "DELYTECH",
    shortDescription:
      "Plateforme de gestion des techniciens terrain avec géolocalisation et planification.",
    description:
      "Plateforme de gestion des techniciens centralisant plannings, géolocalisation, compétences et heures d'arrivée précises pour les interventions terrain.",
    image: "/images/delytech.png",
    category: "entreprise",
    categoryLabel: "Entreprise - GC Développement",
    location: "GC Développement, Cholet",
    role: "Développeur Full Stack",
    stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    problem:
      "La coordination des techniciens terrain était inefficace : pas de visibilité sur les plannings, les compétences et la localisation en temps réel. Les interventions manquaient d'organisation et de traçabilité.",
    features: [
      "Centralisation des plannings techniciens",
      "Géolocalisation en temps réel",
      "Gestion des compétences par technicien",
      "Calcul des heures d'arrivée précises",
      "Tableau de bord d'administration",
    ],
    screenshots: ["/images/delytech.png"],
    githubUrl:
      "https://github.com/Quentindurant/Optitech/tree/main/Documentation_Delytech",
    featured: true,
  },
  {
    slug: "yapluca",
    title: "YapluCa",
    shortDescription:
      "Application mobile pour localiser et gérer des stations de chargeurs portables.",
    description:
      "Application mobile permettant de localiser et gérer des stations de chargeurs de téléphones portables avec suivi en temps réel via Google Maps.",
    image: "/images/yaplucatout.png",
    category: "entreprise",
    categoryLabel: "Projet Entreprise",
    location: "Télétravail, Angers",
    role: "Développeur Mobile Flutter",
    stack: ["Flutter", "Dart", "Firebase"],
    problem:
      "Les utilisateurs de smartphones se retrouvent régulièrement sans batterie en déplacement. Il n'existait pas de solution accessible pour emprunter un chargeur portable géolocalisé et le retourner facilement.",
    features: [
      "Localisation des stations sur carte Google Maps",
      "Suivi d'utilisation pour les partenaires",
      "Système d'emprunt et retour de batteries",
      "Interface intuitive et responsive",
      "Notifications en temps réel",
    ],
    screenshots: [
      "/images/yaplucatout.png",
      "/images/Yaplucaexplication.svg",
    ],
    githubUrl: "https://github.com/QuentinDurant/yapluCa",
    featured: true,
  },
  {
    slug: "welcome-formation",
    title: "Welcome Formation",
    shortDescription:
      "Plateforme de gestion de formations professionnelles avec suivi de progression.",
    description:
      "Plateforme de gestion de formations professionnelles pour l'inscription des utilisateurs, la consultation du catalogue de cours et le suivi de progression avec panneau d'administration.",
    image: "/images/WelcomeFormations.png",
    category: "ecole",
    categoryLabel: "Projet École - MDS ESPL",
    location: "École MDS ESPL, Angers",
    role: "Développeur Full Stack",
    stack: ["HTML", "CSS", "SQL", "JavaScript", "PHP", "POO"],
    problem:
      "L'école avait besoin d'une plateforme permettant aux utilisateurs de s'inscrire à des formations, de consulter le catalogue et de suivre leur progression, avec un panneau d'administration pour gérer le tout.",
    features: [
      "Inscription et authentification utilisateurs",
      "Catalogue de formations interactif",
      "Suivi de progression personnel",
      "Panneau d'administration complet",
      "Système de gestion des cours",
    ],
    screenshots: ["/images/WelcomeFormations.png", "/images/wf.svg"],
    liveUrl: "https://quentindurant.github.io/Welcome_Formation/",
  },
  {
    slug: "click-n-eat",
    title: "Click'n Eat",
    shortDescription:
      "Application web de commande de repas en ligne avec paiement sécurisé.",
    description:
      "Application web de commande de repas en ligne avec système de paiement sécurisé et suivi de commandes en temps réel.",
    image: "/images/clickandeat.png",
    category: "ecole",
    categoryLabel: "Projet École - MDS ESPL",
    location: "École MDS ESPL, Angers",
    role: "Développeur Full Stack",
    stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    problem:
      "Créer une solution complète de commande en ligne incluant la gestion du menu, le panier, le paiement sécurisé et le suivi en temps réel des commandes.",
    features: [
      "Menu interactif avec filtres",
      "Panier d'achat dynamique",
      "Système de paiement sécurisé",
      "Suivi de commande en temps réel",
      "Interface d'administration restaurant",
    ],
    screenshots: [
      "/images/clickandeat.png",
      "/images/clickneat.png",
      "/images/click.svg",
    ],
  },
  {
    slug: "calculatrice-immobilier",
    title: "Calculatrice Immobilier",
    shortDescription:
      "Simulateur de prêt immobilier pour estimer les mensualités.",
    description:
      "Calculatrice de prêt immobilier permettant d'estimer les mensualités en fonction du montant emprunté, du taux d'intérêt et de la durée du prêt.",
    image: "/images/ScreenShot_calculette_immo.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Développeur Front-End",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "Créer un outil simple et efficace pour simuler un prêt immobilier et visualiser les mensualités.",
    features: [
      "Calcul des mensualités",
      "Variation selon le taux et la durée",
      "Interface claire et intuitive",
      "Résultats instantanés",
    ],
    screenshots: ["/images/ScreenShot_calculette_immo.png"],
    liveUrl: "https://calculimmo.quentindurant.com",
  },
  {
    slug: "newsletter",
    title: "Newsletter",
    shortDescription:
      "Système de gestion de newsletter avec panneau d'administration.",
    description:
      "Système de gestion de newsletter avec panneau d'administration pour la gestion des abonnés et les statistiques.",
    image: "/images/newsletter.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Développeur Full Stack",
    stack: ["SQL", "HTML", "CSS", "PHP"],
    problem:
      "Mettre en place un système complet de gestion de newsletter avec inscription, désinscription et suivi des statistiques.",
    features: [
      "Inscription / désinscription abonnés",
      "Panneau d'administration",
      "Statistiques d'envoi",
      "Gestion des listes",
    ],
    screenshots: ["/images/newsletter.png"],
    liveUrl: "https://newsletter.quentindurant.com",
  },
  {
    slug: "site-apple",
    title: "Site Apple",
    shortDescription:
      "Reproduction du site Apple démontrant le responsive design.",
    description:
      "Reproduction fidèle du site web Apple démontrant la maîtrise du responsive design et des animations CSS.",
    image: "/images/apple.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Intégrateur Web",
    stack: ["HTML", "CSS"],
    problem:
      "Reproduire fidèlement l'interface du site Apple pour démontrer la maîtrise de l'intégration web responsive.",
    features: [
      "Design responsive fidèle",
      "Animations CSS fluides",
      "Navigation intuitive",
      "Compatibilité multi-navigateurs",
    ],
    screenshots: ["/images/apple.png"],
    liveUrl: "https://quentindurant.github.io/site-Apple/",
  },
  {
    slug: "meteo-react",
    title: "Météo React",
    shortDescription:
      "Application météo avec API OpenWeatherMap et géolocalisation.",
    description:
      "Application météo utilisant l'API OpenWeatherMap avec prévisions sur 5 jours et géolocalisation automatique.",
    image: "/images/meteo.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Développeur React",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    problem:
      "Créer une application météo moderne consommant une API externe avec géolocalisation.",
    features: [
      "Prévisions sur 5 jours",
      "Géolocalisation automatique",
      "Recherche par ville",
      "Interface responsive",
    ],
    screenshots: ["/images/meteo.png"],
    githubUrl: "https://github.com/quentindurant/meteo-react",
  },
  {
    slug: "matrice-js",
    title: "Matrice JS",
    shortDescription:
      "Bibliothèque JavaScript d'opérations matricielles mathématiques.",
    description:
      "Bibliothèque JavaScript pour les opérations matricielles : addition, multiplication, déterminant, inversion.",
    image: "/images/matrice.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Développeur JavaScript",
    stack: ["JavaScript", "Node.js"],
    problem:
      "Implémenter les opérations mathématiques fondamentales sur les matrices en JavaScript pur.",
    features: [
      "Addition de matrices",
      "Multiplication de matrices",
      "Calcul de déterminant",
      "Inversion de matrice",
    ],
    screenshots: ["/images/matrice.png"],
    githubUrl: "https://github.com/quentindurant/matrice-js",
  },
  {
    slug: "template-admin",
    title: "Template Admin",
    shortDescription:
      "Dashboard d'administration responsive avec graphiques interactifs.",
    description:
      "Template de dashboard d'administration responsive avec graphiques interactifs, tableaux de données, formulaires et thème clair/sombre.",
    image: "/images/admin_template.png",
    category: "exercice",
    categoryLabel: "Exercice personnel",
    location: "Projet personnel",
    role: "Développeur Front-End",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem:
      "Créer un template d'administration complet et réutilisable avec toutes les fonctionnalités essentielles d'un dashboard.",
    features: [
      "Graphiques interactifs",
      "Tableaux de données dynamiques",
      "Formulaires complets",
      "Thème clair / sombre",
      "Design responsive",
    ],
    screenshots: ["/images/admin_template.png"],
    githubUrl: "https://github.com/quentindurant/admin-template",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const allTechStack = [
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Firebase",
  "Node.js",
  "Git",
];
