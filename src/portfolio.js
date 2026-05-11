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
      title: "Real-Time Data Systems",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Build real-time data pipelines for high-frequency market and event data",
        "⚡ Design event-driven architectures with validation, routing, and fault handling",
        "⚡ Ensure reliable processing under retries, failures, and concurrent workloads",
        "⚡ Optimize ingestion and processing pipelines for low-latency execution",
      ],
      softwareSkills: [
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos-kafka",
          style: { color: "#231F20" },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos-apache-spark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "Flink",
          fontAwesomeClassname: "simple-icons:apacheflink",
          style: { color: "#E6526F" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
      ],
    },

    {
      title: "AI & Production ML Systems",
      fileName: "AIEngImg",
      skills: [
        "⚡ Deploy ML models into production APIs and data pipelines",
        "⚡ Build LLM-based systems (RAG, agents, document intelligence workflows)",
        "⚡ Optimize models for latency, cost, and inference efficiency",
        "⚡ Design end-to-end AI systems from data ingestion to production output",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI / LLMs",
          fontAwesomeClassname: "simple-icons:openai",
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#0B3B5A" },
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
      ],
    },

    {
      title: "Data Infrastructure & Backend Systems",
      fileName: "DataArchitectureImg",
      skills: [
        "⚡ Design scalable data architectures for production-grade systems",
        "⚡ Build caching, storage, and query optimization layers for performance",
        "⚡ Implement secure service-to-service communication and system integration",
        "⚡ Automate infrastructure and deployment workflows for reliability",
      ],
      softwareSkills: [
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos-redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos-postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "logos-prometheus",
          style: { color: "#E6522C" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos-grafana",
          style: { color: "#F46800" },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A collection of production-oriented systems spanning data engineering, real-time pipelines, and applied AI. Each project focuses on building reliable, scalable, and observable systems rather than isolated prototypes.",
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Founding Platform Engineer",
        subtitle: "Indiquant - India",
        location: "India",
        date: "Feb 2026 - Present",
        content: [
          "Built data pipelines for the NIFTY 200 universe to handle daily market data ingestion, historical data reprocessing, and obfuscated dataset generation. Designed for safe, repeatable execution (idempotent workflows), enabling full 5-year reprocessing in ~3 minutes using parallel workers (4 replicas).",

          "Designed distributed workflows ensuring data consistency under concurrent execution, preventing duplication and data loss during retries and failure scenarios.",

          "Implemented Redis-based caching for time-series market data using a gap-aware retrieval strategy, reducing redundant database queries and improving response times for range-based data access patterns.",

          "Built a centralized observability system (metrics, logs, dashboards) providing system-level visibility into data pipelines and enabling early detection of inconsistencies beyond component-level health checks.",

          "Built shell-based abstractions over infrastructure systems (Vault PKI automation, database provisioning, blob storage access), enabling developers to provision secure resources without managing certificates or low-level permissions, significantly reducing operational overhead and onboarding complexity.",

          "Implemented secure service-to-service communication with automated certificate management, ensuring encrypted and authenticated interactions without manual credential handling.",

          "Designed a layered access control system combining certificate-based identity for service-to-service communication, RBAC for human operators, and network isolation to limit blast radius across infrastructure.",

          "Built reproducible CI/CD pipelines using GitHub Actions and Makefiles, ensuring consistent, automated deployments across staging and production environments with identical build and runtime behavior.",
        ],
      },
      {
        title: "Data Engineer Intern",
        subtitle: "Lotus Capital - Morocco",
        date: "Aug 2025 - Jan 2026",
        content: [
          "Built a real-time data processing system for user submissions and market data, enabling ingestion, validation, and transformation with low-latency processing (sub-200ms end-to-end) under production load.",

          "Designed an event-driven streaming architecture where Kafka handled ingestion, Flink performed real-time validation and business rule enforcement, and validated events were routed to downstream scoring systems.",

          "Implemented a schema governance layer using an Avro-based schema registry to ensure compatibility across Kafka, Flink, and Spark, enforcing consistent data contracts across the entire pipeline.",

          "Designed a correctness-aware routing mechanism that separated valid and invalid events in real time, sending malformed or inconsistent data to a dead-letter queue while forwarding clean data to batch scoring pipelines.",

          "Built Spark-based batch processing pipelines for downstream analytics and scoring, supporting fault-tolerant reprocessing of large historical datasets without data loss.",

          "Identified and resolved a stream processing bottleneck where ingestion throughput exceeded processing capacity, tuning parallelism and resource allocation to stabilize system throughput and prevent queue buildup under load.",

          "Implemented automated testing pipelines (unit and integration tests) using pytest and GitHub Actions CI/CD to validate data transformation logic and prevent schema and consistency regressions before production deployment.",
        ],
      },
      {
        title: "Machine Learning Intern (Document AI)",
        subtitle: "B2B ESI Internship - MEDTECH",
        date: "Mar 2024 - Sep 2024",
        content: [
          "Worked on adapting Donut (Document Understanding Transformer) for structured information extraction from bank receipts, focusing on OCR-free document understanding pipelines.",

          "Explored model adaptation strategies to improve robustness across heterogeneous receipt formats, including experiments with shared encoders and task-specific decoders for multi-receipt parsing.",

          "Evaluated multiple parameter-efficient fine-tuning approaches (LoRA, QLoRA, adapters) as well as compression techniques such as quantization and knowledge distillation to improve inference efficiency under constrained resources.",

          "Prototyped and tested alternative multi-adapter architectures allowing a shared backbone to generate specialized outputs per document type, and analyzed trade-offs between performance and architectural complexity.",

          "Documented experimental findings and model behaviors across iterations to support reproducibility and guide future model design decisions.",
        ],
      },
      {
        title: "Statistician Intern",
        subtitle:
          "DDAEP (Agriculture, Fisheries and Livestock Department of Borgou) - Benin",
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
            "#1 team - Karima AI Hackaton 2025",
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
