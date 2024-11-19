import React from "react";

const Skiils = () => {
  return (
    <section className="section-padding font-primary">
      <main className="container mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="flex-col flex gap-y-2 md:w-2/6">
          <p className="text-xl font-medium">My Skiils</p>
          <h3 className="text-3xl font-heading font-semibold">
            Beautiful and unique digital experiences
          </h3>
          <p className="mb-8 md:mb-0 font-xl text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quisquam unde nemo illum reiciendis
          </p>
        </div>
        {/* cards */}
        <div className="bg-gray-100 md:w-4/6 grid md:grid-cols-5 grid-cols-2 gap-5">
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5 animate-pulse"></div>
          <div className="rounded bg-red-400 animate-bounce dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
          <div className="rounded bg-red-400 dark:bg-gray-800 w-full h-28 col-span-1 flex justify-center items-center p-5"></div>
        </div>
      </main>
    </section>
  );
};

export default Skiils;
