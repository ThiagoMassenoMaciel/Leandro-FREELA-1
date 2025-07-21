import { useState } from "react";
import jsPDF from "jspdf";

const areas = [
  "Direito Trabalhista",
  "Direito de Família",
  "Direito Previdenciário",
  "Direito Criminal",
  "Direito Tributário",
  "Consultas Contratuais / Revisão de Contratos",
  "Conciliação ou Mediação",
];

const FormularioJuridico2 = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    // Validação básica
    const obrigatorios = ["nome", "telefone", "email", "area"];
    for (let campo of obrigatorios) {
      if (!formData[campo]) {
        alert(`O campo "${campo}" é obrigatório.`);
        return;
      }
    }

    // Gerar PDF melhor formatado
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Formulário de Atendimento Jurídico", 10, 10);
    let y = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10;
    const lineHeight = 10;

    Object.entries(formData).forEach(([key, value]) => {
      const text = `${key}: ${value}`;
      const lines = doc.splitTextToSize(text, 180);
      if (y + lines.length * lineHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(lines, 10, y);
      y += lines.length * lineHeight;
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
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              Qual é/era o seu cargo e tempo de serviço?
            </label>
            <input
              name="cargo_tempo"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              Está com verbas rescisórias em aberto?
            </label>
            <input
              name="verbas"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">Houve demissão? Como ocorreu?</label>
            <input
              name="demissao"
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <label className="block mt-4">
              Já tentou acordo com a empresa?
            </label>
            <input
              name="acordo_empresa"
              onChange={handleChange}
              className="border p-2 w-full"
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
              className="border p-2 w-full"
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
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">Há filhos menores envolvidos?</label>
            <select
              name="filhos_menores"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <label className="block mt-4">Existe acordo entre as partes?</label>
            <select
              name="acordo_partes"
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">
        Formulário de Atendimento Jurídico
      </h1>

      {/* Tópico 1 - Informações de Contato do Cliente */}
      <label className="block">Nome completo:</label>
      <input
        name="nome"
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <label className="block">Telefone:</label>
      <input
        name="telefone"
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <label className="block">Email:</label>
      <input
        name="email"
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />

      {/* Tópico 4 - Preferência de Atendimento */}
      <label className="block">
        Escolha o melhor horário para entrar em contato comigo:
      </label>
      <select
        name="horario"
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option>Manhã</option>
        <option>Tarde</option>
        <option>Noite</option>
      </select>

      <label className="block">Qual a urgência do seu caso:</label>
      <select
        name="urgencia"
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option>Alta</option>
        <option>Média</option>
        <option>Baixa</option>
      </select>

      <label className="block">
        Deseja atendimento em quanto tempo? ex: daqui à 3 dias ou até 2 semanas
      </label>
      <input
        name="tempo_atendimento"
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />

      {/* Tópico 2 - Situação Jurídica */}
      <label className="block font-semibold">
        Motivo principal do contato:
      </label>
      <select
        name="area"
        value={areaSelecionada}
        onChange={(e) => setAreaSelecionada(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">
          Selecione qual é a área jurídica que esta relacionada ao seu caso :
        </option>
        {areas.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      {/* Tópico 3 - Perguntas Dinâmicas */}
      {renderPerguntasArea()}

      {/* Tópico 5 - Consentimento e envio */}
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

      <h3>
        Click no botão enviar para ter o link das redes sociais de Leandro Viana
        e contato do whatsapp
      </h3>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </div>
  );
};

export default FormularioJuridico2;
