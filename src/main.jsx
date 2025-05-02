import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Addepisodes from "./components/Addepisodes.jsx";

const RootLayout = () => (
  <>
    <Navbar />
    <main className="content">
      <Outlet /> {/* Tutaj będą renderowane dzieci routingu */}
    </main>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Trasy z layoutem (z Navbarem) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addepisodes" element={<Addepisodes />} />
      </Route>
      
      {/* Trasy bez layoutu (bez Navbara) */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);