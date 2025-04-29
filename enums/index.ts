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