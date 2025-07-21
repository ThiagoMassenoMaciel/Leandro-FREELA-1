



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


```