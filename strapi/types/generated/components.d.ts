import type { Schema, Struct } from "@strapi/strapi";

export interface ElementosBlocoHomeImagens extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_home_imagens";
  info: {
    displayName: "bloco_home_imagens";
  };
  attributes: {
    imagem_coluna1_h1: Schema.Attribute.Media<"images">;
    imagem_coluna1_h2: Schema.Attribute.Media<"images">;
    imagem_coluna1_h3: Schema.Attribute.Media<"images">;
    imagem_coluna1_h4: Schema.Attribute.Media<"images">;
    imagem_coluna1_h5: Schema.Attribute.Media<"images">;
    imagem_coluna2_h10: Schema.Attribute.Media<"images">;
    imagem_coluna2_h6: Schema.Attribute.Media<"images">;
    imagem_coluna2_h7: Schema.Attribute.Media<"images">;
    imagem_coluna2_h8: Schema.Attribute.Media<"images">;
    imagem_coluna2_h9: Schema.Attribute.Media<"images">;
  };
}

export interface ElementosBlocoHomePergunta extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_home_perguntas";
  info: {
    displayName: "bloco_home_pergunta";
    icon: "question";
  };
  attributes: {
    pergunta: Schema.Attribute.String;
    resposta: Schema.Attribute.RichText;
  };
}

export interface ElementosBlocoHomeSubtituloEDescricao
  extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_home_subtitulo_e_descricaos";
  info: {
    displayName: "bloco-home-subtitulo-e-descricao";
  };
  attributes: {
    descricao: Schema.Attribute.String;
    subtitulo: Schema.Attribute.String;
  };
}

export interface ElementosBlocoServicoDetalhado extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_servico_detalhados";
  info: {
    displayName: "bloco_servico_detalhado_tipo1";
  };
  attributes: {
    descricao_do_titulo_do_servico: Schema.Attribute.String;
    inverter_ordem: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    qual_estilo_frontend_desse_subtitulo_desse_servico: Schema.Attribute.Enumeration<
      ["estilo1", "estilo2", "estilo3", "estilo4"]
    >;
    qual_tipo_dos_subtitulos_desse_servico_detalhado: Schema.Attribute.Enumeration<
      ["tipo1", "tipo2"]
    >;
    servicos_image: Schema.Attribute.Media<"images" | "files">;
    subtitulos: Schema.Attribute.Component<
      "elementos.bloco-servico-subtitulo-tipo1",
      false
    >;
    titulo_do_servico: Schema.Attribute.String;
  };
}

export interface ElementosBlocoServicoDetalhadoTipo2
  extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_servico_detalhado_tipo2s";
  info: {
    displayName: "bloco_servico_detalhado_tipo2";
  };
  attributes: {
    descricao_do_titulo_do_servico: Schema.Attribute.String;
    inverter_ordem: Schema.Attribute.Boolean;
    qual_estilo_frontend_desse_subtitulo_desse_servico: Schema.Attribute.Enumeration<
      ["estilo5"]
    >;
    qual_tipo_dos_subtitulos_desse_servico_detalhado: Schema.Attribute.Enumeration<
      ["tipo1", "tipo2"]
    >;
    servicos_image: Schema.Attribute.Media<"images" | "files">;
    subtitulos: Schema.Attribute.Component<
      "elementos.bloco-servico-subtitulo-tipo2",
      false
    >;
    titulo_do_servico: Schema.Attribute.String;
  };
}

export interface ElementosBlocoServicoSubtituloTipo1
  extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_servico_subtitulo_tipo1s";
  info: {
    displayName: "bloco_servico_subtitulo_tipo1";
  };
  attributes: {
    descricao_subtitulo1: Schema.Attribute.String;
    descricao_subtitulo2: Schema.Attribute.String;
    subtitulo1: Schema.Attribute.String;
    subtitulo2: Schema.Attribute.String;
  };
}

export interface ElementosBlocoServicoSubtituloTipo2
  extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_servico_subtitulo_tipo2s";
  info: {
    displayName: "bloco_servico_subtitulo_tipo2";
  };
  attributes: {
    descricao_subtitulo1: Schema.Attribute.String;
    descricao_subtitulo2: Schema.Attribute.String;
    descricao_subtitulo3: Schema.Attribute.String;
    descricao_subtitulo4: Schema.Attribute.String;
    descricao_subtitulo5: Schema.Attribute.String;
  };
}

