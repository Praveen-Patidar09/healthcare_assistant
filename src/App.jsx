import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import SymptomChecker from './components/SymptomChecker.jsx';
import FeaturedSpecialists from './components/FeaturedSpecialists.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header .jsx';
import Appointment from './pages/Appointment.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Router>
      <div className="bg-light-bg min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <HeroSection />
                  </section>

                  <section id="how-it-works">
                    <HowItWorks />
                  </section>

                  <section id="symptom-checker">
                    <SymptomChecker />
                  </section>

                  <section id="specialists">
                    <FeaturedSpecialists />
                  </section>
                </>
              }
            />
            {/* Appointment Page */}
            <Route path="/appointment" element={<Appointment />} />
            {/* ✅ Login Page */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;