// src/data/serviceData.js

const serviceData = [
  {
    id: "rnd",
    title: "R&D & Analysis",
    desc: `Our R&D and business analyst team study your business and ideas in detail 
to help you reduce market and technical risks across the entire web app development.`,
    bullets: [
      "validate business idea",
      "choose the right technology",
      "get exact project estimation",
      "create solution vision",
      "plan the product release",
      "avoid unplanned costs",
    ],
    image: "/images/services/rnd.png", // public folder e image rakhte hobe
  },
  {
    id: "ux",
    title: "UI/UX Design",
    desc: `We create intuitive and user-centric designs that improve product usability and satisfaction.`,
    bullets: [
      "user journey mapping",
      "wireframing & prototyping",
      "responsive design",
      "design system creation",
    ],
    image: "/images/services/ux.png",
  },
  {
    id: "web",
    title: "Web Development",
    desc: `We build robust, scalable and maintainable web apps using the latest technologies.`,
    bullets: [
      "frontend and backend development",
      "API integration",
      "real-time systems",
      "scalable architecture",
    ],
    image: "/images/services/web.png",
  },
  {
    id: "qa",
    title: "QA & Testing",
    desc: `Ensure your product works flawlessly with our automated and manual QA services.`,
    bullets: [
      "unit & integration testing",
      "manual testing",
      "performance & load testing",
      "bug tracking & reporting",
    ],
    image: "/images/services/qa.png",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: `We provide ongoing support and improvements after product launch.`,
    bullets: [
      "monitoring & alerts",
      "regular updates",
      "feature enhancement",
      "emergency support",
    ],
    image: "/images/services/support.png",
  },
];

export default serviceData;
