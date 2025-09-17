import React, { useState } from 'react';
import { FaPaperPlane, FaSpinner, FaHeartbeat, FaBrain, FaTooth, FaLungs } from 'react-icons/fa';

const specialists = [
  { name: 'Cardiologist', icon: <FaHeartbeat className="text-red-500" />, reason: "For heart and blood vessel related issues." },
  { name: 'Neurologist', icon: <FaBrain className="text-purple-500" />, reason: "For nervous system disorders like headaches." },
  { name: 'Dentist', icon: <FaTooth className="text-blue-400" />, reason: "For issues related to teeth and gums." },
  { name: 'Pulmonologist', icon: <FaLungs className="text-teal-500" />, reason: "For lung and respiratory system problems." },
];

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setIsLoading(true);
    setResults(null);

    // --- FAKE AI/API CALL ---
    // In a real app, you would send 'symptoms' to your backend (e.g., OpenAI API)
    // The backend would return a list of recommended specialists.
    setTimeout(() => {
      // We'll return a random subset of specialists for this demo.
      const shuffled = [...specialists].sort(() => 0.5 - Math.random());
      setResults(shuffled.slice(0, Math.floor(Math.random() * 2) + 1));
      setIsLoading(false);
    }, 2500); // Simulate network delay
  };

  return (
    <section id="symptom-checker" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">AI Symptom Checker</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Enter your symptoms below. Our AI will analyze them and suggest the most relevant medical specialist for you.
        </p>

        <div className="max-w-2xl mx-auto bg-light-bg p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full p-4 pr-16 text-gray-700 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-colors"
                rows="3"
                placeholder="For example: 'I have a sharp headache, dizziness, and blurred vision...'"
                disabled={isLoading}
              ></textarea>
              <button
                type="submit"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-full hover:bg-opacity-90 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={isLoading || !symptoms.trim()}
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
              </button>
            </div>
          </form>

          {isLoading && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-primary">
                <FaSpinner className="animate-spin text-2xl" />
                <span className="text-lg font-medium">Analyzing your symptoms...</span>
              </div>
            </div>
          )}

          {results && (
            <div className="mt-8 text-left animate-fadeInUp">
              <h3 className="text-xl font-semibold text-primary mb-4">Based on your symptoms, we recommend:</h3>
              <div className="space-y-4">
                {results.map((specialist, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                    <div className="text-3xl">{specialist.icon}</div>
                    <div>
                      <p className="font-bold text-lg text-primary">{specialist.name}</p>
                      <p className="text-gray-600">{specialist.reason}</p>
                    </div>
                    <a href="#" className="ml-auto bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition">Book Now</a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;