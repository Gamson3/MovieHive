// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
// import { Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter since Since GitHub Pages only serves static files
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <Router>  {/* Wrap everything inside HashRouter */}
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
      </Router>
    </MovieProvider>
  );
}

export default App;
