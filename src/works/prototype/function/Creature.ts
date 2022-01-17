export function Creature(name: string = "") {
  this.name = name;
}

Object.defineProperty(Creature.prototype, "info", {
  get() {
    return this.name;
  },
});
