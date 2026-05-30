/*
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

    // estou colocandoestes console.log para monitorar o processo de envio de email, para verificar se o processo está sendo iniciado corretamente quando um novo post é publicado
    {
      strapi.log.info(
        `Novo post publicado: ${titulo} - Enviando emails para inscritos...`,
      ); // Log para monitorar o processo
      console.log(`\n\n\n\nNovo post publicado:\n\n`); // Log para monitorar o processo
      console.log(`Título: ${titulo}\n`);
      console.log(`Resumo: ${resumo}\n`);
      console.log(`Link: ${link}\n`);
    }

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
          <h1 style="color:#111; margin-bottom:24px;">Bem-vindo à Newsletter do advogado Leandro Viana! 🎉</h1>
          <p style="font-size:16px; margin-bottom:16px;">
            Olá! Obrigado por se inscrever na minha newsletter jurídica.
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




SECOND TRY TO SOLVE THE PROBLEM OF THE LIFECYCLE HOOK NOT WORKING IN STRAPI V4.10.5

export default ({ strapi }) => {
  // 1º Middleware: Envio de email automático ao publicar um novo post
  strapi.documentService.addMiddleware(async (ctx, next) => {
    // Aguarda a execução da ação principal no banco de dados
    await next();

    const BLOG_UID = "api::pagina-do-blog.pagina-do-blog";
    const CASOS_UID = "api::pagina-casos-juridico.pagina-casos-juridico";

    const isAlvo = ctx.model?.uid === BLOG_UID || ctx.model?.uid === CASOS_UID;

    if (!isAlvo) return;

    const novoPost = ctx.result;

    const publishedNow =
      (ctx.action === "create" && !!novoPost.publishedAt) ||
      (ctx.action === "update" && !!novoPost.publishedAt && !!ctx.previousValue && !ctx.previousValue.publishedAt);
    if (!publishedNow) return;

    const titulo =
      novoPost.titulo_do_blog || novoPost.titulo_caso_juridico || "Novo post";
    const resumo = novoPost.resumo_do_assunto_do_blog || "";
    const slug = novoPost.slug_do_blog || novoPost.slug_caso_juridico || "";
    const baseUrl = process.env.SITE_URL || "https://localhost:5173";
    const link = `${baseUrl}/blog/${slug}`;

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

  // 2º Middleware: Substitui o antigo Lifecycle hook para envio do email de boas-vindas
  strapi.documentService.addMiddleware(async (ctx, next) => {
    // Executa a criação no banco de dados primeiro
    await next();

    // Filtra para agir APENAS quando uma ação de "create" ocorrer na collection correta
    if (
      ctx.action === "create" &&
      ctx.model?.uid === "api::inscritos-newsletter.inscritos-newsletter"
    ) {
      // Pega o email do resultado que acabou de ser salvo no banco
      const emailInscrito = ctx.result?.email;

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
        });git push

        strapi.log.info(`Email de boas-vindas enviado para: ${emailInscrito}`);
      } catch (error) {
        strapi.log.error(
          `Erro ao enviar email de boas-vindas para ${emailInscrito}: ${error.message}`,
        );
      }
    }
  });
};
*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=module.exports = ({ strapi }) => { ... }=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/*
export default ({ strapi }) => {
  // 1º Middleware: Envio de email automático ao publicar um novo post
  strapi.documents.use(async (context, next) => {
    // 1. Processa a ação no banco de dados PRIMEIRO e captura a resposta final
    const result = await next();

    // Regra de segurança: se a criação falhar no banco, pare a execução
    if (!result) return result;

    const BLOG_UID = "api::pagina-do-blog.pagina-do-blog";
    const CASOS_UID = "api::pagina-casos-juridico.pagina-casos-juridico";

    // 2. Identifica se o alvo da requisição foi o banco de posts
    const isAlvo = context.uid === BLOG_UID || context.uid === CASOS_UID;
    if (!isAlvo) return result; // Sempre termine o middleware retornando 'result'

    // 3. Verifica se o post acabou de ser publicado
    const publishedNow =
      (context.action === "create" && !!result.publishedAt) ||
      (context.action === "update" && !!result.publishedAt) ||
      context.action === "publish";

    if (!publishedNow) return result;

    const titulo =
      result.titulo_do_blog || result.titulo_caso_juridico || "Novo post";
    const resumo = result.resumo_do_assunto_do_blog || "";
    const slug = result.slug_do_blog || result.slug_caso_juridico || "";

    // Atualizado para focar diretamente no URL do Vite/React
    const baseUrl = process.env.SITE_URL || "http://localhost:5173";
    const link = `${baseUrl}/${result.slug_do_blog ? "blog" : "galeria"}/${slug}`;

    console.log(`\n\n[LOG] Novo post publicado e aprovado!\n`);
    console.log(`Título: ${titulo}\nLink: ${link}\n`);

    // 4. Disparo em background (Sem usar "await" externamente para não deixar o Admin lento)
    strapi.db
      .query("api::inscritos-newsletter.inscritos-newsletter")
      .findMany({ select: ["email"] })
      .then(async (inscritos) => {
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
                subject: `Leandro Viana - Novo post publicado: ${titulo}`,
                html,
              });
          } catch (err) {
            // O "instanceof Error" resolve o aviso do VS Code
            strapi.log.error(
              `Erro ao enviar para ${email}: ${err instanceof Error ? err.message : String(err)}`,
            );
          }
        }
      });

    // 5. Retorna o documento gravado de volta para a API
    return result;
  });

  // 2º Middleware: Email de boas-vindas ao cadastrar na newsletter
  strapi.documents.use(async (context, next) => {
    // 1. Processa a inclusão do email no banco e salva a variável 'result'
    const result = await next();

    if (!result) return result;

    // 2. Trava a porta: Isso só rola se for uma adição na coleção de Inscritos
    if (
      context.action === "create" &&
      context.uid === "api::inscritos-newsletter.inscritos-newsletter"
    ) {
      const emailInscrito = result.email;
      if (!emailInscrito) return result;

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
          <p style="font-size:12px;color:#666;">
            Se você não se inscreveu, ignore este email.
          </p>
        </div>
      `;

      // 3. Executa o disparo do serviço com Promises limpas
      strapi
        .plugin("email")
        .service("email")
        .send({
          to: emailInscrito,
          subject: "Bem-vindo à Newsletter Jurídica!",
          html: htmlBoasVindas,
        })
        .then(() => {
          strapi.log.info(
            `Email de boas-vindas enviado para: ${emailInscrito}`,
          );
        })
        .catch((error) => {
          strapi.log.error(
            `Erro ao enviar email de boas-vindas: ${error instanceof Error ? error.message : String(error)}`,
          );
        });
    }

    // 4. Fundamental no Strapi 5: retorne sempre o result.
    return result;
  });
};

*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// terceira alternativa para resolver o problema do strapi document service api middleware não funcionar no strapi v4.10.5, usando a sintaxe de module.exports ao invés de export default, e utilizando o strapi document service api middleware

module.exports = ({ strapi }) => {
  strapi.documents.use(async (context, next) => {
    // 1. RASTREADOR: Avisa no terminal TODA vez que o Strapi tentar fazer algo no banco
    console.log(
      `\n[STRAPI DEBUG] Interceptando ação: ${context.action} | Alvo (UID): ${context.uid}`,
    );

    // 2. Executa a ação original no banco de dados e aguarda a resposta
    const result = await next();

    // Se a criação falhar no banco por qualquer motivo, o código para aqui
    if (!result) return result;

    console.log(
      `[STRAPI DEBUG] Ação concluída no banco. Documento gerado com ID: ${result.id}`,
    );

    // =========================================================================
    // LÓGICA 1: EMAIL DE BOAS-VINDAS PARA A NEWSLETTER
    // =========================================================================
    // Usamos ".includes('inscrito')" para fugir de erros de digitação de traços ou underlines
    if (context.action === "create" && context.uid.includes("inscrito")) {
      const emailInscrito = result.email;

      if (!emailInscrito) {
        console.log(
          `[STRAPI DEBUG ERRO] Documento criado, mas não achamos a variável 'email'.`,
        );
        return result; // Encerra silenciosamente para não quebrar a página Home
      }

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

      // Envia o email em segundo plano (background)
      strapi
        .plugin("email")
        .service("email")
        .send({
          to: emailInscrito,
          subject: "Bem-vindo à Newsletter Jurídica!",
          html: htmlBoasVindas,
        })
        .then(() =>
          console.log(
            `[SUCESSO] Email de boas-vindas enviado na caixa de ${emailInscrito}!`,
          ),
        )
        .catch((err) => {
          // Isso resolve as marcações vermelhas de "type unknown" do seu VS Code
          const msg = err instanceof Error ? err.message : String(err);
          console.error(
            `[ERRO NODEMAILER] Falha ao enviar para ${emailInscrito}:`,
            msg,
          );
        });
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
          `[STRAPI DEBUG] Identificado novo post aprovado. Buscando a lista de clientes inscritos...`,
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
              console.log(
                `[STRAPI DEBUG] Nenhum inscrito encontrado na base. Disparo abortado.`,
              );
              return;
            }

            console.log(
              `[STRAPI DEBUG] Disparando para ${inscritos.length} clientes da base.`,
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
                const msg = err instanceof Error ? err.message : String(err);
                console.error(
                  `[ERRO NODEMAILER] ao enviar para ${email}:`,
                  msg,
                );
              }
            }
          });
      }
    }

    // 3. RETORNO OBRIGATÓRIO: Devolve o documento criado para a API (e para a tela do React)
    return result;
  });
};
