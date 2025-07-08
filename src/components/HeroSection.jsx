import React from 'react';

function HeroSection() {
  return (
    <section className="bg-light pb-5 position-relative poster pt-5">
      <div className="container mb-5 mt-5 pb-5 pt-5">
        <div className="row align-items-center mb-5 mt-5 pb-5 pt-5">
          <div className="col-md-10 col-xl-7">
            <h1 className="display-4 fw-bold text-white">
              <span className="d-block fw-normal">Cuida al planeta con</span>EcoFood
            </h1>
            <p className="mb-4 pe-sm-5 text-white">
              Ayúdanos en nuestra misión para reducir los residuos alimentarios, conectar con productos de tu comunidad y hacer del mundo un lugar más verde y sustentable.
            </p>
            <a href="#" className="btn btn-dark pe-4 ps-4">¿Cómo ayudar?</a>
          </div>
        </div>
      </div>
    </section>
  );
}
