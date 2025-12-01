// src/components/formulario_juridico_dinamico3.jsx
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import UploadAndSubmitForm from "../hooks/UploadAndSubmitForm.js";

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

const FormularioJuridico4 = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [formData, setFormData] = useState({
    area: "",
    nome: "",
    telefone: "",
    email: "",
  });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Gera o PDF como Blob (não baixa ainda)
  const gerarPDFBlob = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const largura = doc.internal.pageSize.getWidth();

    // Cabeçalho bonito
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Formulário de Atendimento", 14, 25);
    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204);
    doc.text("Dr. Leandro Vianna", 14, 35);

    // Tabela com respostas
    const linhas = Object.entries(formData)
      .filter(([key]) => key !== "consentimento" || formData.consentimento)
      .map(([key, value]) => {
        const label =
          {
            nome: "Nome completo",
            telefone: "Telefone/WhatsApp",
            email: "E-mail",
            area: "Área do Direito",
          }[key] || key.replace(/_/g, " ").toUpperCase();

        const resposta =
          value === true
            ? "Sim"
            : value === false
              ? "Não"
              : value || "Não informado";
        return [label, resposta];
      });

    autoTable(doc, {
      head: [["Campo", "Resposta"]],
      body: linhas,
      startY: 50,
      theme: "grid",
      headStyles: { fillColor: [0, 102, 204] },
      didDrawPage: (data) => {
        const pagina = data.pageNumber;
        const y = doc.internal.pageSize.getHeight() - 10;
        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        doc.text(`Página ${pagina}`, largura - 30, y);
        doc.text("© 2025 Dr. Leandro Vianna", 14, y);
      },
    });

    return doc.output("blob");
  };

  const handleSubmit = async () => {
    // Validação
    const obrigatorios = ["nome", "telefone", "email", "area"];
    for (const campo of obrigatorios) {
      if (!formData[campo]) {
        alert(`O campo ${campo} é obrigatório. \nResponda o campo ${campo} `);
        return;
      }
    }

    setEnviando(true);

    // 1. Gera o PDF
    const pdfBlob = gerarPDFBlob();
    const nomeArquivo = `atendimento_${formData.nome.replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.pdf`;

    // 2. Envia para o Strapi (e automaticamente dispara o e-mail)
    const resultado = await UploadAndSubmitForm(formData, pdfBlob, nomeArquivo);

    // 3. Baixa no dispositivo do cliente
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nomeArquivo;
    a.click();
    URL.revokeObjectURL(url);

    setEnviando(false);

    if (resultado.success) {
      alert(
        "Formulário enviado com sucesso! PDF baixado e você receberá por e-mail em breve.",
      );
    } else {
      alert(
        "PDF baixado, mas houve erro ao enviar ao servidor.\n \n Tente novamente clicando no botão enviar formulário",
      );
    }
  };

  const renderPerguntasArea = () => {
    switch (areaSelecionada) {
      case "Direito Trabalhista":
        return (
          <>
            <label className="mt-4 block">
              Você é empregado, empregador ou ex-empregado?
            </label>
            <input
              name="vinculo"
              onChange={handleChange}
              className="mb-4 w-full rounded bg-gray-200 p-2 text-gray-800 placeholder-gray-900 backdrop-blur-md"
            />
            <label className="mt-4 block">
              Qual é/era o seu cargo e tempo de serviço?
            </label>
            <input
              name="cargo_tempo"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            />
            <label className="mt-4 block">
              Está com verbas rescisórias em aberto?
            </label>
            <input
              name="verbas"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            />
            <label className="mt-4 block">Houve demissão? Como ocorreu?</label>
            <input
              name="demissao"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            />
            <label className="mt-4 block">
              Já tentou acordo com a empresa?
            </label>
            <input
              name="acordo_empresa"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            />
          </>
        );

      case "Direito de Família":
        return (
          <>
            <label className="mt-4 block">Tipo de situação:</label>
            <select
              name="situacao_familia"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
              <option value="">Selecione</option>
              <option>Divórcio</option>
              <option>Guarda de filhos</option>
              <option>Pensão alimentícia</option>
              <option>União estável</option>
              <option>Partilha de bens</option>
              <option>Outro</option>
            </select>
            <label className="mt-4 block">
              Existe relacionamento formalizado?
            </label>
            <select
              name="relacionamento_formal"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">Há filhos menores envolvidos?</label>
            <select
              name="filhos_menores"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">Existe acordo entre as partes?</label>
            <select
              name="acordo_partes"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );
      case "Direito Previdenciário":
        return (
          <>
            <label className="mt-4 block">Você já contribuiu com o INSS?</label>
            <select
              name="contribuiu_inss"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">
              Qual benefício está buscando ou teve negado?
            </label>
            <input
              name="beneficio"
              onChange={handleChange}
              className="w-full border p-2"
            />
            <label className="mt-4 block">
              Já entrou com pedido administrativo no INSS?
            </label>
            <select
              name="pedido_inss"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      case "Direito Criminal":
        return (
          <>
            <label className="mt-4 block">
              Você está sendo acusado, é a vítima ou é testemunha?
            </label>
            <select
              name="envolvimento"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Acusado</option>
              <option>Vítima</option>
              <option>Testemunha</option>
            </select>
            <label className="mt-4 block">Já há processo em andamento?</label>
            <select
              name="processo_andamento"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">
              Em qual cidade e estado ocorreu o fato?
            </label>
            <input
              name="local_fato"
              onChange={handleChange}
              className="w-full border p-2"
            />
          </>
        );

      case "Direito Tributário":
        return (
          <>
            <label className="mt-4 block">Pessoa Física ou Jurídica?</label>
            <select
              name="tipo_pessoa"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Física</option>
              <option>Jurídica (empresa)</option>
            </select>
            <label className="mt-4 block">
              Qual o tipo de tributo envolvido?
            </label>
            <input
              name="tipo_tributo"
              onChange={handleChange}
              className="w-full border p-2"
            />
            <label className="mt-4 block">Existe débito em aberto?</label>
            <select
              name="debito_aberto"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      case "Consultas Contratuais / Revisão de Contratos":
        return (
          <>
            <label className="mt-4 block">Tipo de contrato:</label>
            <input
              name="tipo_contrato"
              onChange={handleChange}
              className="w-full border p-2"
            />
            <label className="mt-4 block">
              Qual o objetivo da revisão ou análise?
            </label>
            <input
              name="objetivo_revisao"
              onChange={handleChange}
              className="w-full border p-2"
            />
          </>
        );

      case "Conciliação ou Mediação":
        return (
          <>
            <label className="mt-4 block">Qual é o conflito em questão?</label>
            <input
              name="descricao_conflito"
              onChange={handleChange}
              className="w-full border p-2"
            />
            <label className="mt-4 block">
              A outra parte está disposta ao diálogo?
            </label>
            <select
              name="disposicao_dialogo"
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="">responder aqui</option>
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
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/30 bg-white/10 p-6 text-black shadow-2xl backdrop-blur-md">
      <div className="mx-auto max-w-[768px] text-center">
        <p className="mb-8 text-lg">
          Estou aqui para ajudar com suas necessidades jurídicas. Preencha o
          formulário abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>
      <h1 className="mb-6 text-center text-2xl font-bold">
        Formulário de Atendimento Jurídico
      </h1>

      <label className="block">Nome completo:</label>
      <input
        name="nome"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      />
      <label className="block">Telefone:</label>
      <input
        name="telefone"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      />
      <label className="block">Email:</label>
      <input
        name="email"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      />

      <label className="mt-4 block">
        Escolha o melhor horário para entrar em contato comigo:
      </label>
      <select
        name="horario"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      >
        <option>Manhã</option>
        <option>Tarde</option>
        <option>Noite</option>
      </select>

      <label className="mt-4 block">Qual a urgência do seu caso:</label>
      <select
        name="urgencia"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      >
        <option>Alta</option>
        <option>Média</option>
        <option>Baixa</option>
      </select>

      <label className="mt-4 block">Deseja atendimento em quanto tempo?</label>
      <input
        name="tempo_atendimento"
        onChange={handleChange}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      />

      <label className="mt-6 block font-semibold">
        Motivo principal do contato:
      </label>
      <select
        name="area"
        value={areaSelecionada}
        onChange={(e) => {
          setAreaSelecionada(e.target.value); // Mantém a lógica dinâmica
          handleChange(e); // Atualiza formData['area']
        }}
        className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
      >
        <option className="h-[50px] w-full" value="">
          escolha a área jurídica :
        </option>
        {areas.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      {renderPerguntasArea()}

      <label className="my-4 block">
        <input
          type="checkbox"
          name="consentimento"
          onChange={handleChange}
          className="mr-2"
        />
        Autorizo o uso das informações fornecidas para fins de avaliação
        jurídica e contato.
      </label>

      <p className="my-2 text-sm">
        Click no botão enviar para ter o link das redes sociais de Leandro Viana
        e contato do whatsapp
      </p>

      <button
        onClick={handleSubmit}
        disabled={enviando}
        className={`my-4 w-full rounded-lg py-4 text-lg font-bold text-white transition ${
          enviando
            ? "cursor-not-allowed bg-gray-500"
            : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
        }`}
      >
        {enviando ? "Enviando e gerando PDF..." : "Enviar Formulário"}
      </button>
    </div>
  );
};

export default FormularioJuridico4;

// Tailwind estilo extra sugerido para inputs
// Adicione isso no seu CSS global ou componente de estilo
// . border border-gray-100 bg-gray-200 backdrop-blur-md text-gray-800 p-2 w-full rounded mb-4 placeholder-gray-400 {
//   @apply border border-white/30 bg-white/10 backdrop-blur-md text-white p-2 w-full rounded mb-4 placeholder-white;
// }
