import React from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

/**
 * Modal para feedback de inscrição na newsletter
 * @param {Object} props
 * @param {string} props.type - 'success' | 'error'
 * @param {string} props.message - Mensagem a ser exibida
 * @param {Function} props.onClose - Função para fechar o modal
 * @param {Function} props.onRetry - Função para tentar novamente (apenas em erro)
 *
 **/
const ModalNewsletter = ({ type, message, onClose, onRetry }) => {
  const isSuccess = type === "success";

  return (
    <>
      {/* Backdrop (fundo escuro) */}
      <div
        className="bg-opacity-50 fixed inset-0 z-[1199] bg-black"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-[1200] w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl sm:max-w-[500px]">
        {/* Botão Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 transition hover:text-black"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        {/* Ícone */}
        <div className="mb-4 flex justify-center">
          {isSuccess ? (
            <CheckCircle size={64} className="text-green-500" />
          ) : (
            <AlertCircle size={64} className="text-red-500" />
          )}
        </div>

        {/* Título */}
        <h2 className="mb-4 text-center text-2xl font-bold">
          {isSuccess ? "Sucesso!" : "Ops! Algo deu errado"}
        </h2>

        {/* Mensagem */}
        <p className="mb-6 text-center text-gray-700">{message}</p>

        {/* Botões */}
        <div className="flex justify-center gap-4">
          {isSuccess ? (
            <button
              onClick={onClose}
              className="bg-green-500 px-8 py-3 font-bold text-white transition hover:bg-green-600"
            >
              Fechar
            </button>
          ) : (
            <>
              <button
                onClick={onClose}
                className="bg-gray-300 px-6 py-3 font-bold text-black transition hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={onRetry}
                className="bg-black px-6 py-3 font-bold text-white transition hover:bg-gray-800"
              >
                Tentar Novamente
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalNewsletter;
