// src/hooks/useStrapiURL.js
export function UseStrapiURL() {
  const strapiURL =
    import.meta.env.VITE_API_STRAPI_URL || "http://localhost:1337";
  return strapiURL;
}

export default UseStrapiURL;
