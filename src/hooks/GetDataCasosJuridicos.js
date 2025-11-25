//GetDataPassingQueryEndpointParameters for Blog
import { Load_data_to_webpage } from "./Load_data_to_webpage";
import qs from "qs";

const endpoint_QUERY_URL_PARAMS = qs.stringify({
  // 1. SELECIONA os campos simples que você quer
  // (Note que 'fields' está no nível principal, e não dentro de 'populate')
  fields: [
    "titulo_caso_juridico",
    "resumo_desse_caso_juridico_no_max_13_palavras",

    "tag_categoria_deste_caso_juridico",
    "slug_caso_juridico",
    "createdAt",
  ],

  // 2. POPULA apenas as relações e componentes
  populate: {
    // Popula o campo de imagem de capa (que é uma Relação)
    imagem_capa_desse_caso_juridico: {
      fields: ["url", "alternativeText", "caption"],
    },
    // Popula o campo rich text (que é um Componente ou Dynamic Zone)
    conteudo_caso_juridico: {
      populate: "*",
    },
  },

  // 3. Ordenação: posts mais recentes primeiro
  sort: ["createdAt:desc"],

  // 4. Paginação
  pagination: {
    pageSize: 100,
    page: 1,
  },
});

export function GetDataCasosJuridicos() {
  const {
    data: blogData,
    loading,
    error,
  } = Load_data_to_webpage("pagina-casos-juridicos", endpoint_QUERY_URL_PARAMS);

  return { blogData, loading, error };
}

export default GetDataCasosJuridicos;
