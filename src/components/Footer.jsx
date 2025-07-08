import React from "react";

function Footer() {
  return (
    <footer className="bg-dark pt-5 text-white-50">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-md">
            <a
              className="d-inline-flex align-items-center fw-bold h2 lh-1 link-light mb-0 text-decoration-none text-uppercase"
              href="/"
            >
              <img
                src="/imagenes/logo.png"
                alt="EcoFood Logo"
                width="45"
                height="45"
                className="me-1"
              />
              <span>EcoFood</span>
            </a>
          </div>

          <div className="col-md-auto">
            <div className="d-inline-flex flex-wrap gap-2">
              {/* redes sociales */}
              {/* Cada icono SVG se conserva igual */}
              {/* Puedes cambiar href="#" por enlaces reales */}
              {/* Ejemplo con Instagram */}
              <a href="#" className="btn btn-ecofood lh-1 p-2" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2c2.717 0 ...etc" />
                </svg>
              </a>
              {/* Agrega aquí los demás iconos igual que el anterior */}
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-lg-4 py-3">
            <h2 className="fw-bold h5 mb-4 text-ecofood">Enlaces Directos</h2>
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="#quienes-somos" className="link-light text-decoration-none">Sobre nosotros</a>
                  </li>
                  <li className="mb-3">
                    <a href="#mision-vision" className="link-light text-decoration-none">Misión</a>
                  </li>
                  <li className="mb-3">
                    <a href="#mision-vision" className="link-light text-decoration-none">Visión</a>
                  </li>
                  <li className="mb-3">
                    <a href="#datos" className="link-light text-decoration-none">¿Cómo ayudar?</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/faq.html" className="link-light text-decoration-none">Preguntas frecuentes</a>
                  </li>
                  <li className="mb-3">
                    <a href="/comentarios.html" className="link-light text-decoration-none">Comentarios</a>
                  </li>
                  <li className="mb-3">
                    <a href="/contacto.html" className="link-light text-decoration-none">Contáctanos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-3"></div>

          <div className="col-lg-4 py-3">
            <h2 className="fw-bold h5 mb-4 text-ecofood">Boletín</h2>
            <p className="mb-3">Suscríbete a nuestro boletín para que recibas nuevas noticias a tu email.</p>
            <form className="mb-4">
              <div className="input-group border bg-white p-1 overflow-hidden rounded">
                <input
                  type="email"
                  className="form-control border-0 ps-3 pe-3"
                  placeholder="Ingresa email..."
                  required
                  aria-label="Email del destinatario"
                  aria-describedby="button-addon2"
                />
                <button
                  type="submit"
                  className="btn btn-ecofood pt-2 pb-2 ps-4 pe-4 rounded"
                  id="button-addon2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16">
                    <path d="M1.946 9.315c...etc" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="small pt-3 pb-3">
          <hr className="mt-0" />
          <div className="row align-items-center">
            <div className="col-md py-2">
              <p className="mb-0">&copy; 2025. Todos los derechos reservados - EcoFood</p>
            </div>
            <div className="col-md-auto py-2">
              <a href="#" className="link-light text-decoration-none">Política de Privacidad</a> |{" "}
              <a href="#" className="link-light text-decoration-none">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;