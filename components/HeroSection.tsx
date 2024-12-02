import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section-padding relative bg-hero-bg bg-contain bg-center h-[70vh] font-primary flex items-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="container mx-auto relative z-10 text-center text-white flex flex-col gap-5">
        <span className="text-base font-semibold tracking-wide font-mont text-gray-300">
          Hello there👋🏾
        </span>
        <h1 className="text-lg sm:text-3xl text-white font-mont">
          I am Randy,{" "}
          <code className="bg-deep px-2 py-1 rounded font-mono text-black">
            &lt;Software Engineer /&gt;
          </code>
        </h1>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          molestias, repellat accusantium laborum voluptatibus totam ea eos
          maxime nihil impedit
        </p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 w-max mx-auto">
          Portfolio <span>hello</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
