import React, { useState } from "react";

const categories = [
  "All",
  "Wordpress",
  "Digital Marketing",
  "Web Design",
  "Branding",
  "Photography",
];

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Wordpress",
    image: "/images/project1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Project 2",
    category: "Digital Marketing",
    image: "/images/project2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Project 3",
    category: "Web Design",
    image: "/images/project3.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Project 4",
    category: "Branding",
    image: "/images/project4.jpg", // Replace with actual image path
  },
  {
    id: 5,
    title: "Project 5",
    category: "Photography",
    image: "/images/project5.jpg", // Replace with actual image path
  },
  {
    id: 6,
    title: "Project 6",
    category: "Web Design",
    image: "/images/project6.jpg", // Replace with actual image path
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-gray-100 py-10 px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Look at Our Projects</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg px-4 py-2 rounded ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            } shadow hover:bg-blue-400 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition duration-500 ease-in-out opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:opacity-80 transition"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
