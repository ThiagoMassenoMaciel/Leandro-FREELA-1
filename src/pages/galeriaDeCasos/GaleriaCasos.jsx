import galeria1 from "../../assets/galeriaCasos1.png";
import { useRef } from "react";

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

const GaleriaCasos = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
        className="flex flex-col items-center justify-center gap-6 px-[24px] py-16 md:px-[34px] lg:px-[44px]"
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

      <section className="bg-white px-[24px] md:px-[34px] lg:px-[44px]">
        {/*<div className="grid grid-cols-1 justify-center gap-2.5 bg-red-950 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {retornarCOLUNA1()
        </div>
        */}
      </section>
      {/* SECTION 3 */}
      {/* SECTION 3 */}
      {/* SECTION 3 */}
    </>
  );
};

export default GaleriaCasos;
