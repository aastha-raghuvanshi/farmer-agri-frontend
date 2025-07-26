import React, { useState, useEffect } from 'react';
import './App.css';
import MarketRates from './components/MarketRates';
import WeatherInfo from './components/WeatherInfo'
import CropAdvisor from './components/CropAdvisor';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import GovernmentPolicies from './components/GovernmentPolicies';
import Navbar from './components/Navbar';
import DiseasePredictor from './components/DiseasePredictor';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar if scrolled more than 80px from top
      setShowNavbar(window.scrollY < window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar className={showNavbar ? "" : "hide"} />
      <section className="hero-section"id="home">
        <h1 className="app-title">🌾 Farmer Agriculture App</h1>
        <h1 className="app-title">KrishiBuddy🌾</h1>
<p className="app-slogan">"Your Digital Partner in Every Season"</p>

        <a href="#content" className="scroll-down">▼ Scroll Down</a>
      </section>

      <main id="content" className="cards-container">
  <ErrorBoundary>
    <div className="market-card market-card-img" id="market-fullscreen">
      <MarketRates />
    </div>
  </ErrorBoundary>
 <ErrorBoundary>
  <section id="weather-fullscreen">
    <WeatherInfo />
  </section>
</ErrorBoundary>
<ErrorBoundary>
  <section id="cropadvisor-fullscreen">
    <CropAdvisor />
  </section>
</ErrorBoundary>
<ErrorBoundary>
  <div id="disease-predictor-fullscreen">
    <DiseasePredictor />
  </div>
</ErrorBoundary>
</main>
<ErrorBoundary>
  <div id="policies">
    <GovernmentPolicies />
  </div>
</ErrorBoundary>
    
      <Footer />
    </div>
  );
}

export default App;
