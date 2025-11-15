//este aqui não vou usar o mesmo componente PostBlogPage.jsx pq o layout do post de galeria de casos é diferente do layout do post de blog
import React from "react";

const PostCasoJuridico = () => {
  const casoData = {
    titulo: "Caso de Sucesso: Defesa em Ação Trabalhista",
    descricao:
      "Neste caso, representei um cliente acusado injustamente em uma ação trabalhista. Através de uma defesa sólida e apresentação de provas contundentes, conseguimos reverter a situação e garantir os direitos do meu cliente.",
    detalhes: [
      "Cliente: João Silva",
      "Data: 15 de Março de 2024",
      "Resultado: Absolvição total das acusações",
    ],
  };

  return (
    <>
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] px-[24px] py-10 md:px-[34px] lg:px-[44px]">
        <section id="section1">
          <div className="mt-28">
            <h6 className="m-0">Galeria de Casos</h6>
            <p className="m-2 inline h-fit w-fit bg-gray-500">Caso Jurídico</p>
          </div>
        </section>
        <main>
          <h1 className="m-0">{casoData.titulo}</h1>
          <p className="mt-4">{casoData.descricao}</p>
          <ul className="mt-4 list-disc pl-5">
            {casoData.detalhes.map((detalhe, index) => (
              <li key={index}>{detalhe}</li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default PostCasoJuridico;
