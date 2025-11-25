//GetDataPassingQueryEndpointParameters for Blog
import { Load_data_to_webpage } from "./Load_data_to_webpage";
import qs from "qs";

const endpoint_QUERY_URL_PARAMS = qs.stringify({
  // 1. SELECIONA os campos simples que você quer
  // (Note que 'fields' está no nível principal, e não dentro de 'populate')
  fields: [
    "titulo_do_blog",
    "autor_escreveu_blog",
    "numero_OAB",
    "resumo_do_assunto_do_blog",
    "slug_do_blog",
    "tipo_assunto_do_blog",
    "createdAt",
    "documentId",
  ],

  // 2. POPULA apenas as relações e componentes
  populate: {
    // Popula o campo de imagem de capa (que é uma Relação)
    imagem_capa_blog: {
      fields: ["url", "alternativeText", "caption"],
    },
    // Popula o campo rich text (que é um Componente ou Dynamic Zone)
    conteudo_blog: true,
  },

  // 3. Ordenação: posts mais recentes primeiro
  sort: ["createdAt:desc"],

  // 4. Paginação
  pagination: {
    pageSize: 100,
    page: 1,
  },
});

export function GetDataBlog() {
  const {
    data: blogData,
    loading,
    error,
  } = Load_data_to_webpage("pagina-do-blogs", endpoint_QUERY_URL_PARAMS);

  return { blogData, loading, error };
}

export default GetDataBlog;
