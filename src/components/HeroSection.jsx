import React from 'react';
import SmartHealth from "../assets/Smart-Health.webp";
const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Confused About Your Health?
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
            Get instant guidance on which specialist to consult.
          </h2>
          <p className="text-gray-600 mb-8">
            Our AI-powered assistant analyzes your symptoms to recommend the right doctor, saving you time, stress, and worry. Your path to the right care starts here.
          </p>
          <a
            href="#symptom-checker"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300 transform hover:scale-105 inline-block"
          >
            Check Your Symptoms Now
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <img src={SmartHealth} alt="AI Healthcare Assistant Illustration" className="max-w-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;