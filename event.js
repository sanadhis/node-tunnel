var events = require('events');
var eventEmitter = new events.EventEmitter();

//Assign the event handler to an event:
eventEmitter.on('scream', function eventHandler() {
    console.log('I hear a scream!');
});

//Assign the event handler to an event:
eventEmitter.on('poke', function eventHandler() {
    console.log('I touch you!');
});

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('poke')