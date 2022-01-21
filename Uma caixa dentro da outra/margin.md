## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: '<length>' | '<percentage>' | auto

''' css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
'''

        *Cuidado com margin collapsing (top se junta ao bottom)*

https://developer.mozilla.org/en-US/docs/Web/CSS/margin

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
  width: 100px;
  height: 100px;
  
  margin: 10px auto;
}
'''