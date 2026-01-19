"use client";

const products = [
  {
    name: "Fresh Apples",
    img: "https://i.ibb.co.com/Y7mCQbtd/istockphoto-187420397-612x612.jpg",  
  },
  {
    name: "Organic Carrots",
    img: "https://i.ibb.co.com/6Rkg3wx0/BHG-how-to-store-carrots-to-stay-fresh-9d6pww0c4g0-Ax-QZE6-S4-XS-6fe76f6ad690491ca07a81ce9db9cbc9.jpg",
  },
  {
    name: "Farm Fresh Peppers",
    img: "https://i.ibb.co.com/cSQQmrP7/when-to-water-pepper-plants-and-the-best-ways-to-do-it-65419be5-0421-4d6c-892b-1e6a350fcac8.webp",
  },
  {
    name: "Homemade Cheese",
    img: "https://i.ibb.co.com/5NmvhJs/Homemade-Mozzarella-Cheese-sliced.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="pb-24 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-base-300 mb-6">Top Products</h2>
        <p className="text-accent mb-16 max-w-2xl mx-auto">
          Explore our freshest and most loved products, straight from Fare Farm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg shadow-amber-800"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-base-300 text-2xl font-bold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
