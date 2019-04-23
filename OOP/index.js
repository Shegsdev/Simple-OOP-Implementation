const EventEmitter = require('events');

// The 'extends' keyword is a way to inherit from
// one or more parent class.
class Position extends EventEmitter {
  constructor(type) {
    super();
    this._type = type;
  }

  get() {
    return this._type;
  }
}

class Employer extends Position {
  constructor(name, type) {
    super(type);

    this._name = name;
  }

  // Here is an example of Polymorphism.
  /*
  ** Here we created a custom 'get' method using the
  ** same name as the super class name.
  */
  get() {
    return `I am an ${this.constructor.name}`;
  }

  getStatus() {
    return 'Employed';
  }
}

class Employee extends Employer {
  constructor(name, type) {
    super(name, type)
  }
}

// Creates new instance of Dog class
const steve = new Employer('Steve');

// Register an event
steve.on('call', function() {
  console.log(`${this._name} - ${this.getStatus()}`);
});

// Here's an implementation of Abstraction
steve.emit('call');
console.log(steve.get());
