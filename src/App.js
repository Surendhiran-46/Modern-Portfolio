import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages (you can stub these for now)
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  }, [])
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
