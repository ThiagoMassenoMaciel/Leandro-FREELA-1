import { useState, useEffect } from "react";

// urlBase = endereço do Strapi
// endpoint = rota da API, ex: "pagina-home"
export function useStrapi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      try {
        const path = `/api/${endpoint}`;
        const BASE_URL = "http://localhost:1337";
        const url = new URL(path, BASE_URL);

        const response = await fetch(url.href);
        /*
        console.log("Fetching data from:", url.href);
        console.log("response", response);
        console.log("---------------------------");
*/
        //const response = await fetch(`http://localhost:1337/api/${endpoint}`);

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
  }, [endpoint]);

  return { data, loading, error };
}
