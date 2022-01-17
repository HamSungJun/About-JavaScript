export class Creature {
  name: string = "";
  constructor(name: string = "") {
    this.name = name;
  }
  get info() {
    return this.name;
  }
}
