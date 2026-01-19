"use client";

import Link from "next/link";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-yellow-700 to-gray-600"></div>

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-sm">
            <FaLeaf className="text-lime-300" />
            Pure • Organic • Trusted
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-yellow-300">Fare Farm</span>
          </h1>

          <p className="text-white/90 max-w-xl leading-relaxed">
            Fare Farm delivers premium farm-fresh products straight from
            trusted farmers to your home. Pure ingredients, honest sourcing,
            and uncompromised quality.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href={'/products'} className="btn bg-yellow-400 hover:bg-yellow-500 border-none text-black font-semibold">
              Explore Products
              <FaArrowRight className="ml-2" />
            </Link>

            <button className="btn btn-outline text-white border-white/60 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="card bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Fare Farm?
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                🌿 100% Organic & Natural Products
              </li>
              <li className="flex items-center gap-2">
                🚜 Direct From Local Farmers
              </li>
              <li className="flex items-center gap-2">
                📦 Fresh & Hygienic Packaging
              </li>
              <li className="flex items-center gap-2">
                ⭐ Trusted by Hundreds of Customers
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
