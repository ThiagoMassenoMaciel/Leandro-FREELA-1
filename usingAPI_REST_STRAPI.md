# Aprendendo API REST com strapi
###### fazer esta pergunta na sessão (ask ai) do site docs do strapi `how does populate and filtering works ?`

## retornar todos os campos de primeiro nível
```
http://localhost:1337/api/pagina-home?populate=*
```
#### resposta será assim
```
{
    "data": {
        "id": 13,
        "documentId": "gq07nl8qv8jy66o0i4cfxm5c",
        "createdAt": "2025-09-13T20:31:08.772Z",
        "updatedAt": "2025-09-20T16:45:26.559Z",
        "publishedAt": "2025-09-20T16:45:26.931Z",
        "locale": "pt-BR",
        "sessaoDOIS_subtitulo": "Especialização",
        "sessaoDOIS_titulo": "Serviços jurídicos abrangentes feitos sob medida para você",
        "sessaoDOIS_descricao": "Atuação em todas as áreas em especial trabalhista, previdenciário, família e tributário O meu compromisso é seriedade, competência, prazos, empatia e confiança para atender de acordo com os seus interesses....",
        "sessaoUM_imagem_coluna1_h1": {
            "id": 1,
            "documentId": "ok92tfdmekif66zoru8n5mu0",
            "name": "home1.png",
            "alternativeText": null,
            "caption": null,
            "width": 996,
            "height": 1001,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home1_3afe6dff4c.png",
                    "hash": "large_home1_3afe6dff4c",
                    "mime": "image/png",
                    "name": "large_home1.png",
                    "path": null,
                    "size": 1385.9,
                    "width": 995,
                    "height": 1000,
                    "sizeInBytes": 1385898
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home1_3afe6dff4c.png",
                    "hash": "small_home1_3afe6dff4c",
                    "mime": "image/png",
                    "name": "small_home1.png",
                    "path": null,
                    "size": 431.06,
                    "width": 498,
                    "height": 500,
                    "sizeInBytes": 431062
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home1_3afe6dff4c.png",
                    "hash": "medium_home1_3afe6dff4c",
                    "mime": "image/png",
                    "name": "medium_home1.png",
                    "path": null,
                    "size": 904.19,
                    "width": 746,
                    "height": 750,
                    "sizeInBytes": 904190
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home1_3afe6dff4c.png",
                    "hash": "thumbnail_home1_3afe6dff4c",
                    "mime": "image/png",
                    "name": "thumbnail_home1.png",
                    "path": null,
                    "size": 53.79,
                    "width": 155,
                    "height": 156,
                    "sizeInBytes": 53793
                }
            },
            "hash": "home1_3afe6dff4c",
            "ext": ".png",
            "mime": "image/png",
            "size": 331.41,
            "url": "/uploads/home1_3afe6dff4c.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:19:04.513Z",
            "updatedAt": "2025-09-20T16:40:05.773Z",
            "publishedAt": "2025-09-13T22:19:04.514Z"
        },
        "sessaoUM_imagem_coluna1_h2": {
            "id": 2,
            "documentId": "c98tvnuikwaufoqt0k370eok",
            "name": "home2.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 713,
            "formats": {
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home2_1480172c4c.png",
                    "hash": "small_home2_1480172c4c",
                    "mime": "image/png",
                    "name": "small_home2.png",
                    "path": null,
                    "size": 389.01,
                    "width": 500,
                    "height": 482,
                    "sizeInBytes": 389007
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home2_1480172c4c.png",
                    "hash": "thumbnail_home2_1480172c4c",
                    "mime": "image/png",
                    "name": "thumbnail_home2.png",
                    "path": null,
                    "size": 53.69,
                    "width": 162,
                    "height": 156,
                    "sizeInBytes": 53685
                }
            },
            "hash": "home2_1480172c4c",
            "ext": ".png",
            "mime": "image/png",
            "size": 174.93,
            "url": "/uploads/home2_1480172c4c.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:19:25.966Z",
            "updatedAt": "2025-09-13T22:19:25.966Z",
            "publishedAt": "2025-09-13T22:19:25.966Z"
        },
        "sessaoUM_imagem_coluna1_h3": {
            "id": 3,
            "documentId": "wm3p22rcp5c6hnntdjfsysoy",
            "name": "home3.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 1110,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home3_c3274a429d.png",
                    "hash": "large_home3_c3274a429d",
                    "mime": "image/png",
                    "name": "large_home3.png",
                    "path": null,
                    "size": 660.55,
                    "width": 667,
                    "height": 1000,
                    "sizeInBytes": 660553
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home3_c3274a429d.png",
                    "hash": "small_home3_c3274a429d",
                    "mime": "image/png",
                    "name": "small_home3.png",
                    "path": null,
                    "size": 164.53,
                    "width": 333,
                    "height": 500,
                    "sizeInBytes": 164528
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home3_c3274a429d.png",
                    "hash": "medium_home3_c3274a429d",
                    "mime": "image/png",
                    "name": "medium_home3.png",
                    "path": null,
                    "size": 367.51,
                    "width": 500,
                    "height": 750,
                    "sizeInBytes": 367508
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home3_c3274a429d.png",
                    "hash": "thumbnail_home3_c3274a429d",
                    "mime": "image/png",
                    "name": "thumbnail_home3.png",
                    "path": null,
                    "size": 22.69,
                    "width": 104,
                    "height": 156,
                    "sizeInBytes": 22694
                }
            },
            "hash": "home3_c3274a429d",
            "ext": ".png",
            "mime": "image/png",
            "size": 186.92,
            "url": "/uploads/home3_c3274a429d.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:20:04.409Z",
            "updatedAt": "2025-09-20T16:40:41.332Z",
            "publishedAt": "2025-09-13T22:20:04.409Z"
        },
        "sessaoUM_imagem_coluna1_h4": {
            "id": 4,
            "documentId": "i6ed33a3ewcb7x1b0mvco7dk",
            "name": "home4.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 1109,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home4_6297cd3bdd.png",
                    "hash": "large_home4_6297cd3bdd",
                    "mime": "image/png",
                    "name": "large_home4.png",
                    "path": null,
                    "size": 1048.83,
                    "width": 667,
                    "height": 1000,
                    "sizeInBytes": 1048827
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home4_6297cd3bdd.png",
                    "hash": "small_home4_6297cd3bdd",
                    "mime": "image/png",
                    "name": "small_home4.png",
                    "path": null,
                    "size": 319.69,
                    "width": 334,
                    "height": 500,
                    "sizeInBytes": 319687
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home4_6297cd3bdd.png",
                    "hash": "medium_home4_6297cd3bdd",
                    "mime": "image/png",
                    "name": "medium_home4.png",
                    "path": null,
                    "size": 647.16,
                    "width": 500,
                    "height": 750,
                    "sizeInBytes": 647162
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home4_6297cd3bdd.png",
                    "hash": "thumbnail_home4_6297cd3bdd",
                    "mime": "image/png",
                    "name": "thumbnail_home4.png",
                    "path": null,
                    "size": 41.01,
                    "width": 104,
                    "height": 156,
                    "sizeInBytes": 41008
                }
            },
            "hash": "home4_6297cd3bdd",
            "ext": ".png",
            "mime": "image/png",
            "size": 294.24,
            "url": "/uploads/home4_6297cd3bdd.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:20:22.127Z",
            "updatedAt": "2025-09-13T22:20:22.127Z",
            "publishedAt": "2025-09-13T22:20:22.128Z"
        },
        "sessaoUM_imagem_coluna1_h5": {
            "id": 5,
            "documentId": "addmk4i5vj84itapy95le5ps",
            "name": "home5.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 1110,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home5_2e4019d23c.png",
                    "hash": "large_home5_2e4019d23c",
                    "mime": "image/png",
                    "name": "large_home5.png",
                    "path": null,
                    "size": 915.7,
                    "width": 667,
                    "height": 1000,
                    "sizeInBytes": 915696
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home5_2e4019d23c.png",
                    "hash": "small_home5_2e4019d23c",
                    "mime": "image/png",
                    "name": "small_home5.png",
                    "path": null,
                    "size": 228.14,
                    "width": 333,
                    "height": 500,
                    "sizeInBytes": 228143
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home5_2e4019d23c.png",
                    "hash": "medium_home5_2e4019d23c",
                    "mime": "image/png",
                    "name": "medium_home5.png",
                    "path": null,
                    "size": 511.73,
                    "width": 500,
                    "height": 750,
                    "sizeInBytes": 511730
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home5_2e4019d23c.png",
                    "hash": "thumbnail_home5_2e4019d23c",
                    "mime": "image/png",
                    "name": "thumbnail_home5.png",
                    "path": null,
                    "size": 30.95,
                    "width": 104,
                    "height": 156,
                    "sizeInBytes": 30946
                }
            },
            "hash": "home5_2e4019d23c",
            "ext": ".png",
            "mime": "image/png",
            "size": 220.01,
            "url": "/uploads/home5_2e4019d23c.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:20:39.094Z",
            "updatedAt": "2025-09-20T16:41:32.999Z",
            "publishedAt": "2025-09-13T22:20:39.094Z"
        },
        "sessaoUM_imagem_coluna2_h6": {
            "id": 6,
            "documentId": "kgqi6w3vu5s1tm468p4tchyx",
            "name": "home6.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 1110,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home6_2d31f20c91.png",
                    "hash": "large_home6_2d31f20c91",
                    "mime": "image/png",
                    "name": "large_home6.png",
                    "path": null,
                    "size": 753.62,
                    "width": 667,
                    "height": 1000,
                    "sizeInBytes": 753619
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home6_2d31f20c91.png",
                    "hash": "small_home6_2d31f20c91",
                    "mime": "image/png",
                    "name": "small_home6.png",
                    "path": null,
                    "size": 228.12,
                    "width": 333,
                    "height": 500,
                    "sizeInBytes": 228122
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home6_2d31f20c91.png",
                    "hash": "medium_home6_2d31f20c91",
                    "mime": "image/png",
                    "name": "medium_home6.png",
                    "path": null,
                    "size": 466.51,
                    "width": 500,
                    "height": 750,
                    "sizeInBytes": 466505
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home6_2d31f20c91.png",
                    "hash": "thumbnail_home6_2d31f20c91",
                    "mime": "image/png",
                    "name": "thumbnail_home6.png",
                    "path": null,
                    "size": 29.05,
                    "width": 104,
                    "height": 156,
                    "sizeInBytes": 29047
                }
            },
            "hash": "home6_2d31f20c91",
            "ext": ".png",
            "mime": "image/png",
            "size": 269.35,
            "url": "/uploads/home6_2d31f20c91.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:20:56.355Z",
            "updatedAt": "2025-09-20T16:41:51.536Z",
            "publishedAt": "2025-09-13T22:20:56.355Z"
        },
        "sessaoUM_imagem_coluna2_h7": {
            "id": 7,
            "documentId": "o0enqeg3dr97zgmkk0zrt5az",
            "name": "home7.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 1110,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home7_6336ccc05f.png",
                    "hash": "large_home7_6336ccc05f",
                    "mime": "image/png",
                    "name": "large_home7.png",
                    "path": null,
                    "size": 674.82,
                    "width": 667,
                    "height": 1000,
                    "sizeInBytes": 674822
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home7_6336ccc05f.png",
                    "hash": "small_home7_6336ccc05f",
                    "mime": "image/png",
                    "name": "small_home7.png",
                    "path": null,
                    "size": 168.89,
                    "width": 333,
                    "height": 500,
                    "sizeInBytes": 168894
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home7_6336ccc05f.png",
                    "hash": "medium_home7_6336ccc05f",
                    "mime": "image/png",
                    "name": "medium_home7.png",
                    "path": null,
                    "size": 378.3,
                    "width": 500,
                    "height": 750,
                    "sizeInBytes": 378300
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home7_6336ccc05f.png",
                    "hash": "thumbnail_home7_6336ccc05f",
                    "mime": "image/png",
                    "name": "thumbnail_home7.png",
                    "path": null,
                    "size": 22.01,
                    "width": 104,
                    "height": 156,
                    "sizeInBytes": 22009
                }
            },
            "hash": "home7_6336ccc05f",
            "ext": ".png",
            "mime": "image/png",
            "size": 210.68,
            "url": "/uploads/home7_6336ccc05f.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:21:14.743Z",
            "updatedAt": "2025-09-13T22:21:14.743Z",
            "publishedAt": "2025-09-13T22:21:14.744Z"
        },
        "sessaoUM_imagem_coluna2_h8": {
            "id": 8,
            "documentId": "zqxx5aijochgn9d9fner4c9p",
            "name": "home8.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 494,
            "formats": {
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home8_7756a2e66a.png",
                    "hash": "small_home8_7756a2e66a",
                    "mime": "image/png",
                    "name": "small_home8.png",
                    "path": null,
                    "size": 316.02,
                    "width": 500,
                    "height": 334,
                    "sizeInBytes": 316019
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home8_7756a2e66a.png",
                    "hash": "thumbnail_home8_7756a2e66a",
                    "mime": "image/png",
                    "name": "thumbnail_home8.png",
                    "path": null,
                    "size": 80.48,
                    "width": 234,
                    "height": 156,
                    "sizeInBytes": 80476
                }
            },
            "hash": "home8_7756a2e66a",
            "ext": ".png",
            "mime": "image/png",
            "size": 137.56,
            "url": "/uploads/home8_7756a2e66a.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:21:31.935Z",
            "updatedAt": "2025-09-13T22:21:31.935Z",
            "publishedAt": "2025-09-13T22:21:31.935Z"
        },
        "sessaoUM_imagem_coluna2_h9": {
            "id": 9,
            "documentId": "mg74m5xwesgnagrrext5hn83",
            "name": "home9.png",
            "alternativeText": null,
            "caption": null,
            "width": 740,
            "height": 493,
            "formats": {
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home9_92411813cb.png",
                    "hash": "small_home9_92411813cb",
                    "mime": "image/png",
                    "name": "small_home9.png",
                    "path": null,
                    "size": 233.32,
                    "width": 500,
                    "height": 333,
                    "sizeInBytes": 233320
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home9_92411813cb.png",
                    "hash": "thumbnail_home9_92411813cb",
                    "mime": "image/png",
                    "name": "thumbnail_home9.png",
                    "path": null,
                    "size": 57.88,
                    "width": 234,
                    "height": 156,
                    "sizeInBytes": 57883
                }
            },
            "hash": "home9_92411813cb",
            "ext": ".png",
            "mime": "image/png",
            "size": 118.65,
            "url": "/uploads/home9_92411813cb.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:21:49.764Z",
            "updatedAt": "2025-09-13T22:21:49.764Z",
            "publishedAt": "2025-09-13T22:21:49.764Z"
        },
        "sessaoUM_imagem_coluna2_h10": {
            "id": 10,
            "documentId": "vt7cenl7q6of7lbm3bmbx2zj",
            "name": "home10.png",
            "alternativeText": null,
            "caption": null,
            "width": 616,
            "height": 640,
            "formats": {
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home10_57d778e7cf.png",
                    "hash": "small_home10_57d778e7cf",
                    "mime": "image/png",
                    "name": "small_home10.png",
                    "path": null,
                    "size": 270.32,
                    "width": 481,
                    "height": 500,
                    "sizeInBytes": 270320
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home10_57d778e7cf.png",
                    "hash": "thumbnail_home10_57d778e7cf",
                    "mime": "image/png",
                    "name": "thumbnail_home10.png",
                    "path": null,
                    "size": 38.83,
                    "width": 150,
                    "height": 156,
                    "sizeInBytes": 38826
                }
            },
            "hash": "home10_57d778e7cf",
            "ext": ".png",
            "mime": "image/png",
            "size": 92.81,
            "url": "/uploads/home10_57d778e7cf.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:22:05.931Z",
            "updatedAt": "2025-09-13T22:22:05.931Z",
            "publishedAt": "2025-09-13T22:22:05.931Z"
        },
        "sessaoDOIS_imagem_h11": {
            "id": 11,
            "documentId": "sn9yet9zt9w2i09apzi6qa57",
            "name": "home11.png",
            "alternativeText": null,
            "caption": null,
            "width": 1138,
            "height": 712,
            "formats": {
                "large": {
                    "ext": ".png",
                    "url": "/uploads/large_home11_783c7f05ad.png",
                    "hash": "large_home11_783c7f05ad",
                    "mime": "image/png",
                    "name": "large_home11.png",
                    "path": null,
                    "size": 1040.42,
                    "width": 1000,
                    "height": 626,
                    "sizeInBytes": 1040417
                },
                "small": {
                    "ext": ".png",
                    "url": "/uploads/small_home11_783c7f05ad.png",
                    "hash": "small_home11_783c7f05ad",
                    "mime": "image/png",
                    "name": "small_home11.png",
                    "path": null,
                    "size": 301.69,
                    "width": 500,
                    "height": 313,
                    "sizeInBytes": 301692
                },
                "medium": {
                    "ext": ".png",
                    "url": "/uploads/medium_home11_783c7f05ad.png",
                    "hash": "medium_home11_783c7f05ad",
                    "mime": "image/png",
                    "name": "medium_home11.png",
                    "path": null,
                    "size": 620.78,
                    "width": 750,
                    "height": 469,
                    "sizeInBytes": 620780
                },
                "thumbnail": {
                    "ext": ".png",
                    "url": "/uploads/thumbnail_home11_783c7f05ad.png",
                    "hash": "thumbnail_home11_783c7f05ad",
                    "mime": "image/png",
                    "name": "thumbnail_home11.png",
                    "path": null,
                    "size": 84.79,
                    "width": 245,
                    "height": 153,
                    "sizeInBytes": 84787
                }
            },
            "hash": "home11_783c7f05ad",
            "ext": ".png",
            "mime": "image/png",
            "size": 260.57,
            "url": "/uploads/home11_783c7f05ad.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2025-09-13T22:33:58.836Z",
            "updatedAt": "2025-09-13T22:33:58.836Z",
            "publishedAt": "2025-09-13T22:33:58.836Z"
        },
        "sessoes": [
            {
                "__component": "sessoes.home-sessao-um",
                "id": 6
            },
            {
                "__component": "sessoes.home-sessao-dois",
                "id": 6,
                "subtitulo": "Especialização",
                "titulo": "Serviços jurídicos abrangentes feitos sob medida para você",
                "descricao": "Atuação em todas as áreas em especial trabalhista, previdenciário, família e tributário O meu compromisso é seriedade, competência, prazos, empatia e confiança para atender de acordo com os seus interesses...."
            }
        ],
        "localizations": []
    },
    "meta": {}
}
```

