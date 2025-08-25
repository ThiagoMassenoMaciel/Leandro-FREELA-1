



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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


```