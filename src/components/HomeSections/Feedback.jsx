"use client";

import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    name: "Ayesha Rahman",
    comment: "Fare Farm’s products are always fresh and top-quality. I love shopping here!",
    rating: 5,
  },
  {
    name: "Rafiq Ahmed",
    comment: "The customer service is amazing, and the produce tastes incredible.",
    rating: 4,
  },
  {
    name: "Nabila Hossain",
    comment: "Highly recommend Fare Farm! Organic and fresh, every time.",
    rating: 5,
  },
  {
    name: "Tanvir Chowdhury",
    comment: "Love the sustainable approach and fresh products delivered every week.",
    rating: 4,
  },
];

export default function Feedback() {
  return (
    <section className="py-24 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-base-300 mb-4">What Our <span className="text-primary">Customers</span> Say</h2>
        <p className="text-accent mb-16 max-w-2xl mx-auto">
          Hear directly from our happy customers about their experience with Fare Farm.
        </p>

        <div className="relative flex flex-wrap justify-center gap-8">
          {feedbacks.map((feedback, idx) => (
            <div
              key={idx}
              className={`bg-base-200 rounded-3xl shadow-2xl p-8 w-80 transform transition duration-500 
                hover:scale-105 ${
                  idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
            >
              <div className="flex items-center mb-4 justify-center">
                {[...Array(feedback.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-base-300 italic mb-4">{feedback.comment}</p>
              <h3 className="text-red-600 font-semibold">{feedback.name}</h3>
            </div>
          ))}
        </div>
      </div>
     </section>
  );
}
