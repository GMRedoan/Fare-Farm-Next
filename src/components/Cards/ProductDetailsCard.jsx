"use client";

import { FaStar, FaFire } from "react-icons/fa";

const ProductDetailsCard = ({ product }) => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
      <div className="card lg:card-side bg-base-200 shadow-2xl max-w-5xl w-full">

        {/* Image Section */}
        <figure className="lg:w-1/2 p-3 md:p-6 flex items-center justify-center bg-base-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-[450px] h-[420px] object-contain rounded-xl"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body lg:w-1/2">
          <span className="badge badge-success badge-outline w-fit -mt-16 md:mt-18">
            {product.category}
          </span>

          <h2 className="card-title text-3xl mt-2">
            {product.name}
          </h2>

          {/* Rating & Sold */}
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-semibold">{product.ratings}</span>
            </div>

            <div className="flex items-center gap-1 text-orange-500">
              <FaFire />
              <span>{product.sold}+ Sold</span>
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-primary mt-4">
            ৳ {product.price}
          </p>

          {/* Description */}
          <p className="text-accent leading-relaxed">
            {product.description}
          </p>

          </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
