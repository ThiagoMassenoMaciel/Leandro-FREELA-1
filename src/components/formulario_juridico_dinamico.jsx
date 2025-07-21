import { useState } from "react";

const areas = [
  "Direito Trabalhista",
  "Direito de Família",
  "Direito Previdenciário",
  "Direito Criminal",
  "Direito Tributário",
  "Consultas Contratuais / Revisão de Contratos",
  "Conciliação ou Mediação",
];

const FormularioJuridico = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">
        Formulário de Atendimento Jurídico
      </h1>

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

      {/* As demais seções virão na próxima parte... */}
    </div>
  );
};

export default FormularioJuridico;
