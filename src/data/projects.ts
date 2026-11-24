// Rows under the featured project on the home page. Rekanka is featured
// separately (src/pages/index.astro) and has its own case study.
const projects = [
  {
    title: "Koogita",
    description:
      'AI journaling app. "Lenses" comment on a note one sentence at a time, with frameworks, multi-day paths and streaks in English and Indonesian.',
    techStack: ["LangGraph", "NestJS", "Prisma"],
  },
  {
    title: "Ledgers",
    description:
      "Distributed double-entry ledger with idempotent, serializable transactions on Kubernetes.",
    metric: "k6: 1,000 users · ~47K req · 0% errors · ~179 ms p95",
    techStack: ["Go", "PostgreSQL", "K8s"],
    link: "https://github.com/ridhokhalis99/ledgers",
  },
  {
    title: "Link Shortener",
    description:
      "Microservice URL shortener. Redirects stay fast while Kafka feeds a separate analytics consumer.",
    techStack: ["Spring Boot", "Kafka"],
    link: "https://github.com/ridhokhalis99/linkshortener",
  },
];

export default projects;
