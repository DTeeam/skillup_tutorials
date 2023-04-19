//console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = this.age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age} jahre alt`);
  }
}

module.exports = Person;