export interface ElementosBlocoTextoIntroducao extends Struct.ComponentSchema {
  collectionName: "components_elementos_bloco_texto_introducaos";
  info: {
    displayName: "bloco_home_texto_introducao";
    icon: "apps";
  };
  attributes: {
    descricao: Schema.Attribute.String;
    subtitulo_resumo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ElementosLink extends Struct.ComponentSchema {
  collectionName: "components_elementos_links";
  info: {
    displayName: "link";
    icon: "cursor";
  };
  attributes: {
    link_externo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link_href: Schema.Attribute.String;
    texto: Schema.Attribute.String;
  };
}

export interface SessoesHomeSessaoDois extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_dois";
  info: {
    displayName: "home_sessaoDOIS";
  };
  attributes: {
    descricao: Schema.Attribute.String;
    imagem_sessaoDOIS_h11: Schema.Attribute.Media<"images">;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SessoesHomeSessaoQuatro extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_quatros";
  info: {
    displayName: "home_sessaoQUATRO";
  };
  attributes: {
    recomendacao_comentario: Schema.Attribute.String;
  };
}

export interface SessoesHomeSessaoSeis extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_seis";
  info: {
    displayName: "home_sessaoSEIS";
  };
  attributes: {
    perguntas: Schema.Attribute.Component<
      "elementos.bloco-home-pergunta",
      true
    >;
  };
}

export interface SessoesHomeSessaoTres extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_tres";
  info: {
    displayName: "home_sessaoTRES";
  };
  attributes: {
    bloco_dois: Schema.Attribute.Component<
      "elementos.bloco-home-subtitulo-e-descricao",
      false
    >;
    bloco_quatro: Schema.Attribute.Component<
      "elementos.bloco-home-subtitulo-e-descricao",
      false
    >;
    bloco_tres: Schema.Attribute.Component<
      "elementos.bloco-home-subtitulo-e-descricao",
      false
    >;
    bloco_um: Schema.Attribute.Component<
      "elementos.bloco-home-subtitulo-e-descricao",
      false
    >;
    introducao: Schema.Attribute.Component<
      "elementos.bloco-texto-introducao",
      false
    >;
  };
}

export interface SessoesHomeSessaoUm extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_ums";
  info: {
    displayName: "home_sessaoUM";
    icon: "expand";
  };
  attributes: {
    imagens: Schema.Attribute.Component<"elementos.bloco-home-imagens", false>;
    texto: Schema.Attribute.Component<
      "elementos.bloco-texto-introducao",
      false
    >;
  };
}

export interface SessoesServicosSessaoDois extends Struct.ComponentSchema {
  collectionName: "components_sessoes_servicos_sessao_dois";
  info: {
    displayName: "servicos_sessaoDOIS";
  };
  attributes: {};
}

export interface SessoesServicosSessaoQuatro extends Struct.ComponentSchema {
  collectionName: "components_sessoes_servicos_sessao_quatros";
  info: {
    displayName: "servicos_sessaoQUATRO";
  };
  attributes: {};
}

export interface SessoesServicosSessaoTres extends Struct.ComponentSchema {
  collectionName: "components_sessoes_servicos_sessao_tres";
  info: {
    displayName: "servicos_sessaoTRES";
  };
  attributes: {};
}

export interface SessoesServicosSessaoUm extends Struct.ComponentSchema {
  collectionName: "components_sessoes_servicos_sessao_ums";
  info: {
    displayName: "servicos_sessaoUM";
  };
  attributes: {
    descricao: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "elementos.bloco-home-imagens": ElementosBlocoHomeImagens;
      "elementos.bloco-home-pergunta": ElementosBlocoHomePergunta;
      "elementos.bloco-home-subtitulo-e-descricao": ElementosBlocoHomeSubtituloEDescricao;
      "elementos.bloco-servico-detalhado": ElementosBlocoServicoDetalhado;
      "elementos.bloco-servico-detalhado-tipo2": ElementosBlocoServicoDetalhadoTipo2;
      "elementos.bloco-servico-subtitulo-tipo1": ElementosBlocoServicoSubtituloTipo1;
      "elementos.bloco-servico-subtitulo-tipo2": ElementosBlocoServicoSubtituloTipo2;
      "elementos.bloco-texto-introducao": ElementosBlocoTextoIntroducao;
      "elementos.link": ElementosLink;
      "sessoes.home-sessao-dois": SessoesHomeSessaoDois;
      "sessoes.home-sessao-quatro": SessoesHomeSessaoQuatro;
      "sessoes.home-sessao-seis": SessoesHomeSessaoSeis;
      "sessoes.home-sessao-tres": SessoesHomeSessaoTres;
      "sessoes.home-sessao-um": SessoesHomeSessaoUm;
      "sessoes.servicos-sessao-dois": SessoesServicosSessaoDois;
      "sessoes.servicos-sessao-quatro": SessoesServicosSessaoQuatro;
      "sessoes.servicos-sessao-tres": SessoesServicosSessaoTres;
      "sessoes.servicos-sessao-um": SessoesServicosSessaoUm;
    }
  }
}
