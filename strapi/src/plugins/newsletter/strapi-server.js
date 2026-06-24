/*  
import registerNewsletter from "./server/register.js";

export default () => ({
  register({ strapi }) {
    // Aqui o "porteiro" pega o seu código e entrega para o servidor do Strapi rodar
    registerNewsletter({ strapi });
  },

  bootstrap() {},
});
*/

// segunda tentativa

/*
"use strict";

// Importa o arquivo register usando o padrão Node.js (CommonJS)
const registerNewsletter = require("./server/register");

module.exports = {
  register({ strapi }) {
    // Entrega o código para o servidor do Strapi rodar
    registerNewsletter({ strapi });
  },

  bootstrap() {},
};

*/

import registerNewsletter from "./server/register.js";

export default {
  register({ strapi }) {
    // Entrega o seu código para o núcleo do Strapi rodar
    registerNewsletter({ strapi });
  },
  bootstrap() {},
};
