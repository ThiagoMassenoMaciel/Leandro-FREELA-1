import galeria1 from "../../assets/galeriaCasos1.png";
import { useEffect, useState, React, useRef } from "react";

import UseStrapiURL from "../../hooks/UseStrapiURL.js";
import { GetDataCasosJuridicos } from "../../hooks/GetDataCasosJuridicos.js";
import CALCULARtempoDeLeituraDesteBLOG from "../../../testesFUNCOES/CalcTIME.jsx";
import BlogMiniatura from "../blog/BlogMiniatura.jsx";

/*
const Bloco = ({ texto, height }) => {
  return (
    <>
      <article className={`h-fit w-[300px] bg-red-500`}>
        <img className={` h-[${height}] w-full`} src={galeria1} alt="imagem" />
        <h1 className="text-4xl">{texto}</h1>
      </article>
    </>
  );
};
const Bloco1 = ({ texto, height }) => {
  let classHeight = `h-[${height}]`;
  console.log(classHeight);
  return (
    <>
      <article className={`h-fit bg-red-500`}>
        <img
          style={{ height: classHeight }}
          className={`block w-full object-cover`}
          src={galeria1}
          alt="imagem"
        />
        <h1 className="text-4xl">{texto}</h1>
      </article>
    </>
  );
};

let array = [
  "blocko um",
  "blocko dois",
  "blocko tres",
  "blocko quatro",
  "blocko cinco",
  "blocko seis",
  "blocko set",
  "blocko oito",
  "blocko nove",
  "blocko dez",
  "blocko onze",
  "blocko doze",
  "blocko treze",
  "blocko quatorse",
  "blocko quinze",
];

function retornarCOLUNA1() {
  return (
    <>
      {array.map((i, key) => {
        let hei = key % 2 == 0 ? `400px` : `200px`;
        console.log(hei);
        return <Bloco1 key={key} texto={i} height={hei} />;
      })}
    </>
  );
}
*/

