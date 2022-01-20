# at-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de '@' seguido do idemtificador e valor

## Exemplos comuns

- @import /* incluir um css externo */
- @media /* regras condicionais para dispositivos */
- @font-face /* fontes externas */
- @keyframes /* Animation */

''' css
@import "http://local.com/style.css" ou url("http://local.com/style.css")

@media (min-width: 500px){
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}

