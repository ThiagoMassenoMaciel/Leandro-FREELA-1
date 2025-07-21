import React from "react";

import ser1 from "../../assets/servicos1.png";
import ser2 from "../../assets/servicos2.png";
import ser3 from "../../assets/servicos3.png";
import ser4 from "../../assets/servicos4.png";
import ser5 from "../../assets/servicos5.png";
import ser6 from "../../assets/servicos6.png";
import ser7 from "../../assets/servicos7.png";
import ser_icon1 from "../../assets/servicos_icon1.svg";
import ser_icon2 from "../../assets/servicos_icon2.svg";
import ser_icon3 from "../../assets/servicos_icon3.svg";
import ser_icon4 from "../../assets/servicos_icon4.svg";
import ser_icon5 from "../../assets/servicos_icon5.svg";
import ser_icon6 from "../../assets/servicos_icon6.svg";
import ser_icon7 from "../../assets/servicos_icon7.svg";
import ser_icon8 from "../../assets/servicos_icon8.svg";
import ser_icon9 from "../../assets/servicos_icon9.svg";
import ser_icon10 from "../../assets/servicos_icon10.svg";
import ser_icon11 from "../../assets/servicos_icon11.svg";
import ser_icon12 from "../../assets/servicos_icon12.svg";
import ser_icon13 from "../../assets/servicos_icon13.svg";
import ser_icon14 from "../../assets/servicos_icon14.svg";

