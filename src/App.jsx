import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registro from "./pages/Registro.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import EmpresaDashboard from "./pages/EmpresaDashboard";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/style.css';
import './styles/blocks.css';
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/empresa" element={<EmpresaDashboard />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;