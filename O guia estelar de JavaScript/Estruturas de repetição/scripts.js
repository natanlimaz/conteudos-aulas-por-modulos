// for...in

let person = {
    name: 'Natan',
    age: 20,
    weight: 64.0
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}