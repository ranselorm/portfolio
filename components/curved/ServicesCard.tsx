import React from "react";
import "./ServicesCard.css";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CurvedCardProps {
  title: string;
}

const Curved: React.FC<CurvedCardProps> = ({ title }) => {
  return (
    <div>
      <div className="fill bottom-right">
        <div className="px-2 py-4 text-white font-medium text-lg">{title}</div>
        <img src="/images/web.jpg/" />
      </div>
    </div>
  );
};

const ServiceCard: React.FC<CurvedCardProps> = ({ title }) => {
  return (
    <main className="relative w-full md:w-[350px] font-primary">
      <Curved title={title} />
      <div className="w-16 h-16 bg-white absolute bottom-0 left-52 z-10 rounded-full flex items-center justify-center">
        <Icon
          icon="fluent:arrow-up-right-28-regular"
          className="text-5xl text-primary"
        />
      </div>
    </main>
  );
};

export default ServiceCard;
