import galeria1 from "../../assets/galeriaCasos1.png";

const Bloco = ({ texto }) => {
  return (
    <>
      <article className="bg-red-500">
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
];

function retornarCOLUNA1() {
  return (
    <>
      {array.map((i, key) => (
        <Bloco key={key} texto={i} />
      ))}
    </>
  );
}

const GaleriaCasos = () => {
  const valor = "p-10";
  return (
    <>
      {/* SECTION 1 */}
      <section
        className="w-full h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${galeria1})` }}
      >
        <div className="w-full h-[calc(100vh-58px)] min-h-[558px] bg-[rgba(0,0,0,0.75)] flex flex-col gap-6 justify-center items-center px-[24px] md:px-[34px] lg:px-[44px]">
          <div className="text-white text-center flex flex-col gap-6">
            <h1 className="text-[40px] font-bold">Sucessos Jurídicos</h1>
            <p className="text-base">
              <i className="font-bold">
                Conheça meu histórico de atuação jurídica
              </i>
              &nbsp; em fornecer serviços excepcionais e adaptado aos clientes
            </p>
          </div>
          <div className="w-[190px] text-black grid grid-cols-1 mx-auto gap-2 min-[420px]:grid-cols-2  min-[420px]:w-[376px] md:grid-cols-3 md:w-[600px] md:gap-4">
            <button className="border-0 bg-white hover:bg-gray-700 font-bold p-2">
              Serviços jurídicos
            </button>
            <button className="border-0 bg-white hover:bg-gray-700 font-bold p-2">
              Foco no cliente
            </button>

            <button className="border-0 bg-white  hover:bg-gray-700 font-bold p-2 min-[420px]:col-span-2 md:col-span-1">
              Consultor de confiança
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col gap-6 justify-center items-center px-[24px] md:px-[34px] lg:px-[44px]">
        <div className="text-center">
          <h2 className="text-[43px] font-bold">Casos jurídicos notáveis</h2>
          <p className="text-[18px]">
            Explore os meus projetos jurídicos bem-sucedidos.
          </p>
        </div>
        <article></article>
      </section>

      {/* SECTION 3 */}

      <section className={`bg-black ${valor}`}>
        <div className="bg-red-950 p-20">{array.map((i) => i)}</div>
      </section>
      <section className={`bg-black ${valor}`}>
        <div className="bg-red-950 p-20">{retornarCOLUNA1()}</div>
      </section>
      {/* SECTION 3 */}
      {/* SECTION 3 */}
      {/* SECTION 3 */}
    </>
  );
};

export default GaleriaCasos;
