import React from "react";

const values = [
  {
    title: "Sustainability Commitment",
    description:
      "We are committed to supporting sustainable growth and contributing to a better future. As proud members of the Council for Inclusive Capitalism, we integrate sustainable practices into our projects and operations, prioritizing long-term solutions that positively impact the environment, society, and economy.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our Clients are at the heart of everything we do. We work tirelessly to understand their needs, exceed their expectations, and deliver solutions that align with their business goals, ensuring long-lasting and mutually beneficial relationships.",
  },
  {
    title: "Agility and Adaptability",
    description:
      "As evangelists of Agile and modern technologies, we embrace change in the technological landscape and adapt quickly. Our agile approach and well-established processes enable us to meet dynamic Client requirements and stay ahead of market trends.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "As an ISO 9001 and ISO 27001-certified company, we adhere to the highest international standards for information security. From day one, we sign NDAs, implement industry-standard measures like two-factor authentication for internal systems, and enforce strict confidentiality rules among employees.",
  },
  {
    title: "Cultural Sensitivity",
    description:
      "We respect and adapt to the cultural nuances of our Clients, employees, and partners. We operate internationally in regions like the USA, EU, Africa, Asia, and Latin America.",
  },
];

const CompanyValues = () => {
  return (
    <section className="px-6 py-20 bg-white max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Building on strong <span className="text-blue-600">values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {values.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;
