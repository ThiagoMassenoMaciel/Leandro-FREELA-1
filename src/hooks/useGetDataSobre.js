//GetDataPassingQueryEndpointParameters
import { useLoad_data_to_webpage } from "./useLoad_data_to_webpage";
import qs from "qs";

const endpoint_QUERY_URL_PARAMS = qs.stringify(
  {
    populate: {
      sessoes: {
        on: {
          "sessoes.sobre-sessao-um": {
            populate: {
              cabecalho: {
                populate:{
                  titulo: true,
                  subtitulo: true,
                },
              },
            },
          },
          "sessoes.sobre-sessao-dois":{
            populate:{
              introducao_pessoal:{
                populate:{
                  titulo: true,
                  subtitulo: true,
                }
              },
              imagem_sobre_2:{
                fields:["url"],
              },
            },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true },
);
export function useGetDataHome() {
  const {
    data: sobreData,
    loading,
    error,
  } = useLoad_data_to_webpage("pagina-sobre", endpoint_QUERY_URL_PARAMS);
  return { sobreData, loading, error };
}

export default useGetDataHome;
