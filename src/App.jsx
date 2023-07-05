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
          <Route path="/" element={<Home type="top" />} />
          <Route path="/business" element={<Home type="business" />} />
          <Route
            path="/entertainment"
            element={<Home type="entertainment" />}
          />
          <Route path="/politics" element={<Home type="politics" />} />
          <Route path="/science" element={<Home type="science" />} />
          <Route path="/sports" element={<Home type="sports" />} />
          <Route path="/technology" element={<Home type="technology" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=YOUR_QUERY
// https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=YOUR-QUERY&page=XXXPPPXXXXXXXXXX
