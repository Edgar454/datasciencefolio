const projects = {
  list: [
    {
      title: "Wikipedia Attention Observatory",

      subtitle:
        "Semantic analytics platform for analyzing collective attention across Wikipedia",

      img_path: "project-wikipedia.png",

      // 👉 CARD
      description:
        "Production-grade analytics platform that transforms Wikimedia pageviews into an entity-centric warehouse for analyzing how collective attention evolves across languages, communities, and time.",

      // 👉 OVERLAY
      problem:
        "Wikipedia publishes billions of pageviews every day, but the data is available only at the page level. The same concept exists under different titles and languages, making cross-language analysis, trend detection, and entity-level analytics difficult without semantic reconciliation.",

      solution:
        "Built a cloud-native analytics platform that reconciles Wikipedia pages into Wikidata entities, models attention using dbt and BigQuery, automates deployment with Terraform and GitHub Actions, and exposes interactive dashboards through Power BI with full pipeline observability.",

      features: [
        "Semantic reconciliation of Wikipedia pages using Wikidata sitelinks",
        "Entity-centric dimensional warehouse built with dbt",
        "Cross-language attention analysis across 300+ Wikipedia communities",
        "Trend, burst, and anomaly detection dashboards",
        "Infrastructure-as-Code deployment using Terraform",
        "Automated orchestration with AWS Fargate and GitHub Actions",
        "Pipeline observability using CloudWatch and BigQuery telemetry",
        "Interactive Power BI dashboards for attention exploration",
      ],

      tags: [
        { lang: "BigQuery", color: "#4285F4" },
        { lang: "dbt", color: "#FF694B" },
        { lang: "AWS", color: "#FF9900" },
        { lang: "Terraform", color: "#844FBA" },
        { lang: "Power BI", color: "#F2C811" },
        { lang: "GitHub Actions", color: "#2088FF" },
        { lang: "CloudWatch", color: "#FF4F8B" },
        { lang: "Python", color: "#3776AB" },
      ],

      demo: [
        "https://github.com/Edgar454/wikipedia-analytics-warehouse/blob/main/assets/dashboard_1.png?raw=true",
        "https://github.com/Edgar454/wikipedia-analytics-warehouse/blob/main/assets/github_actions_pipeline.PNG?raw=true",
        "https://github.com/Edgar454/wikipedia-analytics-warehouse/blob/main/assets/dbt_lineage.PNG?raw=true",
        "https://github.com/Edgar454/wikipedia-analytics-warehouse/blob/main/assets/architecture_diagram.png?raw=true",
      ],

      code: "https://github.com/Edgar454/wikipedia-analytics-warehouse",
      link:
        "https://app.fabric.microsoft.com/view?r=eyJrIjoiYzVhYmFlYTctOWE4Zi00ZjgxLWIzYjgtNjI4NWRjODIzNGRiIiwidCI6ImNjNTA2ODBjLTBmZTctNGQ5YS04ZWVkLTRjNWE1NjZkYzYxNSJ9",
    },

    {
      title: "Crypto Market Data Platform",
      subtitle:
        "Secure, observable data platform for market ingestion and analysis",

      img_path: "project-BI.jpg",

      // 👉 CARD
      description:
        "Production-grade system for high-frequency crypto data ingestion and processing, combining event-driven pipelines, strict security boundaries, and full observability across the stack.",

      // 👉 OVERLAY
      problem:
        "Market data systems are often difficult to scale and secure. They mix ingestion, storage, and analytics, making them hard to monitor, debug, and evolve. Ensuring data integrity while maintaining observability and strong security is particularly challenging.",

      solution:
        "Designed a modular data platform separating ingestion, storage, and analytics layers. Implemented event-driven database design, TimescaleDB for time-series data, and a zero-trust security model using mTLS with Vault. Added full observability with Prometheus and Grafana.",

      features: [
        "Event-driven database design for full traceability",
        "Time-series storage using PostgreSQL + TimescaleDB",
        "Zero-trust architecture with Vault and mTLS certificates",
        "Automated certificate lifecycle with Vault Agent",
        "Data ingestion pipelines using Apache NiFi",
        "Observability stack with Prometheus and Grafana",
        "Separation of operational and analytical workloads using DuckDB",
        "Containerized deployment with reproducible environments",
      ],

      tags: [
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "TimescaleDB", color: "#F05A28" },
        { lang: "Apache NiFi", color: "#0176D3" },
        { lang: "Vault", color: "#000000" },
        { lang: "Docker", color: "#2496ED" },
        { lang: "Prometheus", color: "#E6522C" },
        { lang: "Grafana", color: "#F46800" },
        { lang: "Security", color: "#6A1B9A" },
      ],

      demo: [
        "https://github.com/Edgar454/trading_engine/blob/main/images/architecture.png?raw=true",
        "https://github.com/Edgar454/trading_engine/blob/main/images/database.jpg?raw=true",
        "https://github.com/Edgar454/trading_engine/blob/main/images/nifi_flow.PNG?raw=true",
        "https://github.com/Edgar454/trading_engine/blob/main/images/grafana.PNG?raw=true ",
      ],

      code: "https://github.com/Edgar454/trading_engine",
      link: null,
    },
    {
      title: "Who Is Talking?",
      subtitle:
        "Audio intelligence pipeline (speaker diarization + transcription)",

      img_path: "voice.gif",

      // 👉 CARD ONLY
      description:
        "Audio processing system for speaker diarization and transcription, designed around asynchronous task execution for scalable long-running inference workloads.",

      // 👉 OVERLAY
      problem:
        "Audio recordings such as meetings or interviews are difficult to analyze manually, as it is hard to track who is speaking and convert unstructured speech into usable text.",

      solution:
        "Designed an asynchronous audio processing pipeline combining speaker diarization and speech-to-text transcription, orchestrated with Celery and Redis to handle long-running inference tasks and ensure scalable processing via a FastAPI backend.",

      features: [
        "Speaker diarization (who spoke when)",
        "Automatic speech-to-text transcription",
        "Async processing pipeline with Celery + Redis",
        "FastAPI backend for job submission and retrieval",
        "Modular architecture separating inference and orchestration",
        "Support for long-running audio processing tasks",
      ],

      // 👉 Tech stack
      tags: [
        { lang: "Python", color: "#3572A5" },
        { lang: "FastAPI", color: "#009688" },
        { lang: "Celery", color: "#00C853" },
        { lang: "Redis", color: "#DC382D" },
        { lang: "Speech AI", color: "#6A1B9A" },
        { lang: "Audio Processing", color: "#283593" },
      ],

      // 👉 Demo
      demo: [
        "https://github.com/Edgar454/WhoIsTalking/blob/main/demo/WhoisTalking.png?raw=true",
        "https://github.com/Edgar454/WhoIsTalking/blob/main/demo/screenshot.PNG?raw=true",
        "https://github.com/Edgar454/WhoIsTalking/blob/main/demo/screenshot_2.PNG?raw=true",
      ],

      // 👉 Links
      code: "https://github.com/Edgar454/WhoIsTalking",
      link: null,
    },
    {
      title: "CUPS Print Management Platform",
      subtitle:
        "Distributed print orchestration system with job scheduling and observability",

      img_path: "project-cups.jpg",

      // 👉 CARD
      description:
        "Containerized print management system built around CUPS with asynchronous job processing, worker coordination, and full observability.",

      // 👉 OVERLAY
      problem:
        "Print systems become unreliable at scale due to job failures, lack of visibility, and difficulty coordinating concurrent workers, leading to lost or duplicated jobs.",

      solution:
        "Built a distributed print orchestration platform using FastAPI, PostgreSQL, and CUPS with event-driven scheduling, worker coordination via row locking, and full system observability.",

      features: [
        "Event-driven job orchestration using PostgreSQL LISTEN/NOTIFY",
        "Worker coordination with row-level locking (SKIP LOCKED)",
        "Automatic retry and recovery of failed jobs",
        "IPP integration with CUPS print server",
        "Distributed tracing across API, workers, and execution",
        "Observability stack with Prometheus, Grafana, and Tempo",
        "Idempotent job creation with deduplication",
        "Fully containerized multi-service deployment",
      ],

      tags: [
        { lang: "FastAPI", color: "#009688" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "CUPS / IPP", color: "#6A1B9A" },
        { lang: "Docker", color: "#2496ED" },
        { lang: "Observability", color: "#F46800" },
        { lang: "Distributed Systems", color: "#2E7D32" },
      ],

      demo: [
        "https://github.com/Edgar454/CUPS_printer_management_system/blob/master/assets/CupsPipeline.png?raw=true",
        "https://github.com/Edgar454/CUPS_printer_management_system/blob/master/assets/CupsUi.PNG?raw=true",
        "https://github.com/Edgar454/CUPS_printer_management_system/blob/master/assets/CupsMasterDashboard.PNG?raw=true",
        "https://github.com/Edgar454/CUPS_printer_management_system/blob/master/assets/CupsCI.PNG?raw=true",
      ],

      code: "https://github.com/Edgar454/CUPS_printer_management_system",
      link: null,
    },
    {
      title: "Fitness Health Monitoring System",
      subtitle:
        "Automated personal health analytics with data ingestion and observability",

      img_path: "project-health.jpg",

      // 👉 CARD
      description:
        "Personal data pipeline for ingesting and analyzing health metrics, enabling structured tracking of behavioral trends through dashboards and analytics.",

      // 👉 OVERLAY
      problem:
        "Personal health data is often fragmented across multiple sources, making it difficult to track habits and detect behavioral trends over time.",

      solution:
        "Designed an automated data pipeline that ingests Google Fit data daily, validates it, processes it through transformations, and stores it in a structured database for visualization and alerting.",

      features: [
        "Automated daily ingestion of Google Fit health data",
        "Data validation using Great Expectations",
        "ETL processing with Apache Spark",
        "Structured storage in PostgreSQL",
        "Grafana dashboards for health monitoring",
        "Alerting system for missed health goals",
        "Fully containerized deployment with Docker",
        "CI/CD pipeline using GitHub Actions",
        "Cloud deployment support (Azure VM)",
      ],

      tags: [
        { lang: "Data Engineering", color: "#6A1B9A" },
        { lang: "Apache Airflow", color: "#017CEE" },
        { lang: "Apache Spark", color: "#E25A1C" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "Grafana", color: "#F46800" },
        { lang: "Docker", color: "#2496ED" },
        { lang: "CI/CD", color: "#2E7D32" },
      ],

      demo: [
        "https://github.com/Edgar454/Fitness_Health_Monitor_Pipeline/blob/main/Graphics.PNG?raw=true",
        "https://github.com/Edgar454/Fitness_Health_Monitor_Pipeline/blob/main/FitnessMonitor.png?raw=true",
      ],

      code: "https://github.com/Edgar454/Fitness_Health_Monitor_Pipeline",
      link: null,
    },
    {
      title: "AI Study Buddy",
      subtitle:
        "Agent-based system for document understanding with async processing and caching",

      img_path: "project-buddy.jpg",

      // 👉 CARD
      description:
        "Learning system that transforms unstructured study material into structured knowledge artifacts (summaries, quizzes, flashcards), improving comprehension and long-term retention.",

      // 👉 OVERLAY
      problem:
        "Learning from complex documents is time-consuming and inefficient. Students must read, summarize, create exercises, and build revision materials manually, which slows down understanding and retention.",

      solution:
        "Designed an AI-powered study assistant that analyzes study material and enriches it with external knowledge. The system generates structured explanations, quizzes to test comprehension, and flashcards exportable to Anki to improve long-term retention.",

      features: [
        "Agent-based workflow using CrewAI (explanation, quiz, summary, flashcards)",
        "Asynchronous task processing with Celery",
        "Redis-based caching to avoid recomputation",
        "FastAPI backend with polling mechanism",
        "Monitoring with Prometheus and Grafana",
        "Containerized deployment using Docker Compose",
        "Separation between ingestion, processing, and delivery layers",
      ],

      tags: [
        { lang: "FastAPI", color: "#009688" },
        { lang: "Redis", color: "#DC382D" },
        { lang: "Celery", color: "#37814A" },
        { lang: "Docker", color: "#2496ED" },
        { lang: "LLM", color: "#6A1B9A" },
        { lang: "CrewAI", color: "#000000" },
        { lang: "Prometheus", color: "#E6522C" },
        { lang: "Grafana", color: "#F46800" },
      ],

      demo: [
        "https://raw.githubusercontent.com/Edgar454/AI_study_Buddy/main/assets/architecture.png",
        "https://raw.githubusercontent.com/Edgar454/AI_study_Buddy/main/assets/agents_summary.png",
        "https://raw.githubusercontent.com/Edgar454/AI_study_Buddy/main/assets/study_buddy_db_wb.drawio.png",
      ],

      code: "https://github.com/Edgar454/AI_study_Buddy",
    },
    {
      title: "Insight Africa",
      subtitle:
        "NLP + Data Engineering platform for structured news intelligence",

      img_path: "news.gif",

      // 👉 CARD ONLY
      description:
        "News intelligence platform providing real-time exploration, weekly structured summaries, and entity graph analytics with temporal tracking of relationship and importance changes.",

      // 👉 OVERLAY
      problem:
        "News in Africa is highly fragmented across multiple sources, making it difficult to quickly identify key narratives, track entities, and understand relationships between events.",

      solution:
        "Built a system that continuously ingests news articles and transforms them into structured intelligence by classifying topics, extracting entities and relationships, and generating summaries and knowledge graphs that make trends and connections easy to explore.",

      features: [
        "Automated ingestion of RSS news feeds (~1000 articles/day)",
        "Streaming pipeline for data processing (Airflow + Kafka)",
        "LLM-based classification and summarization (Mistral API)",
        "Entity and relationship extraction for knowledge graph construction",
        "Graph analytics (communities, centrality, PageRank)",
        "FastAPI backend exposing structured insights",
        "React frontend for exploration and visualization",
      ],

      // 👉 Tech stack
      tags: [
        { lang: "Python", color: "#3572A5" },
        { lang: "Airflow", color: "#017CEE" },
        { lang: "Kafka", color: "#231F20" },
        { lang: "Spark", color: "#E25A1C" },
        { lang: "PostgreSQL", color: "#336791" },
        { lang: "FastAPI", color: "#009688" },
        { lang: "React", color: "#61DAFB" },
        { lang: "LLMs (Mistral)", color: "#FF6B6B" },
        { lang: "NetworkX", color: "#4C78A8" },
      ],

      // 👉 Demo
      demo: [
        "https://github.com/Edgar454/African_News_Analyzer_Pipeline/blob/main/assets/architecture_diagram.png?raw=true",
        "https://github.com/Edgar454/African_News_Analyzer_Pipeline/blob/main/assets/screenshot_home.png?raw=true",
        "https://github.com/Edgar454/African_News_Analyzer_Pipeline/blob/main/assets/screenshot_news.png?raw=true",
        "https://github.com/Edgar454/African_News_Analyzer_Pipeline/blob/main/assets/screenshot_summary.png?raw=true",
      ],

      // 👉 Links
      code: "https://github.com/Edgar454/African_News_Analyzer_Pipeline",
      link: null,
    },
    {
      title: "Mauritanian Plate Detection Challenge",
      subtitle:
        "High-accuracy OCR model for constrained license plate recognition",

      img_path: "project-car.jpg",

      // 👉 CARD
      description:
        "Solution to a Kaggle computer vision challenge focused on license plate OCR. Achieved 99.958% character-level accuracy, ranking 1st in the competition leaderboard.",

      // 👉 OVERLAY
      problem:
        "License plate recognition in low-resource settings is challenging due to limited labeled data, image noise, and variability in capture conditions. The goal of the competition was to maximize character-level OCR accuracy under these constraints.",

      solution:
        "Trained a computer vision model for OCR using preprocessing techniques and data augmentation to improve robustness on a limited dataset. The model was evaluated using character-level accuracy and optimized for generalization.",

      features: [
        "End-to-end OCR model for license plate recognition",
        "Image preprocessing and normalization pipeline",
        "Data augmentation to improve generalization on limited data",
        "Character-level prediction optimization",
        "Inference script for batch evaluation",
        "Achieved 99.958% character-level accuracy on competition dataset",
      ],

      tags: [
        { lang: "Computer Vision", color: "#6A1B9A" },
        { lang: "OCR", color: "#009688" },
        { lang: "Python", color: "#3572A5" },
        { lang: "Deep Learning", color: "#FF6F00" },
        { lang: "Competition (Kaggle)", color: "#2E7D32" },
      ],

      demo: [],

      code: "https://github.com/Edgar454/Mauritanian-license-plate-recognition",
      link: null,
    },
  ],
};

export { projects };
