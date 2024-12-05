import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import MainContent from './components/sections/MainContent';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;