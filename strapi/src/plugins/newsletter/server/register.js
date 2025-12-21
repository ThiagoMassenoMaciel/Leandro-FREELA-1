export default ({ strapi }) => {
  strapi.documentService.addMiddleware(async (ctx, next) => {
    await next();

    const BLOG_UID = "api::pagina-do-blog.pagina-do-blog";
    const CASOS_UID = "api::pagina-casos-juridico.pagina-casos-juridico";

    const isAlvo = ctx.model?.uid === BLOG_UID || ctx.model?.uid === CASOS_UID;

    if (!isAlvo) return;

    const novoPost = ctx.result;

    const publishedNow =
      (ctx.action === "create" && !!novoPost.publishedAt) ||
      (ctx.action === "update" &&
        !!novoPost.publishedAt &&
        !!ctx.previousValue &&
        !ctx.previousValue.publishedAt);

    if (!publishedNow) return;

    const titulo =
      novoPost.titulo_do_blog || novoPost.titulo_caso_juridico || "Novo post";
    const resumo = novoPost.resumo_do_assunto_do_blog || "";
    const slug = novoPost.slug_do_blog || novoPost.slug_caso_juridico || "";
    const baseUrl = process.env.SITE_URL || "https://localhost:1337";
    //se o que foi criado no content type do strapi foi um post de caso juridico o link deve ter baseUrl/galeria/slug se o que foi criado no content type do strapi foi um post blog o link deve ter baseUrl/blog/slug
    const link = `${baseUrl}/${novoPost.slug_do_blog ? "blog" : "galeria"}/${slug}`;

    const inscritos = await strapi.db
      .query("api::inscritos-newsletter.inscritos-newsletter")
      .findMany({ select: ["email"] });

    if (!inscritos?.length) return;

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
            subject: `Leandro Viana Novo post publicado: ${titulo}`,
            html,
          });
      } catch (err) {
        strapi.log.error(`Erro ao enviar para ${email}: ${err.message}`);
      }
    }
  });

  // ✅ NOVO: Enviar email de boas-vindas ao cadastrar
  strapi.db.lifecycles.subscribe({
    models: ["api::inscritos-newsletter.inscritos-newsletter"],

    async afterCreate(event) {
      const { result } = event;
      const emailInscrito = result.email;

      if (!emailInscrito) return;

      const htmlBoasVindas = `
        <div style="font-family: Arial, sans-serif; line-height:1.8; color:#222; max-width:600px; margin:0 auto;">
          <h1 style="color:#111; margin-bottom:24px;">Bem-vindo à Nossa Newsletter! 🎉</h1>
          <p style="font-size:16px; margin-bottom:16px;">
            Olá! Obrigado por se inscrever na nossa newsletter jurídica.
          </p>
          <p style="font-size:16px; margin-bottom:16px;">
            A partir de agora, você receberá atualizações exclusivas, dicas jurídicas e os últimos artigos diretamente no seu email.
          </p>
          <p style="margin:24px 0;">
            <a href="${process.env.SITE_URL || "https://localhost:5173"}/blogs" 
               style="background:#111;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;">
              Explorar Blog
            </a>
          </p>
          <hr style="border:none;border-top:1px solid #ddd;margin:32px 0;">
          <p style="font-size:12px;color:#666;">
            Se você não se inscreveu, ignore este email.
          </p>
        </div>
      `;

      try {
        await strapi.plugin("email").service("email").send({
          to: emailInscrito,
          subject: "Bem-vindo à Newsletter Jurídica!",
          html: htmlBoasVindas,
        });

        strapi.log.info(`Email de boas-vindas enviado para: ${emailInscrito}`);
      } catch (error) {
        strapi.log.error(
          `Erro ao enviar email de boas-vindas para ${emailInscrito}: ${error.message}`,
        );
      }
    },
  });
};
