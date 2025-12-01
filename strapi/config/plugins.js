export default ({ env }) => ({
  email: {
    config: {
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
    },
  },
});
