# Javascript + React + Vite + Tailwind + Strapi 5 + Postegre sql

## API's

###### Retornar os dados do strapi referentes a página home

```
/api/pagina-home

```

###### Retornar os dados do strapi referentes a página sobre

```
/api/pagina-sobre

```

###### retornar array com todos os posts do blog em formato de miniatura (find)

```
/api/pagina-do-blogs

```

###### retornar objeto do post do blog clicado (findOne)

```
/api/pagina-do-blogs/:id

```

###### retornar array com todos os post de caso juridico em formato de miniatura (find)

```
/api/pagina-casos-juridicos
```

###### retornar aquele post de caso juridico clicado (findOne)

```
/api/pagina-casos-juridicos/:id
```

### ordem do desenvolvimento

1. construir todo o design front-end e os textos escolhidos `definir quantas páginas vai ter o site`, `perceber quais páginas vão precisar receber informação da api do strapi`, `quais api do strapi eu preciso e para quais paginas eles vao ser usados`
2. node instalado e ter o programa postgresql instalado `descobrir o usuario do banco` ,`descobrir a senha do usuario do banco `, `criar o nome do banco`
3. escolher pasta , intalar vite + boilerplate react + tailwind na raiz do projeto `npm run dev apartir da raiz do projeto`
4. instalar strapi e ja ir conectando com o banco de dados ja criado `cd strapi entrar pelo terminal na pasta do strapi e executar npm run dev`, `acessar interface do strapi pelo navegador usando localhost:PORTA_DE_CONEXÃO_diferente_da_porta_do_frontend ` `construir todos os campos de conteúdo de um pedaço` `adicionar todo o conteúdo conteúdo de um pedaço`
5. construir a base código dos componentes de cada uma das páginas do frontend `configurar a estrutura dos arquivos`, `criar os componentes basicos sem conteudo`, `estruturar as rotas`
6. estruturar de como vai ser a forma que vou fazer a requisição do front-end para api do strapi
7. para cada api testar se o URL QUERY PARAMS estao retornando todos os dados de conteúdo que preciso [sempre testando no postman](https://docs.strapi.io/cms/api/rest/interactive-query-builder)
8. Salvar a resposta das api dentro de arquivos json testes para depois eu perceber `como vou conseguir acessar dentro do json as informações que preciso` e `fazer todo o dado requisitado retornarem` para os componente react frontend que irão consumir os dados
9. e vai intercalando com a contrução de código do passo 6 com o passo 5, de pedaço por pedaço , resumo `faz pedaço um no strapi`, `prepara a api, testa ela , perceber como eu acessarei a informação que preciso daquilo que vem como resposta da api` `construir o pedaço no front-end que vai consumir este pedaço ja feito no content-type-builder do strapi 5 e preenchido no manager content do strapi 5`.
10. criar conta no github para o cliente e hospedar todo código do projeto lá
11. criar conta no BD postgresql da nuvem chamado neon servless postegresql [link aqui](https://www.bing.com/ck/a?!&&p=3d6c2eac9d19392d9e9b992ffd7b5227ad6f2d534787dbe387c85aebd7a840f5JmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=1442babb-d3c0-6047-12de-a855d2166138&psq=neon+servless&u=a1aHR0cHM6Ly9uZW9uLmNvbS8)
12. seguir o tutorial do video [link aqui](https://youtu.be/FR3Qcjymz9Q?si=FgqKY_dyLRsB7Frs)

# o ideal seria instalar o strapi depois de ja ter criado o banco no neon servless postgresql, e `conectar strapi ao BD feiot no neon`

```
4h
10-07-2025  4h`
11-07-2025  2h10'
  front-end coisas especificas que eu quero mudar quando o width-max <= 1134 diminuir o tamanho das imagens
12-07-2025  4h10'
  como eu faço isso de css "height: calc(100vh - 60px);" para tailwind ? ajeitar home com header
  1h
  #aprendizado
    uma das melhores maneiras de voce fazer imagem de qualquer tamanho caber direitinho é não usar tag img mas sim definir o tamanho dinamico da div e por a imagem como backgroun-image , centralizar a div e object-cover
  1h15
12-07-2025 1h

16-07-2025 2h
  meu objetivo era fazer com que aquele terceiro section grande da página home tivesse a imagem dentro da div do lado esquerdo igual rente com o tamanho da div do lado direito
  aprendi a alinhar duas divs para ficarem do mesmo tamanho inclusive se o height for definido dinâmico de acordo com o conteúdo que tem dentro (usei grid)
  da primeira vez usei flex e assim n consegui forçar com que as div esquerda ficasse do mesmo tamanho que a div do lado direito

17-07-2025  começei as 17:45 - 21:45     continuei 22:15 - 22:55      23:10 - 12:34

  4h  + 2h

18-07-2025 começei as 17:43 até as 21:08

  3h25'
      voltei as 22:00 até 23:25 terminei a página home
  1h25
------------------------------------------------------------------------------------------- apartir daqui é página sobre

    começei 23:36 fui até 23:59
  +23'
------------------------------------- neste dia trabalhei  5h13'


19-07-2025  comecei as 14:05

            até as 16:34 terminei a página sobre
------------------------------------------------------------------------------------------- apartir daqui é a página serviços
            começei 16:47 até 18:52

         total    2h30 + 2h5 =  4h35'


20-07-2025    começei as 10:07  até as 12:10--------2h3
                  de 12:40 até 13:03----------------23'
                  de 14:16 até 19:26----------------5h10
                  de 20:36 até 21:50----------------1h14
                   total-----------------------------8h50
          eu queria ficar mudando o quantidade de colunas no grid
                  aprendi que os breakpoints padronizados lg:grid-cols-1 do tailwind tem maior prioridade do que um breakpoint customidado min-[896px]:grid-cols-6 por este motivo de um breakpoint estiver escrito depois de um breakpoint custumizado
                  aqui vai a importancia do conteúdo que tive na disciplina de "Linguagems de programação" com a professora Neusa Liberato Evangelista eu sigo ela no linkedin ------lateralidade(efeito colateral) que executa a linha de código se começa executar da direita para esquerda ou começa executar da esquerda para direita

                   Comportamento desejado
                    Tamanho da viewport (largura)	      Nº de colunas (grid-cols-*)
                    < 640px	                            1 coluna
                    ≥ 640px e < 896px                 	2 colunas
                    ≥ 896px e < 1024px	                6 colunas
                    ≥ 1024px	                          1 coluna

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 min-[896px]:grid-cols-6 lg:grid-cols-1">
                  Explicando:

                  grid → ativa o grid

                  grid-cols-1 → padrão: 1 coluna (até 640px)

                  sm:grid-cols-2 → de 640px até 896px: 2 colunas

                  min-[896px]:grid-cols-6 → de 896px até 1023px: 6 colunas

                  lg:grid-cols-1 → a partir de 1024px (breakpoint lg): 1 coluna novamente

                  escolhi fazer grid nas 6 colunas no intervalo da width da viewport entre >=896px e < 1024px em css pois no tailwind não dá para fazer . E quando a width for maior que que 1024px quero que seja apenas uma coluna. Fiz "lg:grid-cols-1 " mas o css sobrescreveu por cima do tailwind e quando a tela width da viewport ficava maior que 1024px continuava as 6 colunas do grid so que eu quero apenas uma coluna  do grid quando width >1024px logo todas as telas maiores que 896px eu editei no css para não ter prigo de ser sobreescrito ignorando o tailwind .


---------------------------------------------------------------------------------------------------- apartir daqui é a página Galeria de casos
            antes total-----------------------------8h50
                  comecei as 22:07 até 23:27--------1h20
                  final do dia total mesmo----------10h10'


21-07-2025   começei as 16:35 até 16:57------- 22'
                        18:23 até 21:31------- 3h8'
                                      -------- 12'
                        22:33 até 23:23------- 50'


    na página galeria de casos  para telas com a width da viewport >=640px eu quero fazer o tamanho do section específico referente ao bloco de um sucesso juridico com 3 opções de tamanho diferente
      elementos do bloco
        imagem
        título
        subtítulo
        ler mais
      colocar este design todo dentro de um link que redireciona para uma página do específico caso juridico
          irei mudar de um jeito aleatótio o tamanho da height da imagem
          h-[277px]
          h-[416px]
          h-[540px]


    <  640px       grid 1 coluna             imagem h-[188]
    >= 640px       grid 2 coluna
    >= 1024px      grid 3 coluna
    >= 1280px      grid 4 colunas
    >= 1536px      grid 5 colunas

        como eu vou distrbuir as sections como eu vou colocar os blocos de um jeito para que fique em uma coluna, duas colunas , très colunas , quatro colunas, cinco colunas
          montar uma coluna
            sem calculo
          montar duas colunas
            construir o bloco react e separar em dois grupos coluna1 e coluna2

            VARIAVEL LOCAL     quantidade_total_blocos-------- me diz o total de objetos dentro da array que contem todos os dados de cada um dos blocos
            VARIAVEL LOCAL                  fracionado-------- é a quantidade de blocos que vai ficar na primeira coluna

            1. fracionado = quantidade_total_blocos/2  -----divisão inteira
              fazer um for do 0 até <= fracionado e colocar dentro de um JSX elemento que represente todos os blocos da coluna 1
              fazer outro for apartir do (fracionado+1) até < quantidade_total_blocos e colocar dentro de outro elemento JSX que represente todos os blocos da coluna 2


                  cada loop do for antes de construir o componente react
                    1.ESCOLHER A HEIGHT DA IMAGEM DE UM JEITO QUE A HEIGHT DO PRÓXIMO BLOCO NÃO SEJA TAMANHO REPETIDO
                         VARIAVEL GLOBAL LET                opcoes_height-------vai ter as opções diferentes de height  ["277px", "416px","540px"] ou ["h-[277px]", "h-[]"]
                         VARIAVEL LOCAL DO FOR     valor_height_escolhido-------vai ser o tamanho da height da imagem
                         VARIAVEL LOCAL DO FOR          indice_escolhido--------vai guardar o valor do sorteio

                      verificar se a array global esta vazia
                        SIM: adicionar todos valores
                        NÃO: continua o fluxo

                      GERAR UM NUMERO ALEATÓRIO QUE SERÁ O INDICE DA ARRAY
                        gerar um numero aleatório de intervalo 0 até o indice do último elemento na array global (opcoes_height)
                          guardar o resultado do sorteio dentro da variavel local (indice_escolhido)
                          guardar dentro da variavel (valor_height_escolhido) o especifico valor da array   opcoes_height[indice_escolhido]
                      criar uma nova array tirando da array aquele valor escolhido para não acontecer de sortear um valor repetido

                    2.CONSTUIR O COMPONENTE USANDO A VARIÁVEL (valor_height_escolhido) NO ESTILO STYLE INLINE
                        style:{{height:`${valor_height_escolhido}`}}

                        ou usando o tailwind mesmo     <div className={valor_height_escolhido}></div>


22-07-2025     começei 16:50 até as 17:50------------ 1h
                          18:45 até 21:57------------ 3h12'
                          22:18 até 22:48------------ 30'
        como eu vou distrbuir as sections como eu vou colocar os blocos de um jeito para que fique em uma coluna, duas colunas , très colunas , quatro colunas, cinco colunas
          montar uma coluna
            sem calculo
          montar duas colunas
            construir o bloco react e nomear className em dois grupos coluna1 e coluna2

            VARIAVEL LOCAL     array_dados-------- me diz o total de objetos dentro da array que contem todos os dados de cada um dos blocos
            VARIAVEL LOCAL     array_blocos_construidos-------- me diz o total de objetos dentro da array que contem todos os dados de cada um dos blocos
            VARIAVEL LOCAL     quantidade_total_blocos-------- me diz o total de objetos dentro da array que contem todos os dados de cada um dos blocos
            VARIAVEL LOCAL                  fracionado-------- é a quantidade de blocos que vai ficar na primeira coluna

            1. fracionado = quantidade_total_blocos/2  -----divisão inteira
              fazer um for do 0 até <= fracionado e colocar dentro de um JSX elemento que represente todos os blocos da coluna 1
              fazer outro for apartir do (fracionado+1) até < quantidade_total_blocos e colocar dentro de outro elemento JSX que represente todos os blocos da coluna 2


                  cada loop do for antes de construir o componente react
                    1.ESCOLHER A HEIGHT DA IMAGEM DE UM JEITO QUE A HEIGHT DO PRÓXIMO BLOCO NÃO SEJA TAMANHO REPETIDO
                         VARIAVEL GLOBAL LET                opcoes_height-------vai ter as opções diferentes de height  ["277px", "416px","540px"] ou ["h-[277px]", "h-[]"]
                         VARIAVEL LOCAL DO FOR     valor_height_escolhido-------vai ser o tamanho da height da imagem
                         VARIAVEL LOCAL DO FOR          indice_escolhido--------vai guardar o valor do sorteio

                      verificar se a array global esta vazia
                        SIM: adicionar todos valores
                        NÃO: continua o fluxo

                      GERAR UM NUMERO ALEATÓRIO QUE SERÁ O INDICE DA ARRAY
                        gerar um numero aleatório de intervalo 0 até o indice do último elemento na array global (opcoes_height)
                          guardar o resultado do sorteio dentro da variavel local (indice_escolhido)
                          guardar dentro da variavel (valor_height_escolhido) o especifico valor da array   opcoes_height[indice_escolhido]
                      criar uma nova array tirando da array aquele valor escolhido para não acontecer de sortear um valor repetido

                    2.CONSTUIR O COMPONENTE USANDO A VARIÁVEL (valor_height_escolhido) NO ESTILO STYLE INLINE
                        style:{{height:`${valor_height_escolhido}`}}

                        ou usando o tailwind mesmo     <div className={valor_height_escolhido}></div>

23-07-2025
                    NO TRABALHO ESTRUTUREI A LÓGICA DURANTE 1H
                    16:30 até 17:10 ---- 40'
                    17:20 até 20:35 ---- 3h15'
                    20:48 até 22:00 ---- 12'
                    total--------------- 4h7
24-07-2025

                    16:30 até 20:32 ---- 4h

27-07-2025
              8:17 até 12:34 ---- 4h
              12:44 até 13:20 --- 36'

28-07-2025
              17:07 até 21:07 ---- 4h
              22:27 até 22:59 ---- 32'

              assisti a playlist do curso até vid 9
                                                vidio mais importante pois mostra a lógica de como vai exibir a página do blog clicado

              204 minutos de curso https://youtube.com/playlist?list=PLl6EcvA_AoxHiX-2PjJ1eVOhKJ5HJGDvi&si=SS50GlkbqdSF2Tiv

              para eu customizar os breakpoints do tailwind devo ir no arquivo theme.css dentro do diretório
                node_modules/@tailwindcss/vite/node_modules/tailwindcss/theme.css
                adicionar --breakpoint-NomeDoBreakpointEscolhido: medida;

30-07-2025
        17:20 até 21h ----- 3h20
        22:04 até 22:32 --- 28'

03-08-2025
        08:22 até 12:22 ---- 4h

04-08-2025
        20'
        18:20 até 20:20 ---- 2h
10-08-2025
        16:43 até 17:10 ---- 27'
        18:00 até 18:43 ---- 43'

24-08-25
        12:14 até 12:39
        13:40 até 14:16
        16:27 até 17:40
          tiver que ir no gerenciador de serviços do windowns achar a opção do serviço postegresql clicar com o botão direito e clicar em iniciar
          depois disso executar dentro da pasta strapi "npm run dev"
        18:45 até 19:00
        19:04 até 20:04

31-08-2025
        11:10 até 12:10      preparando o backlog de todo o projeto



13-09-2025
        17:00 até 19:40 ------ 2h40'         construindo estrutura de conteudo no strapi e consumindo api no frontend

14-09-2025
        08:10 até 09:50 ------ 1h40'
        vid tutorial strapi criando estrutura content-type-builder https://youtu.be/Q-cPtlYG1cY?si=xCu3yicbYBYY8h8t
        voltar no 43:50  esse tempo ele ensina a criar um componente dinâmico
        parei em 53:40   esse tempo ele ensina como fazer uma query para pegar os dados da api do strapi

        10:25 até 12:30 ------ 2h5'

20-09-2025 9h7'
        11:05 até 12:40 ------ 1h35'
        13:33 até 15:33 ------ 2h
        16:36 até 19:36 ------ 3h

          apartir do minuto 58:38 ele começa a ensinar como consumir os dados que vai retornar da api no front-end
            feito  criar um file/hook/funcao que recebe url pelo parametro e faz o fetch
            --------------------------------------------------------------Load_data_to_webpage.jsx

            feito  criar outro file/hook/funcao que vai fazer a chamada da outra funcao que executa o fetch [video](01:05:29)
                                                                    aqui tem a string query enpoint parameters da pg home
                                                                    aqui devo converter notação endpoint para url + params
                                                                    https://www.npmjs.com/package/qs
            --------------------------------------------------------------GetDataHome.js

            feito  criar outro file/hook/funcao que vai pegar da variavel de ambiente url do site [video](01:03:08)
            --------------------------------------------------------------UseStrapiURL.js


      parei no minuto [video](01:09:39)
        20:47 até 23:19 ------- 2h32


22-09-2025
        20:20 até 21:30 ---- 1h10'

        criar endpoint parameters da sessão 3 home
        criar url endpoint params da sessão 3 home
        testar no postman endpoint url params criado
        escrever o código para front-end consumir nova sessão e fazer testes


12-10-2025
      18:36 até 19:36 ----- 1h
      19h   até 20:28 ----- 1h28'


27-10-2025
      10:20 até 11:40
      18:03 até 19:33 ----- 1h 30 so para resolver o problema de renderizar markdown em react

      21:18 até 01:23

03-11-2025
    19:07 até 20:07

04-11-2025
    18:05 até 19:25
    19:42 até 20:50

07-11-2025
    19:14 até 20:17

09-11-2025
    14:40 15:38 -------- 58'100v

09-11-2025
    19:20 até 20:45 ---- 1h25
    22:30 até 00:20 ---- 1h50

    parei no minuto do video 2:54:20

10-11-2025
    19:10 até 20:10 ---- 1h
    20:45 até 21:45 ---- 1h

11-11-2025
    20:00 até 21:50 ---- 1h50
    23:11 até 00:28 ---- 1h17

12-11-2025
    18:33 até 19:03 ---- 30min
    21:30 até 22:00 ---- 30 min

13-11-2025
    20:51 até 22:01 ---- 1h10

14-11-2025
    19:15 até 20:15

    3h01 minuto do video

    21h até 22:00 ----- 1h

15-11-2025
    10:50 até 12:10 --- 1h20

16-11-2025
    10:13 até 11:13 --- 1h

17-11-2025 noite da segunda feira
    18:44 até 21:44 --- 3h

18-11-2025
    01:30 até 03:45 --- 2h15
    04:40 até 05:45 --- 1h5

    18:10 até 20:15 --- 2h5

    21:34 até 23:34 --- 2h

19-11-2025
    21:10 até 20:10 --- 1h

23-11-2025
    08:05 até 09:20 --- 1h15
    09:56 até 11:05 --- 1h9
    11:30 até 12:07 --- 37'
    14:26 até 16:46 --- 2h26'

    21:09 até 22:9  --- 1h
    22:24 até 01:39 --- 3h15'

    10:00 até 10:33 --- 30'

    18:40 até 22:00 ---3h20'

    23:16 até
```
