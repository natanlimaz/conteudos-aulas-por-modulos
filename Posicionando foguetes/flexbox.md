# Flexbox

* Nos permite posicionar os elementos dentro da caixa
* Controle em uma dimensão (horizontal ou vertical)
* Alinhamento, direcionamento, ordenar e tamanhos

'''css
div.parent {
	display: flex;
}
'''

## flex-direction

* Qual a direção do flex: horizontal ou vertical
* row | column

## Alinhamento

* justify-content: space-between(espaço entre os elementos), center(centraliza os elementos)
* align-items

''' css
body {
  height: 100vh;
  margin: 0;
  
  display: flex;
  
  align-items: center;
}

.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  
}

.box {
  width: 50px;
  height: 50px;
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
'''

''' html
<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>
'''

