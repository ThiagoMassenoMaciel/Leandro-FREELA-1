import sobre2 from "../../assets/sobre2.png";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Load_data_to_webpage } from "../../hooks/Load_data_to_webpage";
import UseStrapiURL from "../../hooks/UseStrapiURL.js";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";

import RenderBlogContent from "../../components/blog/RenderBlogContent.jsx";
import { Undo2 } from "lucide-react";
import { Share2 } from "lucide-react";

import ScrollToTop from "../../components/ScrollToTop.jsx";
import CALCULARtempoDeLeituraDesteBLOG from "../../../testesFUNCOES/CalcTIME.jsx";

import "./postBlogPage.css";

const PostBlogPage = () => {
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
              slug_do_blog: {
                $eq: id,
              },
            },
            populate: {
              imagem_capa_blog: {
                fields: ["url", "alternativeText"],
              },
              conteudo_blog: {
                populate: "*",
              },
            },
          },
          { encodeValuesOnly: true },
        );

        //const path = `/api/pagina-do-blogs/${id}?${endpoint_QUERY_URL_PARAMS}`;
        const path = `/api/pagina-do-blogs?${endpoint_QUERY_URL_PARAMS}`;
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
        <p className="text-xl">Carregando post...</p>
      </div>
    );
  }

  if (error || !postData) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-xl text-red-500">Post não encontrado</p>
        <Link to="/blogs" className="underline">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  const {
    titulo_do_blog,
    resumo_do_assunto_do_blog,
    conteudo_blog,
    imagem_capa_blog,
    autor_escreveu_blog,
    tipo_assunto_do_blog,
    createdAt,
  } = postData;

  return (
    <>
      {/*console.log("PostBlogPage - conteudo_blog:", conteudo_blog)*/}
      <ScrollToTop />
      {/*
      <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] px-[24px] py-10 md:px-[34px] lg:px-[44px]">
        <section id="section1">
          <div className="mt-28">
            <h6 className="m-0">Blog</h6>
            <p className="m-2 inline h-fit w-fit bg-gray-500">
              {tipo_assunto_do_blog}
            </p>
          </div>

          <div>
            <h1 className="m-0">{titulo_do_blog}</h1>
            <div className="mt-8 flex items-center justify-between">
              <img
                src={`url(${BASE_URL}${imagem_capa_blog.url})`}
                className="h-[60px] w-[60px] rounded-full"
                alt="foto do autor que escreveu o blog"
              />
              <div>
                <p className="m-0 font-bold">{autor_escreveu_blog}</p>
              </div>
            </div>
          </div>
        </section>
        <main>
          {conteudo_blog.map((block, index) => {
            switch (block.type) {
              case "heading":
                return <h2 key={index}>{block.content}</h2>;
              case "paragraph":
                return <p key={index}>{block.content}</p>;
              case "image":
                return <img key={index} src={block.src} alt={block.alt} />;
              default:
                return null;
            }
          })}
        </main>
      </div>
    //-------------------------------------------------------------
    */}

      <article className="w-full bg-white">
        {/* Breadcrumb */}

        <nav
          className={`fixed top-[70px] left-6 z-50 rounded-[3px] bg-[rgb(245,245,245)] p-2 shadow-2xl transition-all duration-500 ease-out ${
            showButtonBack
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-24 opacity-0"
          } `}
        >
          <Link
            to="/blogs"
            className="flex items-center justify-center text-gray-800 hover:text-black"
            title="Voltar para galeria"
          >
            <Undo2 size={26} strokeWidth={2.5} />
          </Link>
        </nav>
        {/* Cabeçalho do Post */}
        <header className="mx-auto mt-10 max-w-[900px] px-[24px] md:px-[34px] lg:px-0">
          <span className="mb-4 inline-block font-semibold text-black uppercase">
            {tipo_assunto_do_blog || "Artigo"}
          </span>

          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {titulo_do_blog}
          </h1>

          <p className="mb-6 text-xl text-gray-700">
            {resumo_do_assunto_do_blog}
          </p>

          <div className="mb-10 text-gray-600">
            <section
              id="descricao_metadado_blog"
              className="m-fit flex flex-col items-center justify-items-start"
            >
              <div id="primeira_frase_metadato_blog">
                <span className="w-[200px]">
                  Escrito por {autor_escreveu_blog || "Leandro Viana"}
                </span>
                <span>&nbsp;•&nbsp; &nbsp;</span>
                <p id="paragrafo_metadado_blog" className="">
                  {new Date(createdAt).toLocaleDateString("pt-BR")}
                </p>
              </div>

              <span className="w-fit text-center">
                {`${CALCULARtempoDeLeituraDesteBLOG(conteudo_blog)} min de leitura`}
                &nbsp;&nbsp;
                <Share2 className="inline-block" size={`20px`} />
              </span>
            </section>
          </div>
        </header>

        {/* Imagem de Capa */}
        {imagem_capa_blog?.url && (
          <div className="h-[250px] w-full overflow-clip sm:h-[350px] md:h-[500px]">
            <img
              src={`${BASE_URL}${imagem_capa_blog.url}`}
              alt={imagem_capa_blog.alternativeText || titulo_do_blog}
              className="h-[400px] w-full object-cover transition-all duration-700 hover:scale-120 md:h-[500px] lg:h-[600px]"
            />
          </div>
        )}

        {/* Conteúdo do Post */}
        <main className="flex w-full flex-row-reverse justify-between">
          <section className="sticky top-17 mt-20 hidden h-fit w-[34%] border-l-4 border-black bg-gradient-to-l from-white to-gray-50 p-4 hover:shadow-lg md:flex md:flex-col md:gap-2.5">
            <h2 className="text-3xl font-bold">Sumário</h2>
            <ul className="flex flex-col gap-1">
              {conteudo_blog &&
                conteudo_blog.map((block, index) => {
                  //
                  // Se o objeto for um cabeçalho exibir em uma lista do aside do site
                  if (block.__component === "elementos.bloco-blog-cabecalho") {
                    return (
                      <li className="no-underline">
                        <a
                          href={`#${block.link_id}`}
                          className="h-fit w-full px-3 py-1 font-bold text-black no-underline hover:bg-white lg:block"
                        >
                          {block.Texto_Cabecalho}
                        </a>
                      </li>
                    );
                  }
                  return null;
                })}
            </ul>
          </section>

          <div className="mx-auto my-0 w-[90%] px-[24px] py-5 sm:w-[90%] md:w-[50%] md:px-[34px] lg:px-0">
            <RenderBlogContent flag="blog" content={conteudo_blog} />
          </div>
        </main>

        {/* Call to Action */}
        <section className="bg-gray-100 px-[24px] py-16 md:px-[34px] lg:px-[44px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Precisa de orientação jurídica?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Entre em contato para uma consultoria especializada
            </p>
            <button className="bg-black px-8 py-4 text-white transition hover:bg-gray-900">
              Agendar Consultoria
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default PostBlogPage;
