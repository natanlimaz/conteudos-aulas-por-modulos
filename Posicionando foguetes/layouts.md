# Page layouts

    - Tables
    - Floats e clear
    - Frameworks e Grid Systems
    - Flexbox
    - Grid

## Posicionamentos

Controlar onde, na página, o elemento irá ficar,
alterando o fluxo normal dos elementos.

- Name: position
- Value: static|relative|absolute|fixed

<static> - todos são static, esse é o padrão deles, vão seguir o fluxo normal ficando um abaixo do outro

## Relative

- top, right, bottom, left, z-index

''' css
.box{
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: relative;
  left: 100px;
  top: 80px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
'''

'''html
<div class="box1 box"></div>
<div class="box2 box"></div>
<div class="box3 box"></div>
'''


## Absolute

- top, right, bottom, left, z-index

''' css
.box{
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}


.box1 {
  background-color: red;
  position: absolute;
  right: 0px;
  bottom: 0px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
'''

''' html
 <div class="box1 box"></div>
 <div class="box2 box"></div>
 <div class="box3 box"></div>

'''

## Fixed
Faz o elemento ficar fixo na página

- top, right, bottom, left, z-index

'''css
.box{
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}


.box1 {
  background-color: red;
  position: fixed;
  top: 50px;
  
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
'''

'''html
 <div class="box1 box"></div>
 <div class="box2 box"></div>
 <div class="box3 box"></div>
'''


## Element Stacking (Empilhamento de elementos)

relacionado ao valor 'z-index', trabalha como um exemplo de "camadas"

- top e bottom - relativo ao eixo y
- left e right - relativo ao eixo x
- z-indez - relativo ao eixo z

''' css
.box{
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}


.box1 {
  background-color: red;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 4;
}

.box2 {
  background-color: green;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}

.box3 {
  background-color: blue;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
}
'''

''' html
 <div class="box1 box"></div>
 <div class="box2 box"></div>
 <div class="box3 box"></div>
'''