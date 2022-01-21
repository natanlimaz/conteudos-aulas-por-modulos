# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

''' css
body {
  margin: 0;
  height: 100vh;
  
  display: grid;
  grid-template-areas: 
    "header header"
    "main aside"
    "footer footer"; /*Definir minhas áreas - ("" - linhas e dento delas define-se as colunas, pode ser por nome)*/
  grid-template-rows: 30px 1fr 40px; /*Define o tamanho das linhas*/
  grid-template-columns: 1fr 80px; /*Define o tamanho das colunas*/
}

header {
  grid-area: header;
  background-color: green;
}

main {
  grid-area: main;
  background-color: red;
}

aside {
  grid-area: aside;
  background-color: blue;
}

footer {
  grid-area: footer;
  background-color: gray;
}
'''

''' html
<body>
  <header>Topo</header>

  <main>Conteúdo</main>

  <aside>Infos adicionais</aside>

  <footer>Rodapé</footer>
</body>
'''

# Grid vs Flexbox

Pode-se usar Grid e Flex junto, só não no mesmo elemento

''' css
body {
  margin: 0;
  height: 100vh;
  
  display: grid;
  grid-template-areas: 
    "header header"
    "main aside"
    "footer footer"; /*Definir minhas áreas - ("" - linhas e dento delas define-se as colunas, pode ser por nome)*/
  grid-template-rows: 30px 1fr 40px; /*Define o tamanho das linhas*/
  grid-template-columns: 1fr 80px; /*Define o tamanho das colunas*/
}

header {
  grid-area: header;
  background-color: green;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 8px;
}

main {
  grid-area: main;
  background-color: red;
}

aside {
  grid-area: aside;
  background-color: blue;
}

footer {
  grid-area: footer;
  background-color: gray;
}
'''

''' html
<body>
  <header>
    <div>
      logo
    </div>
    <div>
      menu
    </div>
  </header>

  <main>Conteúdo</main>

  <aside>Infos adicionais</aside>

  <footer>Rodapé</footer>
</body>
'''