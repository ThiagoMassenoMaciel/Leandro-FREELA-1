import type { Schema, Struct } from "@strapi/strapi";

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
    displayName: "bloco_texto_introducao";
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
  attributes: {};
}

export interface SessoesHomeSessaoUm extends Struct.ComponentSchema {
  collectionName: "components_sessoes_home_sessao_ums";
  info: {
    displayName: "home_sessaoUM";
    icon: "expand";
  };
  attributes: {};
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
      "elementos.bloco-servico-detalhado": ElementosBlocoServicoDetalhado;
      "elementos.bloco-servico-detalhado-tipo2": ElementosBlocoServicoDetalhadoTipo2;
      "elementos.bloco-servico-subtitulo-tipo1": ElementosBlocoServicoSubtituloTipo1;
      "elementos.bloco-servico-subtitulo-tipo2": ElementosBlocoServicoSubtituloTipo2;
      "elementos.bloco-texto-introducao": ElementosBlocoTextoIntroducao;
      "elementos.link": ElementosLink;
      "sessoes.home-sessao-dois": SessoesHomeSessaoDois;
      "sessoes.home-sessao-um": SessoesHomeSessaoUm;
      "sessoes.servicos-sessao-dois": SessoesServicosSessaoDois;
      "sessoes.servicos-sessao-quatro": SessoesServicosSessaoQuatro;
      "sessoes.servicos-sessao-tres": SessoesServicosSessaoTres;
      "sessoes.servicos-sessao-um": SessoesServicosSessaoUm;
    }
  }
}
