# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

-----------------------------------------------------------------------------------

## Basic Font Properties

* font-family
* font-Weight
* font-style
* font-size

-----------------------------------------------------------------------------------

# Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font - "fallback (Um escape)"

'''css
p {
    font-family: "Times New Roman", Times, serif;
}
''

    - serif
    - sans

-----------------------------------------------------------------------------------

## Font Weight

* Peso da fonte

initial: normal
values: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
Esses values dependem também da familia das fontes

''' css
p {
    font-weight: bold;
}
'''

-----------------------------------------------------------------------------------

## Font Style

* O Estilo da fonte

value initial: normal
values: normal, italic, oblique
Nem todas as familias de fontes podem permitir esses valores

''' css
span {
    font-style: italic;
}
'''

-----------------------------------------------------------------------------------

## Font Size

* O tamanho da fonte

Usa-se unidades de medida como valor, sendo os mais comuns o <em> ou <px>

''' css
p {
    font-size: 18px;
}
'''

-----------------------------------------------------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- Como usar fontes para a web?

    * @font-face
    * @import
    * link - fica no head da página

### Referências

https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face-in-css/
