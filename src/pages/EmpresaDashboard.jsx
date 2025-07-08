import React from "react";
import ProductosDashboard from "../components/ProductosDashboard";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function EmpresaDashboard() {
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    await signOut(auth);
    Swal.fire("Sesión cerrada", "Hasta pronto", "success");
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <header className="bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#50603A" }}>
          <div className="container py-3 d-flex justify-content-between align-items-center">
            <a href="/" className="navbar-brand d-flex align-items-center text-white">
              <img
                src="/imagenes/logo.png"
                alt="EcoFood Logo"
                width="45"
                height="45"
                className="me-2"
              />
              <span className="fw-bold text-uppercase">EcoFood - Empresa</span>
            </a>
            <button onClick={cerrarSesion} className="btn btn-danger">
              Cerrar sesión
            </button>
          </div>
        </nav>
      </header>

      <Container className="py-4">
        <h2 className="text-center mb-4">Gestión de Productos</h2>
        <ProductosDashboard />
      </Container>

      <Footer />
    </div>
  );
}

export default EmpresaDashboard;