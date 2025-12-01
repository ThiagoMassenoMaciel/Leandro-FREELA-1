import FormularioJuridico4 from "./Formulario_juridico_dinamico4.jsx"; // Ajuste o path se necessário
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalFormContato = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-51 flex items-center justify-center bg-black/50 backdrop-blur-sm" // Overlay semi-transparente com blur
      onClick={onClose} // Fecha ao clicar fora
    >
      <div
        className="relative m-4 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-2xl" // Container centrado, scroll se grande
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>

        {/* Título opcional */}
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          {/*Responda este Formulário de Contato Jurídico,*/}
          Formulário de Contato Jurídico
        </h2>

        {/* O form em si */}
        <FormularioJuridico4 className="w-full" />
      </div>
    </div>
  );
};

export default ModalFormContato;
