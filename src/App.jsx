import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comodity" element={<h1>Comodity</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
