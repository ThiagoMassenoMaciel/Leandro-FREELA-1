import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog1.png";
import icon_lerMAIS from "../../assets/icon_lerMAIS.svg";
import BlogMiniatura from "./BlogMiniatura";

//----------------- ATIVIDADES
/*
------- 1 ------ Pegar todo o que for apenas texto e colocar organizado em uma string gigante para depois fazer o cálculo do tempo de leitura


*/

const Blog = () => {
  let categoriaBLOG = "Dicas Jurídicas";
  let textoBLOG =
    "eu quero usar este texto para calcular o tempo de leitura deste blog post e ver como fica exibido na página do blog para o usuário final do meu site jurídico feito em React com Strapi como CMS headless para gerenciar o conteúdo do blog e outras páginas do site. Assim, poderei oferecer uma melhor experiência de leitura para os visitantes do meu site, ajudando-os a planejar seu tempo de leitura de acordo com suas necessidades e disponibilidade. Além disso, isso pode aumentar o engajamento dos leitores com o conteúdo que estou oferecendo. Vou continuar escrevendo mais algumas palavras para garantir que o cálculo do tempo de leitura seja mais preciso e reflita melhor a quantidade de conteúdo que estou disponibilizando neste artigo do meu blog jurídico. Espero que isso ajude meus leitores a aproveitar ao máximo o conteúdo que estou compartilhando com eles. Obrigado por ler até aqui!eu quero usar este texto para calcular o tempo de leitura deste blog post e ver como fica exibido na página do blog para o usuário final do meu site jurídico feito em React com Strapi como CMS headless para gerenciar o conteúdo do blog e outras páginas do site. Assim, poderei oferecer uma melhor experiência de leitura para os visitantes do meu site, ajudando-os a planejar seu tempo de leitura de acordo com suas necessidades e disponibilidade. Além disso, isso pode aumentar o engajamento dos leitores com o conteúdo que estou oferecendo. Vou continuar escrevendo mais algumas palavras para garantir que o cálculo do tempo de leitura seja mais preciso e reflita melhor a quantidade de conteúdo que estou disponibilizando neste artigo do meu blog jurídico. Espero que isso ajude meus leitores a aproveitar ao máximo o conteúdo que estou compartilhando com eles. Obrigado por ler até aqui!";
  let tempoDeLeituraDesteBLOG = CALCULARtempoDeLeituraDesteBLOG(textoBLOG);
  let tituloBLOG = "Como proteger seus direitos legais";
  let resumoBLOG =
    "Neste artigo, exploramos as melhores práticas para garantir que seus direitos sejam respeitados e protegidos em diversas situações legais.";

  function CALCULARtempoDeLeituraDesteBLOG(text) {
    const wordsPerMinute = 150; // Média de palavras por minuto
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  }

  let tags_CATEGORIAS_blog = [
    "Ver Todos",
    "Dicas Jurídicas",
    "Estudos de Caso",
    "Histórias de Clientes",
    "Notícias Jurídicas",
  ];

  const [tagSelecionada, setTagSelecionada] = React.useState(0);

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
            className="h-[50vh] w-full bg-cover bg-center md:h-[65vh]"
            style={{
              backgroundImage: `url(${blog1})`,
            }}
          ></div>

          <div className="bg-transparent p-[24px] sm:p-[34] md:p-[40px] lg:p-[48px]">
            <p className="small:flex-col flex items-center text-sm font-bold">
              <div className="inline h-fit w-fit bg-[rgb(210,210,210)] p-2 px-4 text-[rgb(0,0,0)]">
                {categoriaBLOG}
              </div>
              <span className="ml-4">{`${tempoDeLeituraDesteBLOG} minuto${tempoDeLeituraDesteBLOG > 1 ? "s" : ""} de leitura`}</span>
            </p>
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
          <button
            key={index}
            className={`m-2 ${tagSelecionada === index ? `border border-black bg-white` : `bg-transparent`} px-4 py-2 text-sm font-bold text-black hover:bg-gray-400`}
            onClick={() => SelecionarOutraTag(index)}
          >
            {tag}
          </button>
        ))}
      </section>
      <main
        id="section4"
        className="grid h-fit grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* lista de blogs em miniatura */}
        <BlogMiniatura
          linkToBlog="/blog/artigo-1"
          tipoBlog="Dicas Jurídicas"
          tempo_leitura_blog={tempoDeLeituraDesteBLOG}
          titulo_blog={tituloBLOG}
          resumo_blog={resumoBLOG}
          url_img_capa_blog={blog1}
        />
        <BlogMiniatura
          linkToBlog="/blog/artigo-1"
          tipoBlog="Dicas Jurídicas"
          tempo_leitura_blog={tempoDeLeituraDesteBLOG}
          titulo_blog={tituloBLOG}
          resumo_blog={resumoBLOG}
          url_img_capa_blog={blog1}
        />
        <BlogMiniatura
          linkToBlog="/blog/artigo-1"
          tipoBlog="Dicas Jurídicas"
          tempo_leitura_blog={tempoDeLeituraDesteBLOG}
          titulo_blog={tituloBLOG}
          resumo_blog={resumoBLOG}
          url_img_capa_blog={blog1}
        />
        <BlogMiniatura
          linkToBlog="/blog/artigo-1"
          tipoBlog="Dicas Jurídicas"
          tempo_leitura_blog={tempoDeLeituraDesteBLOG}
          titulo_blog={tituloBLOG}
          resumo_blog={resumoBLOG}
          url_img_capa_blog={blog1}
        />
        <BlogMiniatura
          linkToBlog="/blog/artigo-1"
          tipoBlog="Dicas Jurídicas"
          tempo_leitura_blog={tempoDeLeituraDesteBLOG}
          titulo_blog={tituloBLOG}
          resumo_blog={resumoBLOG}
          url_img_capa_blog={blog1}
        />
      </main>
    </div>
  );
};

export default Blog;
