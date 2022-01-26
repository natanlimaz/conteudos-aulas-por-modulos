# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elemento HTML
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contenha um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute Selector
    - Um elemento que tena um atributo específico.
* Pseudo-class selector
    - Elementos em um estado específico.

## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para Todos
eles.log
Usamos uma separação por vírgulas para Isso
```css
h1, p, a {
    color: red;
}
```




* Element Selector

``` HTML
<h1>Título da página</h1>
<p>Conteúdo da minha página</p>
```

``` CSS
h1 {
	color: blue;
	font-size: 60px;
}

p {
	color: green;
}
```
---------------------------------

* Id Selector

``` HTML
<h1 id="title">Título da página</h1>
<p id="content">Conteúdo da minha página</p>
```

``` CSS
#title {
  color: yellow;
}

#content {
	color: orange;
}
```
--------------------------------

* Class Selector

``` HTML
<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
```

``` CSS
.red {
color: red;
}

.big {
	font-size: 3em;
}
```
--------------------------------

* Attribute Selector

``` HTML
<h1 title="Algum titlulo">Título da página</h1>
<p title="Conteúdo da página">Conteúdo da minha página</p>
```

``` CSS
[title] {
	color: orange;
}
```
--------------------------------

* Pseudo-class Selector

``` HTML
<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
```

``` CSS
p:hover {
	color: red;
}

h1:hover {
	color: red;
}
```


* Múltiplos

``` CSS
h1, p, .title, .title:hover {
	color: red;
}
```