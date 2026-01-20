"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const product = {
      name: form.name.value,
      category: form.category.value,
      image: form.image.value,
      price: Number(form.price.value),
      description: form.description.value,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      alert("✅ Product added successfully!");
      Swal.fire({
        title: "Thank you!",
        text: "Product added successfully!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#f59e0b"
      });

      form.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-100 flex items-center justify-center px-4 mb-20">
      <div className="card bg-base-200 shadow-2xl max-w-3xl w-full">
        <div className="card-body">

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Product Name */}
            <div className="form-control">
              <label className="label font-semibold">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Add valid product"
                className="input input-bordered"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter Category"
                className="input input-bordered"
                required
              />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label font-semibold">Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="Enter Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label font-semibold">Price (৳)</label>
              <input
                type="number"
                name="price"
                placeholder="Enter Product Price"
                className="input input-bordered"
                required
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label font-semibold">Description</label>
              <textarea
                name="description"
                placeholder="Product description..."
                className="textarea textarea-bordered h-28"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
