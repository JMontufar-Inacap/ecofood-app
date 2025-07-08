import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductoModal from "./ProductoModal";

const productosIniciales = [
  {
    id: "1",
    nombre: "Manzanas",
    descripcion: "Fruta fresca de temporada",
    vencimiento: "2025-07-15",
    cantidad: 20,
    precio: 0,
    estado: "Disponible"
  },
  {
    id: "2",
    nombre: "Leche",
    descripcion: "Entera, 1 litro",
    vencimiento: "2025-07-10",
    cantidad: 10,
    precio: 900,
    estado: "Disponible"
  },
];

function ProductosDashboard() {
  const [productos, setProductos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const obtenerProductos = () => {
    const guardados = localStorage.getItem("productos");
    if (guardados) {
      setProductos(JSON.parse(guardados));
    } else {
      localStorage.setItem("productos", JSON.stringify(productosIniciales));
      setProductos(productosIniciales);
    }
  };

  const guardarProductos = (nuevaLista) => {
    setProductos(nuevaLista);
    localStorage.setItem("productos", JSON.stringify(nuevaLista));
  };

  const crearProducto = (producto) => {
    const nuevo = { ...producto, id: Date.now().toString() };
    const actualizados = [...productos, nuevo];
    guardarProductos(actualizados);
  };

  const actualizarProducto = (producto) => {
    const actualizados = productos.map((p) => (p.id === producto.id ? producto : p));
    guardarProductos(actualizados);
  };

  const eliminarProducto = async (id) => {
    const confirmar = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });
    if (confirmar.isConfirmed) {
      const filtrados = productos.filter((p) => p.id !== id);
      guardarProductos(filtrados);
      Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
    }
  };

  const abrirModal = (producto = null) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Lista de Productos</h2>
        <button className="btn btn-primary" onClick={() => abrirModal()}>+ Nuevo Producto</button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Vencimiento</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            const diasRestantes =
              (new Date(producto.vencimiento) - new Date()) / (1000 * 60 * 60 * 24);
            const advertencia = diasRestantes <= 3;
            return (
              <tr key={producto.id} className={advertencia ? "table-warning" : ""}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.vencimiento}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio === 0 ? "Gratuito" : `$${producto.precio}`}</td>
                <td>{producto.estado}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => abrirModal(producto)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modalVisible && (
        <ProductoModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={productoSeleccionado ? actualizarProducto : crearProducto}
          producto={productoSeleccionado}
        />
      )}
    </div>
  );
}

export default ProductosDashboard;