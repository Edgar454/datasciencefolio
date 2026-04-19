const SystemStoryHeader = {
  title: "System Stories",
  description:
    "A collection of real engineering problems I worked on across platform engineering, data systems, and backend infrastructure. Each story reflects design decisions, tradeoffs, and the reasoning behind production systems I built or improved.",
};

const Stories = [
  {
    author: "Edgar",
    image:
      "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
    date: "Apr 2026",

    title: "A Healthy System Isn’t Always a Correct System",
    subtitle: "Designing a control plane to validate system invariants",

    description:
      "Why traditional monitoring is not enough and how I introduced a control plane to ensure system correctness.",

    sections: {
      context:
        "As a founding platform engineer, I built critical infrastructure components including ETL pipelines, database systems, caching layers, and deployment pipelines. These systems were monitored using logs and metrics (Prometheus and Grafana), which provided visibility into component health.",

      problem:
        "While components appeared healthy, the system could still be incorrect. Self-healing mechanisms masked issues such as silent data loss, cache inconsistencies (metadata indicating data that wasn’t actually present), high cache miss rates, or partially failed ETL pipelines that recovered but left corrupted or incomplete data. Traditional monitoring answered 'is the system running?' but not 'is the system correct?'",

      solution:
        "I started designing a control plane focused on system-level correctness rather than component health. This involved defining and monitoring system invariants such as data consistency (e.g. transformed data matches source data), cache integrity (metadata aligned with actual stored data), and expected data flow behavior. In addition to logs and metrics, I incorporated tracing to follow data paths across the system and identify bottlenecks or inconsistencies.",

      insights:
        "This experience highlighted that observability must go beyond logs and metrics. A system can be fully operational yet incorrect. By introducing invariant-based monitoring and system-level visibility, I shifted from reactive debugging to proactive validation. It reinforced the idea that reliability is not just about uptime, but about correctness and trust in the data.",
    },

    tags: [
      "Observability",
      "System Design",
      "Data Engineering",
      "Monitoring",
      "Tracing",
      "Reliability",
    ],
  },
  {
    author: "Edgar",
    image:
      "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
    date: "Apr 2026",

    title: "Fixing Latency in a Real-Time Market Data Pipeline",
    subtitle: "Decoupling ingestion and parsing to eliminate processing lag",

    description:
      "How I reduced latency in a real-time trading data pipeline by redesigning the ingestion architecture.",

    sections: {
      context:
        "I was building a real-time market observer that consumed data from a WebSocket stream to provide traders with up-to-date information. Low latency was critical for the system’s usefulness.",

      problem:
        "Despite receiving live data, I observed a consistent delay of 1–2 seconds between the incoming stream and processed data. Investigation revealed that the pipeline was tightly coupled: each message was fetched and immediately parsed in sequence. The serialization and parsing overhead slowed down ingestion, creating a backlog and increasing latency.",

      solution:
        "I redesigned the pipeline to decouple ingestion and processing. The WebSocket consumer was dedicated solely to fetching data and pushing it into a queue as fast as possible. A separate asynchronous worker consumed from the queue and handled parsing. This allowed ingestion to run continuously without being blocked by processing time, effectively parallelizing the workload.",

      insights:
        "This change significantly improved throughput, increasing ingestion from ~300k to ~750k ticks per second while eliminating the 1–2 second processing delay. While the system did not fully match the theoretical real-time rate of the upstream WebSocket, it removed internal bottlenecks and brought performance closer to the source limits. This demonstrated the importance of separating I/O-bound and CPU-bound tasks in high-frequency data systems.",
    },

    tags: [
      "WebSocket",
      "Real-Time",
      "Concurrency",
      "Async",
      "Queue",
      "Prometheus",
    ],
  },
  {
    author: "Edgar",
    image:
      "https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Apr 2026",

    title: "Designing a Smart Cache for Time-Series Data",
    subtitle:
      "From ineffective caching to gap-based retrieval with concurrency control",

    description:
      "How I redesigned a caching system for time-series data to handle partial overlaps, reduce database load, and avoid concurrency issues.",

    sections: {
      context:
        "I implemented a caching layer for time-series candle data using Redis. The goal was to reduce database load and improve response times for range-based queries.",

      problem:
        "Despite caching, around 90% of requests were still hitting the database. The issue was that users were requesting slightly different time ranges (e.g. [t1, t6], [t2, t7]), meaning cache entries rarely matched exactly. Traditional caching strategies failed because they rely on identical query keys. Additionally, concurrent requests for similar ranges could trigger duplicate database calls and redundant cache updates.",

      solution:
        "I designed a gap-based caching strategy. Instead of caching full query results, I stored individual data points in a Redis sorted set using timestamps as scores. When a request comes in, I detect which portions of the requested range are missing (gaps). Only those gaps are fetched from the database, while existing data is retrieved directly from Redis using range queries. To prevent duplicate database calls during concurrent requests, I implemented distributed locking using Redlock, ensuring only one process fetches and fills a given gap.",

      insights:
        "This project showed that caching temporal data requires a fundamentally different approach than key-based caching. By shifting from query-level caching to data-level caching, I significantly reduced unnecessary database calls while maintaining efficiency. It also reinforced the importance of concurrency control and memory-aware design when building scalable systems.",
    },

    tags: [
      "Redis",
      "Caching",
      "Time-Series",
      "Concurrency",
      "Backend",
      "Performance",
    ],
  },
  {
    author: "Edgar",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Apr 2026",

    title: "Making mTLS Work with PostgreSQL and Vault Agent",
    subtitle:
      "Solving certificate ownership conflicts in containerized environments",

    description:
      "A deep dive into handling certificate permissions between Vault Agent and PostgreSQL in a secure mTLS setup.",

    sections: {
      context:
        "I was implementing a Zero Trust architecture using mTLS with Vault Agent distributing certificates dynamically to services. PostgreSQL was configured to require client certificates, enforcing strict security constraints.",

      problem:
        "PostgreSQL enforces strict ownership rules on its certificates: it must be the owner and the only one allowed to read them. However, Vault Agent generates and injects these certificates, creating a conflict between the certificate generator and the service consuming them.",

      solution:
        "My first attempt was to assign PostgreSQL as the owner of the generated certificates, but this broke the Vault Agent process. I then leveraged Linux permission mechanics: I set the certificates to be owned by root (which PostgreSQL starts as before dropping privileges), assigned a dedicated group (GID 470), and gave the files 640 permissions. By adding PostgreSQL to this group, it could securely read the certificates without violating its constraints.",

      insights:
        "This problem highlighted how security systems often collide at the boundaries between tools. Solving it required understanding Linux user/group mechanics, container runtime behavior, and how PostgreSQL handles privilege dropping. It reinforced the importance of designing secure systems with a deep understanding of underlying OS principles.",
    },

    tags: ["mTLS", "PostgreSQL", "Vault", "Linux", "Security", "Docker"],
  },
  {
    author: "Edgar",
    image:
      "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Apr 2026",

    title: "Replacing Init Containers with Post-Start Hooks",
    subtitle:
      "Securing service initialization while reducing system complexity",

    description:
      "How I eliminated insecure initialization windows and unnecessary containers using post-start hooks.",

    sections: {
      context:
        "In my infrastructure, services like Vault, MinIO, and Kafka required initialization steps such as creating users, registering schemas, or setting up access policies. I was handling this using separate 'init' containers that executed setup scripts after deployment.",

      problem:
        "This approach introduced two major issues. First, services started in an uninitialized state, creating a short but critical window where an attacker could potentially configure them before the system was secured. Second, the use of additional init containers increased system complexity and resource consumption.",

      solution:
        "I replaced init containers with post-start hooks executed directly inside the service containers. These hooks run immediately after the container starts and block the healthcheck until completion. This ensures that services are never exposed in an uninitialized state and eliminates the need for separate initialization containers.",

      insights:
        "This change improved both security and system simplicity. It highlighted how small orchestration features can have a large impact on system design. By moving initialization logic inside the container lifecycle, I reduced attack surface, improved reliability, and simplified deployment architecture.",
    },

    tags: [
      "Docker",
      "Containers",
      "Security",
      "DevOps",
      "Kafka",
      "MinIO",
      "Vault",
    ],
  },
];

export { SystemStoryHeader, Stories };
