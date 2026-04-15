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
      siteName: "Upwork",
      iconifyClassname: "simple-icons:upwork",
      style: {
        color: "#6FDA44",
      },
      profileLink:
        "https://www.upwork.com/freelancers/~0153b24257924da281?mp_source=share",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/eded124/",
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
      title: "Data Engineering & Pipelines",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Design and implementation of scalable data pipelines (batch & streaming)",
        "⚡ Data modeling and processing using SQL and distributed systems concepts",
        "⚡ Workflow orchestration and automation of data processes",
        "⚡ Monitoring and optimization of data pipelines for production reliability",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos-postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "logos-apache-spark",
          style: {},
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "logos-kafka",
          style: {},
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos-airflow",
          style: {},
        },
      ],
    },
    {
      title: "Data Systems & Architecture",
      fileName: "DataArchitectureImg",
      skills: [
        "⚡ Design of data-centric architectures for scalable applications",
        "⚡ Structuring data flows between APIs, services, and storage systems",
        "⚡ Backend system design focused on scalability and maintainability",
        "⚡ Integration of data systems into production environments",
      ],
      softwareSkills: [
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos-redis",
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
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "logos-prometheus",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "AI & Applied Systems",
      fileName: "AIEngImg",
      skills: [
        "⚡ Development of LLM-based applications (RAG, agents, workflow automation)",
        "⚡ Integration of machine learning models into production systems via APIs",
        "⚡ Design of intelligent automation systems powered by AI",
        "⚡ Optimization of AI systems for reliability, cost, and performance",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI / LLMs",
          fontAwesomeClassname: "simple-icons:openai",
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#7FC8FF" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21F" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
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

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Founding Platform Engineer",
        subtitle: "Indiquant",
        date: "Feb 2026 - Present",
        content: [
          "Founding engineer responsible for designing and building a data platform for financial systems, focusing on high-throughput processing, reliability, and secure service-to-service communication.",

          "Designed and implemented end-to-end data pipelines (ingestion, processing, and asynchronous scraping) handling large volumes of market data with validation, batching, and concurrency control.",

          "Engineered distributed workflows with strong consistency guarantees, implementing idempotent processing, reconciliation logic, and request coalescing to prevent data loss, race conditions, and database overload.",

          "Architected a resilient time-series data model with strict idempotency guarantees, ensuring consistent writes under concurrent workloads and failure scenarios.",

          "Optimized performance using Redis-based caching strategies, reducing database load and improving query response times for time-series data.",

          "Built a full observability stack (Prometheus, Grafana, Loki, PostgreSQL exporters) to monitor pipeline health, system behavior, and production performance.",

          "Developed internal tooling to simplify data infrastructure usage (data access, pipeline configuration, permissions), improving developer productivity and reducing operational errors.",

          "Implemented a zero-trust security model using mTLS and HashiCorp Vault (PKI, automated certificate rotation) for secure service-to-service communication.",

          "Designed and enforced access control policies (RBAC, certificate-based identity, network isolation) to protect critical data resources.",

          "Automated CI/CD workflows using GitHub Actions and Makefiles, enabling reproducible deployments and reliable system evolution.",
        ],
      },
      {
        title: "Data Engineer Intern",
        subtitle: "Lotus Capital",
        date: "Aug 2025 - Jan 2026",
        content: [
          "Designed and implemented secure, high-performance data pipelines for user submissions and market data, enabling real-time validation, obfuscation, and transformation.",

          "Built distributed, event-driven systems using Kafka, Flink, RabbitMQ, and containerized microservices with high-availability configurations.",

          "Developed scalable batch processing pipelines using Spark, supporting fault-tolerant data processing across large datasets.",

          "Implemented data validation and schema enforcement strategies to ensure consistency and reliability across evolving data systems.",

          "Monitored production systems using Prometheus and Grafana, identifying bottlenecks and improving pipeline performance.",

          "Developed unit and integration tests with pytest and GitHub Actions to ensure reliability and correctness of data workflows.",

          "Achieved sub-200ms end-to-end validation latency in a high-throughput environment.",

          "Collaborated on improving data engineering practices, contributing to more robust and maintainable data infrastructure.",
        ],
      },
      {
        title: "Data Scientist Intern",
        subtitle: "MEDTECH",
        date: "Mar 2024 - Sep 2024",
        content: [
          "Developed AI models for extracting structured information from document images, automating data extraction workflows.",

          "Optimized model performance using quantization, knowledge distillation, and efficient fine-tuning techniques.",

          "Implemented monitoring and explainability tools to analyze model behavior and improve reliability.",

          "Documented end-to-end workflows to ensure reproducibility and facilitate collaboration.",
        ],
      },
      {
        title: "Statistician Intern",
        subtitle: "DDAEP (Agriculture, Fisheries and Livestock Department)",
        date: "Jul 2021 - Aug 2021",
        content: [
          "Designed data collection methodologies and survey tools for agricultural data gathering.",

          "Trained and supervised field agents to ensure data quality and consistency.",

          "Analyzed collected data and produced reports with actionable insights for decision-making.",
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
          subtitle: "Université Mundiapolis, Maroc",
          date: "2022 - 2024",
          content: [],
        },
        {
          title: "Licence en Statistiques Appliquées",
          subtitle:
            "École Nationale de la Statistique de la Planification et de la Démographie (ENSPD), Bénin",
          date: "2019 - 2021",
          content: [],
        },
      ],
    },

    {
      title: ["Achievements"],
      data: [
        {
          title: "Competitive ML & Applied AI Rankings",
          content: [
            "#1/20 – License Plate Detection Challenge (Kaggle)",
            "#26/333 – GeoAI NO2 Estimation Challenge (Zindi)",
            "#35/258 – Crop Disease Detection Challenge (Zindi)",
            "#62/245 – Root Volume Estimation Challenge (Zindi)",
            "#121/444 – Climate Optimization Challenge (Zindi)",
          ],
        },
      ],
    },

    {
      title: ["Collaborative AI Projects"],
      description:
        "Projects developed in international AI collaborations (Omdena), involving cross-functional teams working on real-world datasets and problems.",
      data: [
        {
          title: "RAG-based LLM for Regulatory Decision Support Systems",
          link: "https://confirm.omdena.com/LCoszlm",
          subtitle: "Applied AI / Information Retrieval System",
          content: [
            "Designed a document intelligence pipeline combining OCR, preprocessing, and structured ingestion for legacy administrative documents.",
            "Built an end-to-end RAG system enabling semantic search and retrieval over digitized regulatory archives.",
            "Implemented automated data processing workflows using GitHub Actions for ingestion and cleaning pipelines.",
            "Developed an evaluation framework using LLM-as-a-judge to assess retrieval quality and response relevance.",
            "Focused on system reliability, data quality, and retrieval consistency across heterogeneous document sources.",
          ],
        },

        {
          title:
            "Local News Aggregation & Fake News Detection System – Kitwe, Zambia",
          link: "https://confirm.omdena.com/LCeujql",
          subtitle: "ML System for Misinformation Detection",
          content: [
            "Designed a full text classification pipeline for real-time fake news detection using TF-IDF and logistic regression.",
            "Built data ingestion workflows using RSS feeds for continuous news collection and preprocessing.",
            "Achieved ~90% accuracy and F1-score under class imbalance constraints.",
            "Explored advanced techniques such as focal loss for handling skewed datasets.",
            "System designed with focus on scalability of data ingestion and model inference pipeline.",
          ],
        },

        {
          title: "Flood Prediction & Early Warning System – Karimganj, India",
          subtitle: "ML Forecasting + Deployment System",
          content: [
            "Built a forecasting pipeline using meteorological data (OpenMeteo API) to predict flood risk levels.",
            "Led the deployment team and integrated ML models into a Streamlit-based application.",
            "Designed end-to-end system connecting data ingestion, preprocessing, prediction, and UI layer.",
            "Worked on system integration between APIs, model outputs, and real-time visualization components.",
            "Focused on productionization of ML models and cross-component system reliability.",
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
      title: "Machine Learning Specialization",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/559e7fb792f1d73d619d116f4ce8bcb4",
      alt_name: "Coursera",
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
      title: "Machine Learning Explainability",
      subtitle: "Kaggle",
      logo_path: "Kaggle_logo.webp",
      certificate_link:
        "https://www.kaggle.com/learn/certification/edgarmeva/machine-learning-explainability",
      alt_name: "IITG",
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
      title: "dbt Fundamentals",
      subtitle: "dbt",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/track/8228066771add5079dc03f3e3d385b2905f67ad3",
      color_code: "#000000",
    },
    {
      title: "Advanced SQL",
      subtitle: "SQL / Data Systems",
      logo_path: "hackerbank_logo_new.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/e96f47d33ba1",
      color_code: "#000000",
    },
    {
      title: "Data Warehousing Concepts",
      subtitle: "Data Systems",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/3e7fe5caffac4071ac1c8a194c435079a7a7718e",
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
      title: "Multi AI Agent Systems with CrewAI",
      subtitle: "CrewAI",
      logo_path: "crew_ai_logo.png",
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
      title: "Structurer des projets d’apprentissage automatique",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/bcd75d6240d46879adcf74fbe5bc3e3f",
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
  certifications,
  resumeleft,
  resumeright,
};
