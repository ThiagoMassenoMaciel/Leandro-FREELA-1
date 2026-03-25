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

| O que você fazia | Por quê estava errado | O que fazer |
|---|---|---|
| `populate.sessoes.on` | `sessoes` não é um campo, e `on` é só para Dynamic Zone | Usar o nome real do atributo |
| `"sessoes.sobre-sessao-um"` como chave dentro de `on` | Não há Dynamic Zone no schema | Remover o `on` completamente |
| Estrutura de Dynamic Zone | Seu campo é `"type": "component"`, não `"type": "dynamiczone"` | Usar populate direto pelo nome do atributo |

---

## Verificação rápida no Postman

Teste primeiro com:

```
GET http://localhost:1337/api/pagina-sobre?populate=\*
```
