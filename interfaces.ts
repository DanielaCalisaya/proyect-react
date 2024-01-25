interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  let person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  let person2: Person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
  };


  interface Animal {
    name: string;
    sound: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  
  let dog: Dog = {
    name: "Buddy",
    sound: "Woof",
    breed: "Labrador"
  };