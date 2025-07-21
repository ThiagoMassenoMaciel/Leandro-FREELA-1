import React from "react";
import { Link } from "react-router-dom";
import s1 from "../../assets/sobre1.png";
import s2 from "../../assets/sobre2.png";
import s3 from "../../assets/sobre3.png";

const Sobre = () => {
  return (
    <>
      <section
        className="w-full h-fit  text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${s1})` }}
      >
        {/*SECTION 1*/}
        <div
          className=" w-full h-full flex justify-start items-center py-17 px-[24px] min-[700px]:py-20 md:px-[34px] lg:px-[44px] lg:py-25"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="w-full h-fit flex flex-col gap-5 max-w-[768px]">
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

      <section className="w-full h-fit bg-white flex flex-col gap-8 py-16 px-[24px] lg:px-[44px] lg:flex-row-reverse md:px-[34px]">
        <div className="w-full h-fit flex flex-col gap-5 md:gap-8 lg:gap-10">
          <h2 className="text-4xl font-bold text-start md:text-5xl">
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

          <div className="mt-4 flex gap-4 w-full justify-start">
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
              Contato
            </button>
          </div>
        </div>

        <div
          className="w-full h-[65vh] bg-cover bg-center min-[375px]:h-[calc(70vh+50vw)] min-[687px]:h-[calc(80vh+60vw)]  px-[24px] md:px-[34px] lg:px-[44px] lg:h-[calc(400px+20vw)]"
          style={{ backgroundImage: `url(${s2})` }}
        ></div>
      </section>

      {/*SECTION 3*/}
      <section
        className="w-full h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${s3})` }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.8)] py-16 px-[24px] md:px-[34px] lg:px-[44px] lg:py-26 ">
          <div className="w-full h-fit flex flex-col justify-center items-center gap-5 max-w-[768px] mx-auto text-white ">
            <h2 className="text-4xl font-bold text-center">
              Aguardo a sua consultoria jurídica
            </h2>
            <p className="text-base text-center">
              Entre em contato comigo para discutir suas necessidades jurídicas
              e descobrir como posso ajudá-lo.
            </p>
            <div className="mt-4 text-center w-full">
              <button className="px-6 py-3 bg-white text-black hover:font-bold transition">
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
