## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: '<length>' | '<percentage>'

''' css
div {
    /* shorthand */
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}
'''

        *padding poderá causar diferença na largura de um elemento*

https://developer.mozilla.org/en-US/docs/Web/CSS/padding

# Código aula

''' html
<div>
  margin
</div>

<section>Elemento abaixo</section>
'''

''' css
* {
  margin: 0;
}

div, section {
  border: 1px solid red;
  padding: 10px 2em 8px 50%;
}
'''