## ENDPOINT QUERY PARAMETERS acessando os campos dentro dos componentes da estrutura type-builder
```
{
  populate:{
    sessoes : {
      on:{
        "sessoes.home-sessao-um" : {
            populate:{
              texto: true,
              
              imagens:{
                populate:{
                  imagem_coluna1_h1 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h2 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h3 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h4 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h5 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h6 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h7 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h8 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h9 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h10 :{
                    fields: ["url"]
                  },
                }
              }
            }
        }
      }
    }
  }
}
```
## notação URL query correspondente ao query acima que so faz o filtro de apenas um componente dinamic zone
```
http://localhost:1337/api/pagina-home?populate[sessoes][on][sessoes.home-sessao-um][populate][texto]=true&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h1][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h2][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h3][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h4][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h5][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h6][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h7][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h8][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h9][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h10][fields][0]=url
```

## notação URL query contendo os dois componentes dinamic zone

```
http://localhost:1337/api/pagina-home?populate[sessoes][on][sessoes.home-sessao-um][populate][texto]=true&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h1][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h2][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h3][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h4][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna1_h5][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h6][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h7][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h8][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h9][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-um][populate][imagens][populate][imagem_coluna2_h10][fields][0]=url&populate[sessoes][on][sessoes.home-sessao-dois][populate][imagem_sessaoDOIS_h11][fields][0]=url
```
## ENDPOINT QUERY PARAMETERS acessando os campos de dois componentes dinamic zone

