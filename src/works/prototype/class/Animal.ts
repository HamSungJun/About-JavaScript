import { Creature } from "./Creature";

export class Animal extends Creature {
  type: string = "";
  constructor(name: string, type: string) {
    super(name);
    this.type = type;
  }
  move() {
    console.log("Animal is Moving.");
  }
}
