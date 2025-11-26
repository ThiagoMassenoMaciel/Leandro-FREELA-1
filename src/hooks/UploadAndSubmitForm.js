// src/hooks/UploadAndSubmitForm.js
import axios from "axios";
import UseStrapiURL from "./UseStrapiURL.js";

const UploadAndSubmitForm = async (formData, pdfBlob, pdfName) => {
  const BASE_URL = UseStrapiURL();

  try {
    // 1. Faz upload do PDF para o Strapi (retorna o arquivo salvo)
    const uploadForm = new FormData();
    uploadForm.append("files", pdfBlob, pdfName);

    const uploadResponse = await axios.post(
      `${BASE_URL}/api/upload`,
      uploadForm,
      { headers: { "Content-Type": "multipart/form-data" } },
    );

    const uploadedFileId = uploadResponse.data[0].id;

    // 2. Cria o registro na collection form-submissions com o PDF anexado
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

    await axios.post(`${BASE_URL}/api/form-submissions`, payload);

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return { success: false, error: error.message };
  }
};

export default UploadAndSubmitForm;
