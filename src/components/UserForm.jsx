import React, { useEffect, useState } from "react";

function UserForm({ selectedUser, setSelectedUser, guardarUsuario }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setEmail(selectedUser.email);
      setRole(selectedUser.role);
    } else {
      setEmail("");
      setRole("");
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: selectedUser?.id, // Si hay ID, se edita. Si no, se crea.
      email,
      role,
    };

    guardarUsuario(nuevoUsuario); // 👈 Aquí debe llamarse
    setEmail("");
    setRole("");
    setSelectedUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Rol</label>
        <select
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Selecciona un rol</option>
          <option value="admin">Admin</option>
          <option value="user">Usuario</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedUser ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}

export default UserForm;