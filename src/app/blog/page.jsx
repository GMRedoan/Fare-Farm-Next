"use client";

const blogs = [
  {
    id: 1,
    title: "The Future of Organic Farming",
    excerpt:
      "Discover how organic farming is shaping a healthier and more sustainable future.",
    image: "https://i.ibb.co.com/67yPdd3Y/Exploring-the-Future-of-Organic-Farming-Technology.jpg",
    date: "Jan 12, 2026",
  },
  {
    id: 2,
    title: "Why Fresh Farm Food Matters",
    excerpt:
      "Learn why fresh, farm-sourced food is better for your health and the environment.",
    image: "https://i.ibb.co.com/r27bgRQL/Working-conditions-v2.webp",
    date: "Jan 18, 2026",
  },
  {
    id: 3,
    title: "Sustainable Agriculture at Fare Farm",
    excerpt:
      "A deep look into how Fare Farm follows eco-friendly and sustainable practices.",
    image: "https://i.ibb.co.com/ccf3kDS1/unnamed.png",
    date: "Jan 25, 2026",
  },
];

export default function BlogPage() {
  return (
    <section className="py-14 bg-base-1000">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-base-300 mb-4">
            Fare Farm <span className="text-primary">Blog</span>
          </h1>
          <p className="text-accent max-w-2xl mx-auto">
            Insights, stories, and updates from our farm to your table.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{blog.date}</p>
                <h2 className="text-2xl font-semibold text-base-300 mb-3">
                  {blog.title}
                </h2>
                <p className="text-accent">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
