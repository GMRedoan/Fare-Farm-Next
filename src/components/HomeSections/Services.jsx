"use client";

import { FaTractor, FaSeedling, FaLeaf, FaWater } from "react-icons/fa";
import { GiFarmer, GiFarmTractor, GiTreeBranch } from "react-icons/gi";

const services = [
  {
    icon: <GiFarmer className="w-10 h-10 text-primary" />,
    title: "Organic Cultivation",
    description:
      "We grow our crops organically, ensuring chemical-free, healthy food for our customers.",
  },
  {
    icon: <GiFarmTractor className="w-10 h-10 text-gray-500" />,
    title: "Modern Farming",
    description:
      "Using modern machinery to improve efficiency, quality, and sustainability on the farm.",
  },
  {
    icon: <GiTreeBranch className="w-10 h-10 text-green-700" />,
    title: "Sustainable Practices",
    description:
      "Eco-friendly methods and sustainable farming techniques that preserve the environment.",
  },
  {
    icon: <FaWater className="w-10 h-10 text-blue-500" />,
    title: "Advanced Irrigation",
    description:
      "Innovative irrigation systems ensure our crops are hydrated efficiently and sustainably.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Side */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co.com/LXCVQDBc/farmers-tending-crops-stockcake.webp"
            alt="Fare Farm Services"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Services List */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-base-300 mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-accent mb-6">
            At Fare Farm, we provide top-notch farming services with a focus on sustainability and quality.
          </p>

          <div className="space-y-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 group hover:bg-yellow-100 p-4 rounded-xl transition"
              >
                <div className="shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-base-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-accent">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
