import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components (persistent across pages)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages (content that changes)
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import SSLC from './pages/SSLC';
import Contact from './pages/Contact';

// Import Styles
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sslc" element={<SSLC />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;