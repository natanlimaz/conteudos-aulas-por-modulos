const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Natan")
ev.emit('saySomething', "Algum outro nome")
ev.emit('saySomething', "Dale dele dele doly")

// .on - ouvir sempre
// .once - ouvir uma unica vez