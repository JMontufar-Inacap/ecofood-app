import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added Link import
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setLoading(true);

    const correo = e.target.correo.value;
    const contrasena = e.target.contrasena.value;

    try {
      const credenciales = await signInWithEmailAndPassword(auth, correo, contrasena);
      
      Swal.fire("¡Inicio de sesión exitoso!", "", "success").then(() => {
        if (correo.endsWith("@ecofood.cl")) {
          navigate("/admin");
        } else if (correo.endsWith("@empresa.cl")) {
          navigate("/empresa");
        } else {
          navigate("/home");
        }
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="text-muted"
      style={{
        backgroundImage: 'url("/imagenes/login_bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className="bg-white">
        <nav
          className="navbar navbar-expand-lg pb-0 pt-0"
          style={{ backgroundColor: "#50603A" }}
        >
          <div className="container">
            <div className="row align-items-center gx-2 py-3 w-100">
              <div className="col">
                <Link
                  className="navbar-brand text-uppercase fw-bold d-inline-flex align-items-center h4 mb-0"
                  to="/"
                >
                  <img
                    src="/imagenes/logo.png"
                    alt="EcoFood Logo"
                    width="45"
                    height="45"
                    className="me-1"
                  />
                  <span className="text-white">EcoFood</span>
                </Link>
              </div>
              <div className="col-auto">
                <button
                  className="d-lg-none navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown-2"
                  aria-controls="navbarNavDropdown-2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <hr className="m-0" />
          </div>

          <div className="container bg-transparent">
            <div className="collapse navbar-collapse pb-1 pt-1" id="navbarNavDropdown-2">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a href="/#quienes-somos" className="nav-link text-white p-lg-3">
                    <b>¿Quiénes somos?</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#mision-vision" className="nav-link text-white p-lg-3">
                    <b>Misión y Visión</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#datos" className="nav-link text-white p-lg-3">
                    <b>Datos</b>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link text-white p-lg-3">
                    <b>Contáctanos</b>
                  </Link>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 py-1">
                <Link to="/login" className="btn btn-dark pe-4 ps-4">
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="login-container text-center p-5">
        <h2><b>INICIAR SESIÓN</b></h2>
        <form onSubmit={iniciarSesion} style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            className="form-control mb-3"
            required
          />
          <div className="text-start mb-3">
            <a href="#" style={{ fontSize: "0.9rem", color: "#004d00" }}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? "Ingresando..." : "INICIAR SESIÓN"}
          </button>
        </form>
        <p className="mt-3">
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;