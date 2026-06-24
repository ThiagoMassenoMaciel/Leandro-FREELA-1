"use strict";

module.exports = {
  /**
   * O método register roda antes da aplicação ligar por completo.
   * É o lugar perfeito para injetarmos o Middleware do Document Service.
   */
  register({ strapi }) {
    strapi.documents.use(async (context, next) => {
      // 1. RASTREADOR: Vai gritar no terminal toda vez que algo for salvo no banco
      console.log(
        `\n[STRAPI DEBUG] Ação: ${context.action} | Coleção: ${context.uid}`,
      );

      // Executa a gravação no banco e guarda o resultado
      const result = await next();
      if (!result) return result;

      // =========================================================================
      // LÓGICA 1: EMAIL DE BOAS-VINDAS PARA A NEWSLETTER
      // =========================================================================
      if (context.action === "create" && context.uid.includes("inscrito")) {
        const emailInscrito = result.email;

        if (emailInscrito) {
          console.log(
            `[STRAPI DEBUG] Disparando email de boas-vindas para: ${emailInscrito}`,
          );

          const htmlBoasVindas = `
            <div style="font-family: Arial, sans-serif; line-height:1.8; color:#222; max-width:600px; margin:0 auto;">
              <h1 style="color:#111; margin-bottom:24px;">Bem-vindo à Newsletter do advogado Leandro Viana! 🎉</h1>
              <p style="font-size:16px; margin-bottom:16px;">
                Olá! Obrigado por se inscrever na minha newsletter jurídica.
              </p>
              <p style="font-size:16px; margin-bottom:16px;">
                A partir de agora, você receberá atualizações exclusivas, dicas jurídicas e os últimos artigos diretamente no seu email.
              </p>
              <p style="margin:24px 0;">
                <a href="${process.env.SITE_URL || "http://localhost:5173"}/blogs" 
                   style="background:#111;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;">
                  Explorar Blog
                </a>
              </p>
              <hr style="border:none;border-top:1px solid #ddd;margin:32px 0;">
              <p style="font-size:12px;color:#666;">Se você não se inscreveu, ignore este email.</p>
            </div>
          `;

          strapi
            .plugin("email")
            .service("email")
            .send({
              to: emailInscrito,
              subject: "Bem-vindo à Newsletter Jurídica!",
              html: htmlBoasVindas,
            })
            .then(() =>
              console.log(`[SUCESSO] Email enviado para ${emailInscrito}!`),
            )
            .catch((err) =>
              console.error(
                `[ERRO NODEMAILER]:`,
                err instanceof Error ? err.message : String(err),
              ),
            );
        }
      }

      // =========================================================================
      // LÓGICA 2: AVISO DE NOVO POST PUBLICADO (BLOG E GALERIA)
      // =========================================================================
      if (
        context.uid.includes("blog") ||
        context.uid.includes("casos-juridico")
      ) {
        const publishedNow =
          (context.action === "create" && !!result.publishedAt) ||
          (context.action === "update" && !!result.publishedAt) ||
          context.action === "publish";

        if (publishedNow) {
          console.log(
            `[STRAPI DEBUG] Post publicado detectado. Buscando inscritos...`,
          );

          const titulo =
            result.titulo_do_blog || result.titulo_caso_juridico || "Novo post";
          const resumo = result.resumo_do_assunto_do_blog || "";
          const slug = result.slug_do_blog || result.slug_caso_juridico || "";
          const baseUrl = process.env.SITE_URL || "http://localhost:5173";
          const isBlog = context.uid.includes("blog");
          const link = `${baseUrl}/${isBlog ? "blog" : "galeria"}/${slug}`;

          strapi.db
            .query("api::inscritos-newsletter.inscritos-newsletter")
            .findMany({ select: ["email"] })
            .then(async (inscritos) => {
              if (!inscritos?.length) {
                console.log(`[STRAPI DEBUG] Nenhum inscrito na base.`);
                return;
              }

              console.log(
                `[STRAPI DEBUG] Enviando aviso para ${inscritos.length} cliente(s).`,
              );

              const html = `
                    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#222;">
                      <h2 style="margin:0 0 12px 0;">${titulo}</h2>
                      <p style="margin:0 0 16px 0;">${resumo}</p>
                      <p style="margin:0 0 24px 0;">
                        <a href="${link}" style="background:#111;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none;display:inline-block;">
                          Ler post completo
                        </a>
                      </p>
                      <p style="font-size:12px;color:#666;">Você recebeu este e-mail porque se inscreveu na nossa newsletter.</p>
                      <h3>Advogado Leandro Viana</h3>
                    </div>
                  `;

              for (const { email } of inscritos) {
                try {
                  await strapi
                    .plugin("email")
                    .service("email")
                    .send({
                      to: email,
                      subject: `Leandro Viana - Novo post publicado: ${titulo}`,
                      html,
                    });
                } catch (err) {
                  console.error(
                    `[ERRO NODEMAILER] ao enviar para ${email}:`,
                    err instanceof Error ? err.message : String(err),
                  );
                }
              }
            });
        }
      }

      // Retorno obrigatório para o frontend
      return result;
    });
  },

  /**
   * O método bootstrap roda depois que a aplicação está totalmente ligada.
   * Não precisamos dele agora, mas a estrutura exige que ele exista.
   */
  bootstrap(/*{ strapi }*/) {},
};
