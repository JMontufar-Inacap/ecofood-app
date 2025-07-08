import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/admin">
        Panel Admin
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Inicio</Link>
          </li>
        </ul>
        <span className="navbar-text text-white">
          Administrador
        </span>
      </div>
    </nav>
  );
}

export default AdminNavbar;