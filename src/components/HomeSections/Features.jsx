"use client";

import { FaSeedling, FaTractor, FaLeaf, FaWater } from "react-icons/fa";

const features = [
  {
    icon: <FaSeedling className="text-green-500 w-12 h-12" />,
    title: "Organic Farming",
    description:
      "We cultivate 100% organic produce, free from harmful chemicals and pesticides, ensuring healthy food for your family.",
  },
  {
    icon: <FaTractor className="text-yellow-500 w-12 h-12" />,
    title: "Modern Equipment",
    description:
      "Our farm uses modern machinery to ensure efficient farming practices and high-quality harvests.",
  },
  {
    icon: <FaLeaf className="text-green-700 w-12 h-12" />,
    title: "Sustainable Practices",
    description:
      "We implement sustainable farming methods to protect the environment and promote biodiversity.",
  },
  {
    icon: <FaWater className="text-blue-500 w-12 h-12" />,
    title: "Irrigation System",
    description:
      "Advanced irrigation techniques ensure water efficiency while keeping crops healthy and hydrated.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-30 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-base-300 mb-6">Why Choose <span className="text-primary">Fare Farm</span> ?</h2>
        <p className="text-accent mb-12 max-w-2xl mx-auto">
          At Fare Farm, we focus on quality, sustainability, and innovation. Explore our unique features that set us apart.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-base-300 mb-3">{feature.title}</h3>
              <p className="text-accent">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
