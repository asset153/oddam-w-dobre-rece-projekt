import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeLogin from "./components/HomeLogin/HomeLogin";
import HomeRegister from "./components/HomeRegister/HomeRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<HomeLogin />} />
        <Route path="/rejestracja" element={<HomeRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
