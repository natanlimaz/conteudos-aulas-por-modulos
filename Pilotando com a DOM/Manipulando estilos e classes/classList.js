// Alterando estilos
// classLis
const element = document.querySelector('body')

element.classList.add('active', 'green')

console.log(element.classList)
//element.classList.remove('active')
element.classList.toggle('active') // se a classe existir ele tira, se ela nao existir ele adicona
