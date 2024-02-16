class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: string[];
  protected key: Key;

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person.name);
      console.log(this.tenants);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (this.key) {
      this.door = true;
      console.log("Come in, door is opened");
    }
  }
}
const key = new Key();
console.log(key.getSignature());

const house = new MyHouse(key);
const person = new Person(key, "Michael");
console.log(person.getKey());

house.openDoor(key);

house.comeIn(person);

export {};
