import React, { use, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import h1 from "../../assets/home1.png";
import h2 from "../../assets/home2.png";
import h3 from "../../assets/home3.png";
import h4 from "../../assets/home4.png";
import h5 from "../../assets/home5.png";
import h6 from "../../assets/home6.png";
import h7 from "../../assets/home7.png";
import h8 from "../../assets/home8.png";
import h9 from "../../assets/home9.png";
import h10 from "../../assets/home10.png";
import h11 from "../../assets/home11.png";
import h12 from "../../assets/home12.png";
import h13 from "../../assets/home13.png";
import h14 from "../../assets/home14.png";
import h_icon1 from "../../assets/h_icon1.png";
import h_icon2 from "../../assets/h_icon2.png";
import h_icon3 from "../../assets/h_icon3.png";
import h_icon4 from "../../assets/h_icon4.png";
import h_icon5 from "../../assets/h_icon5.svg";

//import { useStrapi } from "../../hooks/Load_data_to_webpage.jsx";

import { GetDataHome } from "../../hooks/GetDataHome.js";

import FormularioJuridico3 from "../../components/formulario_juridico_dinamico3.jsx";
import UseStrapiURL from "../../hooks/UseStrapiURL.js";

/*
async function load_data_to_homepage() {
  const path = "/api/pagina-home";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  return { data };
}
*/

const Home = () => {
  /*
  const { data: homeData, loading, error } = useStrapi("pagina-home");
  */
  const { homeData, loading, error } = GetDataHome();
  /*
  console.log("homeData:", homeData);
  console.log("sessoes", homeData?.sessoes[0].texto);
  const [faq1, setFaq1] = useState(true);
  const [faq2, setFaq2] = useState(true);
  const [faq3, setFaq3] = useState(true);
  const [faq4, setFaq4] = useState(true);
  const [faq5, setFaq5] = useState(true);
  const [faq6, setFaq6] = useState(true);
*/
  const [showForm, setShowForm] = useState(false);

  /*
  const faqData = [
    {
      id: 1,
      ask: "Quais são os tipos de acessoria jurídica?",
      response:
        "Direito Trabalhista, Família, Previdenciário, Criminal, Tributário, **incluindo consultas**,  Revisões de contratos em geral, Conciliação , Mediação e Representação Judicial.",
    },
    {
      id: 2,
      ask: "Qual a funcionalidade do serviço ?",
      response:
        "Minha expertise abrange diversas áreas do direito para atender às suas necessidades. Entre em contato comigo para saber mais sobre como posso ajudar. Para entrar em contato é muito simples, basta clicar no botão preto **Entrar em contato** na parte superior desse site ou no botão **Contato**.",
    },
    {
      id: 3,
      ask: "Como posso agendar?",
      response:
        "1. Você clica no botão preto **Entrar em contato** que fica na parte superior da tela desse site. Em seguida você deve responder todas as perguntas que aparecerá no formulário. E por fim, clique no botão verde **Agendar** >Caso prefira, entre em contato direto: ligue para o número : **(85)9 9298-6264** >ou mande um email para : **leandrovianaadv691@gmail.com**. Vamos combinar juntos um horário conveniente.",
    },
    {
      id: 4,
      ask: "Quanto você cobra?",
      response:
        "Os honorários **variam de acordo com o serviço prestado** e a complexidade do seu caso. Discutiremos os custos antecipadamente. Sinta-se à vontade para  questionamentos durante sua consultoria após entrar em contato depois de responder o formulário. Para responder ao formulário clique no botão preto **Entrar em contato** que está na parte superior da tela desse site",
    },
    {
      id: 5,
      ask: "Eu ofereço consultoria?",
      response:
        " Sim, ofereço consultoria para discutir suas necessidades jurídicas. Esta é uma  oportunidade para você tirar dúvidas e entender como posso ajudá-lo. Para melhorar sua experiência com a minha consultoria jurídica, antes do nosso encontro você precisa responder o meu formulário. Para fazer isso, clique no botão preto **Entrar em contato** que fica na parte superior da tela desse site e depois de responder todas as perguntas clique no botão verde **Agendar**. Depois, você será redirecionado para minhas redes sociais instagram e whatsapp.",
    },
    {
      id: 6,
      ask: "Quais informações relevantes você precisa entregar ?",
      response:
        "Traga todos os documentos relevantes relacionados ao seu caso, juntamente com uma lista de perguntas. Isso ajudará a entender melhor a sua situação. Quanto mais informações você fornecer, **mais personalizado será o aconselhamento**.",
    },
    {
      id: 7,
      ask: "Teste1",
      response: "Teste  uuummmmm",
    },
    {
      id: 8,
      ask: "Teste2",
      response: "Este aqui é feito apenas para teste2",
    },
  ];
*/
  // Inicialize com array vazio
  const [openFaqIds, setOpenFaqIds] = useState([]);

  // Use useEffect para atualizar quando os dados chegarem
  useEffect(() => {
    const faqData = homeData?.sessoes?.[3]?.perguntas;

    if (faqData && Array.isArray(faqData)) {
      // se variavel tiver algum valor e for uma array
      // Quando os dados chegarem, atualize o estado com os IDs de cada objeto pergunta
      // 1. O estado agora é um ARRAY de IDs.
      // Iniciamos o estado com os IDs de todos os itens do FAQ para que todas os blocos comecem abertos.
      setOpenFaqIds(faqData.map((item) => item.id));
    }
  }, [homeData]); // Executa quando homeData mudar

  // Resto do código...
  const faqData = homeData?.sessoes?.[3]?.perguntas;

  console.log("faqData:-------------------", faqData, typeof faqData);

  // 2. A função de toggle agora adiciona ou remove um ID do array. tal qual referencia se o bloco estará aberto ou fechado
  const handleToggle = (id) => {
    setOpenFaqIds((prevOpenIds) => {
      // Se o ID já está no array (o card está aberto),
      if (prevOpenIds.includes(id)) {
        // ...retornamos um novo array sem esse ID (para fechar o card).
        return prevOpenIds.filter((currentId) => currentId !== id);
      } else {
        // Se o ID não está no array (o card está fechado),
        // ...retornamos um novo array com esse ID adicionado (para abrir o card).
        return [...prevOpenIds, id];
      }
    });
  };

  // 1. AQUI VOCÊ CRIA O OBJETO markdownComponents para personalizar na renderização de conteúdos MARKDOWN
  // Este objeto diz: "quando encontrar um <p>, use este componente customizado"
  const markdownComponents = {
    // Quando o Markdown criar um parágrafo <p>
    p: ({ node, ...props }) => (
      <p {...props} className="mb-4 leading-relaxed" />
    ),

    // Quando o Markdown criar negrito <strong>
    strong: ({ node, ...props }) => (
      <strong {...props} className="font-bold text-black" />
    ),

    // Quando o Markdown criar itálico <em>
    em: ({ node, ...props }) => <em {...props} className="italic" />,

    // Quando o Markdown criar lista ordenada <ol>
    ol: ({ node, ...props }) => (
      <ol {...props} className="my-4 ml-6 list-decimal space-y-2" />
    ),

    // Quando o Markdown criar lista não-ordenada <ul>
    ul: ({ node, ...props }) => (
      <ul {...props} className="my-4 ml-6 list-disc space-y-2" />
    ),

    // Quando o Markdown criar item de lista <li>
    li: ({ node, ...props }) => <li {...props} className="leading-relaxed" />,

    // Quando o Markdown criar blockquote (>)
    blockquote: ({ node, ...props }) => (
      <blockquote
        {...props}
        className="my-4 border-l-4 border-gray-400 bg-gray-50 py-2 pl-4 text-gray-700 italic"
      />
    ),
  };

  // 2. AGORA VOCÊ USA O OBJETO componentsMarkdown QUE CRIOU como prop do ReactMarkdown lá embaixo

  return (
    <>
      {showForm && (
        <FormularioJuridico3 className="l-0 t-0 fixed z-100 h-full w-full" />
      )}
      <div className="flex h-[120vh] w-full flex-col-reverse gap-[calc(34px+1vw)] overflow-hidden bg-white px-[24px] md:px-[34px] lg:h-[calc(100vh-58px)] lg:flex-row-reverse lg:items-center lg:px-[44px]">
        <div className="mx-auto flex h-[50vh] h-screen w-[80vw] flex-row gap-4 gap-[12px] overflow-hidden sm:w-[70vw] md:w-[60vw] lg:mx-0 lg:w-[50vw]">
          <div
            className="flex h-fit w-1/2 flex-col items-center justify-center gap-[10px] md:gap-[16px]"
            id="MOVEpartONE"
          >
            {/*
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h1})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h2})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h3})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h4})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h5})` }}
            ></div>

            */}

            {homeData?.sessoes[0].imagens &&
              Object.values(homeData?.sessoes[0].imagens).map(
                (img, idx) =>
                  img.id > 0 &&
                  img.id < 6 && (
                    <div
                      key={idx}
                      className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
                      style={{
                        backgroundImage: `url(${UseStrapiURL()}${img.url})`,
                      }}
                    ></div>
                  ),
              )}
          </div>

          <div
            className="flex h-fit w-1/2 flex-col items-center justify-center gap-[10px] md:gap-[16px]"
            id="MOVEpartTWO"
          >
            {/*
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h6})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h7})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h8})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h9})` }}
            ></div>
            <div
              className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
              style={{ backgroundImage: `url(${h10})` }}
            ></div>

            */}

            {homeData?.sessoes[0].imagens &&
              Object.values(homeData?.sessoes[0].imagens).map(
                (img, idx) =>
                  img.id > 5 &&
                  img.id < 11 && (
                    <div
                      key={idx}
                      className="h-[50vw] w-full bg-cover bg-center sm:h-[calc(35vh+10vw)]"
                      style={{
                        backgroundImage: `url(${UseStrapiURL()}${img.url})`,
                      }}
                    ></div>
                  ),
              )}
          </div>
        </div>
        <section>
          {/* console.log(".............") */}
          {/* console.log("homeData:", homeData) */}

          {homeData && (
            <main className="flex h-fit w-full flex-col items-start justify-between text-center lg:w-[40vw]">
              <h1 className="mt-6 mb-4 w-full text-center text-4xl font-bold lg:mt-0 lg:text-start">
                {homeData?.sessoes[0].texto.titulo}
              </h1>
              <h3 className="mb-4 w-full text-center text-2xl font-semibold lg:text-start">
                {homeData?.sessoes[0].texto.subtitulo_resumo}
              </h3>
              <p className="text-center text-lg text-gray-700 lg:text-start">
                {homeData?.sessoes[0].texto.descricao}
              </p>
              <div className="mt-8 flex w-full justify-center gap-4 lg:justify-start">
                <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
                  Contato
                </button>
                <button className="bg-white px-6 py-3 text-black shadow-[inset_0_0_0_2px_black] transition hover:bg-black hover:text-white">
                  Saiba Mais
                </button>
              </div>
            </main>
          )}
        </section>
        {loading && <p>Carregando conteúdo...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
      </div>
      <section className="box-border flex h-fit w-full flex-col-reverse items-start justify-center gap-[calc(34px+1vw)] px-[24px] py-[80px] md:px-[34px] lg:flex-row lg:px-[44px]">
        {loading && <p>Carregando conteúdo...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
        <div
          className="h-[50vh] w-full bg-cover bg-center lg:h-[100vh] lg:w-1/2"
          style={{
            backgroundImage: `url(${UseStrapiURL()}${homeData?.sessoes[1]?.imagem_sessaoDOIS_h11?.url})`,
          }}
        >
          {console.log(
            "---------------",
            homeData?.sessoes[1].imagem_sessaoDOIS_h11.url,
          )}
        </div>
        <div className="box-border flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-start">
          {homeData && (
            <>
              <p className="text-center text-base font-bold lg:text-start">
                {homeData?.sessoes[1].subtitulo}
              </p>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:items-start lg:text-5xl">
                {homeData?.sessoes[1].titulo}
              </h2>
              <p className="text-base">{homeData?.sessoes[1].descricao}</p>
              <div className="mt-8 flex w-full justify-center gap-4 lg:justify-start">
                <button className="bg-white px-6 py-3 text-black shadow-[inset_0_0_0_2px_black] transition hover:bg-black hover:text-white">
                  Saiba Mais
                </button>
                <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
                  Contato
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="grid h-fit w-full grid-cols-1 items-center justify-center gap-22 bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] px-[24px] py-20 md:px-[34px] lg:grid-cols-2 lg:flex-row lg:items-start lg:gap-20 lg:px-[44px]">
        {loading && <p>Carregando conteúdo...</p>}
        {error && <p className="text-red-500">Erro: {error}</p>}
        <div
          className="flex h-full w-full flex-col items-start gap-15"
          id="leftside"
        >
          <div className="flex h-fit w-full flex-col gap-3 text-center">
            <h2 className="text-center text-[24px] leading-7 font-bold md:text-3xl md:leading-8 lg:text-start lg:text-[43px] lg:leading-11">
              {/* Seu processo nas mãos certas, com quem entrega resultado.*/}
              {homeData?.sessoes[2].introducao.titulo}
            </h2>
            <p className="text-center text-[18px] font-bold md:text-[20px] lg:text-start">
              {/*  Seu direito, minha prioridade. Sua vitória, minha missão.   */}
              {homeData?.sessoes[2].introducao.subtitulo_resumo}
            </p>
            <p className="text-center text-[16px] md:text-[18px] lg:text-start">
              {/* Ao escolher Leandro Viana, você recebe atendimento jurídico
              personalizado para empresas, pessoas físicas e adaptado à sua
              situação específica. Atuando com ética e eficiência acompanhada de
              uma ampla experiência e histórico comprovado.*/}
              {homeData?.sessoes[2].introducao.descricao}
            </p>
            <div className="flex w-full justify-center gap-4 lg:justify-start">
              <button className="bg-white px-6 py-3 text-black shadow-[inset_0_0_0_2px_black] transition hover:bg-black hover:text-white">
                Saiba Mais
              </button>
              <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
                Contato
              </button>
            </div>
          </div>

          <div
            className="hidden lg:flex lg:h-full lg:w-full lg:bg-cover lg:bg-center"
            style={{ backgroundImage: `url(${h12})` }}
          ></div>
        </div>

        <div
          className="flex h-fit w-full flex-col items-start justify-center gap-8"
          id="rightside"
        >
          {/*
          <section className="flex h-fit w-full flex-col items-center gap-4 border-2 border-solid border-black p-8 lg:items-start">
            <img className="h-[48px] w-[48px]" src={h_icon1} alt="icon1" />
            <h3 className="text-center text-2xl font-bold lg:text-start">
              Estratégias Jurídicas Exclusivas
            </h3>
            <p className="text-center text-[16px] lg:text-start">
              Cada caso é tratado com um plano estratégico único. Eu realizo
              análises profundas para criar soluções personalizadas, garantindo
              vantagem competitiva e melhores resultados para os meus clientes.
            </p>
          </section>
          <section className="flex h-fit w-full flex-col items-center gap-4 border-2 border-solid border-black p-8 lg:items-start">
            <img className="h-[48px] w-[48px]" src={h_icon2} alt="icon1" />
            <h3 className="text-center text-2xl font-bold lg:text-start">
              Experiência local
            </h3>
            <p className="text-center text-[16px] lg:text-start">
              Através de anos dedicados à advocacia construi uma sólida
              experiência , desenvolvendo expertise em diferentes áreas do
              Direito para melhor atendê-lo. Isso garante maior agilidade e
              transparência em todo o atendimento.
            </p>
          </section>
          <section className="flex h-fit w-full flex-col items-center gap-4 border-2 border-solid border-black p-8 lg:items-start">
            <img className="h-[48px] w-[48px]" src={h_icon3} alt="icon1" />
            <h3 className="text-center text-2xl font-bold lg:text-start">
              Sucesso Processual
            </h3>
            <p className="text-center text-[16px] lg:text-start">
              Os meus índices de vitória superam a média do mercado, refletindo
              a eficiência técnica e a dedicação extrema em cada ação. Trabalho
              com metas e resultados concretos.
            </p>
          </section>
          <section className="flex h-fit w-full flex-col items-center gap-4 border-2 border-solid border-black p-8 lg:items-start">
            <img className="h-[48px] w-[48px]" src={h_icon4} alt="icon1" />
            <h3 className="text-center text-2xl font-bold lg:text-start">
              Especialização em Nichos Estratégicos
            </h3>
            <p className="text-center text-[16px] lg:text-start">
              Considerando o foco em áreas específicas do Direito Trabalhista,
              Família, Previdenciário, Criminal, Tributário, tenho conhecimento
              aprofundado e atuação extremamente qualificada. Isso significa
              menos erro, mais segurança e previsibilidade para o seu caso.
            </p>
          </section>

        */}
          {homeData &&
            Object.values(homeData?.sessoes[2]).map(
              (pedaco, idx) =>
                idx > 2 &&
                idx < 7 && (
                  <section
                    key={idx}
                    className="flex h-fit w-full flex-col items-center gap-4 border-2 border-solid border-black p-8 lg:items-start"
                  >
                    <img
                      className="h-[48px] w-[48px]"
                      src={
                        idx == 3
                          ? h_icon1
                          : idx == 4
                            ? h_icon2
                            : idx == 5
                              ? h_icon3
                              : h_icon4
                      }
                      alt="icone"
                    />
                    <h3 className="text-center text-2xl font-bold lg:text-start">
                      {pedaco.subtitulo}
                    </h3>
                    <p className="text-center text-[16px] lg:text-start">
                      {pedaco.descricao}
                    </p>
                  </section>
                ),
            )}
        </div>
      </section>

      <section className="mb-10 h-fit w-full bg-white px-[24px] py-10 md:px-[34px] md:py-16 lg:px-[44px]">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6">
          <img src={h_icon5} />
          <p className="text-center text-lg font-bold">
            "Leandro forneceu orientação jurídica excepcional durante meu caso,
            tornando todo o processo tranquilo e sem estresse."
          </p>
        </div>
      </section>

      <section
        className="h-fit w-full bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${h13})` }}
      >
        <div className="h-full w-full bg-[rgba(0,0,0,0.81)] px-[24px] py-6 text-white sm:py-20 md:px-[34px] lg:px-[44px]">
          <div className="flex h-fit w-full max-w-[768px] flex-col items-start gap-6 py-6 md:py-15">
            <h1 className="text-start text-4xl font-bold">
              Obtenha sua consultoria jurídica
            </h1>
            <p className="text-base">
              Entre em contato com Leandro Viana agora para discutir suas
              necessidades jurídicas e receber orientação especializada
              personalizada para você.
            </p>
            <div className="flex w-full justify-start gap-4 lg:justify-start">
              <button className="border-none bg-white px-6 py-3 text-black transition hover:bg-gray-100">
                Contato
              </button>
              <button className="bg-transparent px-6 py-3 text-white shadow-[inset_0_0_0_1px_white] transition hover:bg-black hover:text-white">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-fit w-full px-[24px] py-20 text-center md:px-[34px] lg:px-[44px]">
          <h2 className="text-center text-4xl font-bold">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base text-gray-700">
            Encontre respostas para suas perguntas sobre os meus serviços
            jurídicos e como podemos ajudá-lo.
          </p>
        </div>
        {/*
        <div className="mx-auto flex h-fit w-full max-w-[768px] flex-col gap-4 px-[24px] md:px-[34px] lg:px-[44px]">
          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq1 ? `16px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">
                Quais são os tipos de acessoria jurídica?
              </h2>
              {faq1 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq1(!faq1)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq1(!faq1)}
                />
              )}
            </div>

            <p
              className="text-base"
              style={{ display: `${faq1 ? `flex` : `none`}` }}
            >
              Direito Trabalhista, Família, Previdenciário, Criminal,
              Tributário, incluindo consultas, Revisões de contratos em geral,
              Conciliação , Mediação e Representação Judicial.
            </p>
          </section>
          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq2 ? `26px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">
                Qual a funcionalidade do serviço ?
              </h2>
              {faq2 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq2(!faq2)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq2(!faq2)}
                />
              )}
            </div>

            <div
              className="text-base"
              style={{
                display: `${faq2 ? `flex` : `none`}`,
                flexDirection: `${faq2 ? `column` : ``}`,
              }}
            >
              <p>
                {" "}
                Minha expertise abrange diversas áreas do direito para atender
                às suas necessidades. Entre em contato comigo para saber mais
                sobre como posso ajudar.{" "}
              </p>
              <div className="mt-8 flex w-full justify-start gap-4">
                <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
                  Contato
                </button>
              </div>
            </div>
          </section>

          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq3 ? `16px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">Como posso agendar?</h2>
              {faq3 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq3(!faq3)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq3(!faq3)}
                />
              )}
            </div>

            <p
              className="text-base"
              style={{
                display: `${faq3 ? `flex` : `none`}`,
                flexDirection: `${faq3 ? `column` : ``}`,
              }}
            >
              <span className="mb-3 flex h-fit w-full flex-row max-[496px]:flex-col">
                Primeiro você responde o meu formulário &nbsp;
                <button
                  className="cursor pointer display: m-0 inline w-fit border-0 bg-blue-800 p-1 text-sm text-white"
                  onClick={() => setShowForm(!showForm)}
                >
                  clicando aqui
                </button>
              </span>
              Ao terminar de responder o formulário e clicar no botão enviar,
              este site irá lhe redirecionar para minhas redes sociais instagram
              e whatsapp.
              <span className="my-3">
                Caso prefira, entre em contato direto pelo número{" "}
                <i className="inline text-blue-800">(85)9 9298-6264</i>, ou
                mande um email para{" "}
                <i className="text-blue-800">leandrovianaadv691@gmail.com</i>
                &nbsp;. Vamos combinar juntos um horário conveniente.
              </span>
            </p>
          </section>
          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq4 ? `16px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">Quanto você cobra?</h2>
              {faq4 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq4(!faq4)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq4(!faq4)}
                />
              )}
            </div>

            <p
              className="text-base"
              style={{
                display: `${faq4 ? `flex` : `none`}`,
                flexDirection: `${faq4 ? `column` : ``}`,
              }}
            >
              Os honorários variam de acordo com o serviço prestado e a
              complexidade do seu caso. Discutiremos os custos antecipadamente.
              Sinta-se à vontade para questionamentos durante sua consultoria
              após entrar em contato depois de responder o formulário.
            </p>
          </section>
          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq5 ? `16px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">Eu ofereço consultoria?</h2>
              {faq5 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq5(!faq5)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq5(!faq5)}
                />
              )}
            </div>

            <p
              className="text-base"
              style={{ display: `${faq5 ? `flex` : `none`}` }}
            >
              Sim, ofereço consultoria para discutir suas necessidades
              jurídicas. Esta é uma oportunidade para você tirar dúvidas e
              entender como posso ajudá-lo.
            </p>
          </section>
          <section className="h-fit w-full border-2 border-black bg-white p-5 text-start">
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: `${faq6 ? `16px` : `0px`}` }}
            >
              <h2 className="text-lg font-bold">
                Quais informações relevantes você precisa entregar ?
              </h2>
              {faq6 ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq6(!faq6)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="cursor-pointer text-[30px]"
                  onClick={() => setFaq6(!faq6)}
                />
              )}
            </div>

            <p
              className="text-base"
              style={{ display: `${faq6 ? `flex` : `none`}` }}
            >
              Traga todos os documentos relevantes relacionados ao seu caso,
              juntamente com uma lista de perguntas. Isso ajudará a entender
              melhor a sua situação. Quanto mais informações você fornecer, mais
              personalizado será o aconselhamento.
            </p>
          </section>
        </div>
        */}
        {/*--------------------------------------------------------------------------------------------------*/}
        {faqData && Array.isArray(faqData) && (
          <section className="mx-auto flex h-fit w-full max-w-[768px] flex-col gap-4 px-[24px] md:px-[34px] lg:px-[44px]">
            {faqData.map((faqItem) => {
              // 3. A verificação para saber se está aberto agora usa .includes()
              const isOpen = openFaqIds.includes(faqItem.id);

              return (
                <section
                  key={faqItem.id}
                  className="h-fit w-full border-2 border-black bg-white p-5 text-start"
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: isOpen ? "16px" : "0px" }}
                  >
                    <h2 className="text-lg font-bold">{faqItem.pergunta}</h2>

                    <FontAwesomeIcon
                      icon={isOpen ? faXmark : faCircleQuestion}
                      className="cursor-pointer text-[30px]"
                      onClick={() => handleToggle(faqItem.id)}
                    />
                  </div>

                  <div
                    className="text-base text-black"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={markdownComponents}
                    >
                      {faqItem.resposta}
                    </ReactMarkdown>
                  </div>
                </section>
              );
            })}
          </section>
        )}

        <div className="mx-auto flex h-fit max-w-[428px] flex-col gap-4 px-[24px] py-20 text-center md:px-[34px] lg:px-[44px]">
          <h2 className="text-2xl font-bold md:text-[34px]">
            Ainda tem dúvidas ?
          </h2>
          <p className="text-center text-base">
            Entre em contato agora e tire todas as suas dúvidas sem compromisso!
          </p>
          <div className="mt-4 flex w-full justify-center gap-4">
            <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
              Contato
            </button>
          </div>
        </div>
      </section>

      <section
        className="h-fit w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${h14})` }}
      >
        <div className="h-full w-full bg-[rgba(0,0,0,0.7)] px-[24px] py-14 md:px-[34px] md:py-26 lg:px-[44px]">
          <div className="mx-auto flex max-w-[768px] flex-col gap-6 text-center">
            <h2 className="text-3xl leading-8 font-bold text-white md:text-[38px] md:leading-10 lg:text-[43px] lg:leading-11">
              Mantenha-se informado com os meus insights jurídicos do meu blog
            </h2>
            <p className="text-[18px] text-white">
              Assine a minha newsletter para receber dicas jurídicas essenciais
              e as últimas atualizações diretamente na sua caixa de entrada no
              gmail.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 min-[600px]:flex-row">
              <input
                className="w-full border-2 border-white p-3 text-base text-white placeholder-white min-[600px]:max-w-[380px]"
                type="email"
                placeholder="Digite seu e-mail aqui"
                name="email_newsletter"
                id="email_newsletter"
              />
              <button className="px-auto w-full bg-white py-3 text-base font-bold text-black transition hover:bg-gray-100 min-[600px]:max-w-[116px]">
                Inscrever-se
              </button>
            </div>
            <p className="w-full text-center text-[14px] text-white">
              Ao clicar em Inscreva-se agora, você concorda com os meus Termos e
              Condições.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
