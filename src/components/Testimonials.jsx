import React from 'react';

function Testimonials() {
  const testimonios = [
    {
      mensaje: '“Sus recursos educativos y programas comunitarios están marcando una verdadera diferencia.”',
      nombre: 'Javier Morales',
      rol: 'Profesor de ciencias',
      img: 'javier.png',
    },
    {
      mensaje: '“Me encanta cómo EcoFood conecta a agricultores locales con diversos consumidores.”',
      nombre: 'Manuel Varela',
      rol: 'Ingeniero Agrónomo',
      img: 'manuel.png',
    },
    {
      mensaje: '“Gracias a EcoFood, he aprendido a comprar y cocinar de forma más responsable.”',
      nombre: 'Camila Fernández',
      rol: 'Chef y Activista Ambiental',
      img: 'camila.png',
    },
  ];

  return (
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="title-container">
        <h2 className="fw-bold" style={{ color: '#377D22' }}>Comentarios</h2>
      </div>
      <div className="testimonios-container">
        {testimonios.map(({ mensaje, nombre, rol, img }, i) => (
          <div key={i} className="testimonio-card">
            <p className="mensaje">{mensaje}</p>
            <div className="persona">
              <img src={`/imagenes/${img}`} alt={nombre} />
              <div>
                <p className="nombre">{nombre}</p>
                <p className="rol">{rol}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <a href="/comentarios.html" className="fw-bold text-ecofood">Ver más comentarios</a>
      </div>
    </section>
  );
}

export default Testimonials;