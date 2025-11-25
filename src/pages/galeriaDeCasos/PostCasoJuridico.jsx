//este aqui não vou usar o mesmo componente PostBlogPage.jsx pq o layout do post de galeria de casos é diferente do layout do post de blog

import { useParams } from "react-router-dom";
import UseStrapiURL from "../../hooks/UseStrapiURL.js";
import qs from "qs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Undo2 } from "lucide-react";

import PostCasoJuridico_img1 from "../../assets/PostCasoJuridico_img1.png";
import RenderBlogContent from "../../components/blog/RenderBlogContent.jsx";

const PostCasoJuridico = () => {
  const casoData = {
    titulo: "Caso de Sucesso: Defesa em Ação Trabalhista",
    descricao:
      "Neste caso, representei um cliente acusado injustamente em uma ação trabalhista. Através de uma defesa sólida e apresentação de provas contundentes, conseguimos reverter a situação e garantir os direitos do meu cliente.",
    detalhes: [
      "Cliente: João Silva",
      "Data: 15 de Março de 2024",
      "Resultado: Absolvição total das acusações",
    ],
  };

  const { id } = useParams(); // Pega o ID da URL
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = UseStrapiURL();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        const endpoint_QUERY_URL_PARAMS = qs.stringify(
          {
            filters: {
              slug_caso_juridico: {
                $eq: id,
              },
            },
            populate: {
              imagem_capa_desse_caso_juridico: {
                fields: ["url", "alternativeText"],
              },
              conteudo_caso_juridico: {
                populate: "*",
              },
            },
          },
          { encodeValuesOnly: true },
        );

        //const path = `/api/pagina-do-blogs/${id}?${endpoint_QUERY_URL_PARAMS}`;
        const path = `/api/pagina-casos-juridicos?${endpoint_QUERY_URL_PARAMS}`;
        const url = new URL(path, BASE_URL);

        const response = await fetch(url.href);

        if (!response.ok) throw new Error("Post não encontrado");

        const json = await response.json();
        if (json.data && json.data.length > 0) {
          setPostData(json.data[0]);
        } else {
          throw new Error("Post não encontrado");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, BASE_URL]);

  //isto aqui é para aparecer o botão para voltar apenas quando o usuário der scroll para baixo
  const [showButtonBack, setShowButtonBack] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtonBack(true);
      } else {
        setShowButtonBack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl font-bold">Carregando caso jurídico...</p>
      </div>
    );
  }

  if (error || !postData) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-4xl font-bold text-red-500">
          Infelizmente aconteceu um erro, e o caso jurídico não foi encontrado
        </p>
        <Link to="/blogs" className="underline">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  const {
    titulo_caso_juridico,
    resumo_desse_caso_juridico_no_max_13_palavras,
    conteudo_caso_juridico,
    imagem_capa_desse_caso_juridico,
    tag_categoria_deste_caso_juridico,
    createdAt,
  } = postData;

  return (
    <>
      <div
        className="h-fit w-full bg-gradient-to-b from-[#f5f5f5] to-[#fefefe]"
        style={{ marginTop: "-58px" }}
      >
        <nav
          className={`fixed top-[70px] left-6 z-50 rounded-[3px] bg-[rgb(245,245,245)] p-2 shadow-2xl transition-all duration-500 ease-out ${
            showButtonBack
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-24 opacity-0"
          } `}
        >
          <Link
            to="/galerias"
            className="flex items-center justify-center text-gray-800 hover:text-black"
            title="Voltar para galeria"
          >
            <Undo2 size={26} strokeWidth={2.5} />
          </Link>
        </nav>
        {/*
        <div
          style={{
            backgroundImage: `url(${PostCasoJuridico_img1})`,
          }}
          className="z-8 h-[80vh] w-full bg-cover bg-center"
        >
          <section
            id="section1"
            className="z-9 flex h-[80vh] w-full flex-col items-center bg-black px-[24px] text-center md:px-[34px] lg:px-[44px]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="z-10 mt-56 text-2xl text-white">
              <h6 className="m-0">
                Caso Jurídico {`: ${tag_categoria_deste_caso_juridico}`}
              </h6>
              <h6>
                {`Publicado em ${new Date(createdAt).toLocaleDateString(
                  "pt-BR",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  },
                )}`}
              </h6>
            </div>
          </section>
        </div>

        
        <section
          id="section1"
          style={{
            backgroundImage: `url(${UseStrapiURL()}${imagem_capa_caso_juridico})`,
          }}
          className="h-fit w-full bg-cover bg-center"
        ></section>
        *
        <section className="px-[24px] text-center md:px-[34px] lg:px-[44px]">
          {titulo_caso_juridico && (
            <h1 className="mt-10 text-4xl font-bold">{titulo_caso_juridico}</h1>
          )}
        </section>
*/}
        {}
        {imagem_capa_desse_caso_juridico && (
          <>
            <div
              id="section1"
              className="h-screen w-full overflow-hidden bg-cover bg-center transition-all duration-700 hover:scale-80"
              style={{
                backgroundImage: `url(${UseStrapiURL()}${imagem_capa_desse_caso_juridico.url})`,
              }}
            >
              <div className="h-full w-full bg-black/80 px-[24px] text-center md:px-[34px] lg:px-[44px]">
                {/*console.log(
                "PostCasoJuridico - imagem_capa_caso_juridico:",
                imagem_capa_desse_caso_juridico,
                "url:",
                imagem_capa_desse_caso_juridico?.url,
                "--------",
                `${UseStrapiURL()}${imagem_capa_desse_caso_juridico?.url})`,
              )*/}
                {/* Overlay escuro opcional */}

                {/* Conteúdo com padding seguro */}
                <div className="relative top-14 z-10 flex h-full flex-col items-center justify-evenly pb-20 sm:top-10">
                  <div className="flex flex-col gap-0 text-2xl font-bold">
                    <h4 className="m-auto mt-0 text-white drop-shadow-lg">
                      Caso Jurídico {`: ${tag_categoria_deste_caso_juridico}`}
                    </h4>
                    <h4 className="m-auto mt-0 text-white drop-shadow-lg">
                      {`Publicado em ${new Date(createdAt).toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        },
                      )}`}
                    </h4>
                  </div>
                  <div className="w-full px-[24px] md:px-[34px] lg:px-[44px]">
                    <h1 className="text-2xl font-bold text-white drop-shadow-lg md:text-6xl">
                      {titulo_caso_juridico}
                    </h1>
                    {resumo_desse_caso_juridico_no_max_13_palavras && (
                      <p className="mt-4 text-xl text-white/90">
                        {resumo_desse_caso_juridico_no_max_13_palavras}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <main>
          {/* Aqui vai o conteúdo do caso jurídico */}
          <div className="mx-auto my-10 max-w-[700px] px-[24px] pb-20 md:px-[34px] lg:px-[44px]">
            <RenderBlogContent
              content={conteudo_caso_juridico}
              flag="Casos_juridicos"
            />
            {
              console.log(
                "PostCasoJuridico - conteudo_caso_juridico: \n",
                conteudo_caso_juridico,
                "\n--------conteudo_caso_juridico[0]\n",
                conteudo_caso_juridico[0],
                "\n[[[[[[[[[[conteudo_caso_juridico[0].conteudo_blog \n",
                conteudo_caso_juridico[0].conteudo_blog,
              ) /*apenas para debug*/
            }
          </div>
        </main>
      </div>
    </>
  );
};

export default PostCasoJuridico;
