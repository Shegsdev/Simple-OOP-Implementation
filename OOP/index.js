const EventEmitter = require('events');

// The 'extends' keyword is a way to inherit from
// one or more parent class.
class Animal extends EventEmitter {
  constructor(type) {
    super();
    this._type = type;
  }

  get() {
    return this._type;
  }
}

class Dog extends Animal {
  constructor(type) {
    super(type);
  }

  // Here is an example of Polymorphism.
  /*
  ** Here we created a custom 'get' method using the
  ** same name as the super class name.
  */
  get() {
    return `I am a ${this.constructor.name} of type ${super.get()}`;
  }
}

// Creates new instance of Dog class
const mastiff = new Dog('mastiff');

// Register an event
mastiff.on('bark', () => {
  console.log('Woof!');
});

// Here's an implementation of Abstraction
mastiff.emit('bark'); // Woof!
console.log(mastiff.get()); // I am a Dog of type mastiff
