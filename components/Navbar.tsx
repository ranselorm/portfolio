"use client";
import { useState } from "react";
import Link from "next/link";

const leftNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Service" },
];

const rightNavLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-white md:py-4 px-4 lg:px-20 font-primary"
      style={{ fontFamily: "Aeonik, sans-serif" }}
    >
      <div className="container mx-auto px-2 flex justify-between items-center py-2 relative bg-primary rounded-full">
        {/* Left Links */}
        <div className="hidden md:flex space-x-6 z-10">
          {leftNavLinks?.map((link, index) => (
            <Link
              href="#"
              className={`${
                link.label === "Home"
                  ? "bg-white cursor-pointer text-black rounded-full"
                  : ""
              } px-6 py-2`}
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="font-bold bg-white rounded-full text-black p-2 text-sm">
            RS
          </div>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex space-x-6 z-10">
          {rightNavLinks?.map((link, index) => (
            <Link
              href="#"
              className={`${
                link.label === "Home"
                  ? "bg-white cursor-pointer text-black rounded-full"
                  : ""
              } px-6 py-2`}
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <Link href="#home" className="block py-2 px-4 hover:bg-purple-700">
            Home
          </Link>
          <Link href="#about" className="block py-2 px-4 hover:bg-purple-700">
            About
          </Link>
          <Link
            href="#services"
            className="block py-2 px-4 hover:bg-purple-700"
          >
            Service
          </Link>
          <Link
            href="#portfolio"
            className="block py-2 px-4 hover:bg-purple-700"
          >
            Portfolio
          </Link>
          <Link href="#blog" className="block py-2 px-4 hover:bg-purple-700">
            Blog
          </Link>
          <Link href="#contact" className="block py-2 px-4 hover:bg-purple-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
