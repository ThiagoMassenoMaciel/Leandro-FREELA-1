/**
 * Valida se um email tem formato válido
 * @param {string} email - Email a ser validado
 * @returns {boolean} - true se válido, false se inválido
 */
export const validateEmail = (email) => {
  // Regex completa para validação de email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Remove espaços em branco
  const trimmedEmail = email.trim();

  // Verifica se não está vazio
  if (!trimmedEmail) return false;

  // Valida com regex
  return emailRegex.test(trimmedEmail);
};
