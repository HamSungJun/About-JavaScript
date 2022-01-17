import { Creature } from "./Creature";

export function Plant(name: string = "") {
  Creature.call(this, name);
}

Plant.prototype = Object.create(Creature.prototype, {
  photosynthesize: {
    value: function () {
      console.log("Plant is PhotoSyntheSizing.");
    },
    enumerable: true,
    writable: false,
    configurable: false,
  },
});
