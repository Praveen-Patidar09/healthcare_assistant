import React, { useEffect } from "react";
import { FaStethoscope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaStethoscope className="text-primary text-3xl" />
          <Link to="/" className="text-2xl font-bold text-primary">
            Health Consult
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {/* Notice these use /#... instead of just #... */}
          <Link
            to="/"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/#how-it-works"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            How It Works
          </Link>

          <Link
            to="/#symptom-checker"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Symptom Checker
          </Link>

          <Link
            to="/#specialists"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Specialists
          </Link>

          <Link
            to="/appointment"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Appointment
          </Link>

          <Link
            to="/login"
            className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Login
          </Link>
        </div>

        <button className="md:hidden text-primary">
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
