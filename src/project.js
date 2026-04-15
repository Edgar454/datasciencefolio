const projects = {
  list: [
    {
      title: "Analyse du comportement des clients financiers",
      subtitle: "SQL + Power BI dashboard for banking insights",

      img_path: "project-BI.jpg",

      // 👉 CARD ONLY
      description:
        "Création de vues SQL et dashboard Power BI pour analyser clients, prêts et transactions.",

      // 👉 OVERLAY
      problem:
        "Les données bancaires sont souvent dispersées et difficiles à exploiter pour la prise de décision (risque, marketing, segmentation).",

      solution:
        "Conception d’un modèle SQL avec vues analytiques puis intégration dans Power BI pour produire des dashboards exploitables.",

      features: [
        "Segmentation client basée sur comportement financier",
        "Analyse des risques de crédit",
        "Visualisation des transactions et utilisation des cartes",
        "Pipeline SQL → Power BI",
      ],

      // 👉 Tech stack (you already have it)
      tags: [
        { lang: "SQL", color: "#00A9E0" },
        { lang: "SQL Server", color: "#CC2927" },
        { lang: "Power BI", color: "#F2C811" },
        { lang: "Data Modeling", color: "#6A1B9A" },
        { lang: "Business Intelligence", color: "#00758F" },
      ],

      // 👉 Demo (images or video links)
      demo: [
        "https://github.com/Edgar454/trading_engine/blob/main/images/architecture.png?raw=true",
        "https://github.com/Edgar454/Fitness_Health_Monitor_Pipeline/raw/main/Graphics.PNG?raw=true",
        "https://github.com/Edgar454/AI_study_Buddy/raw/main/assets/agents_summary.png?raw=true",
      ],

      // 👉 Links
      code: "https://github.com/Edgar454/financial-data-analysis-sql-tableau",
      link: null, // optional live demo
    },
    {
      title:
        "Automated Model Training Pipeline with MLflow and Data Shift Detection",
      img_path: "project-monitoring.webp",
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
      code:
        "https://github.com/Edgar454/Automated_Model_Training_With_Data_Shift_Detection",
    },
    {
      title: "Pamphlet Parser",
      img_path: "project-parser.avif",
      description:
        "Application mobile conçue pour automatiser l’enregistrement de nouveaux adhérents à partir de fiches papier. Grâce à un modèle de Document Understanding, les utilisateurs prennent une photo d’un formulaire, les champs sont extraits automatiquement et peuvent être corrigés avant enregistrement dans la base de données (Supabase). Ce projet a été développé avec React Native pour le front mobile et un backend Python pour le traitement OCR + extraction.",
      tags: [
        { lang: "React Native", color: "#61DBFB" },
        { lang: "Supabase", color: "#3ecf8e" },
        { lang: "Document Understanding", color: "#ffa600" },
        { lang: "OCR", color: "#a90f1a" },
        { lang: "Python", color: "#3776AB" },
      ],
      code: "https://github.com/Edgar454/pamphlet-parser",
    },
    {
      title:
        "Prévision du niveau de NO2 au sol à partir de données géospatiales et temporelles",
      img_path: "project-NO2.jpg",
      description:
        "Compétition de prédiction du niveau de NO2 au sol en utilisant des données géospatiales, temporelles et satellitaires. Le modèle a permis de se classer dans le top 10% en optimisant les performances de prévision de ce polluant. Utilisation de Python, scikit-learn, et Plotly pour la visualisation des données.",
      tags: [
        { lang: "Python", color: "#4B8BBE" },
        { lang: "scikit-learn", color: "#F7931E" },
        { lang: "Plotly", color: "#3E8B8E" },
        { lang: "Data Science", color: "#FF5733" },
      ],
      code: "https://github.com/Edgar454/GroundLevel_NO2_prediction",
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
      code: "https://github.com/Edgar454/WhoIsTalking",
    },
    {
      title: "Fitness Health Monitor",
      img_path: "project-health.jpg",
      description:
        "Pipeline de surveillance santé connecté à l’API Google Fit. Données quotidiennes sur le sommeil, l’activité physique et les calories sont extraites via Airflow, validées avec Great Expectations, transformées avec Spark, stockées dans PostgreSQL et visualisées via Grafana avec alertes email personnalisables.",
      tags: [
        { lang: "Airflow", color: "#1980aa" },
        { lang: "Spark", color: "#ec7c26" },
        { lang: "Google Fit API", color: "#34a853" },
        { lang: "Great Expectations", color: "#7f52ff" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "Grafana", color: "#f46800" },
      ],
      code: "https://github.com/Edgar454/Fitness_Health_Monitor_Pipeline",
    },
    {
      title: "AI Study Buddy",
      img_path: "project-buddy.jpg",
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
      code: "https://github.com/Edgar454/AI_study_Buddy",
    },
    {
      title: "Bot de candidature intelligent",
      img_path: "project-rpa.jpg",
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
      code: "https://github.com/Edgar454/ApplyingBot",
    },
    {
      title: "Insight Africa",
      img_path: "news.gif",
      description:
        "Plateforme intelligente de veille médiatique dédiée à l’Afrique. Elle collecte, classe, résume et visualise des articles provenant de sources variées. Le système repose sur un pipeline Airflow (scraping, Kafka, Spark), une API FastAPI et une interface interactive React. Résumés hebdomadaires, graphe de connaissances, et modélisation thématique automatisée inclus.",
      tags: [
        { lang: "Airflow", color: "#1980aa" },
        { lang: "Apache Spark", color: "#ec7c26" },
        { lang: "Kafka", color: "#f7a000" },
        { lang: "FastAPI", color: "#009688" },
        { lang: "React", color: "#61dafb" },
        { lang: "PostgreSQL", color: "#336791" },
      ],
      code: "https://github.com/Edgar454/African_News_Analyzer_Pipeline",
    },
  ],
};

export { projects };
