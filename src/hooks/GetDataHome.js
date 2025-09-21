//GetDataPassingQueryEndpointParameters
import { Load_data_to_webpage } from "./Load_data_to_webpage";
import qs from "qs";

const endpoint_QUERY_URL_PARAMS = qs.stringify(
  {
    populate: {
      sessoes: {
        on: {
          "sessoes.home-sessao-um": {
            populate: {
              texto: true,

              imagens: {
                populate: {
                  imagem_coluna1_h1: {
                    fields: ["url"],
                  },
                  imagem_coluna1_h2: {
                    fields: ["url"],
                  },
                  imagem_coluna1_h3: {
                    fields: ["url"],
                  },
                  imagem_coluna1_h4: {
                    fields: ["url"],
                  },
                  imagem_coluna1_h5: {
                    fields: ["url"],
                  },
                  imagem_coluna2_h6: {
                    fields: ["url"],
                  },
                  imagem_coluna2_h7: {
                    fields: ["url"],
                  },
                  imagem_coluna2_h8: {
                    fields: ["url"],
                  },
                  imagem_coluna2_h9: {
                    fields: ["url"],
                  },
                  imagem_coluna2_h10: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "sessoes.home-sessao-dois": {
            populate: {
              imagem_sessaoDOIS_h11: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true },
);
export function GetDataHome() {
  const {
    data: homeData,
    loading,
    error,
  } = Load_data_to_webpage("pagina-home", endpoint_QUERY_URL_PARAMS);
  return { homeData, loading, error };
}

export default GetDataHome;
