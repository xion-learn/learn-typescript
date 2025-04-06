interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity1: <Type>(arg: Type) => Type = identity;  // 类型箭头函数类型写法
let myIdentity2: { <Type>(arg: Type): Type } = identity;  // 类似对象类型写法
let myIdentity3: GenericIdentityFn<number> = identity;  // 给泛型函数声明一个泛型类型


// 可以在类上使用泛型
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}


interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity('22')
