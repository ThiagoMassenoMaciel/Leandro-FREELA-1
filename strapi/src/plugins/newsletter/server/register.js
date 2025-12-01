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
    const link = `${baseUrl}/${slug}`;

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
        </div>
    `;

    for (const { email } of inscritos) {
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: email,
            subject: `Novo post publicado: ${titulo}`,
            html,
          });
      } catch (err) {
        strapi.log.error(`Erro ao enviar para ${email}: ${err.message}`);
      }
    }
  });
};
