# Primeira parte

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

```const endpoint_QUERY_URL_PARAMS = qs.stringify(
{
populate: {
Sobre_sessaoUM: { // ✅ nome exato do atributo no schema
fields: ["titulo", "subtitulo"],
},
Sobre_sessaoDOIS: { // ✅ nome exato do atributo no schema
populate: {
introducao_pessoal: {
fields: ["titulo", "subtitulo"],
},
imagem_sobre_2: {
fields: ["url"],
},
},
},
},
},
{ encodeValuesOnly: true },
);
```

---

## Resumo do que estava errado

| O que você fazia                                      | Por quê estava errado                                          | O que fazer                                |
| ----------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| `populate.sessoes.on`                                 | `sessoes` não é um campo, e `on` é só para Dynamic Zone        | Usar o nome real do atributo               |
| `"sessoes.sobre-sessao-um"` como chave dentro de `on` | Não há Dynamic Zone no schema                                  | Remover o `on` completamente               |
| Estrutura de Dynamic Zone                             | Seu campo é `"type": "component"`, não `"type": "dynamiczone"` | Usar populate direto pelo nome do atributo |

---

## Verificação rápida no Postman

Teste primeiro com:

```
GET http://localhost:1337/api/pagina-sobre?populate=\*
```

# Segunda Parte

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

#### |

# Strapi 5 REST API — `populate` vs `fields`: A Regra que Resolve Tudo

## O Problema

Ao tentar acessar dados da API `/api/pagina-sobre`, a requisição retornava:

```json
{
  "data": null,
  "error": {
    "status": 400,
    "name": "ValidationError",
    "message": "Invalid key titulo",
    "details": {
      "key": "titulo",
      "path": null,
      "source": "query",
      "param": "populate"
    }
  }
}
```

---

## Por que aconteceu?

O Strapi recebeu `populate[Sobre_sessaoUM][fields][0]=titulo` e foi verificar se `titulo` existe como **campo direto** de `Sobre_sessaoUM`.

Não existe — `titulo` está **um nível mais fundo**, dentro do componente `cabecalho`, que por sua vez está dentro de `Sobre_sessaoUM`.

Ou seja, foi pulado um nível de aninhamento.

---

## A Regra Geral

```
componente / relação  →  populate
campo escalar (texto, número, url…)  →  fields
```

> Sempre que houver **componentes aninhados em cascata**, empilhe `populate` até chegar no nível onde estão os campos escalares. Só então use `fields`. **Nunca pule um nível.**

---

## Código Errado ❌

```javascript
const endpoint_QUERY_URL_PARAMS = qs.stringify(
  {
    populate: {
      Sobre_sessaoUM: {
        fields: ["titulo", "subtitulo"], // ❌ titulo não é filho direto de Sobre_sessaoUM
      },
    },
  },
  { encodeValuesOnly: true },
);
```

**Por que está errado?**  
`titulo` e `subtitulo` não são campos diretos de `Sobre_sessaoUM`. Eles vivem dentro do componente `cabecalho`, que é filho de `Sobre_sessaoUM`. Ao usar `fields` diretamente, o Strapi não encontra esses campos e retorna `ValidationError`.

---

## Código Correto ✅

```javascript
const endpoint_QUERY_URL_PARAMS = qs.stringify(
  {
    populate: {
      Sobre_sessaoUM: {
        populate: {
          cabecalho: {
            // ✅ componente aninhado → usa populate
            fields: ["titulo", "subtitulo"], // ✅ campos escalares → usa fields
          },
        },
      },
      Sobre_sessaoDOIS: {
        populate: {
          introducao_pessoal: {
            // ✅ componente aninhado → usa populate
            fields: ["titulo", "subtitulo"], // ✅ campos escalares → usa fields
          },
          imagem_sobre_2: {
            // ✅ mídia (relação) → usa populate
            fields: ["url"], // ✅ campo escalar da mídia → usa fields
          },
        },
      },
    },
  },
  { encodeValuesOnly: true },
);
```

---

## Visualizando a Estrutura em Árvore

```
pagina-sobre
├── Sobre_sessaoUM         → populate
│   └── cabecalho          → populate
│       ├── titulo         → fields ✅
│       └── subtitulo      → fields ✅
│
└── Sobre_sessaoDOIS       → populate
    ├── introducao_pessoal → populate
    │   ├── titulo         → fields ✅
    │   └── subtitulo      → fields ✅
    └── imagem_sobre_2     → populate
        └── url            → fields ✅
```

---

## Tabela de Referência Rápida

| Tipo do campo no Strapi       | Keyword a usar                       |
| ----------------------------- | ------------------------------------ |
| Componente simples            | `populate`                           |
| Dynamic Zone                  | `populate` + `on`                    |
| Relação (relation)            | `populate`                           |
| Mídia (imagem, arquivo)       | `populate`                           |
| Texto, número, booleano, data | `fields`                             |
| URL de mídia                  | `fields` dentro do populate da mídia |

---

## Dica: Teste Sempre com `populate=*` Primeiro

Antes de construir a query detalhada, faça uma requisição simples no Postman:

```
GET http://localhost:1337/api/pagina-sobre?populate=*
```

O JSON retornado mostra os **nomes exatos dos campos** e a **estrutura real de aninhamento** do seu content type — o que elimina qualquer dúvida sobre qual keyword usar em cada nível.
