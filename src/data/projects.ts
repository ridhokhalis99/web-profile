const projects = [
  {
    title: "Rekanka",
    description:
      "SaaS that runs an Indonesian small business from one app: offline-capable cashier (PWA + Capacitor), stock and recipes with cost per portion from latest purchase prices, GoFood/GrabFood/ShopeeFood reports converted into transactions with profit per channel, an online storefront, invoices with installments, and modules installed per business type at sign-up. Next.js frontend with a NestJS API on PostgreSQL (Drizzle), BullMQ/Redis background jobs, S3 storage, and Dockerized deployment.",
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Drizzle",
      "BullMQ",
      "Redis",
      "Capacitor",
      "Docker",
    ],
    liveLink: "https://rekanka-app.erkabased.com",
  },
  {
    title: "Koogita",
    description:
      "AI journaling app that helps people think through what they write. AI Lenses (Alternative Perspectives, Past Memories, Thinking Traps) comment on a note one sentence at a time, backed by a library of journaling frameworks, multi-day paths, daily rituals, and writing streaks in English and Indonesian. Next.js rich-text editor with autosave and voice recording, NestJS API on PostgreSQL (Prisma) with LangGraph agents, Google OAuth, and BullMQ queues.",
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "LangGraph",
      "OpenAI",
      "BullMQ",
      "Docker",
    ],
  },
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
  },
];

export default projects;
