import React from "react";

const PostBlogPageFirstVersion = () => {
  return (
    <div>
      <article className="w-full bg-white">
        {/* Breadcrumb */}
        <nav className="px-[24px] py-6 md:px-[34px] lg:px-[44px]">
          <Link to="/blogs" className="text-blue-600 hover:underline">
            ← Voltar para o blog
          </Link>
        </nav>

        {/* Cabeçalho do Post */}
        <header className="mx-auto max-w-[900px] px-[24px] md:px-[34px] lg:px-0">
          {/* Categoria */}
          <span className="mb-4 inline-block font-semibold text-black uppercase">
            {tipo_assunto_do_blog || "Artigo"}
          </span>

          {/* Título */}
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {titulo_do_blog}
          </h1>

          {/* Resumo */}
          <p className="mb-6 text-xl text-gray-700">
            {resumo_do_assunto_do_blog}
          </p>

          {/* Metadados */}
          <div className="mb-10 flex items-center gap-4 text-gray-600">
            <span>Por {autor_escreveu_blog || "Leandro Viana"}</span>
            <span>•</span>
            <span>{new Date(createdAt).toLocaleDateString("pt-BR")}</span>
          </div>
        </header>

        {/* Imagem de Capa */}
        {imagem_capa_blog?.url && (
          <div className="mb-12 w-full">
            <img
              src={`${BASE_URL}${imagem_capa_blog.url}`}
              alt={imagem_capa_blog.alternativeText || titulo_do_blog}
              className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
            />
          </div>
        )}

        {/* Conteúdo do Post (Rich Text) */}
        <div className="mx-auto max-w-[900px] px-[24px] pb-20 md:px-[34px] lg:px-0">
          <div className="prose prose-lg max-w-none">
            <BlocksRenderer
              content={conteudo_blog}
              blocks={{
                paragraph: ({ children }) => (
                  <p className="mb-6 text-lg leading-relaxed text-gray-800">
                    {children}
                  </p>
                ),
                heading: ({ children, level }) => {
                  const sizes = {
                    1: "text-4xl",
                    2: "text-3xl",
                    3: "text-2xl",
                    4: "text-xl",
                    5: "text-lg",
                    6: "text-base",
                  };
                  const Tag = `h${level}`;
                  return (
                    <Tag className={`${sizes[level]} mt-8 mb-4 font-bold`}>
                      {children}
                    </Tag>
                  );
                },
                list: ({ children, format }) => {
                  const Tag = format === "ordered" ? "ol" : "ul";
                  const listStyle =
                    format === "ordered" ? "list-decimal" : "list-disc";
                  return (
                    <Tag className={`mb-6 ml-8 space-y-2 ${listStyle}`}>
                      {children}
                    </Tag>
                  );
                },
                image: ({ image }) => (
                  <figure className="my-8">
                    <img
                      src={`${BASE_URL}${image.url}`}
                      alt={image.alternativeText || ""}
                      className="w-full rounded"
                    />
                    {image.caption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-600">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ),
                quote: ({ children }) => (
                  <blockquote className="my-6 border-l-4 border-black bg-gray-50 py-4 pl-6 text-gray-700 italic">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <pre className="my-6 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-white">
                    <code>{children}</code>
                  </pre>
                ),
              }}
            />
          </div>
        </div>

        {/* Call to Action no Final */}
        <section className="bg-gray-100 px-[24px] py-16 md:px-[34px] lg:px-[44px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Precisa de orientação jurídica?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Entre em contato para uma consultoria especializada
            </p>
            <button className="bg-black px-8 py-4 text-white transition hover:bg-gray-900">
              Agendar Consultoria
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PostBlogPageFirstVersion;
