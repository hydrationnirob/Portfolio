import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navx from './components/Nav';
import Portfolio from "./components/bodycomponents/Portfolio";
import PortfolioDetail from "./components/portfoliodetils/PortfolioDetail";
import AppListing from "./components/bodycomponents/AppListing";

function App() {
  return (
    <Router>
      <div className="App">
        <Navx />
        {/* Add spacing below the navbar */}
        <div style={{ marginTop: '45px' }}></div>

        {/* Define routes for navigation */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/apps" element={<AppListing />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
