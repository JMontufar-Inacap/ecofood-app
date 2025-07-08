import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registrarUsuario = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nombreCompleto = e.target.nombreCompleto.value;
    const correo = e.target.correo.value;
    const contrasena = e.target.contrasena.value;
    const fechaNacimiento = e.target.fechaNacimiento.value;
    const genero = e.target.genero.value;

    const medios = Array.from(e.target.medio || []).filter(m => m.checked).map(m => m.value);

    try {
      const cred = await createUserWithEmailAndPassword(auth, correo, contrasena);

      await setDoc(doc(db, "usuarios", cred.user.uid), {
        nombreCompleto,
        correo,
        fechaNacimiento,
        genero,
        medios,
        tipo: "cliente",
        direccion: "",
        comuna: "",
        telefono: ""
      });

      await Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta fue creada correctamente.",
        confirmButtonText: "Ir a iniciar sesión"
      });

      navigate("/login");

    } catch (error) {
      console.error("Error en el registro:", error);
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
          
      <div className="registro-container text-center p-5">
        <h2><b>REGISTRARSE</b></h2>
        <form onSubmit={registrarUsuario} className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">Nombre Completo</label>
            <input type="text" className="form-control" name="nombreCompleto" required />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">Correo Electrónico</label>
            <input type="email" className="form-control" name="correo" required />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">Contraseña</label>
            <input type="password" className="form-control" name="contrasena" required minLength="6" />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">Fecha de Nacimiento</label>
            <input type="date" className="form-control" name="fechaNacimiento" required />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">Género</label>
            <select className="form-select" name="genero" required>
              <option value="" disabled selected>Seleccionar</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fs-6">¿Cómo supiste de nosotros?</label>
            <div className="d-flex gap-3 flex-wrap">
              <label><input type="checkbox" name="medio" value="redes" /> Redes sociales</label>
              <label><input type="checkbox" name="medio" value="amistades" /> Amistades</label>
              <label><input type="checkbox" name="medio" value="otros" /> Otros medios</label>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>
        <p className="mt-4">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;