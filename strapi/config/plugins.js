export default ({ env }) => {
  // 1. TESTE DE DEBUG: Imprime no terminal assim que você der 'npm run dev'

  console.log("===================================================\n");
  console.log("===================================================\n");
  console.log("===================================================\n");
  console.log("\n====== TESTE DE VARIÁVEIS DE AMBIENTE (.env) ======");
  console.log("USUÁRIO LIDO:", env("GMAIL_USER"));
  // Não vamos imprimir a senha real por segurança, apenas verificar se ela existe:
  console.log(
    "SENHA LIDA:",
    env("GMAIL_APP_PASSWORD")
      ? "SIM, a senha foi encontrada!"
      : "UNDEFINED (Não encontrou nada)",
  );

  console.log("===================================================\n");
  console.log("===================================================\n");
  console.log("===================================================\n");

  return {
    email: {
      config: {
        /*
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465, // SSL
        secure: true, // true para porta 465
        auth: {
          user: env("GMAIL_USER"),
          pass: env("GMAIL_APP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      },
    }, */
        provider: "nodemailer",
        providerOptions: {
          host: env("GMAIL_HOST", "smtp.gmail.com"),
          port: env("GMAIL_PORT", 587),
          auth: {
            user: env("GMAIL_USER"),
            pass: env("GMAIL_APP_PASSWORD"),
          },
          // ignoreTLS: true, // Descomente esta linha APENAS se você enfrentar problemas de certificado de segurança no servidor local
        },
        settings: {
          defaultFrom: env("GMAIL_DEFAULT_FROM", "umteste919@gmail.com"),
          defaultReplyTo: env("GMAIL_DEFAULT_REPLY_TO", "umteste919@gmail.com"),
        },
      },
      // 2. ATIVANDO O SEU PLUGIN LOCAL DA NEWSLETTER
      newsletter: {
        enabled: true,
        resolve: "./src/plugins/newsletter",
      },
    },
  };
};
