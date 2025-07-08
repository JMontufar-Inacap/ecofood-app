import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import ProductosDashboard from "../components/ProductosDashboard";
import Swal from "sweetalert2";
import { Container, Nav } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const usuariosIniciales = [
  { id: "1", email: "admin@ecofood.cl", role: "admin" },
  { id: "2", email: "juan@example.com", role: "user" },
  { id: "3", email: "maria@example.com", role: "user" },
  { id: "4", email: "luis@example.com", role: "user" },
  { id: "5", email: "ana@example.com", role: "user" },
];

function AdminDashboard() {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tab, setTab] = useState("usuarios");

  const navigate = useNavigate();

  const obtenerUsuarios = () => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {
      setUsuarios(JSON.parse(usuariosGuardados));
    } else {
      setUsuarios(usuariosIniciales);
      localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    }
  };

   const guardarUsuarios = (lista) => {
    localStorage.setItem("usuarios", JSON.stringify(lista));
    setUsuarios(lista);
  };

  const eliminarUsuario = async (id, correo) => {
    if (correo === "admin@ecofood.cl") {
      Swal.fire("Error", "No puedes eliminar al administrador principal.", "error");
      return;
    }

    const confirmar = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (confirmar.isConfirmed) {
      const listaFiltrada = usuarios.filter((user) => user.id !== id);
      guardarUsuarios(listaFiltrada);
      Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
    }
  };

  const guardarUsuario = (usuario) => {
  if (usuario.id) {
    // Editar usuario
    const listaEditada = usuarios.map((u) => (u.id === usuario.id ? usuario : u));
    guardarUsuarios(listaEditada);
  } else {
    // Agregar usuario nuevo
    const nuevoUsuario = { ...usuario, id: Date.now().toString() };
    guardarUsuarios([...usuarios, nuevoUsuario]);
  }
  setSelectedUser(null);
};

  
  const cerrarSesion = async () => {
    await signOut(auth);
    Swal.fire("Sesión cerrada", "Hasta pronto", "success");
    navigate("/login");
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header similar al de Home */}
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
              <span className="fw-bold text-uppercase">EcoFood - Admin</span>
            </a>
            <button onClick={cerrarSesion} className="btn btn-danger">
              Cerrar sesión
            </button>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <Container className="py-4">
        <h2 className="text-center mb-4">Panel de Administración</h2>

        <Nav variant="tabs" activeKey={tab} onSelect={(selected) => setTab(selected)}>
          <Nav.Item>
            <Nav.Link eventKey="usuarios">Usuarios</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="mt-4">
          {tab === "usuarios" && (
            <>
              <UserForm
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                guardarUsuario={guardarUsuario}
              />
              <UserList
                usuarios={usuarios}
                eliminarUsuario={eliminarUsuario}
                setSelectedUser={setSelectedUser}
              />
            </>
          )}

          {tab === "productos" && <ProductosDashboard />}
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default AdminDashboard;