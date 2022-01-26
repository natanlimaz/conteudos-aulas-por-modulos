# Pseudo-Classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado
específico.

Exemplo: É o primeiro elemento dentro den uma caixa, ou, o elemento está com o
ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
`:pesudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do Usuário

* :hover
* :focus

``` html
<a href="#">Clique aqui</a>
<input type="text">
```

``` css
a:hover {
   color: red;
}

input:focus {
  border-color: red;
  outline: none; // n é recomendado desabilitar o outline(devido a acessibilidade), foi desabilitado so para ficar visivel a cor da borda
}
```

## Atributos

* :disabled
* :required

``` html disabled
<input type="text" disabled>
```

``` css disabled
input:disabled {
  background-color: green;
}
```


``` html required
<input type="text" required>
```

``` css required
input:required {
  background-color: red;
}
```

## Referências

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes










#### PRATICAS PARA TESTAR (Contem uso do odd e even em um exemplo abaixo)
---------------------------------

* :first-child
```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```

```css
ul li:first-child {
  font-weight: bold;
}
```

---------------------------------

* :nth-of-type()

```html
<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```

```css
ul li:nth-of-type(1) {
  font-weight: bold;
}
```

---------------------------------

* :nth-child()
<ul>
	<h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```html

```

```css
ul li:nth-child(2) {
  font-weight: bold;
}
```

---------------------------------

## odd e even (impares e pares)

``` html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css
ul li:nth-child(odd){
  color: black;
  background: #eee;
}

ul li:nth-child(even){
  color: gray;
}
```