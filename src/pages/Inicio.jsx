import React from "react";
import Footer from "../components/Footer";
import ContenidoPrincipal from "../components/ContenidoPrincipal"
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <header className="bg-white">
        <nav className="navbar navbar-expand-lg pb-0 pt-0" style={{ backgroundColor: "#50603A" }}>
          <div className="navbar-light" style={{ backgroundColor: "#50603A" }}>
            <div className="container">
              <div className="align-items-center gx-2 py-3 row">
                <div className="col">
                  <a className="align-items-center d-inline-flex fw-bold h4 mb-0 navbar-brand text-uppercase" href="/">
                    <img src="/imagenes/logo.png" alt="EcoFood Logo" width="45" height="45" className="me-1" />
                    <span className="text-white">EcoFood</span>
                  </a>
                </div>
                <div className="col-auto"></div>
                <div className="col-auto">
                  <button className="d-lg-none navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-2" aria-controls="navbarNavDropdown-2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <hr className="m-0" />
            </div>
          </div>
          <div className="bg-transparent container">
            <div className="collapse navbar-collapse pb-1 pt-1" id="navbarNavDropdown-2">
              <ul className="me-auto navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white p-lg-3" href="#quienes-somos"><b>¿Quiénes somos?</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-lg-3" href="#mision-vision"><b>Misión y Visión</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-lg-3" href="#datos"><b>Datos</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-lg-3" href="/contacto"><b>Contáctanos</b></a>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 py-1">
                <Link to="/login" className="btn btn-dark pe-4 ps-4">Iniciar sesión</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ContenidoPrincipal/>
      <Footer />
    </>
  );
}

export default Inicio;
