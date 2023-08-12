import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VerticalNavbar from './components/VerticalNavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio'; // Adjust the import path based on your directory structure
import Services from './components/pages/Services';
import About from './components/pages/About'; // Adjust the import path based on your directory structure
import Contact from './components/pages/Contact'; // Adjust the import path based on your directory structure

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content-wrapper">
          <VerticalNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

