import React from 'react';
import { FaComments, FaRobot, FaUserMd } from 'react-icons/fa';

const Step = ({ icon, title, description, delay }) => (
  <div
    className="text-center p-8 bg-white rounded-2xl shadow-lg transform hover:-translate-y-3 hover:shadow-2xl transition duration-300 animate-fadeInUp min-h-[280px] flex flex-col justify-center"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white mx-auto mb-6 shadow-md">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-primary">Get Help in 3 Simple Steps</h2>
          <p className="text-gray-600 mt-3 text-lg">Fast, simple, and reliable guidance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <Step
            icon={<FaComments size={28} />}
            title="1. Describe Your Symptoms"
            description="Use our intuitive chat interface to tell us how you're feeling in your own words."
            delay="0.2s"
          />
          <Step
            icon={<FaRobot size={28} />}
            title="2. AI-Powered Analysis"
            description="Our smart system analyzes your input against a vast medical database to identify potential issues."
            delay="0.4s"
          />
          <Step
            icon={<FaUserMd size={28} />}
            title="3. Get Specialist Route"
            description="We instantly recommend the right type of specialist (e.g., Cardiologist, ENT) for you."
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
