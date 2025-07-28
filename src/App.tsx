import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

export default App
