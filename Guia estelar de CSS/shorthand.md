# Shorthand

* junção de propriedades
* resumido
* legível

''' css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}

## Detalhes

Algumas das características do shorthand:

Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.

Os valores que não forem especificados irão assumir o valor padrão.

Por fim, geralmente, a ordem descrita não importa, mas, caso haja muitas propriedades com valores semelhantes, poderemos encontrar problemas.

## Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, border-left,
border-radius, border-right, border-style, border-top, border-width, 
column-rule, column, flex, flex-flow, font, grid, grid-area, grid-column,
grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, 
place-content, place-itens, place-self, text-decoration, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**