import React from "react";

const Terms = () => {
  return (
    <div className="bg-white text-black px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Termos de Serviço</h1>
      <p className="text-gray-600 mb-8">Última atualização: julho de 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Objetivo do site</h2>
      <p className="mb-4">
        O site tem finalidade informativa e institucional, apresentando os
        serviços jurídicos prestados por Leandro Viana, advogado autônomo. Não
        constitui, em hipótese alguma, consultoria jurídica automatizada ou
        vínculo contratual online.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Uso do conteúdo</h2>
      <p className="mb-4">
        Alguns dos textos, ícones, imagens, logotipos e demais conteúdos foram
        adquiridos por ferramentas gratuitas da internet.Enquanto outras imagens
        são de propriedade do Leandro Viana. É proibida a reprodução das
        fotografias do proprietário deste site sem autorização prévia.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Responsabilidade do usuário
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Utilizar o site de maneira ética e legal;</li>
        <li>
          Não tentar acessar áreas restritas ou violar sistemas de segurança;
        </li>
        <li>
          Não utilizar indevidamente formulários ou e-mails para spam ou
          mensagens ofensivas.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Limitação de responsabilidade
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Mau uso por parte do usuário;</li>
        <li>Interrupções no acesso causadas por falhas técnicas externas;</li>
        <li>Conteúdo de terceiros eventualmente referenciado.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Atualizações</h2>
      <p>A versão mais recente estará sempre disponível nesta página.</p>
    </div>
  );
};

export default Terms;
