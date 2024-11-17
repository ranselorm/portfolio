import React from "react";
import ServicesCard from "./curved/ServicesCard";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  return (
    <section className="bg-primary h-full section-padding">
      <div className="flex flex-col md:flex-row items-center justify-center container mx-auto gap-4">
        <ServicesCard title="Web Application" />
        <ServicesCard title="Landing Page" />
        <ServicesCard title="Restful APIs" />
        <ServicesCard title="Responsive Design" />
      </div>
    </section>
  );
};

export default Services;
