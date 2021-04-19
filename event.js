const events = require('events');
const eventEmitter = new events.EventEmitter();

const listener1 = () => {
  console.log('listener: ', 1);
}

const listener2 = () => {
  console.log('listener: ', 2);
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

const count = eventEmitter.listenerCount('connection');

console.log(count);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);

const count1 = eventEmitter.listenerCount('connection');

console.log(count1);

eventEmitter.emit('connection');