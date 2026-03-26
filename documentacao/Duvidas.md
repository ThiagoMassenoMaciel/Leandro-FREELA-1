# Eu devo ou não criar diferentes arquivos js que tem as mesmas funções que faz um get dos dados da api para o front-end de cada página do site ?

# ex de arquivos:

# `getDataHome.js`, `getDataSobre` , `getDataBlog.js`, `getDataCasosJuridicos.js`

# o que vai mudar em cada arquivo.js é apenas o nome da rota api e os parametros de url formatado

### porque eu acho importante criar um arquivo diferente para cada função que faz o get da api ?

#### 1. Para não sobrecarregar o componente react responsavel apenas para renderizar a página web daquela rota especifica

#### 2. Desaclopar , não colocar tudo no mesmo arquivo do componente que renderiza a página web daquela rota especifica.

#### Antes de chamar o fetch para api com NOME DA ROTA e com PARAMETROS URL ,

##### devo primeiro escrever em formato de objeto a requisição para a api trazer apenas os dados que eu filtrei.

##### Segundo, devo converter essa requisição escrita em forma de objeto de um javascript para um url params que a api do strapi framework entende.

##### Terceiro, eu chamo um hook responsavel que encapsula os paramentros ( rota da api e requisição dos dados que filtrei) chamando api pelo fetch.

#### Para essa parte desse objeto que é a requisição ( para se comunicar com a api do framework backend ) e converter-lo em url params válidos preciso de executar outra função e decidi separar isso daquele componente que só renderiza.
