//GetDataPassingQueryEndpointParameters
import { useLoad_data_to_webpage } from "./useLoad_data_to_webpage";
import qs from "qs";

const endpoint_QUERY_URL_PARAMS = qs.stringify(
  {
    populate: {
      Sobre_sessaoUM: {
        populate: {
          cabecalho: {
            // ✅ componente aninhado primeiro
            fields: ["titulo", "subtitulo"], // ✅ aí sim os campos escalares
          },
        },
      },
      Sobre_sessaoDOIS: {
        populate: {
          introducao_pessoal: {
            fields: ["titulo", "subtitulo"],
          },
          imagem_sobre_2: {
            fields: ["url"],
          },
        },
      },
    },
  },
  { encodeValuesOnly: true },
);
export function useGetDataSobre() {
  const {
    data: sobreData,
    loading,
    error,
  } = useLoad_data_to_webpage("pagina-sobre", endpoint_QUERY_URL_PARAMS);
  return { sobreData, loading, error };
}

export default useGetDataSobre;
