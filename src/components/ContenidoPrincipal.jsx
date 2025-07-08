import React from "react";

function ContenidoPrincipal() {
  return (
    <main>
      {/* Sección Poster */}
      <section className="bg-light pb-5 position-relative poster pt-5">
        <div className="container mb-5 mt-5 pb-5 pt-5">
          <div className="row align-items-center mb-5 mt-5 pb-5 pt-5">
            <div className="col-md-10 col-xl-7">
              <h1 className="display-4 fw-bold text-white">
                <span className="d-block fw-normal">Cuida al planeta con</span>
                EcoFood
              </h1>
              <p className="mb-4 pe-sm-5 text-white">
                Ayúdanos en nuestra misión para reducir los residuos alimentarios, conectar con productos de tu comunidad y hacer del mundo un lugar más verde y sustentable.
              </p>
              <a href="#" className="btn btn-dark pe-4 ps-4">¿Cómo ayudar?</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Quiénes somos? */}
      <section id="quienes-somos" className="pb-5 pt-5 text-center">
        <div className="container pb-5 pt-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8 col-md-10 col-xl-7 me-auto ms-auto">
              <h2 className="h5 mb-1" style={{ color: "#377D22" }}>¿Quiénes somos?</h2>
              <h3 id="fraseQuienesSomos" className="fw-bold h1 text-dark">
                La primera organización comprometida con la reducción del desperdicio alimentario
              </h3>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-11 col-xl-9 me-auto ms-auto">
              <div className="row gx-3 gy-5">
                {/* Cards */}
                <div className="col-md-4">
                  <div>
                    <h2 className="display-3 fw-bold" style={{ color: "#377D22" }}>+15</h2>
                    <h3 className="fs-6 mb-0">Más de 15 años promoviendo un mundo más justo, sostenible y optimizando el uso de alimentos.</h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h2 className="display-3 fw-bold" style={{ color: "#377D22" }}>+180</h2>
                    <h3 className="fs-6 mb-0">Más de 180 iniciativas educativas, tecnológicas y prácticas cotidianas para generar conciencia.</h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h2 className="display-3 fw-bold" style={{ color: "#377D22" }}>+70</h2>
                    <h3 className="fs-6 mb-0">Equipo con más de 70 expertos en medio ambiente, tecnología y desarrollo comunitario</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-2 pt-2">
        <div className="col-lg-7 mx-lg-auto">
          <hr className="mb-0 mt-0" />
        </div>
      </div>

      {/* Misión y Visión */}
      <section id="mision-vision" className="pt-5 pb-5 text-center">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h2 className="fw-bold" style={{ color: "#377D22" }}>Misión</h2>
              <p>Sensibilizar y movilizar a las comunidades locales y globales sobre la importancia de reducir el desperdicio de alimentos, brindando herramientas prácticas, educativas y tecnológicas que permitan a las personas adoptar hábitos sostenibles y responsables para mejorar la seguridad alimentaria y proteger el medio ambiente.</p>
            </div>
            <div className="col-md-6">
              <img src="/imagenes/mision.png" alt="Misión EcoFood" className="img-fluid rounded shadow" style={{ maxHeight: "250px" }} />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/imagenes/vision.jpg" alt="Visión EcoFood" className="img-fluid rounded shadow" style={{ maxHeight: "250px" }} />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold" style={{ color: "#377D22" }}>Visión</h2>
              <p>Tener un mundo en el cual los alimentos se valoren y aprovechen responsablemente, en donde la seguridad alimentaria esté garantizada para todos y el desperdicio alimentario sea mínimo, generando un impacto positivo significativo en el medio ambiente, la economía y la sociedad.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-2 pt-2">
        <div className="col-lg-7 mx-lg-auto">
          <hr className="mb-0 mt-0" />
        </div>
      </div>

      {/* Datos */}
      <section id="datos" className="pb-5 pt-5">
        <div className="container pb-5 pt-5">
          <div className="row row-cols-lg-3 row-cols-sm-2 gy-4 justify-content-center">
            {/* Cada dato va aquí como columna */}
            {/* Repite las tarjetas con tus imágenes desde /public/imagenes */}
          </div>
        </div>
      </section>

      {/* Comentarios */}
      <section className="bg-light pb-5 pt-5 text-center">
        <div className="title-container">
          <h2 className="fw-bold" style={{ color: "#377D22" }}>Comentarios</h2>
        </div>
        <div className="testimonios-container">
          {/* Tarjetas de testimonio */}
        </div>
        <div className="mt-5 text-center">
          <a href="comentarios.html" className="fw-bold text-ecofood">Ver más comentarios</a>
        </div>
      </section>
    </main>
  );
}

export default ContenidoPrincipal;