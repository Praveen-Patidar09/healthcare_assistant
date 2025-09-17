import React from 'react';
import { FaStethoscope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaStethoscope className="text-white text-3xl" />
              <h3 className="text-2xl font-bold">MediRoute AI</h3>
            </div>
            <p className="text-gray-300">Your intelligent guide to the right healthcare.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li className="mb-2"><a href="#symptom-checker" className="hover:underline">Symptom Checker</a></li>
              <li className="mb-2"><a href="#specialists" className="hover:underline">Find a Doctor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-300">support@mediroute.ai</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center text-gray-400 border-t border-gray-700 mt-8 pt-6">
          <p>&copy; {new Date().getFullYear()} MediRoute AI. All Rights Reserved.</p>
          <p className="text-sm mt-2">Disclaimer: This tool is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;