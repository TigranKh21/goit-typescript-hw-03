class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: string[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person.name);
      console.log(this.tenants);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
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
