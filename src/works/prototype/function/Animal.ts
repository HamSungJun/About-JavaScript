import { Creature } from "./Creature";

export function Animal(name: string, type: string) {
  Creature.call(this, name);
  this.type = type;
}

Animal.prototype = Object.create(Creature.prototype);
Object.defineProperties(Animal.prototype, {
  constructor: {
    value: Animal,
    enumerable: false,
    writable: false,
    configurable: false,
  },
  move: {
    value() {
      console.log("Animal is Moving.");
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
});
