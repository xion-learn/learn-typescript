let x = 3; // 计算最佳通用类型，因此推断为 number 而不是文字类型 0

let y = [0, 1, null];

// @strict: false
class Animal {}
class Rhino extends Animal {
  hasHorn: true;
}
class Elephant extends Animal {
  hasTrunk: true;
}
class Snake extends Animal {
  hasLegs: false;
}

function createZoo(): Animal[] {
  // 由于声明了返回值类型，因此根据上下文自动推断为 Animal[]
  return [new Rhino(), new Elephant(), new Snake()];
}
