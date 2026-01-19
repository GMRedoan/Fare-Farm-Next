"use client"
import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Link from 'next/link';

const ProductsCard = ({ product }) => {
    const { name, category, image, price, sold, _id } = product;

    return (
        <div className="card bg-base-200 w-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl">
            <figure className="relative overflow-hidden h-64">
                <Image
                    fill
                    src={image}
                    alt={name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                    <div className="badge badge-secondary font-semibold p-3 shadow-sm">
                        {sold}+ Sold
                    </div>
                </div>
                <div className="absolute bottom-3 left-3">
                    <div className="badge badge-accent badge-outline bg-base-100 text-primary backdrop-blur-md font-medium capitalize">
                        {category}
                    </div>
                </div>
            </figure>

            {/* Content Section */}
            <div className="card-body p-5">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl font-bold text-base-300">
                        {name}
                    </h2>
                </div>

                <div className="flex items-center gap-2 mt-2 text-xl">
                <FaBangladeshiTakaSign className="text-primary" />
                    <span className="text-2xl font-black text-primary"> 
                        {price}
                        </span> /kg
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-center items-center pt-4 border-t border-base-200">
                    <Link href={`/products/${_id}`} className="btn btn-primary btn-md gap-2 rounded-xl hover:px-8 hover:scale-105 transition-all">
                        Details
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;