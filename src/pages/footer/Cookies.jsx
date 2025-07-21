import React from "react";

const Cookies = () => {
  return (
    <div className="bg-white text-black px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Configurações de Cookies (Cookies Settings)
      </h1>
      <p className="text-gray-600 mb-8">Última atualização: julho de 2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. O que são cookies?</h2>
      <p className="mb-4">
        Cookies são pequenos arquivos armazenados no seu dispositivo quando você
        acessa nosso site. Eles nos ajudam a entender como você interage com o
        conteúdo e possibilitam funcionalidades básicas.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Tipos de cookies que usamos:
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Cookies essenciais: necessários para o funcionamento do site (ex:
          navegação, formulários).
        </li>
        <li>
          Cookies de desempenho: coletam dados anônimos sobre como o site é
          usado, para fins estatísticos.
        </li>
        <li>
          Cookies de funcionalidade: lembram preferências do usuário, como
          idioma ou região.
        </li>
        <li>
          Cookies de terceiros: usados apenas se integrarmos ferramentas como
          Google Analytics, reCAPTCHA, ou redes sociais.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Gerenciar preferências
      </h2>
      <p className="mb-4">
        Você pode configurar seu navegador para recusar cookies ou apagar
        cookies já armazenados. No entanto, isso pode afetar a funcionalidade de
        certas áreas do site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Consentimento</h2>
      <p>
        Ao acessar este site pela primeira vez, você poderá aceitar ou
        configurar quais cookies autoriza. Suas preferências podem ser alteradas
        a qualquer momento clicando no botão Configurações de Cookies no rodapé.
      </p>
    </div>
  );
};

export default Cookies;
