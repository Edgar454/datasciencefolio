const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Edgar Meva'a | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Edgar Meva'a Portfolio",
    type: "website",
    url: "https://edgar-meva-portfolio.netlify.app/home",
  },
};

//Home Page
const greeting = {
  title: "Hello !",
  sub: "Edgar Meva'a",
  logo_name: "Edgar Meva'a",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Edgar454",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/edgarmeva",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@rohankokkula",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/edgar-peggy-meva-a-16a93a267/",
    },
    {
      siteName: "Zindi",
      iconifyClassname: "simple-icons:zotero",
      style: {
        color: "#B02CCE",
      },
      profileLink: "https://zindi.africa/users/Edgar121",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Deep Learning and Computer Vision",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI Automation",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data scientist (stagiaire)",
        subtitle: "MEDTECH",
        date: "Mars 2024 - Septembre 2024",
        content: [
          "Construction et Optimisation de modèles d’IA pour l’extractiond’informations sur des images de chèques.",
          "Utilisation de techniques avancées de compression visant à optimiserles ressources consommées par le modèle et la performance de celui-ci.",
          "Entraînement et optimisation du modèle permettant d’obtenir un modèle deux fois plus rapide et de 10% plus poerformant",
          "Mise en place d’un framework de monitoring et d’explicabilité pour analyser les résultats du modèle et expliquer les zones influençant les décisions du modèle.",
          "Documentation complète des processus techniques et des workflows.",
        ],
      },
      {
        title: "Statisticien (stagiaire)",
        subtitle:
          "Direction Départementale de l’Agriculture de la Pêche et de l’Elevage duBorgou (DDAEP)",
        date: "Juin 2021 - Aout 2021",
        content: [
          "Conception du questionnaire d’enquête sur le recensement descultures maraîchères",
          "Formation des enqueteurs",
          "Analyse des données de l’enquête et rédaction de rapport",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master en Data Science et Intelligence Artificielle",
          subtitle: "Université Mundiapolis , Maroc",
          date: "2022 - 2024",
          content: [],
        },
        {
          title: "Licence en Statistiques Appliquées",
          subtitle:
            "Ecole Nationale de la Statisque de la Planification et de la Démographie (ENSPD) , Benin",
          date: "2019 - 2021",
          content: [],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#1/20 in Mauritaninan License Plate Detection Challenge (Kaggle)",
            "#26/333 in GeoAI Ground-level NO2 Estimation Challenge (Zindi)",
            "#35/258 in Ghana Crop Disease Detection Challenge (Zindi)",
            "#62/245 in CGIAR Root Volume Estimation Challenge (Zindi)",
            "#121/444 in IBM SkillsBuild Hydropower Climate Optimisation Challenge (Zindi)",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Designing Team Head at ACM-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
            "Tableau Analyst & Consumer Badge by Tableau Official",
          ],
        },
      ],
    },
    {
      title: ["Projets Collaboratifs"],
      data: [
        {
          title:
            "Enhancing Regulatory Decision-Making through a Retrieval-Augmented Generation (RAG) Based LLM",
          subtitle: "Omdena.com",
          content: [
            "J'ai participé à ce challenge dont l'objectif était double :",
            " digitaliser d'anciens documents administratifs pour en assurer la conservation",
            " faciliter leur consultation via un assistant de recherche basé sur une architecture RAG (Retrieval-Augmented Generation).",
            "J'ai contribué dans deux équipes clés :",
            "🔹 Prétraitement des données",
            "J'ai participé à l'extraction du texte via OCR, à son nettoyage (suppression des éléments peu pertinents comme les en-têtes et pieds de page) et à la mise en place d’un pipeline automatisé d'acquisition et de traitement des documents via GitHub Actions.",
            "🔹 Évaluation des performances",
            "J’ai développé un pipeline d’évaluation des réponses de notre assistant en utilisant le paradigme 'LLM as a judge', permettant de mesurer la pertinence et la justesse des résultats générés.",
          ],
        },
        {
          title: "Local News Aggregator and Analyzer for Kitwe, Zambia",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "J’ai participé à ce projet dont l’objectif était de lutter contre la désinformation dans la province de Kitwe, en Zambie, en proposant une plateforme de vérification de l'information locale.",
            "🔹 Contribution à la modélisation",
            "J’ai intégré l’équipe de modélisation où j’ai entraîné un modèle de détection de fake news en temps réel, basé sur une approche TF-IDF + régression logistique, atteignant 90 % de précision avec un F1-score équivalent.",
            "🔹 Apprentissages clés",
            "Bien que mon modèle n’ait pas été retenu pour la version finale, ce travail m’a permis de découvrir des techniques avancées comme la focal loss pour gérer les déséquilibres de classes. J’ai également appris à utiliser les flux RSS pour collecter automatiquement des données textuelles en ligne.",
          ],
        },
        {
          title: "Karimganj Flood Prediction Challenge",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "J’ai participé à ce projet dont l’objectif était d’aider les autorités à anticiper les inondations dans la région de Karimganj, en Inde, afin de pouvoir mettre en place les mesures de prévention plus tôt.",
            "Notre équipe était chargée de développer un modèle de prévision (forecasting) basé sur des données météorologiques, notamment via l’API OpenMeteo, pour prédire les risques d'inondation à court terme.",
            "🔹 Rôle : Leader de l’équipe déploiement",
            "En tant que responsable de l’équipe de déploiement, j’ai :",
            "Construit l’interface finale de l’application avec Streamlit,",
            "Géré l'intégration des modèles de prédiction avec les pipelines de prétraitement,",
            "Assuré la communication entre les différentes API et composants du système.",
            "Ce projet m’a permis de développer des compétences transversales en déploiement de modèles ML, gestion d’équipe technique, et conception d’interfaces utilisateurs simples et efficaces.",
          ],
        },
        {
          title: "Adaptive AI Tutor for Refugee Education in Jordan (Phase 2)",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Ce projet en cours vise à faciliter l’accès à l’éducation pour les réfugiés en Cisjordanie, qui manquent souvent d’enseignants en raison de la guerre, de la famine et d’autres conditions extrêmes.",
            "L’objectif est de développer un tuteur intelligent basé sur une architecture RAG (Retrieval-Augmented Generation) capable d’accompagner les élèves dans leur apprentissage.",
            "Les principaux défis résident dans :",
            ". La portée éducative, avec un modèle devant fournir des explications claires, structurées et illustrées,",
            ". La dimension culturelle et linguistique, car le tuteur doit interagir en arabe, tout en respectant les sensibilités du public cible.",
            "🎯 Mon rôle actuel :",
            "Je fais partie de l’équipe de modélisation, où je contribue à la conception et à l’adaptation du modèle RAG pour qu’il puisse jouer le rôle de tuteur personnalisé.",
          ],
        },
        {
          title: "Mobile OCR App for Automated Member Registration",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "J’ai développé une application mobile pour mon église afin de faciliter l’enregistrement des nouveaux adhérents.",
            "Ce projet visait à remplacer la saisie manuelle des informations par un processus automatisé à partir d’une simple photo.",
            "Grâce à la reconnaissance optique de caractères (OCR), l’application extrait les données des formulaires papier et les enregistre automatiquement dans la base de données, permettant ainsi de gagner un temps précieux et réduire les erreurs humaines.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Multi AI Agent Systems with crewAI",
      subtitle: "CrewAI",
      logo_path: "crew_ai_logo.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "CrewAI",
      color_code: "#000000",
    },
    {
      title: "Introduction to Containers, Kubernetes, and OpenShift V2",
      subtitle: "IBM",
      logo_path: "IBM_logo.svg.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/b2aee972c9d142f197c9e1de427a077d",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "RPA Developer Foundation (v2021.10)",
      subtitle: "UiPath",
      logo_path: "LOGO-UIPATH-850.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "UiPath",
      color_code: "#000000",
    },
    {
      title: "Deep Reinforcement Learning Course",
      subtitle: "HuggingFace",
      logo_path: "hf-logo.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HugingFace",
      color_code: "#000000",
    },
    {
      title: "Machine Learning Explainability",
      subtitle: "Kaggle",
      logo_path: "Kaggle_logo.webp",
      certificate_link:
        "https://www.kaggle.com/learn/certification/edgarmeva/machine-learning-explainability",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Machine Learning Engineering for Production (MLOps)",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/5a8ac8c1497ae69f861aa93ddee237ca",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Generative AI with Large Language Models",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/b1796c51e82c15414a28fcc05131df68",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Data Science Ethics",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/b1dc49cc10bd579b6664e10c9a49eb8f",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Introduction to Data Engineering",
      subtitle: "IBM",
      logo_path: "IBM_logo.svg.png",
      certificate_link:
        "https://coursera.org/share/68f4021530542761f3232b3a387cb0a6",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Structurer des projets d’apprentissage automatique",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/bcd75d6240d46879adcf74fbe5bc3e3f",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Machine Learning Specialization",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/559e7fb792f1d73d619d116f4ce8bcb4",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Generative Adversarial Networks (GANs) Specialization",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/1e40c7adb8779c7b1372e2c802a24b5a",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Foundations of Data Science",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/9956b863e1e58b9dc11512c1826bea1c",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/fd4bf3cc5b6db31a541d58d39cbaa7ec",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Foundations of Project Management",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/197f762eae90fc4c1c56edec6d9009da",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Blockchain Basics",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/1f42afcb003dfb17f85ac80b7a3489b3",
      alt_name: "Coursera",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Casablanca, Morocco",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+212 0632-566582",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Edgar454",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/edgar-peggy-meva-a-16a93a267/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mevaed4@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