```
{
  populate:{
    sessoes : {
      on:{
       "sessoes.home-sessao-um" : {
            populate:{
              texto: true,
              
              imagens:{
                populate:{
                  imagem_coluna1_h1 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h2 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h3 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h4 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h5 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h6 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h7 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h8 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h9 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h10 :{
                    fields: ["url"]
                  },
                }
              }
            }
        },
        "sessoes.home-sessao-dois":{
          populate : {
            "imagem_sessaoDOIS_h11":{
              fields: ["url"]
            }           
          }
        }
      }
    }
  }
}
```

## ENDPOINT QUERY PARAMETERS acessando os campos de 3 componentes dinamic zone

```
{
  populate:{
    sessoes : {
      on:{
       "sessoes.home-sessao-um" : {
            populate:{
              texto: true,
              
              imagens:{
                populate:{
                  imagem_coluna1_h1 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h2 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h3 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h4 :{
                    fields: ["url"]
                  },
                  imagem_coluna1_h5 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h6 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h7 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h8 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h9 :{
                    fields: ["url"]
                  },
                  imagem_coluna2_h10 :{
                    fields: ["url"]
                  },
                }
              }
            }
        },
        "sessoes.home-sessao-dois":{
          populate : {
            "imagem_sessaoDOIS_h11":{
              fields: ["url"]
            }           
          }
        }
        "sessoes.home-sessao-tres":{
          populate : {
            introducao: true,
            bloco_um: true,
            bloco_dois: true,
            bloco_tres: true,
            bloco_quatro: true,

                       
          }
        }
      }
    }
  }
}
```



i