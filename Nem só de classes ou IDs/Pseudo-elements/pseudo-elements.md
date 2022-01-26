# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exempplos

* ::before
* ::after
* ::first-line

## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

--------------------------------
## Uso prático de cada elemento

* ::before

``` html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

``` css
li::before {
  content: "> "
}
```

--------------------------------

* ::after

``` html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

``` css
li::after{
  content: ";"
}
```

--------------------------------

* ::first-line

``` html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

``` css
p::first-line {
	font-weight: bold;
}
```