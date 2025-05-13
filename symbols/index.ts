declare const sym1: unique symbol;

// unique symbol 类型的值必须使用 const 声明
let sym2: unique symbol = Symbol();

// sym1 可以赋值给 sym1 类型的值
let sym3: typeof sym1 = sym1;

// Also works.
class C {
  static readonly StaticSymbol: unique symbol = Symbol();
}

const sym4 = Symbol();
const sym5 = Symbol();

// 条件永远不成立，因为 symbol 是唯一的
if (sym4 === sym5) {
  // ...
}
