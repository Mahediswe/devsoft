// src/data/processSteps.js

const processSteps = [
  {
    id: "scoping",
    title: "Project scoping",
    description:
      "We define clear goals, requirements, and deliverables that align with business needs and expectations.",
    points: [
      "conduct stakeholder interviews and workshops to refine the project vision;",
      "identify business objectives, technical constraints, and success metrics;",
      "develop a detailed project roadmap with key milestones.",
    ],
  },
  {
    id: "allocation",
    title: "Project resource allocation",
    description:
      "Strategic assignment of the right talent, tools, and technologies to meet project demands and timelines.",
    points: [
      "assign roles and responsibilities clearly;",
      "ensure team members match skill requirements;",
      "manage external/internal resources effectively.",
    ],
  },
  {
    id: "cost",
    title: "Project cost estimation",
    description:
      "Accurate forecasting of budget requirements for development, maintenance, and scaling.",
    points: [
      "define scope and pricing models;",
      "consider infrastructure, licenses, third-party services;",
      "provide estimates with transparent breakdowns.",
    ],
  },
  {
    id: "risk",
    title: "Risk management",
    description:
      "Identify potential risks and outline mitigation strategies to avoid project disruption.",
    points: [
      "perform risk analysis and prioritization;",
      "develop contingency plans;",
      "monitor and adjust continuously.",
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge management & sharing",
    description:
      "Facilitate consistent communication, documentation, and team learning throughout the process.",
    points: [
      "maintain centralized documentation;",
      "host regular knowledge-sharing sessions;",
      "ensure onboarding for new team members.",
    ],
  },
  {
    id: "code",
    title: "Code review",
    description:
      "Ensure code quality, maintainability, and scalability through structured peer reviews.",
    points: [
      "use version control and PR workflow;",
      "run automated tests and linters;",
      "enforce code standards and patterns.",
    ],
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Maintain visibility into progress, blockers, and performance with clear communication.",
    points: [
      "weekly sprint updates with metrics;",
      "client demos and retrospectives;",
      "real-time project dashboards.",
    ],
  },
];

export default processSteps;
