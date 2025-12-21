import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import UseStrapiURL from "./UseStrapiURL";

export const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "error", // 'success' | 'error'
    message: "",
  });

  const BASE_URL = UseStrapiURL();

  /**
   * Inscreve email na newsletter
   */
  const handleSubscribe = async () => {
    // 1. Validação de email vazio
    if (!email.trim()) {
      setModal({
        show: true,
        type: "error",
        message: "Por favor, digite um email antes de se inscrever.",
      });
      return;
    }

    // 2. Validação de formato de email
    if (!validateEmail(email)) {
      setModal({
        show: true,
        type: "error",
        message:
          "Infelizmente você escreveu um email inválido. Tente escolher outro que realmente seja válido.",
      });
      return;
    }

    // 3. Fazer requisição POST para API
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/inscritos-newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email: email.trim(),
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Verifica se email já existe
        if (
          result.error?.message?.includes("unique") ||
          result.error?.message?.includes("duplicate")
        ) {
          throw new Error("Este email já está cadastrado na nossa newsletter!");
        }
        throw new Error(result.error?.message || "Erro ao cadastrar email");
      }

      // Sucesso!
      setModal({
        show: true,
        type: "success",
        message:
          "Email cadastrado com sucesso! Você receberá um email de confirmação em breve.",
      });

      // Limpa o input
      setEmail("");
    } catch (error) {
      console.error("Erro ao inscrever:", error);
      setModal({
        show: true,
        type: "error",
        message:
          error.message ||
          "Ocorreu um erro ao processar sua inscrição. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fecha o modal
   */
  const closeModal = () => {
    setModal({ show: false, type: "error", message: "" });
  };

  /**
   * Tenta novamente (volta para o formulário)
   */
  const handleRetry = () => {
    closeModal();
    // Scroll suave até a seção de newsletter
    const newsletterSection = document.getElementById("newsletter-section");
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // Foca no input
    setTimeout(() => {
      const inputElement = document.getElementById("email_newsletter");
      if (inputElement) inputElement.focus();
    }, 500);
  };

  return {
    email,
    setEmail,
    loading,
    modal,
    handleSubscribe,
    closeModal,
    handleRetry,
  };
};