let tags_CATEGORIAS_casos_juridicos = [
  "Direito da Família",
  "Direito Criminal",
  "Direito previdenciário",
  "Direito Trabalhista",
  "Direito Tributário",
];
const GaleriaCasos = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const { blogData, loading, error } = GetDataCasosJuridicos();
  const BASE_URL = UseStrapiURL();

  const [tagSelecionada, setTagSelecionada] = useState(`a`);
  const [casos_juridicos_Filtrados, setCasos_juridicos_Filtrados] = useState(
    [],
  );

  useEffect(() => {
    if (!loading && blogData && Array.isArray(blogData)) {
      if (tagSelecionada === `a`) {
        // "Ver Todos" selecionado
        setCasos_juridicos_Filtrados(blogData);
      } else {
        const tagNome = tags_CATEGORIAS_casos_juridicos[tagSelecionada];
        const casosJuridicosFiltradosPorTag = blogData.filter(
          (blog) => blog.tag_categoria_deste_caso_juridico === tagNome,
        );
        setCasos_juridicos_Filtrados(casosJuridicosFiltradosPorTag);
      }
    }
  }, [loading, tagSelecionada, blogData]);

  function SelecionarOutraTag(id) {
    setTagSelecionada(id);
  }

  return (
    <>
      {/* SECTION 1 */}
      <section
        className="h-fit w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${galeria1})` }}
      >
        <div className="flex h-[calc(100vh-58px)] min-h-[558px] w-full flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.75)] px-[24px] md:px-[34px] lg:px-[44px]">
          <div className="flex flex-col gap-6 text-center text-white">
            <h1 className="text-[40px] font-bold">Sucessos Jurídicos</h1>
            <p className="text-base">
              <i className="font-bold">
                Conheça meu histórico de atuação jurídica
              </i>
              &nbsp; em fornecer serviços excepcionais e adaptado aos clientes
            </p>
          </div>
          <div className="mx-auto grid w-[190px] grid-cols-1 gap-2 text-black min-[420px]:w-[376px] min-[420px]:grid-cols-2 md:w-[600px] md:grid-cols-3 md:gap-4">
            <button
              className="border-0 bg-white p-2 font-bold hover:bg-gray-700"
              onClick={scrollToNextSection}
            >
              Serviços jurídicos
            </button>
            <button
              className="border-0 bg-white p-2 font-bold hover:bg-gray-700"
              onClick={scrollToNextSection}
            >
              Foco no cliente
            </button>

            <button
              className="border-0 bg-white p-2 font-bold hover:bg-gray-700 min-[420px]:col-span-2 md:col-span-1"
              onClick={scrollToNextSection}
            >
              Consultor de confiança
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="flex flex-col items-center justify-center gap-6 px-[24px] pt-16 pb-4 md:px-[34px] lg:px-[44px]"
        ref={nextSectionRef}
      >
        <div className="text-center">
          <h2 className="text-[43px] font-bold">Casos jurídicos notáveis</h2>
          <p className="text-[18px]">
            Explore os meus projetos jurídicos bem-sucedidos.
          </p>
        </div>
        <article></article>
      </section>

      {/* SECTION 3 */}

      {/*
      <section className={`bg-black ${valor}`}>
        <div className="bg-red-950 p-20">{array.map((i) => i)}</div>
      </section>
*/}

      <section
        id="section3"
        className="mp-[36px] m-0 w-full px-[24px] pt-0 pb-0 text-center sm:text-start md:px-[34px] lg:px-[44px]"
      >
        {/* categorias do blog */}
        <button
          key={`a`}
          className={`m-2 ${tagSelecionada === `a` ? `border border-black bg-white` : `bg-transparent`} px-4 py-2 text-sm font-bold text-black hover:bg-gray-400`}
          onClick={() => SelecionarOutraTag(`a`)}
        >
          Ver Todos
        </button>
        {tags_CATEGORIAS_casos_juridicos.map((tag, index) => (
          <a className="no-underline" href="#main">
            <button
              key={index}
              className={`m-2 ${tagSelecionada === index ? `border border-black bg-white` : `bg-transparent`} mx-auto px-4 py-2 text-sm font-bold text-black hover:bg-gray-400`}
              onClick={() => SelecionarOutraTag(index)}
            >
              {tag}
            </button>
          </a>
        ))}
      </section>

      <main className="bg-white px-[24px] pt-10 md:px-[34px] lg:px-[44px]">
        {/*<div className="grid grid-cols-1 justify-center gap-2.5 bg-red-950 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {retornarCOLUNA1()
        </div>
        
        {console.log(
          "ARRAY -> casos_juridicos_Filtrados",
          !loading
            ? casos_juridicos_Filtrados.map(
                (caso, index) => caso.titulo_caso_juridico,
              )
            : "carregando...",
        )}
            */}
        {console.log(
          "ARRAY -> casos_juridicos_Filtrados",
          !loading ? casos_juridicos_Filtrados : "carregando...",
        )}
        <div
          id="main"
          className="my-10 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {!loading &&
            casos_juridicos_Filtrados &&
            casos_juridicos_Filtrados.map((caso, index) => (
              <BlogMiniatura
                key={index}
                tipoBlog={caso.tag_categoria_deste_caso_juridico}
                resumo_blog={caso.resumo_desse_caso_juridico_no_max_13_palavras}
                url_img_capa_blog={
                  caso.imagem_capa_desse_caso_juridico?.url
                    ? `${caso.imagem_capa_desse_caso_juridico?.url}`
                    : null
                }
                array_calc_tempo_leitura_blog={
                  !loading
                    ? CALCULARtempoDeLeituraDesteBLOG(
                        caso.conteudo_caso_juridico,
                      )
                    : 1
                }
                slug={caso.slug_caso_juridico}
                tipo_blog={caso.tag_categoria_deste_caso_juridico}
                linkToBlog={`/galeria/${caso.slug_caso_juridico}`}
                titulo_blog={caso.titulo_caso_juridico}
              />
            ))}
          {loading && (
            <p className="text-4xl font-bold">Carregando casos jurídicos...</p>
          )}
          {error && (
            <p className="text-4xl font-bold text-red-500">
              Infelizmente aconteceu um erro e não foi possível carregar os
              casos jurídicos: {error}
            </p>
          )}
        </div>
      </main>
      {/* SECTION 3 */}
      {/* SECTION 3 */}
      {/* SECTION 3 */}
    </>
  );
};

export default GaleriaCasos;