const Servicos = () => {
  return (
    <>
      {/*SECTION 1*/}

      <section
        className="w-full h-fit  bg-cover bg-center"
        style={{ backgroundImage: `url(${ser1})` }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.8)] py-16 px-[24px] md:px-[34px] lg:px-[44px]">
          <div className="w-fit h-fit flex flex-col justify-center text-center gap-5 max-w-[768px] mx-auto text-white">
            <h2 className="text-[40px] font-bold">Soluções Jurídicas</h2>
            <p className="text-[18px]">
              Serviços jurídicos especializados e adaptados às suas
              necessidades, garantindo que seus direitos sejam protegidos e
              mantidos.
            </p>
          </div>
        </div>
      </section>

      {/*SECTION 2*/}
      <section className="bg-white">
        <div className="w-full h-fit flex flex-col gap-12 py-16 px-[24px] md:px-[34px] lg:px-[44px]">
          <h1 className="text-4xl text-center font-bold leading-9">
            Explore os meus serviços jurídicos abrangentes adaptados às suas
            necessidades
          </h1>

          <div className="w-full h-fit grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-6 lg:gap-20">
            <section
              className="w-full h-fit text-center text-black flex flex-col gap-5  p-5 lg:col-span-2"
              id="sombreamento"
            >
              <img
                className="mx-auto animate-bounce"
                src={ser_icon1}
                alt="imagem"
              />
              <h3 className="text-[20px] font-bold">
                Orientação especializada em questões de direito de família para
                sua tranquilidade
              </h3>
              <p className="text-base">
                Navegue por questões familiares complexas com suporte jurídico
                compassivo e informado.
              </p>
            </section>

            <section
              className="w-full h-fit text-center text-black flex flex-col gap-5  shadow-xl/30 p-5 lg:col-span-2 "
              id="sombreamento"
            >
              <img
                className="mx-auto animate-bounce"
                src={ser_icon2}
                alt="imagem"
              />
              <h3 className="text-[20px] font-bold">
                Defenda seus direitos com minha experiência de representação em
                defesa criminal
              </h3>
              <p className="text-base">
                Fornecerei estratégias de defesa robustas para proteger sua
                liberdade e futuro.
              </p>
            </section>

            <section
              className="w-full h-fit text-center text-black flex flex-col gap-5  shadow-xl/30 p-5 lg:col-span-2"
              id="sombreamento"
            >
              <img
                className="mx-auto animate-bounce"
                src={ser_icon3}
                alt="imagem"
              />
              <h3 className="text-[20px] font-bold">
                Assessoria jurídica em direito tributário para proteção do seu
                patrimônio empresarial
              </h3>
              <p className="text-base">
                Ajudarei você com segurança nas obrigações fiscais, evitando
                riscos e passivos tributários indesejados.
              </p>
            </section>

            <section
              className="w-full h-fit text-center text-black flex flex-col gap-5  shadow-xl/30 p-5 lg:col-span-3"
              id="sombreamento"
            >
              <img
                className="mx-auto animate-bounce"
                src={ser_icon4}
                alt="imagem"
              />
              <h3 className="text-[20px] font-bold">
                Orientação especializada em direito previdenciário para
                segurança e tranquilidade financeira
              </h3>
              <p className="text-base">
                Garanta seus direitos previdenciários com suporte jurídico
                qualificado, ético e comprometido com resultados.
              </p>
            </section>

            <section
              className="w-full h-fit text-center text-black flex flex-col gap-5  shadow-xl/30 p-5 md:col-span-2 lg:col-span-3"
              id="sombreamento"
            >
              <img
                className="mx-auto animate-bounce"
                src={ser_icon5}
                alt="imagem"
              />
              <h3 className="text-[20px] font-bold">
                Assessoria especializada em direito trabalhista para proteger
                seus direitos profissionais
              </h3>
              <p className="text-base">
                Atue com segurança em questões trabalhistas, evitando prejuízos
                e garantindo seus direitos corretamente.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/*SECTION 3*/}
      <section className=" bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] py-25 px-[24px] md:px-[34px] lg:px-[44px] ">
        <div className=" flex flex-col gap-12 text-center md:flex-row md:text-start md:justify-start mb-16">
          <h2 className="text-4xl font-bold md:w-1/2">
            Seu caminho para suporte jurídico especializado
          </h2>
          <p className="text-[18px]  md:w-1/2">
            Trabalhando comigo, suas necessidades são priorizadas desde o
            primeiro momento em que você me contata. Irei explicar para você
            cada etapa até a resolução do seu caso, garantindo que você se sinta
            apoiado e informado.
          </p>
        </div>

        <div className="grid grid-cols-1 text-center gap-10 min-[900px]:grid-cols-2 lg:grid-cols-3 lg:text-start">
          <section className="flex flex-col justify-start items-center gap-2 md:gap-4 lg:items-start">
            <img
              className="w-[48px] h-[49px]"
              src={ser_icon6}
              alt="icone etapa 1"
            />
            <h3 className="text-[32px] font-bold">
              Etapa 1: Consulta e Avaliação Inicial
            </h3>
            <p className="text-base">
              Durante esta fase, Leandro reúne todas as informações necessárias
              para avaliar a sua situação.
            </p>
          </section>

          <section className="flex flex-col justify-start items-center gap-2 md:gap-4 lg:items-start">
            <img
              className="w-[48px] h-[49px]"
              src={ser_icon7}
              alt="icone etapa 2"
            />
            <h3 className="text-[32px] font-bold">
              Etapa 2: Desenvolvimento e planejamento de estratégia
            </h3>
            <p className="text-base">
              Aqui, uma estratégia jurídica personalizada é elaborada.
            </p>
          </section>

          <section className="flex flex-col justify-start items-center gap-2 md:gap-4 min-[900px]:col-span-2 lg:col-span-1 lg:items-start">
            <img
              className="w-[48px] h-[49px]"
              src={ser_icon8}
              alt="icone etapa 3"
            />
            <h3 className="text-[32px] font-bold">
              Etapa 3: Implementação e Execução
            </h3>
            <p className="text-base">
              Leandro executa o plano diligentemente, mantendo você informado.
            </p>
          </section>
        </div>
      </section>

      {/*SECTION 4*/}
      <section className="w-full h-fit py-16 flex flex-col items-center gap-12 px-[24px] md:px-[34px] lg:px-[44px] lg:flex-row-reverse">
        <div className="flex flex-col gap-3 text-start lg:w-1/2">
          <h1 className="text-[32px] font-bold text-center lg:text-start">
            Serviços de Direito de Família compassivos para você
          </h1>
          <p className="text-base">
            Lidar com o direito de família pode ser desafiador. Os meus serviços
            são projetados para apoiá-lo em divórcios, guarda de filhos e
            acordos pré-nupciais.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <section className="flex flex-col gap-3">
              <img
                className="w-[64px] h-[64px]"
                src={ser_icon9}
                alt="icone 9"
              />
              <h4 className="text-[18px] font-bold">
                Soluções para o divórcio
              </h4>
              <p className="text-base">
                Orientação especializada para ajudar você no processo de
                divórcio com cuidado e profissionalismo.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <img
                className="w-[64px] h-[64px]"
                src={ser_icon10}
                alt="icone 9"
              />
              <h4 className="text-[18px] font-bold">Questões de custódia</h4>
              <p className="text-base">
                Proteger os melhores interesses do seu filho durante os acordos
                de custódia é nossa maior prioridade.
              </p>
            </section>
          </div>
        </div>

        <div
          className="w-full h-[calc(50vh+10vw)] bg-cover bg-center lg:h-[640px] lg:w-1/2"
          style={{ backgroundImage: `url(${ser2})` }}
        ></div>
      </section>

      {/*SECTION 5*/}
      <section className=" bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] w-full h-fit py-16 flex flex-col items-center gap-12 px-[24px] md:px-[34px] lg:px-[44px] lg:flex-row">
        <div className="flex flex-col gap-3 text-start lg:w-1/2">
          <h1 className="text-[32px] font-bold text-center lg:text-start">
            Serviços abrangentes de defesa criminal adaptados às suas
            necessidades
          </h1>
          <p className="text-base">
            Os meus serviços de defesa criminal garante que você receba
            representação especializada. Ofereço assessoria jurídica
            personalizada para sua situação específica, capacitando você a tomar
            decisões informadas.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <section className="flex flex-col gap-3">
              <h4 className="text-3xl font-bold lg:text-4xl">Especialista</h4>
              <p className="text-base">
                Defendendo seus direitos com integridade e dedicação.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h4 className="text-3xl font-bold lg:text-4xl">Confiável</h4>
              <p className="text-base">
                Seu parceiro de confiança para enfrentar desafios legais.
              </p>
            </section>
          </div>
        </div>

        <div
          className="w-full h-[calc(50vh+10vw)] bg-cover bg-center lg:h-[600px] lg:w-1/2"
          style={{ backgroundImage: `url(${ser3})` }}
        ></div>
      </section>

      {/*SECTION 6*/}
      <section className="w-full h-fit py-16 flex flex-col items-center gap-12 px-[24px] md:px-[34px] lg:px-[44px] lg:flex-row-reverse">
        <div className="flex flex-col gap-3 text-start lg:w-1/2">
          <h1 className="text-[32px] font-bold text-center lg:text-start">
            Serviços especializados em direito tributário adaptados às suas
            necessidades
          </h1>
          <p className="text-base">
            Lidar com obrigações fiscais e tributárias pode ser desafiador. Meus
            serviços incluem planejamento tributário estratégico, defesa em
            autuações, análise de passivos fiscais, consultoria preventiva e
            recuperação de créditos, sempre com foco na proteção do seu
            patrimônio e no cumprimento correto das obrigações legais.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 CUSTOM-grid-container lg:grid-cols-1">
            <section className="flex gap-4  min-[896px]:col-span-2 lg:col-span-1 CUSTOM-grid-item">
              <img
                className="w-[48px] h-[48px] animate-pulse
                "
                src={ser_icon11}
                alt="icone 11"
              />

              <p className="text-base">
                Realizo planejamento tributário estratégico para reduzir
                legalmente sua carga de impostos.
              </p>
            </section>
            <section className="flex gap-4  min-[896px]:col-span-2 lg:col-span-1 CUSTOM-grid-item">
              <img
                className="w-[48px] h-[48px]  animate-pulse"
                src={ser_icon11}
                alt="icone 11"
              />

              <p className="text-base">
                Atuo na defesa administrativa e judicial em casos de autuações
                fiscais e cobranças indevidas.
              </p>
            </section>
            <section className="flex gap-4  min-[896px]:col-span-2 lg:col-span-1 CUSTOM-grid-item">
              <img
                className="w-[48px] h-[48px]  animate-pulse"
                src={ser_icon11}
                alt="icone 11"
              />

              <p className="text-base">
                Faço análise detalhada de passivos tributários para minimizar
                riscos e impactos financeiros.
              </p>
            </section>
            <section className="flex gap-4  min-[896px]:col-span-3 row-span-1  lg:col-span-1 CUSTOM-grid-item CUSTOM-span-3">
              <img
                className="w-[48px] h-[48px]  animate-pulse"
                src={ser_icon11}
                alt="icone 11"
              />

              <p className="text-base">
                Ofereço consultoria preventiva para garantir conformidade e
                evitar problemas com o Fisco.
              </p>
            </section>

            <section className="flex gap-4 sm:col-span-2  min-[896px]:col-span-3  row-span-1 lg:col-span-1 CUSTOM-grid-item CUSTOM-span-3">
              <img
                className="w-[48px] h-[48px]  animate-pulse"
                src={ser_icon11}
                alt="icone 11"
              />

              <p className="text-base">
                Auxilio na recuperação de créditos tributários pagos
                indevidamente ou a maior.
              </p>
            </section>
          </div>
        </div>

        <div
          className="w-full h-[calc(50vh+10vw)] bg-cover bg-center lg:h-[640px] lg:w-1/2"
          style={{ backgroundImage: `url(${ser4})` }}
        ></div>
      </section>

      {/*SECTION 8*/}
      <section className="w-full h-fit py-16 bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] items-center flex flex-col gap-12 px-[24px] md:px-[34px] lg:px-[44px] lg:flex-row">
        <div className="flex flex-col gap-3 text-start lg:w-1/2">
          <h1 className="text-[32px] font-bold text-center lg:text-start">
            Cuidando dos seus direitos previdenciários com segurança e
            comprometimento
          </h1>
          <p className="text-base">
            Lidar com questões previdenciárias pode ser complexo. Meus serviços
            são pensados para ajudá-lo na busca por benefícios, revisões,
            aposentadorias e outros direitos previdenciários, com segurança e
            responsabilidade.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <section className="flex flex-col gap-3">
              <img
                className="w-[64px] h-[64px]"
                src={ser_icon12}
                alt="icone 9"
              />
              <h4 className="text-[18px] font-bold">
                Aposentadorias e Benefícios
              </h4>
              <p className="text-base">
                Assessoria especializada para garantir sua aposentadoria e
                acesso a benefícios previdenciários com segurança e agilidade.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <img
                className="w-[64px] h-[64px]"
                src={ser_icon13}
                alt="icone 9"
              />
              <h4 className="text-[18px] font-bold">
                Revisões e Planejamento Previdenciário
              </h4>
              <p className="text-base">
                Corrija falhas no cálculo de benefícios ou planeje sua
                aposentadoria para maximizar seus direitos futuros.
              </p>
            </section>
          </div>
        </div>
        <div
          className="w-full h-[calc(50vh+10vw)] bg-cover bg-center lg:h-[640px] lg:w-1/2"
          style={{ backgroundImage: `url(${ser5})` }}
        ></div>
      </section>

      {/*SECTION 9*/}
      <section className="w-full h-fit py-16 flex flex-col items-center gap-12 px-[24px] md:px-[34px] lg:px-[44px] lg:flex-row-reverse">
        <div className="flex flex-col gap-3 text-start lg:w-1/2">
          <h1 className="text-[32px] font-bold text-center lg:text-start">
            Soluções completas em direito trabalhista para proteger seus
            direitos profissionais
          </h1>
          <p className="text-base">
            Meus serviços em direito trabalhista oferecem suporte especializado
            para trabalhadores e empresas. Atuo na prevenção de conflitos,
            defesa de direitos, consultoria e resolução de litígios
            trabalhistas, sempre com comprometimento e responsabilidade.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <section className="flex flex-col gap-3">
              <h4 className="text-3xl font-bold lg:text-4xl">Comprometido</h4>
              <p className="text-base">
                Defendendo seus direitos trabalhistas com seriedade, ética e
                total dedicação ao seu caso.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h4 className="text-3xl font-bold lg:text-4xl">Seguro</h4>
              <p className="text-base">
                Atuação jurídica confiável para enfrentar disputas, garantir
                indenizações e assegurar seus direitos trabalhistas.
              </p>
            </section>
          </div>
        </div>
        <div
          className="w-full h-[calc(50vh+10vw)] bg-cover bg-center lg:h-[600px] lg:w-1/2"
          style={{ backgroundImage: `url(${ser6})` }}
        ></div>
      </section>

      {/*SECTION 10*/}
      <section className="flex flex-col justify-start py-16 px-[24px] md:px-[34px] lg:px-[44px] lg:py-26 mb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Quem confia, recomenda!</h2>
          <p className="text-base mt-5">Depoimentos de clientes</p>
        </div>

        <div className="mt-12 lg:mt-20  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <section
            className="w-full h-fit border-2 border-black p-6"
            id="CUSTOM-sombreado-animado"
          >
            <img src={ser_icon14} alt="estrelinhas" />
            <p className="text-base mt-5">
              "Profissional excepcional! Desde o primeiro atendimento, senti
              segurança e clareza. Meu processo foi resolvido com rapidez e
              total transparência..."
            </p>
          </section>
          <section
            className="w-full h-fit border-2 border-black p-6"
            id="CUSTOM-sombreado-animado"
          >
            <img src={ser_icon14} alt="estrelinhas" />
            <p className="text-base mt-5">
              "Profissional excepcional! Desde o primeiro atendimento, senti
              segurança e clareza. Meu processo foi resolvido com rapidez e
              total transparência..."
            </p>
          </section>
          <section
            className="w-full h-fit border-2 border-black p-6 md:col-span-2 lg:col-span-1"
            id="CUSTOM-sombreado-animado"
          >
            <img src={ser_icon14} alt="estrelinhas" />
            <p className="text-base mt-5">
              "Profissional excepcional! Desde o primeiro atendimento, senti
              segurança e clareza. Meu processo foi resolvido com rapidez e
              total transparência..."
            </p>
          </section>
        </div>
      </section>

      {/*SECTION 11*/}
      <section
        className="w-full h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${ser7})` }}
      >
        <div className="w-full h-fit py-16 flex flex-col text-white gap-5 text-start bg-[rgba(0,0,0,0.7)] px-[24px] md:px-[34px] lg:px-[44px] lg:py-28">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Sua jornada jurídica começa aqui
          </h1>
          <p className="text-[18px]">
            Entre em contato com Leandro hoje mesmo para discutir suas
            necessidades jurídicas e agendar uma consulta personalizada.
          </p>
          <div className="flex gap-4 justify-start w-full">
            <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition border-none">
              Contato
            </button>
            <button className="px-6 py-3 bg-transparent text-white shadow-[inset_0_0_0_1px_white] hover:bg-black hover:text-white transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
