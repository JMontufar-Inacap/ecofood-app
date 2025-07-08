import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();
  const [consejo, setConsejo] = useState("");
  const [productos, setProductos] = useState([]);

  const nombreUsuario = auth.currentUser?.displayName || auth.currentUser?.email;

  const cerrarSesion = async () => {
    await signOut(auth);
    Swal.fire("Sesión cerrada", "Hasta pronto", "success");
    navigate("/login");
  };

  useEffect(() => {
    const consejos = [
      "Planifica tus comidas semanalmente para reducir el desperdicio alimentario.",
      "Almacena frutas y verduras correctamente para prolongar su vida útil.",
      "Usa sobras para crear nuevas recetas.",
      "Compra solo lo necesario y evita el desperdicio.",
      "Aprende a interpretar las fechas de vencimiento correctamente."
    ];
    const aleatorio = consejos[Math.floor(Math.random() * consejos.length)];
    setConsejo(aleatorio);

    // Cargar productos
    const productosEjemplo = [
      { nombre: "Caja de verduras locales", descripcion: "Frescas y orgánicas.", precio: "CLP 4.500" },
      { nombre: "Pan artesanal", descripcion: "Hecho por productores locales.", precio: "CLP 2.000" },
      { nombre: "Mermelada de temporada", descripcion: "Frutas reutilizadas.", precio: "CLP 3.200" }
    ];
    setProductos(productosEjemplo);
  }, []);

  return (
    <div
      className="text-muted"
      style={{
        backgroundImage: 'url("/imagenes/login_bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
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
                <a
                  className="navbar-brand text-uppercase fw-bold d-inline-flex align-items-center h4 mb-0 text-white"
                  href="/"
                >
                  <img
                    src="/imagenes/logo.png"
                    alt="EcoFood Logo"
                    width="45"
                    height="45"
                    className="me-2"
                  />
                  EcoFood
                </a>
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
          </div>
        </nav>
      </header>

      <main className="container py-5">
        <div className="h-container bg-white rounded shadow p-4">
          <div className="h-bienvenida mb-4">
            <h3>¡Bienvenido/a, {nombreUsuario || "usuario"}!</h3>
          </div>

          <div className="h-contenido mb-4">
            <p>
              Gracias por iniciar sesión. Ahora tienes acceso a contenido exclusivo para usuarios registrados.
            </p>
            <p>
              <strong>Consejo del día:</strong> {consejo}
            </p>
          </div>

          <div className="h-productos mt-4">
            <h4 className="mb-3">Productos destacados</h4>
            <div className="row g-3">
              {productos.map((producto, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text">{producto.descripcion}</p>
                      <p className="card-text"><strong>{producto.precio}</strong></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-opciones mt-5 d-flex gap-3">
            <button className="btn btn-outline-success">Editar Perfil</button>
            <button className="btn btn-danger" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}