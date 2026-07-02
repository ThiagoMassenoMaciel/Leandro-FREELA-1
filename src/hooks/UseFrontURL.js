// src/hooks/useFrontURL.js
export function UseFrontURL() {
  const frontURL = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";
  return frontURL;
}

export default UseFrontURL;
