declare function getSomeValue(): number;

enum E {
  A = getSomeValue(),
  C = 1,
  B, // 没有初始化值的枚举必须放在前面，或者数字枚举之后
}


// 异构枚举，同时拥有数字和字符串的枚举
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}


enum FileAccess {
  // 常量成员
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // 计算成员
  G = "123".length,
}


// 所有成员均为字面量时，此时枚举成员可以被当作类型使用
enum ShapeKind {
  Circle,
  Square,
  G = "123".length,
}
interface Circle {
  kind: ShapeKind.G;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c: Circle = {
  kind: ShapeKind.G,
  radius: 100,
};


enum E {
  X,
  Y,
  Z,
}
function f(obj: { X: number }) {
  return obj.X;
}
// 枚举是运行时真实存在的对象，可以当作参数使用
f(E);
// 获取枚举的键组成的联合类型，需要使用 keyof typeof
type LogLevelStrings = keyof typeof E;
// 枚举的数字类型成员在编译时会反向映射，即可以通过值访问到键
let x = E.X;
let nameOfX = E[x]; // "X"


// const 枚举，在编译时会被完全移除
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// let directions = [
//   0 /* Direction.Up */,
//   1 /* Direction.Down */,
//   2 /* Direction.Left */,
//   3 /* Direction.Right */,
// ];
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];


// 环境枚举
declare enum Enum {
  A = 1,
  B,
  C = 2,
}