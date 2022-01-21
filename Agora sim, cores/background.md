## Background

- Define um fundo para nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

background-color: red; /*Define a cor de fundo do background*/

background-image: url(Aqui vai um link); /* Define uma imagem como fundo do background*/

background-repeat: no-repeat; /* Define se vai haver repetição da imagem ou não no background. (no-repeat)(repeat)(repeat-x) (repeat-x)*/

background-position: left top; /* (background-position: Eixo horizontal, eixo vertical)<center><bottom><top><left><right> - Define a posição da imagem na tela*/

background-size: contain; /*contain, cover, <percentage (largura% altura%)> (px, em) - Define o tamanho da imagem*/

background-origin: content-box; /*border-box, content-box, padding-box*/

background-clip: content-box; /*border-box, content-box, padding-box*/

background-attachment: fixed; /* scroll, fixed - define se o background rola junto com a página ou não*/

 background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2)); /*linear-gradient(), radial-gradient()*/

## Usar multiplos background

Só separa por vírgulas como no exemplo abaixo

background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2)) ,url(https://source.unsplash.com/random) no-repeat right top / 50px border-box content-box fixed;


-------------------------------------------------------------------------------------
'''css
{
    * {
  margin: 0;
}

header {
  height: 100px;
  border: 7px dashed red;
  padding: 16px;
  
  background-color: rgb(55, 100, 50);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC);
  
  background-repeat: no-repeat;
  background-position: center; /*Eixo horizontal, eixo vertical*/
  background-size: contain; /*contain, cover, <percentage (largura% altura%)> (px, em)*/
  background-origin: content-box; /*border-box, content-box, padding-box*/
  background-clip: content-box; /*border-box, content-box, padding-box*/
  }
}
'''

'''html
{
<header>
  
</header>
<main>
  <h1>Evolua rápido como a tecnologia.</h1>
  <p> Junte-se a milhares de devs e acelere na
  direção dos seus objetivos.</p>
</main>
}
'''