import { Creature, Animal, Plant } from "./works/prototype/class";
import {
  Creature as CreatureFn,
  Animal as AnimalFn,
  Plant as PlantFn,
} from "./works/prototype/function";
console.dir(new Creature("생물_1"));
console.dir(new Animal("동물_1", "포유류"));
console.dir(new Plant("식물_1"));
console.log("================");
console.dir(new CreatureFn("생물_1"));
console.dir(new AnimalFn("동물_1", "포유류"));
console.dir(new PlantFn("식물_1"));
