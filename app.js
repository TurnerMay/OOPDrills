let person1 = {
  name: "Turner",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

let person2 = {
  name: "Jordan",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

let person3 = {
  name: "Meko",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

let person4 = {
  name: "Randy",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

let person5 = {
  name: "Will",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

// function Person(name, age, location){
//     this.age = age
//     this.name = name
//     this.location = location
//     this.print = function () {
//         console.log(`Hey!  My name is ${this.name} I am ${this.age} years old and live in ${this.location}.`)
//     }
// }

// const p1 = new Person('Turner', '37', 'Irondale')
// const p2 = new Person('Jordan', '33', 'Irondale')
// const p3 = new Person('Meko', '11', 'my mom and dads house')
// const p4 = new Person('Randy', '35', 'Crestwood')
// const p5 = new Person('Will', '30', 'Mountain Brook')

// p1.print()
// p2.print()
// p3.print()
// p4.print()
// p5.print()

class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  print() {
    console.log(
      `Hey!  My name is ${this.name} I am ${this.age} years old and live in ${this.location}.`
    );
  }
}

const p1 = new Person("Turner", "37", "Irondale");
const p2 = new Person("Jordan", "33", "Irondale");
const p3 = new Person("Meko", "11", "my mom and dads house");
const p4 = new Person("Randy", "35", "Crestwood");
const p5 = new Person("Will", "30", "Mountain Brook");

p1.print();
p2.print();
p3.print();
p4.print();
p5.print();

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }
  aboutVehicle() {
    console.log(
      `This a vehicle is made by ${this.manufacturer} and has ${this.wheels} wheels`
    );
  }
}

class Trucks extends Vehicle {
  constructor(manufacturer, wheels, doors, truckbed) {
    super(manufacturer, wheels);
    this.doors = doors;
    this.truckbed = true;
  }
  aboutVehicle() {
    console.log(
      `This is a truck made by ${this.manufacturer} and has ${this.wheels} wheels and ${this.doors} doors.`
    );
  }
}

class Sedan extends Vehicle {
  constructor(manufacturer, wheels, doors, size, mpg) {
    super(manufacturer, wheels);
    this.size = size;
    this.mpg = mpg;
    this.doors = doors;
  }

  aboutVehicle() {
    console.log(
      `This sedan is made by ${this.manufacturer} and has ${this.wheels} wheels.  It is a ${this.size} car with ${this.doors} doors and gets ${this.mpg} mpg.`
    );
  }
}

class Motorcycle extends Vehicle {
      constructor(manufacturer, wheels, doors, handleBars){
        super(manufacturer, wheels)
        this.handleBars = handleBars
        this.doors = doors
  }
aboutVehicle() {
    console.log(`This motorcycle is mady by ${this.manufacturer} and has ${this.wheels} wheels.  It has ${this.doors} doors and has handlebars instead of a steering wheel.`)
}
  }

let m1 = new Motorcycle('Kawasaki', '2', 'no', '1')
let s1 = new Sedan('Toyota', '4', '4', 'medium', '28')

m1.aboutVehicle()
s1.aboutVehicle()

