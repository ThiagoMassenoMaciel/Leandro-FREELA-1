import React, { use, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

import FormularioJuridico3 from "../../components/formulario_juridico_dinamico3.jsx";

const Home = () => {
  const [faq1, setFaq1] = useState(true);

  const [faq2, setFaq2] = useState(true);
  const [faq3, setFaq3] = useState(true);
  const [faq4, setFaq4] = useState(true);
  const [faq5, setFaq5] = useState(true);
  const [faq6, setFaq6] = useState(true);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && (
        <FormularioJuridico3 className="w-full h-full fixed l-0 t-0 z-100" />
      )}
      <div className="w-full h-[120vh] overflow-hidden gap-[calc(34px+1vw)] bg-white flex flex-col-reverse lg:flex-row-reverse lg:items-center  lg:h-[calc(100vh-58px)] px-[24px] lg:px-[44px] md:px-[34px]">
        <div className="flex overflow-hidden flex-row mx-auto lg:mx-0 gap-[12px] w-[80vw] h-[50vh] lg:w-[50vw] md:w-[60vw] gap-4 h-screen sm:w-[70vw]">
          <div
            className="h-fit w-1/2 flex flex-col justify-center items-center gap-[10px] md:gap-[16px]"
            id="MOVEpartONE"
          >
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h1})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h2})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h3})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h4})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h5})` }}
            ></div>
          </div>

          <div
            className="h-fit w-1/2 flex flex-col justify-center items-center gap-[10px] md:gap-[16px]"
            id="MOVEpartTWO"
          >
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h6})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h7})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h8})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h9})` }}
            ></div>
            <div
              className="w-full h-[50vw] sm:h-[calc(35vh+10vw)] bg-center bg-cover"
              style={{ backgroundImage: `url(${h10})` }}
            ></div>
          </div>
        </div>
        <section>
          <main className="flex flex-col text-center justify-between h-fit w-full lg:w-[40vw] items-start">
            <h1 className="text-4xl font-bold text-center mb-4 w-full mt-6 lg:text-start lg:mt-0 ">
              Leandro Viana
            </h1>
            <h3 className="text-2xl font-semibold text-center mb-4 w-full lg:text-start">
              Seu Parceiro Jurídico de Confiança
            </h3>
            <p className="text-lg text-gray-700 text-center lg:text-start">
              Sou especialista em fornecer orientação jurídica especializada e
              personalizada às suas necessidades. Deixe-me ajudá-lo a navegar
              pelas complexidades do direito com confiança e clareza.
            </p>
            <div className="mt-8 flex gap-4 justify-center w-full lg:justify-start">
              <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
                Contato
              </button>
              <button className="px-6 py-3 bg-white text-black shadow-[inset_0_0_0_2px_black] hover:bg-black hover:text-white transition">
                Saiba Mais
              </button>
            </div>
          </main>
        </section>
      </div>
      <section className="box-border flex flex-col-reverse gap-[calc(34px+1vw)] justify-center items-start w-full h-fit py-[80px] lg:flex-row px-[24px] lg:px-[44px] md:px-[34px]">
        <div
          className="h-[50vh] w-full bg-center bg-cover lg:w-1/2 lg:h-[100vh]"
          style={{ backgroundImage: `url(${h11})` }}
        ></div>
        <div className="w-full box-border items-center text-center flex flex-col lg:w-1/2 lg:text-start lg:items-start">
          <p className="text-base font-bold text-center lg:text-start">
            Especialização
          </p>
          <h2 className="font-bold mb-4 text-2xl lg:text-5xl lg:items-start md:text-4xl sm:text-3xl">
            Serviços jurídicos abrangentes feitos sob medida para você
          </h2>
          <p className="text-base">
            Atuação em todas as áreas em especial trabalhista, previdenciário,
            família e tributário O meu compromisso é seriedade, competência,
            prazos, empatia e confiança para atender de acordo com os seus
            interesses....
          </p>
          <div className="mt-8 flex gap-4 justify-center w-full lg:justify-start">
            <button className="px-6 py-3 bg-white text-black shadow-[inset_0_0_0_2px_black] hover:bg-black hover:text-white transition">
              Saiba Mais
            </button>
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
              Contato
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-fit py-20 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-22 lg:gap-20 lg:flex-row lg:items-start px-[24px] lg:px-[44px] md:px-[34px] bg-gradient-to-b from-[#f5f5f5] to-[#fefefe]">
        <div
          className="w-full h-full flex flex-col items-start gap-15"
          id="leftside"
        >
          <div className="w-full h-fit flex flex-col gap-3 text-center">
            <h2 className="font-bold text-center text-[24px] leading-7 md:text-3xl md:leading-8 lg:text-[43px] lg:leading-11 lg:text-start">
              Seu processo nas mãos certas, com quem entrega resultado.
            </h2>
            <p className="text-[18px] font-bold text-center  lg:text-start md:text-[20px]">
              Seu direito, minha prioridade. Sua vitória, minha missão.
            </p>
            <p className="text-[16px] text-center  lg:text-start md:text-[18px]">
              Ao escolher Leandro Viana, você recebe atendimento jurídico
              personalizado para empresas, pessoas físicas e adaptado à sua
              situação específica. Atuando com ética e eficiência acompanhada de
              uma ampla experiência e histórico comprovado.
            </p>
            <div className="flex gap-4 justify-center w-full lg:justify-start">
              <button className="px-6 py-3 bg-white text-black shadow-[inset_0_0_0_2px_black] hover:bg-black hover:text-white transition">
                Saiba Mais
              </button>
              <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
                Contato
              </button>
            </div>
          </div>

          <div
            className="hidden lg:flex lg:w-full lg:h-full lg:bg-cover lg:bg-center"
            style={{ backgroundImage: `url(${h12})` }}
          ></div>
        </div>

        <div
          className="w-full h-fit flex flex-col gap-8 justify-center items-start"
          id="rightside"
        >
          <section className="flex flex-col p-8 gap-4 items-center h-fit w-full lg:items-start border-solid border-2 border-black">
            <img className="w-[48px] h-[48px]" src={h_icon1} alt="icon1" />
            <h3 className="font-bold text-2xl text-center lg:text-start">
              Estratégias Jurídicas Exclusivas
            </h3>
            <p className="text-[16px] text-center lg:text-start ">
              Cada caso é tratado com um plano estratégico único. Eu realizo
              análises profundas para criar soluções personalizadas, garantindo
              vantagem competitiva e melhores resultados para os meus clientes.
            </p>
          </section>
          <section className="flex flex-col p-8 gap-4 items-center h-fit w-full lg:items-start border-solid border-2 border-black">
            <img className="w-[48px] h-[48px]" src={h_icon2} alt="icon1" />
            <h3 className="font-bold text-2xl text-center lg:text-start">
              Experiência local
            </h3>
            <p className="text-[16px] text-center lg:text-start ">
              Através de anos dedicados à advocacia construi uma sólida
              experiência , desenvolvendo expertise em diferentes áreas do
              Direito para melhor atendê-lo. Isso garante maior agilidade e
              transparência em todo o atendimento.
            </p>
          </section>
          <section className="flex flex-col p-8 gap-4 items-center h-fit w-full lg:items-start border-solid border-2 border-black">
            <img className="w-[48px] h-[48px]" src={h_icon3} alt="icon1" />
            <h3 className="font-bold text-2xl text-center lg:text-start">
              Sucesso Processual
            </h3>
            <p className="text-[16px] text-center lg:text-start ">
              Os meus índices de vitória superam a média do mercado, refletindo
              a eficiência técnica e a dedicação extrema em cada ação. Trabalho
              com metas e resultados concretos.
            </p>
          </section>
          <section className="flex flex-col p-8 gap-4 items-center h-fit w-full lg:items-start border-solid border-2 border-black">
            <img className="w-[48px] h-[48px]" src={h_icon4} alt="icon1" />
            <h3 className="font-bold text-2xl text-center lg:text-start">
              Especialização em Nichos Estratégicos
            </h3>
            <p className="text-[16px] text-center lg:text-start ">
              Considerando o foco em áreas específicas do Direito Trabalhista,
              Família, Previdenciário, Criminal, Tributário, tenho conhecimento
              aprofundado e atuação extremamente qualificada. Isso significa
              menos erro, mais segurança e previsibilidade para o seu caso.
            </p>
          </section>
        </div>
      </section>

      <section className="w-full h-fit bg-white py-10 mb-10 md:py-16 px-[24px] lg:px-[44px] md:px-[34px]">
        <div className=" flex flex-col gap-6 items-center max-w-[640px] mx-auto">
          <img src={h_icon5} />
          <p className="text-lg font-bold text-center">
            "Leandro forneceu orientação jurídica excepcional durante meu caso,
            tornando todo o processo tranquilo e sem estresse."
          </p>
        </div>
      </section>

      <section
        className="w-full h-fit bg-white bg-center bg-cover"
        style={{ backgroundImage: `url(${h13})` }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.81)] px-[24px] lg:px-[44px] md:px-[34px] py-6 text-white sm:py-20">
          <div className="w-full h-fit py-6 flex flex-col gap-6 items-start max-w-[768px] md:py-15 ">
            <h1 className="text-4xl text-start font-bold">
              Obtenha sua consultoria jurídica
            </h1>
            <p className="text-base ">
              Entre em contato com Leandro Viana agora para discutir suas
              necessidades jurídicas e receber orientação especializada
              personalizada para você.
            </p>
            <div className="flex gap-4 justify-start w-full lg:justify-start">
              <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition border-none">
                Contato
              </button>
              <button className="px-6 py-3 bg-transparent text-white shadow-[inset_0_0_0_1px_white] hover:bg-black hover:text-white transition">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center w-full h-fit py-20 px-[24px] lg:px-[44px] md:px-[34px]">
          <h2 className="text-4xl font-bold text-center">
            Perguntas frequentes
          </h2>
          <p className="text-base text-gray-700 mt-4">
            Encontre respostas para suas perguntas sobre os meus serviços
            jurídicos e como podemos ajudá-lo.
          </p>
        </div>

        <div className="w-full h-fit flex flex-col gap-4 px-[24px] lg:px-[44px] md:px-[34px] max-w-[768px]  mx-auto">
          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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
          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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
              <div className="mt-8 flex gap-4 w-full justify-start">
                <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
                  Contato
                </button>
              </div>
            </div>
          </section>

          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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
              <span className="w-full h-fit flex flex-row mb-3 max-[496px]:flex-col">
                Primeiro você responde o meu formulário &nbsp;
                <button
                  className="w-fit text-sm m-0 p-1 border-0 cursor pointer display: inline bg-blue-800 text-white"
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
                <i className="text-blue-800 inline">(85)9 9298-6264</i>, ou
                mande um email para{" "}
                <i className="text-blue-800">leandrovianaadv691@gmail.com</i>
                &nbsp;. Vamos combinar juntos um horário conveniente.
              </span>
            </p>
          </section>
          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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
          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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
          <section className="w-full h-fit p-5 text-start bg-white border-2 border-black">
            <div
              className="flex justify-between items-center"
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

        <div className="mx-auto flex flex-col gap-4 max-w-[428px] h-fit py-20 px-[24px] lg:px-[44px] md:px-[34px] text-center">
          <h2 className="font-bold text-2xl md:text-[34px]">
            Ainda tem dúvidas ?
          </h2>
          <p className="text-center text-base">
            Entre em contato agora e tire todas as suas dúvidas sem compromisso!
          </p>
          <div className="mt-4 flex gap-4 w-full justify-center">
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
              Contato
            </button>
          </div>
        </div>
      </section>

      <section
        className="w-full h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${h14})` }}
      >
        <div className="h-full w-full bg-[rgba(0,0,0,0.7)] py-14 px-[24px] lg:px-[44px] md:px-[34px] md:py-26">
          <div className="max-w-[768px] mx-auto flex flex-col gap-6 text-center">
            <h2 className="text-white text-3xl leading-8 font-bold md:text-[38px] md:leading-10 lg:text-[43px] lg:leading-11">
              Mantenha-se informado com os meus insights jurídicos do meu blog
            </h2>
            <p className="text-white text-[18px]">
              Assine a minha newsletter para receber dicas jurídicas essenciais
              e as últimas atualizações diretamente na sua caixa de entrada no
              gmail.
            </p>
            <div className="flex flex-col gap-3 justify-center items-center min-[600px]:flex-row w-full">
              <input
                className="border-2 border-white p-3 text-white text-base w-full min-[600px]:max-w-[380px] placeholder-white"
                type="email"
                placeholder="Digite seu e-mail aqui"
                name="email_newsletter"
                id="email_newsletter"
              />
              <button className="w-full min-[600px]:max-w-[116px] px-auto py-3 bg-white text-black text-base font-bold  hover:bg-gray-100 transition">
                Inscrever-se
              </button>
            </div>
            <p className="text-[14px] text-white text-center w-full ">
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
