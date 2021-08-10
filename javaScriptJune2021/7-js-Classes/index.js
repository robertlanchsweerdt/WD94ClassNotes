// class declaration is not hoisted
// class declaration v class expression (can be named or unnamed)
// CONSTRUCTOR METHOD:  required in order to create new objects / instances of the class
// constructor helps to set-up properties and to accept values (arguments) passed to the properties
// PROPERTIES: can either exist inside the constructor as a parameter or alone with a default value
// METHODS: are functions that are passed down to all the new instances of the created class
// EXTENDS: to create a new class as a child as another class; inherits the properties and methods from the parent AND can also have its own properites and methods
// SUB-CLASS:  another term for EXTENDS class
// SUPER:  call 'super' inside the constructor to have access to the parent properties

// CLASS DECLARATION

class Automobile {
  constructor(make, model) {
    // constructor is what creates and initializes the class object
    this.make = make; // setup keys to hold the parameters
    this.model = model; // this refers to the object (parent) it belongs to
    // key       value
  }
}

// CLASS EXPRESSION - can be named or unnamed

// unnamed

let Vehicle = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};

// named

let VehicleTwo = class VehicleTwo {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};

// PARENT

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// SUBCLASS

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
