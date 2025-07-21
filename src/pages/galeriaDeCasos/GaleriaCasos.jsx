import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DireitoTrabalhista from "./DireitoTrabalhista.jsx";
import DireitoPrevidenciario from "./DireitoPrevidenciario.jsx";
import DireitoFamila from "./DireitoFamila.jsx";
import DireitoTributario from "./DireitoTributario.jsx";
import DireitoCriminal from "./DireitoCriminal.jsx";

const GaleriaCasos = () => {
  const [clicadoCasoJuricido, setClicadoCasoJuridico] = useState(false);

  return (
    <>
      <section className="w-full h-fit " style={{ backgroundImage: `url` }}>
        <div className="w-full h-[calc(100vh-58px)] min-h-[558px] bg-[rgba(0,0,0,0.75)] flex justify-center items-center px-[24px] md:px-[34px] lg:px-[44px]">
          <div className="text-white text-center flex flex-col gap-6">
            <h1 className="text-[40px] font-bold">Sucessos Jurídicos</h1>
            <p className="text-base">
              <i className="font-bold">
                Conheça meu histórico de atuação jurídica
              </i>
              &nbsp; em fornecer serviços excepcionais e adaptado aos clientes
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Casos jurídicos notáveis</h2>
          <p>Explore os meus projetos jurídicos bem-sucedidos.</p>
        </div>

        <article className="w-[167px] grid grid-cols-1 mx-auto gap-2 min-[420px]:grid-cols-2  min-[420px]:w-[376px]">
          <button
            className="border-0 bg-black hover:bg-gray-700 text-white font-bold p-2"
            onClick={() => setClicadoCasoJuridico(true)}
          >
            Direito Trabalhista
          </button>
          <button
            className="border-0 bg-black  hover:bg-gray-700 text-white font-bold p-2"
            onClick={() => setClicadoCasoJuridico(true)}
          >
            Direito Previdenciário
          </button>
          <button
            className="border-0 bg-black  hover:bg-gray-700 text-white font-bold p-2"
            onClick={() => setClicadoCasoJuridico(true)}
          >
            Direito da Família
          </button>
          <button
            className="border-0 bg-black  hover:bg-gray-700 text-white font-bold p-2"
            onClick={() => setClicadoCasoJuridico(true)}
          >
            Direito Tributário
          </button>
          <button
            className="border-0 bg-black  hover:bg-gray-700 text-white font-bold p-2 min-[420px]:col-span-2"
            onClick={() => setClicadoCasoJuridico(true)}
          >
            Direito Criminal
          </button>
        </article>
        {clicadoCasoJuricido ? (
          <>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/direito-trabalhista"
                  element={<DireitoTrabalhista />}
                />
                <Route
                  path="/direito-previdenciario"
                  element={<DireitoPrevidenciario />}
                />
                <Route path="/direito-familia" element={<DireitoFamila />} />
                <Route
                  path="/direito-tributario"
                  element={<DireitoTributario />}
                />
                <Route path="/direito-criminal" element={<DireitoCriminal />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </>
        ) : (
          <>
            <p>todos de uma vez misturad</p>
          </>
        )}
      </section>
    </>
  );
};

export default GaleriaCasos;
