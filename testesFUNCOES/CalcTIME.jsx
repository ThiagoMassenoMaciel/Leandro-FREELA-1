import React from "react";
import Data from "../json-testes/blogs.json";
/*
function mostrarArray() {
  console.log("Data:", Data);
  console.log("----------------");
  console.log("array data[0].conteudo_blog :", Data?.data[0]?.conteudo_blog);
  console.log(
    " data[0]?.conteudo_blog[1].conteudo_blog",
    Data?.data[0]?.conteudo_blog[1].conteudo_blog,
  );
  console.log(
    " data[0]?.conteudo_blog[1].conteudo_blog children:",
    Data?.data[0]?.conteudo_blog[1].conteudo_blog[0].children,
  );
}
*/
//let cadaTEXTO = [];
export default function CALCULARtempoDeLeituraDesteBLOG(conteudo_blog_array) {
  if (!conteudo_blog_array || !Array.isArray(conteudo_blog_array)) return 0;

  const wordsPerMinute = 150;
  let totalWords = 0;

  // Função auxiliar para extrair texto de diferentes blocos
  const extractText = (blocks) => {
    blocks.forEach((block) => {
      // cabecalho
      if (
        block.__component === "elementos.bloco-blog-cabecalho" &&
        block.Texto_Cabecalho
      ) {
        if (block.Texto_Cabecalho) {
          const words = block.Texto_Cabecalho.trim().split(/\s+/).length;
          totalWords += words;
        }
      }

      //paragrafo_e_imagem
      if (
        block.__component === "elementos.bloco-blog-paragrafo-e-imagem" &&
        block.conteudo_blog
      ) {
        block.conteudo_blog.forEach((child) => {
          child.children.forEach((grandChild) => {
            if (grandChild.text) {
              const words = grandChild.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        });
      }

      //paragrafo
      if (
        block.__component === "elementos.bloco-blog-paragrafo" &&
        block.conteudo_blog
      ) {
        block.conteudo_blog.forEach((child) => {
          child.children.forEach((grandChild) => {
            if (grandChild.text) {
              const words = grandChild.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        });
      }
      /*

      // Títulos (headings)
      if (block.type === "heading" && block.children) {
        block.children.forEach((child) => {
          if (child.text) {
            const words = child.text.trim().split(/\s+/).length;
            totalWords += words;
          }
        });
      }

        // Listas
        if (block.type === "list" && block.children) {
          block.children.forEach((listItem) => {
            if (listItem.children) {
              listItem.children.forEach((child) => {
                if (child.text) {
                  const words = child.text.trim().split(/\s+/).length;
                  totalWords += words;
                }
              });
            }
          });
        }


        // Blocos de código (code)
        if (block.type === "code" && block.children) {
          block.children.forEach((child) => {
            if (child.text) {
              const words = child.text.trim().split(/\s+/).length;
              totalWords += words;
            }
          });
        }
         
      cadaTEXTO.push({ texto: block, totalPalavras: totalWords });
       */
    });
  };

  // Executa a extração
  extractText(conteudo_blog_array);

  // Calcula tempo de leitura
  const readingTime = Math.max(1, Math.ceil(totalWords / wordsPerMinute));

  // console.log("cadaTEXTO:", cadaTEXTO);
  return readingTime;
}

/*
export function CalcTIME({ conteudo }) {
  // usa o conteudo passado ou fallback para o JSON importado (estático)
  const source = conteudo;

  const source = conteudo ?? Data?.data[4]?.conteudo_blog;
  const readingTime = React.useMemo(() => {
    return mostrarArray();
  }, []);
  // }, [source]);

  const readingTime = React.useMemo(() => {
    return CALCULARtempoDeLeituraDesteBLOG(source);
  }, [source]);


  const readingTime = React.useMemo(() => {
    return CALCULARtempoDeLeituraDesteBLOG(Data?.data[0]?.conteudo_blog);
  }, []);
  // }, [source]);



  React.useEffect(() => {
    console.log("CalcTIME mounted / updated — readingTime:", readingTime);
  }, [readingTime]);

  return readingTime;

  
  return (
    <div>
      {readingTime} minuto{readingTime > 1 ? "s" : ""}
    </div>
  );
  
 
}

*/
