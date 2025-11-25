import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import UseStrapiURL from "../../hooks/UseStrapiURL";

const RenderBlogContent = ({ content, flag }) => {
  const BASE_URL = UseStrapiURL();

  if (!content || !Array.isArray(content)) {
    return <p className="text-gray-500">Conteúdo não disponível.</p>;
  }

  if (flag !== "blog" && flag !== "Casos_juridicos") {
    return (
      <p className="text-red-500">
        Flag inválida fornecida como prop para o componente .jsx
        RenderBlogContent.
      </p>
    );
  }

  return (
    <>
      {flag === "blog" ? (
        <div className="prose prose-lg max-w-none">
          {content.map((block, index) => {
            // CABEÇALHO
            if (block.__component === "elementos.bloco-blog-cabecalho") {
              return (
                <h2
                  key={index}
                  id={block.link_id ? block.link_id : undefined}
                  className="mt-16 mb-6 text-3xl font-bold text-black md:text-4xl"
                >
                  {block.Texto_Cabecalho}
                </h2>
              );
            }

            // PARÁGRAFO SIMPLES
            if (block.__component === "elementos.bloco-blog-paragrafo") {
              return (
                <div key={index} className="mb-6">
                  {block.conteudo_blog &&
                    Array.isArray(block.conteudo_blog) && (
                      <BlocksRenderer
                        content={block.conteudo_blog}
                        blocks={{
                          // 1. PARÁGRAFO
                          paragraph: ({ children }) => (
                            <p className="mb-4 text-lg">{children}</p>
                          ),

                          // 2. CABEÇALHOS (H1-H6)
                          heading: ({ children, level }) => {
                            const Tag = `h${level}`;
                            return <Tag className="font-bold">{children}</Tag>;
                          },

                          // 3. LISTA NÃO ORDENADA (bullets)
                          list: ({ children, format }) => {
                            const Tag = format === "ordered" ? "ol" : "ul";
                            const style =
                              format === "ordered"
                                ? "list-decimal"
                                : "list-disc";
                            return (
                              <Tag className={`ml-8 ${style}`}>{children}</Tag>
                            );
                          },

                          // 4. ITEM DE LISTA
                          "list-item": ({ children }) => (
                            <li className="mb-2">{children}</li>
                          ),

                          // 5. CITAÇÃO/QUOTE
                          quote: ({ children }) => (
                            <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                              {children}
                            </blockquote>
                          ),

                          // 6. BLOCO DE CÓDIGO
                          code: ({ children }) => (
                            <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-white">
                              <code>{children}</code>
                            </pre>
                          ),

                          // 7. LINK
                          link: ({ children, url }) => (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                            >
                              {children}
                            </a>
                          ),

                          // 8. IMAGEM
                          image: ({ image }) => (
                            <figure className="my-8">
                              <img
                                src={image.url}
                                alt={image.alternativeText || ""}
                                className="w-full rounded"
                              />
                              {image.caption && (
                                <figcaption className="text-center text-sm text-gray-600">
                                  {image.caption}
                                </figcaption>
                              )}
                            </figure>
                          ),
                        }}
                        modifiers={{
                          // FORMATAÇÕES INLINE
                          bold: ({ children }) => (
                            <strong className="font-bold">{children}</strong>
                          ),
                          italic: ({ children }) => (
                            <em className="italic">{children}</em>
                          ),
                          underline: ({ children }) => (
                            <u className="underline">{children}</u>
                          ),
                          strikethrough: ({ children }) => (
                            <s className="line-through">{children}</s>
                          ),
                          code: ({ children }) => (
                            <code className="rounded bg-gray-100 px-1 font-mono text-sm">
                              {children}
                            </code>
                          ),
                        }}
                      />
                    )}
                </div>
              );
            }

            // PARÁGRAFO COM IMAGEM
            if (
              block.__component === "elementos.bloco-blog-paragrafo-e-imagem"
            ) {
              const temImagem = block.imagem_paragrafo?.url;
              const imagemEsquerda = block.imagem_do_lado_esquerdo;
              const paisagem = block.tamanho_imagem_paisagem;

              return (
                <div
                  key={index}
                  className={`mb-8 flex flex-col gap-6 ${
                    temImagem
                      ? imagemEsquerda
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                      : ""
                  }`}
                >
                  {/* Texto */}
                  <div className={temImagem ? "md:w-1/2" : "w-full"}>
                    {block.conteudo_blog &&
                      Array.isArray(block.conteudo_blog) && (
                        <BlocksRenderer
                          content={block.conteudo_blog}
                          blocks={{
                            paragraph: ({ children }) => (
                              <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                {children}
                              </p>
                            ),
                            list: ({ children, format }) => {
                              const Tag = format === "ordered" ? "ol" : "ul";
                              const listStyle =
                                format === "ordered"
                                  ? "list-decimal"
                                  : "list-disc";
                              return (
                                <Tag
                                  className={`mb-4 ml-8 space-y-2 ${listStyle}`}
                                >
                                  {children}
                                </Tag>
                              );
                            },
                          }}
                        />
                      )}
                  </div>

                  {/* Imagem */}
                  {temImagem && (
                    <div className={paisagem ? "md:w-full" : "md:w-1/2"}>
                      <img
                        src={`${BASE_URL}${block.imagem_paragrafo.url}`}
                        alt={
                          block.imagem_paragrafo.alternativeText ||
                          "Imagem do blog"
                        }
                        className="h-auto w-full rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>
              );
            }

            // IMAGEM GRANDE (SEM TEXTO)
            if (block.__component === "elementos.bloco-blog-imagem-grande") {
              if (!block.imagem?.url) return null;

              return (
                <figure key={index} className="my-10">
                  <img
                    src={`${BASE_URL}${block.imagem.url}`}
                    alt={block.imagem.alternativeText || "Imagem grande"}
                    className="w-full rounded-lg"
                  />
                  {block.imagem.caption && (
                    <figcaption className="mt-2 text-center text-sm text-gray-600">
                      {block.imagem.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // FALLBACK: Se não reconhecer o componente
            return (
              <div
                key={index}
                className="my-4 border-l-4 border-yellow-500 bg-yellow-50 p-4"
              >
                <p className="text-sm text-gray-700">
                  Componente não reconhecido: <code>{block.__component}</code>
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="prose prose-lg max-w-none">
          {content?.map((block, index) => {
            // PARÁGRAFO SIMPLES
            if (block.__component === "elementos.bloco-blog-paragrafo") {
              return (
                <div key={index} className="mb-6">
                  {block.conteudo_blog &&
                    Array.isArray(block.conteudo_blog) && (
                      <BlocksRenderer
                        content={block.conteudo_blog}
                        blocks={{
                          // 1. PARÁGRAFO
                          paragraph: ({ children }) => (
                            <p className="mb-4 text-lg">{children}</p>
                          ),

                          // 2. CABEÇALHOS (H1-H6)
                          heading: ({ children, level }) => {
                            const Tag = `h${level}`;
                            const sizes = {
                              1: "text-4xl font-bold mb-6",
                              2: "text-3xl font-bold mb-5",
                              3: "text-2xl font-semibold mb-4",
                              4: "text-xl font-semibold mb-3",
                            };
                            return (
                              <Tag
                                className={
                                  sizes[level] || "mb-2 text-lg font-bold"
                                }
                              >
                                {children}
                              </Tag>
                            );
                          },
                          // 3. LISTA NÃO ORDENADA (bullets)
                          list: ({ children, format }) => {
                            const Tag = format === "ordered" ? "ol" : "ul";
                            const style =
                              format === "ordered"
                                ? "list-decimal"
                                : "list-disc";
                            return (
                              <Tag className={`ml-8 ${style}`}>{children}</Tag>
                            );
                          },

                          // 4. ITEM DE LISTA
                          "list-item": ({ children }) => (
                            <li className="mb-2">{children}</li>
                          ),

                          // 5. CITAÇÃO/QUOTE
                          quote: ({ children }) => (
                            <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                              {children}
                            </blockquote>
                          ),

                          // 6. BLOCO DE CÓDIGO
                          code: ({ children }) => (
                            <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-white">
                              <code>{children}</code>
                            </pre>
                          ),

                          // 7. LINK
                          link: ({ children, url }) => (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                            >
                              {children}
                            </a>
                          ),

                          // 8. IMAGEM
                          image: ({ image }) => (
                            <figure className="my-8">
                              <img
                                src={image.url}
                                alt={image.alternativeText || ""}
                                className="w-full rounded"
                              />
                              {image.caption && (
                                <figcaption className="text-center text-sm text-gray-600">
                                  {image.caption}
                                </figcaption>
                              )}
                            </figure>
                          ),
                        }}
                        modifiers={{
                          // FORMATAÇÕES INLINE
                          bold: ({ children }) => (
                            <strong className="font-bold">{children}</strong>
                          ),
                          italic: ({ children }) => (
                            <em className="italic">{children}</em>
                          ),
                          underline: ({ children }) => (
                            <u className="underline">{children}</u>
                          ),
                          strikethrough: ({ children }) => (
                            <s className="line-through">{children}</s>
                          ),
                          code: ({ children }) => (
                            <code className="rounded bg-gray-100 px-1 font-mono text-sm">
                              {children}
                            </code>
                          ),
                        }}
                      />
                    )}
                </div>
              );
            }

            // FALLBACK: Se não reconhecer o componente
            return (
              <div
                key={index}
                className="my-4 border-l-4 border-yellow-500 bg-yellow-50 p-4"
              >
                <p className="text-3xl text-gray-700">
                  Componente não foi reconhecido:{" "}
                  <code>{block.__component}</code>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RenderBlogContent;
