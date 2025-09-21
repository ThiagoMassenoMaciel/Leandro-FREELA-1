import { useState, useEffect } from "react";
import { UseStrapiURL } from "./UseStrapiURL";

// urlBase = endereço url que o Strapi está executando
// API_strapi = rota da API, ex: "pagina-home"

//export function useStrapi(API_strapi, ENDPOINT_queryURLParams  = "") {
export function Load_data_to_webpage(API_strapi, ENDPOINT_queryURLParams = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_strapi) return;

    const fetchData = async () => {
      try {
        const path = `/api/${API_strapi}?${ENDPOINT_queryURLParams}`;
        //const path = `/api/${API_strapi}`;
        //const path = `/api/${API_strapi}${ENDPOINT_queryURLParams}`;
        const BASE_URL = UseStrapiURL();
        const url = new URL(path, BASE_URL);

        const response = await fetch(url.href);
        /*
        console.log("Fetching data from:", url.href);
        console.log("response", response);
        console.log("---------------------------");
*/
        //const response = await fetch(`http://localhost:1337/api/${API_strapi}`);

        if (!response.ok) throw new Error("Erro ao buscar dados");
        const json = await response.json();
        setData(json.data); // Strapi retorna sempre em `data`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_strapi, ENDPOINT_queryURLParams]);

  return { data, loading, error };
}

export default Load_data_to_webpage;
