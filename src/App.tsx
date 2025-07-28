import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OurCause from "./pages/OurCause";
import WhatWeDo from "./pages/WhatWeDo";
import HowToHelp from "./pages/HowToHelp";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import AdminNews from "./pages/admin/AdminNews";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import UnderDevelopment from "./pages/UnderDevelopment";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <div></div>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nuestra-causa" element={<OurCause />} />
              <Route path="/que-hacemos" element={<WhatWeDo />} />
              <Route path="/como-ayudar" element={<HowToHelp />} />
              <Route path="/noticias/*" element={<News />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/pronto" element={<UnderDevelopment />} />
              <Route path="/admin/login" element={<LoginForm />} />
              <Route
                path="/admin/noticias"
                element={
                  <ProtectedRoute>
                    <AdminNews />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
