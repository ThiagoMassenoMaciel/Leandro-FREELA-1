import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog1.png";

import icon_lerMAIS from "../../assets/icon_lerMAIS.svg";
import BlogMiniatura from "./BlogMiniatura";

import { GetDataBlog } from "../../hooks/GetDataBlog.js";
import UseStrapiURL from "../../hooks/UseStrapiURL.js";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import CalcTIME from "../../../testesFUNCOES/CalcTIME.jsx";
import CALCULARtempoDeLeituraDesteBLOG from "../../../testesFUNCOES/CalcTIME.jsx";

//----------------- ATIVIDADES
/*
------- 1 ------ Pegar todo o que for apenas texto e colocar organizado em uma string gigante para depois fazer o cálculo do tempo de leitura


*/

const Blogs = () => {
  let categoriaBLOG = "Dicas Jurídicas";
  let textoBLOG =
    "eu quero usar este texto para calcular o tempo de leitura deste blog post e ver como fica exibido na página do blog para o usuário final do meu site jurídico feito em React com Strapi como CMS headless para gerenciar o conteúdo do blog e outras páginas do site. Assim, poderei oferecer uma melhor experiência de leitura para os visitantes do meu site, ajudando-os a planejar seu tempo de leitura de acordo com suas necessidades e disponibilidade. Além disso, isso pode aumentar o engajamento dos leitores com o conteúdo que estou oferecendo. Vou continuar escrevendo mais algumas palavras para garantir que o cálculo do tempo de leitura seja mais preciso e reflita melhor a quantidade de conteúdo que estou disponibilizando neste artigo do meu blog jurídico. Espero que isso ajude meus leitores a aproveitar ao máximo o conteúdo que estou compartilhando com eles. Obrigado por ler até aqui!eu quero usar este texto para calcular o tempo de leitura deste blog post e ver como fica exibido na página do blog para o usuário final do meu site jurídico feito em React com Strapi como CMS headless para gerenciar o conteúdo do blog e outras páginas do site. Assim, poderei oferecer uma melhor experiência de leitura para os visitantes do meu site, ajudando-os a planejar seu tempo de leitura de acordo com suas necessidades e disponibilidade. Além disso, isso pode aumentar o engajamento dos leitores com o conteúdo que estou oferecendo. Vou continuar escrevendo mais algumas palavras para garantir que o cálculo do tempo de leitura seja mais preciso e reflita melhor a quantidade de conteúdo que estou disponibilizando neste artigo do meu blog jurídico. Espero que isso ajude meus leitores a aproveitar ao máximo o conteúdo que estou compartilhando com eles. Obrigado por ler até aqui!";
  let tempoDeLeituraDesteBLOG = CALCULARtempoDeLeituraDesteBLOG(textoBLOG);
  let tituloBLOG = "Como proteger seus direitos legais";
  let resumoBLOG =
    "Neste artigo, exploramos as melhores práticas para garantir que seus direitos sejam respeitados e protegidos em diversas situações legais.";
  /*
  function CALCULARtempoDeLeituraDesteBLOG(text) {
    const wordsPerMinute = 150; // Média de palavras por minuto
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  }
*/
  let tags_CATEGORIAS_blog = [
    "Ver Todos",
    "Dicas Jurídicas",
    "Estudos de Caso",
    "Histórias de Clientes",
    "Notícias Jurídicas",
  ];

  const { blogData, loading, error } = GetDataBlog();
  const BASE_URL = UseStrapiURL();

  // Função para calcular tempo de leitura
  /*



  //recebe como parametro uma array com todos os objetos que corresponde ao rich text do blog
  function CALCULARtempoDeLeituraDesteBLOG(conteudo_blog_array) {
    if (!conteudo_blog_array || !Array.isArray(conteudo_blog_array)) return 5;

    const wordsPerMinute = 200;
    let totalWords = 0;

    // Função auxiliar para extrair texto de diferentes blocos
    const extractText = (blocks) => {
      blocks.forEach((block) => {
        // cabecalho
        if (
          block.__component === "elementos.bloco-blog-cabecalho" &&
          block.Texto_Cabecalho
        ) {
          if (block.Texto_Cabecalho) {
            const words = block.Texto_Cabecalho.trim().split(/\s+/).length;
            totalWords += words;
          }
        }

        //paragrafo_e_imagem
        if (
          block.__component === "elementos.bloco-blog-paragrafo-e-imagem" &&
          block.conteudo_blog
        ) {
          block.conteudo_blog.forEach((child) => {
            child.conteudo_blog.children.forEach((grandChild) => {
              if (grandChild.text) {
                const words = grandChild.text.trim().split(/\s+/).length;
                totalWords += words;
              }
            });
          });
        }

        //paragrafo
        if (
          block.__component === "elementos.bloco-blog-paragrafo" &&
          block.conteudo_blog
        ) {
          block.conteudo_blog.forEach((child) => {
            child.conteudo_blog.children.forEach((grandChild) => {
              if (grandChild.text) {
                const words = grandChild.text.trim().split(/\s+/).length;
                totalWords += words;
              }
            });
          });
        }

        // Parágrafos
        if (block.type === "paragraph" && block.children) {
          block.children.forEach((child) => {
            if (child.text) {
              const words = child.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        }

        // Títulos (headings)
        if (block.type === "heading" && block.children) {
          block.children.forEach((child) => {
            if (child.text) {
              const words = child.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        }
        /*
        // Listas
        if (block.type === "list" && block.children) {
          block.children.forEach((listItem) => {
            if (listItem.children) {
              listItem.children.forEach((child) => {
                if (child.text) {
                  const words = child.text.trim().split(/\s+/).length;
                  totalWords += words;
                }
              });
            }
          });
        }


        // Blocos de código (code)
        if (block.type === "code" && block.children) {
          block.children.forEach((child) => {
            if (child.text) {
              const words = child.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        }

      });
    };

    // Executa a extração
    extractText(conteudo_blog_array);

    // Calcula tempo de leitura
    const readingTime = Math.ceil(totalWords / wordsPerMinute);
    return readingTime;
  }

  



*/
  const [tagSelecionada, setTagSelecionada] = React.useState(0);

  const [blogsFiltrados, setBlogFiltrado] = React.useState([]); // mostra só os 9 primeiros blogs inicialmente
  React.useEffect(() => {
    if (!loading && blogData && Array.isArray(blogData)) {
      if (tagSelecionada === 0) {
        // "Ver Todos" selecionado
        setBlogFiltrado(blogData);
      } else {
        const tagNome = tags_CATEGORIAS_blog[tagSelecionada];
        const blogsFiltradosPorTag = blogData.filter(
          (blog) => blog.tipo_assunto_do_blog === tagNome,
        );
        setBlogFiltrado(blogsFiltradosPorTag);
      }
    }
  }, [loading, tagSelecionada, blogData]);

  function SelecionarOutraTag(id) {
    setTagSelecionada(id);
  }

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] px-[24px] py-10 md:px-[34px] lg:px-[44px]">
      <div
        id="section1"
        className="flex flex-col text-center sm:w-full sm:text-start"
      >
        <p className="text-base font-semibold">Blog</p>
        <h1 className="mt-4 mb-6 text-[30px] font-bold sm:text-[36px] md:text-[46px] lg:text-[56px]">
          Explore os meus insights jurídicos
        </h1>
        <p className="text-[18px]">
          Mantenha-se informado com os meus últimos artigos e atualizações
          jurídicas.
        </p>
      </div>

      <section id="section2">
        <div className="mt-10 hidden w-full items-center sm:grid sm:grid-cols-2">
          {/* um blog sorteado */}

          {/*          <div
            className="h-[50vh] w-full bg-cover bg-center lg:h-[100vh] lg:w-1/2"
            style={{
              backgroundImage: `url(${UseStrapiURL()}${homeData?.sessoes[1]?.imagem_sessaoDOIS_h11?.url})`,
            }}
          ></div>*/}
          <div
            className="h-[50vh] w-full bg-cover bg-center transition-all duration-700 hover:scale-90 md:h-[65vh]"
            style={{
              backgroundImage: `url(${blog1})`,
            }}
          ></div>

          <div className="bg-transparent p-[24px] sm:p-[34] md:p-[40px] lg:p-[48px]">
            <div className="small:flex-col flex items-center text-sm font-bold">
              <div className="inline h-fit w-fit bg-[rgb(210,210,210)] p-2 px-4 text-[rgb(0,0,0)]">
                {categoriaBLOG}
              </div>
              <span className="ml-4">{`${tempoDeLeituraDesteBLOG} minuto${tempoDeLeituraDesteBLOG > 1 ? "s" : ""} de leitura`}</span>
            </div>
            <h2 className="mt-4 mb-4 text-2xl font-bold">{tituloBLOG}</h2>
            <p className="mb-4 text-gray-700">{resumoBLOG}</p>
            <Link
              to={"/blog/artigo-1"}
              className="flex items-center font-semibold text-black hover:underline"
            >
              Leia mais
              <img
                className="inline"
                src={icon_lerMAIS}
                alt="icone botão para ler página do blog"
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="section3"
        className="my-[36px] w-full text-center sm:text-start"
      >
        {/* categorias do blog */}
        {tags_CATEGORIAS_blog.map((tag, index) => (
          <a className="h-fit w-fit no-underline" href="#section3">
            <button
              key={index}
              className={`m-2 ${tagSelecionada === index ? `border border-black bg-white` : `bg-transparent`} px-4 py-2 text-sm font-bold text-black hover:bg-gray-400`}
              onClick={() => SelecionarOutraTag(index)}
            >
              {tag}
            </button>{" "}
          </a>
        ))}
      </section>
      <main
        id="section4"
        className="grid h-fit grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {console.log(
          "blogData dentro de Blogs.jsx:",
          !loading ? blogData[0].conteudo_blog : "carregando...",
        )}
        {/* Exibir tempo calculado a partir do conteúdo vindo do Strapi 
        {blogData && blogData.length > 0 && (
          <>
            <div className="mb-4 w-full text-center sm:text-start">
              <h2 className="text-2xl font-bold">
                Tempo de leitura do primeiro blog:
              </h2>{" "}
            </div>
            {!loading ? (
              <CalcTIME conteudo={blogData[0].conteudo_blog} />
            ) : (
              <p>Carregando tempo de leitura...</p>
            )}
          </>
        )}

        */}

        {/* lista de blogs em miniatura 
        {blogData && blogData.length > 0 && (
          <>
            {!loading ? (
              <CalcTIME conteudo={blogData[0].conteudo_blog} />
            ) : (
              `${1}`
            )}
          </>
        )}
        */}

        {/* acho melhor usar a variavel loading que veio do GetBlogPage() emvez de usar blogData && ( componente jsx)  */}
        {blogsFiltrados &&
          blogsFiltrados.length > 0 &&
          blogsFiltrados.map((blogItem, index) => {
            /*
            const tempoDeLeitura = CALCULARtempoDeLeituraDesteBLOG(
              blogItem.conteudo_blog,
            );
          
            const tempoDeLeitura = !loading ? (
              <CalcTIME conteudo={blogItem.conteudo_blog} />
            ) : (
              1
            );
  
            console.log(
              `Tempo de leitura do blog ${index + 1}: `,
              tempoDeLeitura,
            );
            */
            return (
              <BlogMiniatura
                key={index}
                linkToBlog={`/blog/${blogItem.slug_do_blog}`}
                tipoBlog={blogItem.tipo_assunto_do_blog || "Dicas Jurídicas"}
                array_calc_tempo_leitura_blog={
                  !loading
                    ? CALCULARtempoDeLeituraDesteBLOG(blogItem.conteudo_blog)
                    : 1
                }
                titulo_blog={blogItem.titulo_do_blog || "Conteúdo indisponível"}
                resumo_blog={
                  blogItem.resumo_do_assunto_do_blog ||
                  "Resumo do blog não disponível no momento."
                }
                url_img_capa_blog={
                  blogItem.imagem_capa_blog.url
                    ? `${blogItem.imagem_capa_blog.url}`
                    : "../../assets/capa_blog_loading.webp"
                }
              />
            );
          })}

        {loading && <p className="text-4xl font-bold">Carregando blogs...</p>}
        {error && (
          <p className="text-4xl font-bold text-red-600">
            Erro ao carregar os blogs: {error.message}
          </p>
        )}

        {!loading && blogsFiltrados.length === 0 && (
          <p>Nenhum blog encontrado.</p>
        )}

        {/*
          <BlogMiniatura
            linkToBlog="/blog/artigo-1"
            tipoBlog="Dicas Jurídicas"
            tempo_leitura_blog={tempoDeLeituraDesteBLOG}
            titulo_blog={tituloBLOG}
            resumo_blog={resumoBLOG}
            url_img_capa_blog={blog1}
          />
          */}
      </main>
    </div>
  );
};

export default Blogs;
