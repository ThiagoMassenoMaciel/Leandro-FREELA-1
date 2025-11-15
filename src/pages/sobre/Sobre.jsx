import React from "react";
import { Link } from "react-router-dom";
import s1 from "../../assets/sobre1.png";
import s2 from "../../assets/sobre2.png";
import s3 from "../../assets/sobre3.png";

const Sobre = () => {
  return (
    <>
      <section
        id="cabecalho"
        className="h-fit w-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${s1})` }}
      >
        {/*SECTION 1*/}
        <div
          className="flex h-full w-full items-center justify-start px-[24px] py-17 min-[700px]:py-20 md:px-[34px] lg:px-[44px] lg:py-25"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="flex h-fit w-full max-w-[768px] flex-col gap-5">
            <h2 className="text-[40px] font-bold md:text-5xl">
              Excelência e Compromisso
            </h2>
            <p className="text-base">
              Descubra soluções jurídicas especializadas e adaptadas às suas
              necessidades com o escritório de advocacia especializado de
              Leandro Viana.
            </p>
          </div>
        </div>
      </section>
      {/*SECTION 2*/}

      <section className="flex h-fit w-full flex-col gap-8 bg-white px-[24px] py-16 md:px-[34px] lg:flex-row-reverse lg:px-[44px]">
        <div className="flex h-fit w-full flex-col gap-5 md:gap-8 lg:gap-10">
          <h2 className="text-start text-4xl font-bold md:text-5xl">
            Conheça Leandro Viana: Seu Consultor Jurídico de Confiança
          </h2>
          <p className="text-[18px]">
            Leandro Viana é um advogado dedicado, com sólida formação acadêmica,
            formado em Direito por uma prestigiada universidade. Possui
            certificação em diversas especialidades jurídicas, incluindo direito
            de família e direito contratual, garantindo suporte integral aos
            seus clientes. Com anos de experiência, Leandro se dedica a fornecer
            soluções jurídicas personalizadas e adaptadas aos seus interesses.
          </p>

          <div className="mt-4 flex w-full justify-start gap-4">
            <button className="bg-black px-6 py-3 text-white transition hover:bg-gray-900">
              Contato
            </button>
          </div>
        </div>

        <div
          className="h-[65vh] w-full bg-cover bg-center px-[24px] min-[375px]:h-[calc(70vh+50vw)] min-[687px]:h-[calc(80vh+60vw)] md:px-[34px] lg:h-[calc(400px+20vw)] lg:px-[44px]"
          style={{ backgroundImage: `url(${s2})` }}
        ></div>
      </section>

      {/*SECTION 3*/}
      <section
        className="h-fit w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${s3})` }}
      >
        <div className="h-full w-full bg-[rgba(0,0,0,0.8)] px-[24px] py-16 md:px-[34px] lg:px-[44px] lg:py-26">
          <div className="mx-auto flex h-fit w-full max-w-[768px] flex-col items-center justify-center gap-5 text-white">
            <h2 className="text-center text-4xl font-bold">
              Aguardo a sua consultoria jurídica
            </h2>
            <p className="text-center text-base">
              Entre em contato comigo para discutir suas necessidades jurídicas
              e descobrir como posso ajudá-lo.
            </p>
            <div className="mt-4 w-full text-center">
              <button className="bg-white px-6 py-3 text-black transition hover:font-bold">
                Contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
