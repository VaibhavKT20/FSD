class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  Name() {
    console.log("Animal name is " + this.name);
  }
  LegCount() {
    console.log("Animal has " + this.legCount + " legs.");
  }
  Speak() {
    console.log(this.name + " says " + this.speaks);
  }
  static myType() {
    console.log("Animal is a Mammal.");
  }
}

Animal.myType(); // Animal is a Mammal.

let dog = new Animal("Dog", 4, "Bhaw Bhaw");
let cat = new Animal("Cat", 4, "Meow");
cat.Speak();
dog.Speak();
dog.Name();

dog.LegCount();
cat.LegCount();
