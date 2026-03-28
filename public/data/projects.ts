const projects = [
  {
    title: "Ledgers",
    description:
      "Distributed double-entry ledger for high-throughput financial transactions with CQRS-style services, idempotent transactions, and serializable operations to keep balances consistent even under heavy load. Deployed on Kubernetes with CNPG-managed PostgreSQL, HPA, and Dockerized workloads. Sustained 1,000 concurrent users during k6 tests (~47K req, 0% errors, ~179ms p95).",
    techStack: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Kubernetes",
      "CNPG",
      "Docker",
      "k6",
    ],
    githubLink: "https://github.com/ridhokhalis99/ledgers",
    liveLink: "https://github.com/ridhokhalis99/ledgers",
  },
  {
    title: "Link Shortener",
    description:
      "Microservice-based URL shortener with dedicated analytics pipeline. Spring Boot services publish events to Kafka so the analytics consumer can track referrer, user agent, IP, and timestamp metrics without slowing down redirects. Packaged with Docker and deployed to Kubernetes for horizontal scalability.",
    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    githubLink: "https://github.com/ridhokhalis99/linkshortener",
    liveLink: "https://github.com/ridhokhalis99/linkshortener",
  },
];

export default projects;
