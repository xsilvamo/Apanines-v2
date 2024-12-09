import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import OurCause from './pages/OurCause';
import WhatWeDo from './pages/WhatWeDo';
import HowToHelp from './pages/HowToHelp';
import News from './pages/News';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuestra-causa" element={<OurCause />} />
            <Route path="/que-hacemos" element={<WhatWeDo />} />
            <Route path="/como-ayudar" element={<HowToHelp />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/galeria" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;