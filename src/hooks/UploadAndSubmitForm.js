// src/hooks/UploadAndSubmitForm.js
import axios from "axios";
import UseFrontURL from "./UseFrontURL.js";

const UploadAndSubmitForm = async (formData, pdfBlob, pdfName) => {
  const BASE_URL = UseFrontURL();

  console.log(
    "\n formData: \n-------------",
    formData,
    "\n pdfBlob: \n-------------",
    pdfBlob,
    "\n pdfName: \n-------------",
    pdfName,
  );

  try {
    // 1. Faz upload do PDF para enviar apartir do email configurado servidor SMTP para si mesmo contendo o arquivo pdf e o título
    const uploadForm = new FormData();
    uploadForm.append("files", pdfBlob, pdfName);

    const uploadResponse = await axios.post(
      `${BASE_URL}/api/upload`,
      uploadForm,
      { headers: { "Content-Type": "multipart/form-data" } },
    );

    const uploadedFileId = uploadResponse.data[0].id;

    // 2. Cria o registro na collection form-submissions "formulario-inscricaos" com o PDF anexado
    const payload = {
      data: {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        area: formData.area,
        pdf_file: uploadedFileId, // ← Liga o PDF ao registro
        status: "Pendente",
      },
    };
    console.log(
      "\n antes de executar requisição axios aqui código funciona \n",
    );

    await axios.post(
      `${BASE_URL}
/api/formulario-inscricaos`,
      payload,
    );
    console.log("\n aqui depois de executar requisição axios\n");

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar formulário:\n"); //, error, error.message
    console.log("---------------", error);
    return { success: false, error: error.message };
  }
};

export default UploadAndSubmitForm;
