import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
  const [formData, setFormData] = useState({
    area: "", // Inicializa 'area' vazio para evitar undefined
    nome: "",
    telefone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  /*

  const handleSubmit = () => {
    const obrigatorios = ["nome", "telefone", "email", "area"];
    for (let campo of obrigatorios) {
      if (!formData[campo]) {
        alert(
          `O campo "${campo}" é obrigatório. você esqueceu de preenchê-lo.`,
        );
        return;
      }
    }
    console.log(
      "\n------------- dentro da funcao handleSubmmit()\n ",
      formData,
      "\n",
    );
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Formulário de Atendimento Jurídico", 10, 10);

    const rows = Object.entries(formData).map(([key, value]) => [key, value]);
    autoTable(doc, {
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

  */
  // FUNÇÃO PRINCIPAL: Gera PDF bonito e profissional
  const gerarPDFProfissional = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const larguraPagina = doc.internal.pageSize.getWidth();

    // === 1. Cabeçalho elegante ===
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(30, 30, 30);
    doc.text("Formulário de Atendimento", 14, 25);

    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204); // Azul profissional
    doc.text("Dr. Leandro Vianna", 14, 35);

    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("Advogado | OAB/CE 51.588", 14, 42);

    // Linha decorativa
    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(1);
    doc.line(14, 48, larguraPagina - 14, 48);

    // === 2. Dados do cliente (resumo rápido) ===
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text(`Cliente: ${formData.nome || "Não informado"}`, 14, 58);
    doc.text(`Área: ${formData.area || "Não selecionada"}`, 14, 65);
    doc.text(`Contato: ${formData.telefone || "Não informado"}`, 14, 72);

    // === 3. Tabela com todas as respostas ===
    const dadosTabela = Object.entries(formData)
      .filter(([chave]) => chave !== "consentimento" || formData.consentimento) // só mostra se aceitou
      .map(([chave, valor]) => {
        const label =
          {
            nome: "Nome completo",
            telefone: "Telefone / WhatsApp",
            email: "E-mail",
            area: "Área do Direito",
            vinculo: "Vínculo empregatício",
            demissao: "Houve demissão?",
            acordo_empresa: "Já tentou acordo?",
            envolvimento: "Você é vítima, acusado ou testemunha?",
            processo_andamento: "Já existe processo?",
            local_fato: "Local do fato",
            tempo_atendimento: "Prazo desejado",
            consentimento: "Consentimento para contato",
          }[chave] ||
          chave.replace(/_/g, " ").charAt(0).toUpperCase() +
            chave.slice(1).replace(/_/g, " ");

        const resposta =
          valor === true
            ? "Sim"
            : valor === false
              ? "Não"
              : valor || "Não informado";

        return [label, resposta];
      });

    autoTable(doc, {
      head: [["Campo", "Resposta"]],
      body: dadosTabela,
      startY: 85,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellPadding: 6,
        lineColor: [200, 200, 200],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [0, 102, 204],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
      columnStyles: {
        0: { cellWidth: 70, fontStyle: "bold", textColor: [50, 50, 50] },
        1: { cellWidth: 100 },
      },
      didDrawPage: (data) => {
        const paginaAtual = data.pageNumber;
        const alturaPagina = doc.internal.pageSize.getHeight();
        const rodapeY = alturaPagina - 15;

        // Linha fina acima do rodapé
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.line(14, rodapeY - 5, larguraPagina - 14, rodapeY - 5);

        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        doc.setFont("helvetica", "normal");

        doc.text(`Página ${paginaAtual}`, larguraPagina - 30, rodapeY);
        doc.text(
          "© 2025 Dr. Leandro Vianna - Todos os direitos reservados",
          14,
          rodapeY,
        );
      },
    });

    // === 4. Final: Contato + WhatsApp ===
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Entre em contato para análise do seu caso:", 14, finalY);

    doc.setFontSize(14);
    doc.setTextColor(0, 150, 0);
    doc.text("WhatsApp: (85) 99999-9999", 14, finalY + 10);

    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text("Este formulário foi gerado automaticamente.", 14, finalY + 25);

    // === 5. Salvar ===
    const nomeArquivo = `atendimento_${formData.nome.replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(nomeArquivo);
  };

  const handleSubmit = () => {
    const obrigatorios = ["nome", "telefone", "email", "area"];
    for (let campo of obrigatorios) {
      if (!formData[campo]) {
        alert(`O campo "${campo}" é obrigatório.`);
        return;
      }
    }

    gerarPDFProfissional(); // ← Agora gera o PDF lindo
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
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">Há filhos menores envolvidos?</label>
            <select
              name="filhos_menores"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="mt-4 block">Existe acordo entre as partes?</label>
            <select
              name="acordo_partes"
              onChange={handleChange}
              className="mb-4 w-full rounded border border-gray-100 bg-gray-200 p-2 text-gray-800 placeholder-gray-400 backdrop-blur-md"
            >
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
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      case "Direito Criminal":
        return (
          <>
            <label className="mt-4 block">
              Você está sendo acusado ou é a vítima?
            </label>
            <select
              name="envolvimento"
              onChange={handleChange}
              className="w-full border p-2"
            >
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
          Selecione qual é a área jurídica do seu caso :
        </option>
        {areas.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      {renderPerguntasArea()}

      <label className="mt-6 block">
        <input
          type="checkbox"
          name="consentimento"
          onChange={handleChange}
          className="mr-2"
        />
        Autorizo o uso das informações fornecidas para fins de avaliação
        jurídica e contato.
      </label>

      <p className="mt-2 text-sm">
        Click no botão enviar para ter o link das redes sociais de Leandro Viana
        e contato do whatsapp
      </p>

      <button
        onClick={handleSubmit}
        className="mt-6 rounded-xl bg-black px-6 py-2 text-white shadow-lg transition duration-300 hover:bg-gray-800"
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
