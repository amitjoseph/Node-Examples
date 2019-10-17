var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (name='') {
  console.log('Hello! '+name);
}

//Assign the event handler to an event
eventEmitter.on('greet', myEventHandler);

//Fire the event:
eventEmitter.emit('greet');

//Passing arugments while firing the event
eventEmitter.emit('greet','Tom');