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
        "⚡ Conception de modèles scalables et prêts pour la production (statistiques et machine learning)",
        "⚡ Nettoyage, transformation et analyse de données avec Pandas, NumPy, et Tableau",
        "⚡ Déploiement de pipelines d'analyse de données de bout en bout",
        "⚡ Mise en œuvre de techniques d'explicabilité pour interpréter les résultats des modèles (LIME, SHAP, etc.)",
      ],
      softwareSkills: [
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
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Conception de pipelines de données scalables et tolérants aux pannes avec Apache Kafka & Spark",
        "⚡ Maîtrise des bases SQL et des data warehouses (ex : BigQuery)",
        "⚡ Orchestration de workflows complexes avec Apache Airflow",
        "⚡ Monitoring des pipelines avec Prometheus & Grafana, et containerisation avec Docker",
      ],
      softwareSkills: [
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos-kafka",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos-airflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos-postgresql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos-grafana",
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
        "⚡ Développement de modèles deep learning pour la vision par ordinateur : classification, détection, segmentation et analyse vidéo",
        "⚡ Conception d'agents intelligents (RAG, agentic workflows) et fine-tuning de LLMs pour l'extraction d'information, la génération ou la classification de texte",
        "⚡ Intégration de modèles IA dans des applications via des APIs Python (FastAPI)",
        "⚡ Optimisation des performances modèles (taille, vitesse, précision) pour un usage en production",
      ],
      softwareSkills: [
        {
          skillName: "Hugginface",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFD21F",
          },
        },

        {
          skillName: "YOLO",
          fontAwesomeClassname: "simple-icons:yolo",
          style: {
            backgroundColor: "#000000",
            color: "#2A2D34",
          },
        },
        {
          skillName: "LLMs",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            /*color: "#61DAFB",*/
          },
        },
        {
          skillName: "Fast API",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
      ],
    },
    {
      title: "UI Automation",
      fileName: "DesignImg",
      skills: [
        "⚡ Conception d'automatisations UI robustes et tolérantes aux erreurs avec UiPath",
        "⚡ Intégration fluide avec des services variés (Gmail, PDF, navigateurs web...) pour automatiser des workflows complexes",
        "⚡ Supervision et gestion à distance des processus via l'Orchestrator UiPath",
      ],
      softwareSkills: [
        {
          skillName: "Uipath",
          fontAwesomeClassname: "simple-icons:uipath",
          style: {
            color: "#FF2BC2",
            backgroundColor: "transparent",
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
      title: "Real-Time Personalized Recommendation System",
      img_path: "project-01.png",
      description:
        "Création d'un système de recommandation personnalisé en temps réel basé sur les interactions des utilisateurs, utilisant des techniques de machine learning et des technologies de streaming.",
      tags: [
        {
          lang: "Kafka",
          color: "#F7A700",
        },
        {
          lang: "Apache Spark",
          color: "#E25D00",
        },
        {
          lang: "FastAPI",
          color: "#009688",
        },
        {
          lang: "Machine Learning",
          color: "#76B041",
        },
      ],
      code: "https://github.com/ton_utilisateur/realtime_recommender",
    },
    {
      title: "Système de gestion de la performance de l'entreprise avec SQL",
      img_path: "project-03.png",
      description:
        "Création d'un tableau de bord SQL pour suivre la performance de l'entreprise en analysant les ventes, la performance des employés et les coûts. Utilisation de requêtes SQL avancées pour obtenir des KPIs pertinents.",
      tags: [
        {
          lang: "SQL",
          color: "#00A9E0",
        },
        {
          lang: "PostgreSQL",
          color: "#336791",
        },
        {
          lang: "Data Analysis",
          color: "#F0A500",
        },
      ],
      code: "https://github.com/ton_utilisateur/business_performance_sql",
    },
    {
      title:
        "Automated Model Training Pipeline with MLflow and Data Shift Detection",
      img_path: "project-02.png",
      description:
        "Création d'un pipeline d'entraînement de modèle automatisé avec gestion du data shift à l'aide de MLflow, Evidently AI et un modèle de registre.",
      tags: [
        {
          lang: "MLflow",
          color: "#5D87A9",
        },
        {
          lang: "Evidently AI",
          color: "#F5A623",
        },
        {
          lang: "Data Engineering",
          color: "#E14F35",
        },
        {
          lang: "MLOps",
          color: "#5A4F96",
        },
      ],
      code: "https://github.com/ton_utilisateur/automated_model_training",
    },
    {
      title: "Pamphlet Parser",
      img_path: "acti.gif",
      description:
        "Application mobile conçue pour automatiser l’enregistrement de nouveaux adhérents à partir de fiches papier. Grâce à un modèle de Document Understanding, les utilisateurs prennent une photo d’un formulaire, les champs sont extraits automatiquement et peuvent être corrigés avant enregistrement dans la base de données (Supabase). Ce projet a été développé avec React Native pour le front mobile et un backend Python pour le traitement OCR + extraction.",
      tags: [
        { lang: "React Native", color: "#61DBFB" },
        { lang: "Supabase", color: "#3ecf8e" },
        { lang: "Document Understanding", color: "#ffa600" },
        { lang: "OCR", color: "#a90f1a" },
        { lang: "Python", color: "#3776AB" },
      ],
      code: "https://github.com/ton-repo/pamphlet-parser",
    },
    {
      title:
        "Prévision du niveau de NO2 au sol à partir de données géospatiales et temporelles",
      img_path: "acti.gif",
      description:
        "Compétition de prédiction du niveau de NO2 au sol en utilisant des données géospatiales, temporelles et satellitaires. Le modèle a permis de se classer dans le top 10% en optimisant les performances de prévision de ce polluant. Utilisation de Python, scikit-learn, et Plotly pour la visualisation des données.",
      tags: [
        { lang: "Python", color: "#4B8BBE" },
        { lang: "scikit-learn", color: "#F7931E" },
        { lang: "Plotly", color: "#3E8B8E" },
        { lang: "Data Science", color: "#FF5733" },
      ],
      code: "https://github.com/ton_username/no2-forecasting",
    },
    {
      title: "Batch E-Commerce Data Pipeline",
      img_path: "acti.gif",
      description:
        "Pipeline ETL pour l'analyse des logs d’un site e-commerce. Utilisation d'Airflow et Spark pour extraire, transformer et charger les données dans Azure SQL.",
      tags: [
        { lang: "Airflow", color: "#003366" },
        { lang: "Spark", color: "#e55b36" },
        { lang: "Azure Data Lake", color: "#0078d4" },
        { lang: "Power BI", color: "#F2B800" },
      ],
      code: "https://github.com/ton_username/ecommerce-data-pipeline",
    },
    {
      title: "Real-Time Product Analytics Pipeline",
      img_path: "acti.gif",
      description:
        "Pipeline d'analyse en temps réel pour suivre les événements utilisateurs sur un site e-commerce. Utilisation de Kafka, Spark Streaming, et PostgreSQL pour traiter les données en continu.",
      tags: [
        { lang: "Kafka", color: "#f7a000" },
        { lang: "Spark", color: "#e55b36" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "Grafana", color: "#FF6347" },
      ],
      code: "https://github.com/ton_username/real-time-analytics-pipeline",
    },
    {
      title: "Qui Parle ?",
      img_path: "voice.gif",
      description:
        "Application de diarisation vocale personnalisée. Identifie les locuteurs, segmente les interventions et affiche une timeline interactive avec transcriptions.",
      tags: [
        { lang: "pyannote", color: "#f1a208" },
        { lang: "Whisper", color: "#06c7c4" },
        { lang: "FastAPI", color: "#009688" },
        { lang: "React", color: "#61dafb" },
        { lang: "PostgreSQL", color: "#336791" },
      ],
      code: "https://github.com/ton-projet/qui-parle",
    },
    {
      title: "Data Quality Monitoring avec Alertes",
      img_path: "acti.gif",
      description:
        "Système de surveillance et d'alerte sur la qualité des données avec des tests automatisés, gestion des erreurs et intégration des alertes via Azure Monitor.",
      tags: [
        { lang: "Great Expectations", color: "#4078c0" },
        { lang: "Airflow", color: "#003366" },
        { lang: "Azure Monitor", color: "#0078d4" },
        { lang: "Supabase", color: "#3E83B1" },
      ],
      code: "https://github.com/ton_username/data-quality-monitoring",
    },
    {
      title: "AI Study Buddy",
      img_path: "acti.gif",
      description:
        "Assistant d’étude avancé, orchestré par une équipe d’agents spécialisés. Il lit automatiquement un cours (PDF), l’explique, le résume, et génère des quiz/QCM exportables (Anki), tout en s’appuyant sur la recherche web. L’architecture inclut FastAPI, CrewAI, Redis pour la file de tâches, PostgreSQL pour la persistance, et Grafana pour le monitoring. Authentification sécurisée (OAuth2/JWT) avec gestion des rôles (user/admin/service).",
      tags: [
        { lang: "FastAPI", color: "#009688" },
        { lang: "CrewAI", color: "#f7e01d" },
        { lang: "Redis", color: "#dc0000" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "Grafana", color: "#f46800" },
        { lang: "OAuth2", color: "#d1462f" },
        { lang: "LLM", color: "#ffd600" },
      ],
      code: "https://github.com/ton-repo/ai-study-buddy",
    },
    {
      title: "Bot de candidature intelligent",
      img_path: "acti.gif",
      description:
        "Automatisation complète du processus de candidature : génération et envoi d'emails personnalisés à partir de fichiers PDF, suivi intelligent des réponses, relances programmées et gestion centralisée via Excel et UiPath Orchestrator.",
      tags: [
        {
          lang: "UiPath",
          color: "#004782",
        },
        {
          lang: "Excel",
          color: "#c47206",
        },
        {
          lang: "Orchestrator",
          color: "#ff4b4b",
        },
        {
          lang: "Gmail",
          color: "#3c0095",
        },
      ],
      code: "https://github.com/rohankokkula/Actiweight",
    },
    {
      title: "Bot de publication multi-plateformes",
      img_path: "acti.gif",
      description:
        "Automatisation de la publication de contenus sur plusieurs réseaux sociaux depuis un fichier Excel structuré. Le bot se connecte aux plateformes, poste les messages (texte/image), et journalise les activités. Intégration complète avec UiPath, gestion sécurisée des identifiants, et planification via Orchestrator.",
      tags: [
        {
          lang: "UiPath",
          color: "#004782",
        },
        {
          lang: "Excel",
          color: "#c47206",
        },
        {
          lang: "Orchestrator",
          color: "#ff4b4b",
        },
        {
          lang: "Automatisation Web",
          color: "#007878",
        },
      ],
      code: "https://github.com/ton-repo/multi-poster-bot", // à remplacer par ton lien
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
