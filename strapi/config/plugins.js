export default ({ env }) => ({
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
          pass: env("GMAIL_PASSWORD"),
        },
        // ignoreTLS: true, // Descomente esta linha APENAS se você enfrentar problemas de certificado de segurança no servidor local
      },
      settings: {
        defaultFrom: env("GMAIL_DEFAULT_FROM", "umteste919@gmail.com"),
        defaultReplyTo: env("GMAIL_DEFAULT_REPLY_TO", "umteste919@gmail.com"),
      },
    },
  },
});
