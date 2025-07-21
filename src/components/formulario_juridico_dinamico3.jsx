import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import "./form.css";

const areas = [
  "Direito Trabalhista",
  "Direito de Família",
  "Direito Previdenciário",
  "Direito Criminal",
  "Direito Tributário",
  "Consultas Contratuais / Revisão de Contratos",
  "Conciliação ou Mediação",
];

const FormularioJuridico3 = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    const obrigatorios = ["nome", "telefone", "email", "area"];
    for (let campo of obrigatorios) {
      if (!formData[campo]) {
        alert(`O campo "${campo}" é obrigatório.`);
        return;
      }
    }

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Formulário de Atendimento Jurídico", 10, 10);

    const rows = Object.entries(formData).map(([key, value]) => [key, value]);
    doc.autoTable({
      startY: 20,
      head: [["Campo", "Resposta"]],
      body: rows,
      styles: { cellPadding: 3, fontSize: 10 },
      headStyles: { fillColor: [0, 0, 0] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 120 },
      },
    });

    doc.save("formulario-juridico.pdf");
  };

  const renderPerguntasArea = () => {
    switch (areaSelecionada) {
      case "Direito Trabalhista":
        return (
          <>
            <label className="block mt-4">
              Você é empregado, empregador ou ex-empregado?
            </label>
            <input
              name="vinculo"
              onChange={handleChange}
              className=" border border-white/30 bg-white/10 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            />
            <label className="block mt-4">
              Qual é/era o seu cargo e tempo de serviço?
            </label>
            <input
              name="cargo_tempo"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            />
            <label className="block mt-4">
              Está com verbas rescisórias em aberto?
            </label>
            <input
              name="verbas"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            />
            <label className="block mt-4">Houve demissão? Como ocorreu?</label>
            <input
              name="demissao"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            />
            <label className="block mt-4">
              Já tentou acordo com a empresa?
            </label>
            <input
              name="acordo_empresa"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            />
          </>
        );

      case "Direito de Família":
        return (
          <>
            <label className="block mt-4">Tipo de situação:</label>
            <select
              name="situacao_familia"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            >
              <option value="">Selecione</option>
              <option>Divórcio</option>
              <option>Guarda de filhos</option>
              <option>Pensão alimentícia</option>
              <option>União estável</option>
              <option>Partilha de bens</option>
              <option>Outro</option>
            </select>
            <label className="block mt-4">
              Existe relacionamento formalizado?
            </label>
            <select
              name="relacionamento_formal"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">Há filhos menores envolvidos?</label>
            <select
              name="filhos_menores"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">Existe acordo entre as partes?</label>
            <select
              name="acordo_partes"
              onChange={handleChange}
              className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );
      case "Direito Previdenciário":
        return (
          <>
            <label className="block mt-4">Você já contribuiu com o INSS?</label>
            <select
              name="contribuiu_inss"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">
              Qual benefício está buscando ou teve negado?
            </label>
            <input
              name="beneficio"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              Já entrou com pedido administrativo no INSS?
            </label>
            <select
              name="pedido_inss"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      case "Direito Criminal":
        return (
          <>
            <label className="block mt-4">
              Você está sendo acusado ou é a vítima?
            </label>
            <select
              name="envolvimento"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Acusado</option>
              <option>Vítima</option>
              <option>Testemunha</option>
            </select>
            <label className="block mt-4">Já há processo em andamento?</label>
            <select
              name="processo_andamento"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">
              Em qual cidade e estado ocorreu o fato?
            </label>
            <input
              name="local_fato"
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </>
        );

      case "Direito Tributário":
        return (
          <>
            <label className="block mt-4">Pessoa Física ou Jurídica?</label>
            <select
              name="tipo_pessoa"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Física</option>
              <option>Jurídica (empresa)</option>
            </select>
            <label className="block mt-4">
              Qual o tipo de tributo envolvido?
            </label>
            <input
              name="tipo_tributo"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">Existe débito em aberto?</label>
            <select
              name="debito_aberto"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      case "Consultas Contratuais / Revisão de Contratos":
        return (
          <>
            <label className="block mt-4">Tipo de contrato:</label>
            <input
              name="tipo_contrato"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              Qual o objetivo da revisão ou análise?
            </label>
            <input
              name="objetivo_revisao"
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </>
        );

      case "Conciliação ou Mediação":
        return (
          <>
            <label className="block mt-4">Qual é o conflito em questão?</label>
            <input
              name="descricao_conflito"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              A outra parte está disposta ao diálogo?
            </label>
            <select
              name="disposicao_dialogo"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
              <option>Não sei</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/30 text-black">
      <div className="max-w-[768px] mx-auto text-center">
        <p className="text-lg mb-8">
          Estou aqui para ajudar com suas necessidades jurídicas. Preencha o
          formulário abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Formulário de Atendimento Jurídico
      </h1>

      <label className="block">Nome completo:</label>
      <input
        name="nome"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      />
      <label className="block">Telefone:</label>
      <input
        name="telefone"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      />
      <label className="block">Email:</label>
      <input
        name="email"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      />

      <label className="block mt-4">
        Escolha o melhor horário para entrar em contato comigo:
      </label>
      <select
        name="horario"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      >
        <option>Manhã</option>
        <option>Tarde</option>
        <option>Noite</option>
      </select>

      <label className="block mt-4">Qual a urgência do seu caso:</label>
      <select
        name="urgencia"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      >
        <option>Alta</option>
        <option>Média</option>
        <option>Baixa</option>
      </select>

      <label className="block mt-4">Deseja atendimento em quanto tempo?</label>
      <input
        name="tempo_atendimento"
        onChange={handleChange}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      />

      <label className="block font-semibold mt-6">
        Motivo principal do contato:
      </label>
      <select
        name="area"
        value={areaSelecionada}
        onChange={(e) => setAreaSelecionada(e.target.value)}
        className=" border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400"
      >
        <option value="">
          Selecione qual é a área jurídica que esta relacionada ao seu caso :
        </option>
        {areas.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      {renderPerguntasArea()}

      <label className="block mt-6">
        <input
          type="checkbox"
          name="consentimento"
          onChange={handleChange}
          className="mr-2"
        />
        Autorizo o uso das informações fornecidas para fins de avaliação
        jurídica e contato.
      </label>

      <p className="text-sm mt-2">
        Click no botão enviar para ter o link das redes sociais de Leandro Viana
        e contato do whatsapp
      </p>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-xl shadow-lg transition duration-300"
      >
        Enviar
      </button>
    </div>
  );
};

export default FormularioJuridico3;

// Tailwind estilo extra sugerido para inputs
// Adicione isso no seu CSS global ou componente de estilo
// . border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400 {
//   @apply border border-white/30 bg-white/10 backdrop-blur-md text-white p-2 w-full rounded mb-4 placeholder-white;
// }
