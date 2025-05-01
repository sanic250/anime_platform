import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Tutaj będą renderowane dzieci routingu */}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
