// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute("id", "header") // atribuir/adicionar um id

const headerID = document.querySelector('header')

console.log(headerID.getAttribute('class')) // pegar o id

header.removeAttribute('id') // remove um atributo
header.setAttribute('class', 'bg header')

